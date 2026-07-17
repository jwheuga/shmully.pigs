import { useEffect, useMemo, useState } from 'react'
import SignHeader from '../components/SignHeader.jsx'
import { config, scoreboardFallback } from '../data/content.ts'

// ---- CSV parsing (format documented in content.ts) ----

function parseCsv(text) {
  const rows = text
    .split(/\r?\n/)
    .map((l) => l.split(',').map((c) => c.trim().replace(/^"|"$/g, '')))
    .filter((r) => r.length > 1 && r.some((c) => c !== ''))
  if (rows.length < 2) return null

  const header = rows[0].map((h) => h.toLowerCase())
  const col = (name) => header.indexOf(name)
  const iType = col('type')
  const iDay = col('day')
  const iName = col('name')
  const iTotal = col('total')
  const iH1 = col('h1')
  if (iType < 0 || iName < 0) return null

  const day1 = []
  const day2 = []
  const tally = []

  for (const r of rows.slice(1)) {
    const type = (r[iType] || '').toUpperCase()
    if (type === 'TEAM') {
      const holes = Array.from({ length: 18 }, (_, i) => {
        const v = iH1 >= 0 ? r[iH1 + i] : ''
        const n = parseInt(v, 10)
        return Number.isFinite(n) ? n : null
      })
      const entry = { team: r[iName], holes }
      if ((r[iDay] || '').includes('2')) day2.push(entry)
      else day1.push(entry)
    } else if (type === 'TALLY') {
      const n = parseInt(iTotal >= 0 ? r[iTotal] : '', 10)
      tally.push({ name: r[iName], count: Number.isFinite(n) ? n : 0 })
    }
  }

  if (day1.length === 0 && day2.length === 0 && tally.length === 0) return null
  return { isSample: false, day1, day2, tally }
}

function useScores() {
  const [data, setData] = useState(scoreboardFallback)
  const [updatedAt, setUpdatedAt] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!config.SCORES_CSV_URL) return
    let cancelled = false

    async function poll() {
      try {
        const res = await fetch(config.SCORES_CSV_URL, { cache: 'no-store' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const parsed = parseCsv(await res.text())
        if (parsed && !cancelled) {
          setData(parsed)
          setUpdatedAt(Date.now())
          setError(false)
        }
      } catch {
        if (!cancelled) setError(true)
      }
    }

    poll()
    const id = setInterval(poll, config.POLL_INTERVAL_MS)
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [])

  return { data, updatedAt, error }
}

// ---- helpers ----

const sum = (holes, from, to) => {
  const played = holes.slice(from, to).filter((h) => h != null)
  return played.length ? played.reduce((a, b) => a + b, 0) : null
}
const thru = (holes) => holes.filter((h) => h != null).length

function Leaderboard({ teams }) {
  const ranked = useMemo(
    () =>
      [...teams]
        .map((t) => ({ ...t, total: sum(t.holes, 0, 18), thru: thru(t.holes) }))
        .sort((a, b) => {
          if (a.total == null) return 1
          if (b.total == null) return -1
          return a.total - b.total
        }),
    [teams],
  )

  if (teams.length === 0) return <p className="muted center">No scores for this day yet. Balls up soon.</p>

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {ranked.map((t, i) => (
        <div className={`lb-row${i === 0 && t.total != null ? ' leader' : ''}`} key={t.team}>
          <div className="lb-pos">{t.total == null ? '—' : i + 1}</div>
          <div className="lb-team">
            <div className="lb-name">{i === 0 && t.total != null ? '👑 ' : ''}{t.team}</div>
            <div className="lb-thru">{t.thru === 0 ? 'NOT STARTED' : t.thru === 18 ? 'FINAL' : `THRU ${t.thru}`}</div>
          </div>
          <div className="lb-score">{t.total == null ? '—' : t.total}</div>
        </div>
      ))}
    </div>
  )
}

function Scorecard({ teams }) {
  if (teams.length === 0) return <p className="muted center">No scorecards yet.</p>
  const holes = Array.from({ length: 18 }, (_, i) => i + 1)

  return (
    <div className="table-scroll">
      <table className="scorecard">
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>Team</th>
            {holes.slice(0, 9).map((h) => <th key={h}>{h}</th>)}
            <th>OUT</th>
            {holes.slice(9).map((h) => <th key={h}>{h}</th>)}
            <th>IN</th>
            <th>TOT</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((t) => {
            const out = sum(t.holes, 0, 9)
            const inn = sum(t.holes, 9, 18)
            const tot = sum(t.holes, 0, 18)
            return (
              <tr key={t.team}>
                <td className="rowlabel">{t.team}</td>
                {t.holes.slice(0, 9).map((h, i) => <td key={i}>{h ?? '·'}</td>)}
                <td className="subtotal">{out ?? '—'}</td>
                {t.holes.slice(9).map((h, i) => <td key={i}>{h ?? '·'}</td>)}
                <td className="subtotal">{inn ?? '—'}</td>
                <td className="subtotal">{tot ?? '—'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function ShmullyTally({ tally }) {
  const ranked = [...tally].sort((a, b) => b.count - a.count)
  const max = ranked.length ? ranked[0].count : 0

  return (
    <div className="card gingham">
      <div className="gingham-strip" />
      <h3>🐷 The Shmully Tally</h3>
      <p className="muted" style={{ fontSize: '0.8rem', marginBottom: '0.6rem' }}>
        Shotgun mulligans, counted all weekend. Decides "Most Shmullies." No shmullies on the greens.
      </p>
      {ranked.length === 0 ? (
        <p className="muted center">Zero shmullies called. Cowards.</p>
      ) : (
        <div className="tally-list">
          {ranked.map((t) => (
            <div className="tally-row" key={t.name}>
              <span className="tally-name">
                {t.count === max && max > 0 ? '👑 ' : ''}{t.name}
              </span>
              <span className="tally-pigs" aria-hidden="true">{'🐷'.repeat(Math.min(t.count, 12))}</span>
              <span className="tally-count">{t.count}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ---- page ----

export default function Scoreboard() {
  const { data, updatedAt, error } = useScores()
  const [day, setDay] = useState(1)
  const [view, setView] = useState('leaderboard')

  const teams = day === 1 ? data.day1 : data.day2
  const dayLabel =
    day === 1
      ? 'Round 1 · Vail GC · Shamble, best 2 balls'
      : 'Round 2 · Red Sky · drop the worst, add the best three'

  return (
    <div className="page">
      <SignHeader title="Scoreboard" />

      <p className="center" style={{ marginBottom: '0.9rem' }}>
        {data.isSample ? (
          <span className="badge tan">SAMPLE DATA — LIVE SCORES START FRI 7/31</span>
        ) : error ? (
          <span className="badge red">CONNECTION HICCUP — SHOWING LAST GOOD SCORES</span>
        ) : (
          <span className="badge green">
            <span className="live-dot" />
            LIVE{updatedAt ? ` · UPDATED ${new Date(updatedAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}` : ''}
          </span>
        )}
      </p>

      <ShmullyTally tally={data.tally} />

      <div style={{ display: 'flex', gap: '0.6rem', margin: '1rem 0 0.7rem' }}>
        <div className="seg" style={{ flex: 1 }}>
          <button className={day === 1 ? 'on' : ''} onClick={() => setDay(1)}>Day 1</button>
          <button className={day === 2 ? 'on' : ''} onClick={() => setDay(2)}>Day 2</button>
        </div>
        <div className="seg" style={{ flex: 1.3 }}>
          <button className={view === 'leaderboard' ? 'on' : ''} onClick={() => setView('leaderboard')}>Leaders</button>
          <button className={view === 'scorecard' ? 'on' : ''} onClick={() => setView('scorecard')}>Scorecard</button>
        </div>
      </div>

      <p className="eyebrow center" style={{ marginBottom: '0.7rem' }}>{dayLabel}</p>

      {view === 'leaderboard' ? <Leaderboard teams={teams} /> : <Scorecard teams={teams} />}

      <p className="muted center" style={{ marginTop: '1.2rem', fontSize: '0.78rem' }}>
        {config.SCORES_CSV_URL
          ? `Scores refresh every ${Math.round(config.POLL_INTERVAL_MS / 1000)}s from the Shmully sheet.`
          : 'Live feed connects when the Shmully sheet is published — sample scores shown for now.'}
      </p>
    </div>
  )
}
