import SignHeader from '../components/SignHeader.jsx'
import TbdSlot from '../components/TbdSlot.jsx'
import { players, tbdPigs } from '../data/content.ts'

function Handicap({ p }) {
  if (p.handicap != null) return <span className="badge green">HCP {p.handicap}</span>
  return <span className="badge outline">HCP TBD</span>
}

export default function Players() {
  return (
    <div className="page">
      <SignHeader title="The 2026 Roster" elev={`${players.length} CONFIRMED PIGS`} />

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
        {tbdPigs.map((p) => (
          <TbdSlot key={p.name} label="TBD PIG">
            <p style={{ fontWeight: 800 }}>{p.name}</p>
            <p className="muted" style={{ fontSize: '0.78rem' }}>
              Penciled into Group {p.group} · HCP {p.handicap} · awaiting confirmation
            </p>
          </TbdSlot>
        ))}
      </div>
    </div>
  )
}
