import SignHeader from '../components/SignHeader.jsx'
import { players } from '../data/content.ts'

function Avatar({ p }) {
  const style = {
    width: 52,
    height: 52,
    borderRadius: '50%',
    overflow: 'hidden',
    border: '2px solid var(--brass)',
    background: 'var(--parchment)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.4rem',
    flex: '0 0 auto',
  }
  if (p.portraitImg) {
    return (
      <div style={style}>
        <img src={p.portraitImg} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    )
  }
  if (p.portrait) {
    return (
      <a href={p.portrait} target="_blank" rel="noreferrer" title={`${p.name} — view portrait`} style={{ ...style, textDecoration: 'none' }}>
        📸
      </a>
    )
  }
  return <div style={style}>🐷</div>
}

export default function Players() {
  return (
    <div className="page">
      <SignHeader title="The 2026 Roster" elev={`${players.length} CONFIRMED PIGS`} />

      <div className="grid-2 collapse">
        {players.map((p) => (
          <div className="card" key={p.name} style={{ marginTop: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>{p.name}</div>
                {p.nickname && (
                  <div className="muted" style={{ fontSize: '0.78rem', fontStyle: 'italic' }}>"{p.nickname}"</div>
                )}
              </div>
              <Avatar p={p} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: '0.5rem' }}>
              {p.handicap != null ? (
                <span className="badge green">HCP {p.handicap}</span>
              ) : (
                <span className="badge outline">HCP TBD</span>
              )}
              {p.house ? <span className="badge sky">HOUSE</span> : <span className="badge outline">OFF-SITE</span>}
              {p.portrait && !p.portraitImg && (
                <a className="badge brass" href={p.portrait} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                  PORTRAIT ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="muted center" style={{ marginTop: '1.2rem', fontSize: '0.82rem' }}>
        Team groupings are classified until the Opening Ceremony. Nice try.
      </p>
    </div>
  )
}
