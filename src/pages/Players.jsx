import SignHeader from '../components/SignHeader.jsx'
import { players } from '../data/content.ts'

// Alphabetical by last name (single-named pigs sort by that name)
const lastName = (n) => n.trim().split(' ').at(-1).toLowerCase()
const roster = [...players].sort((a, b) => lastName(a.name).localeCompare(lastName(b.name)))

function PortraitArea({ p }) {
  if (p.portraitImg) {
    return (
      <a href={p.portraitImg} target="_blank" rel="noreferrer" className="player-portrait" title={`${p.name} — full portrait`}>
        <img src={p.portraitImg} alt={p.name} loading="lazy" />
      </a>
    )
  }
  if (p.portrait) {
    return (
      <a href={p.portrait} target="_blank" rel="noreferrer" className="player-portrait placeholder" title={`${p.name} — view portrait`}>
        <span className="ph-emoji">📸</span>
        <span className="ph-label">VIEW PORTRAIT ↗</span>
      </a>
    )
  }
  return (
    <div className="player-portrait placeholder">
      <span className="ph-emoji">🐷</span>
      <span className="ph-label">PORTRAIT PENDING</span>
    </div>
  )
}

export default function Players() {
  return (
    <div className="page">
      <SignHeader title="The 2026 Roster" elev={`${players.length} CONFIRMED PIGS`} />

      <div className="player-grid">
        {roster.map((p) => (
          <div className="card player-card" key={p.name}>
            <PortraitArea p={p} />
            <div className="player-info">
              <div className="player-name">{p.name}</div>
              {p.nickname && <div className="player-nick">"{p.nickname}"</div>}
              <div className="player-badges">
                {p.handicap != null ? (
                  <span className="badge green">HCP {p.handicap}</span>
                ) : (
                  <span className="badge outline">HCP TBD</span>
                )}
                {p.house ? <span className="badge sky">HOUSE</span> : <span className="badge outline">OFF-SITE</span>}
              </div>
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
