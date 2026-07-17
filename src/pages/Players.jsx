import SignHeader from '../components/SignHeader.jsx'
import TbdSlot from '../components/TbdSlot.jsx'
import { players, tbdPigs } from '../data/content.ts'

function Handicap({ p }) {
  if (p.handicap != null) return <span className="badge green">HCP {p.handicap}</span>
  if (p.ref2023 != null)
    return (
      <span className="badge outline" title="2026 handicap incoming — 2023 reference shown">
        '23 REF: {p.ref2023}
      </span>
    )
  return <span className="badge outline">HCP TBD</span>
}

export default function Players() {
  return (
    <div className="page">
      <SignHeader title="The 2026 Roster" elev={`${players.length} CONFIRMED PIGS`} />

      <p className="notice center" style={{ marginBottom: '1rem' }}>
        2026 handicaps are being updated by Wilder — 2023 reference numbers shown for returning players.
      </p>

      <div className="grid-2 collapse">
        {players.map((p) => (
          <div className="card" key={p.name} style={{ marginTop: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.4rem' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>{p.name}</div>
                {p.nickname && <div className="muted" style={{ fontSize: '0.78rem' }}>"{p.nickname}"</div>}
              </div>
              <span style={{ fontSize: '1.1rem' }}>🐷</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: '0.5rem' }}>
              <Handicap p={p} />
              <span className="badge tan">{p.group ? `GROUP ${p.group}` : 'GROUP TBD'}</span>
              {p.house ? <span className="badge sky">HOUSE</span> : <span className="badge outline">OFF-SITE</span>}
            </div>
            {p.stat && <p className="muted" style={{ marginTop: '0.45rem', fontSize: '0.8rem', fontStyle: 'italic' }}>{p.stat}</p>}
          </div>
        ))}
      </div>

      <SignHeader title="TBD Pigs" elev="UNCONFIRMED · PENDING SQUEAL" />

      <div className="grid-2 collapse">
        {tbdPigs.map((name) => (
          <TbdSlot key={name} label="TBD PIG">
            <p style={{ fontWeight: 800 }}>{name}</p>
            <p className="muted" style={{ fontSize: '0.78rem' }}>Awaiting confirmation</p>
          </TbdSlot>
        ))}
      </div>
    </div>
  )
}
