import { useEffect, useState } from 'react'
import { config } from '../data/content.ts'

const target = new Date(config.FIRST_TEE_ISO).getTime()
const tripEnd = new Date(config.TRIP_END_ISO).getTime()

function parts(ms) {
  const s = Math.max(0, Math.floor(ms / 1000))
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    mins: Math.floor((s % 3600) / 60),
    secs: s % 60,
  }
}

export default function Countdown() {
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  if (now >= target && now <= tripEnd) {
    return (
      <div className="card center">
        <span className="badge red"><span className="live-dot" />The Shmully is LIVE</span>
        <p className="muted" style={{ marginTop: '0.4rem' }}>Balls are in the air. Get to the scoreboard.</p>
      </div>
    )
  }

  if (now > tripEnd) {
    return (
      <div className="card center">
        <p style={{ fontWeight: 800 }}>Shmully 2026 is in the books. 🐷</p>
        <p className="muted">See you next year.</p>
      </div>
    )
  }

  const t = parts(target - now)
  const cells = [
    [t.days, 'Days'],
    [t.hours, 'Hrs'],
    [t.mins, 'Min'],
    [t.secs, 'Sec'],
  ]

  return (
    <div>
      <p className="eyebrow center" style={{ marginBottom: '0.5rem' }}>
        Countdown to first tee · Fri Jul 31 · 11:20a MT
      </p>
      <div className="countdown">
        {cells.map(([num, label]) => (
          <div className="cd-cell" key={label}>
            <div className="cd-num">{String(num).padStart(2, '0')}</div>
            <div className="cd-label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
