import SignHeader from '../components/SignHeader.jsx'
import { teams, players } from '../data/content.ts'

function Squad({ g }) {
  const members = players.filter((p) => p.group === g)
  const avg = teams.avgHandicaps?.[g]
  return (
    <div className="card gingham">
      <div className="gingham-strip" />
      <h3>
        Team {g}{' '}
        {avg != null && <span className="badge tan">AVG {avg}</span>}
      </h3>
      <div className="team-emblems">
        {members.map((p) => (
          <div className="emblem" key={p.name}>
            <div className="emblem-photo">
              {p.portraitImg ? (
                <img
                  src={p.portraitImg}
                  alt={p.name}
                  loading="lazy"
                  style={p.portraitPos ? { objectPosition: p.portraitPos } : undefined}
                />
              ) : (
                '🐷'
              )}
            </div>
            <div className="emblem-name">{p.name}</div>
            <div className="emblem-hcp">HCP {p.handicap}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Teams() {
  if (!teams.revealed) {
    return (
      <div className="page">
        <SignHeader title="Teams" elev="CLASSIFIED" />
        <div className="champs-banner wood-panel screws" style={{ marginTop: '1.2rem' }}>
          <div className="champs-title carved">🐷 Teams Will Be Revealed Soon 🐷</div>
          <p style={{ marginTop: '0.6rem', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--tan)' }}>
            Announced at the Opening Ceremony · Thursday 7/30
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <SignHeader title="Teams" elev="5 SQUADS · A THROUGH E" />

      <div className="card gingham">
        <div className="gingham-strip" />
        <h3>⛳ How It Works</h3>
        <p style={{ fontSize: '0.9rem' }}>{teams.round1Note}</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.4rem' }}>{teams.round2Note}</p>
      </div>

      <div style={{ marginTop: '0.85rem' }}>
        {teams.groups.map((g) => (
          <Squad key={g} g={g} />
        ))}
      </div>

      <SignHeader title="Team Name Hall of Fame" elev="CHOOSE WISELY" />

      <div className="card gingham">
        <div className="gingham-strip" />
        <h3>Names of Shmullies Past</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.3rem' }}>
          {teams.pastTeamNames.map((n) => (
            <span className="sleeper" key={n}>{n}</span>
          ))}
        </div>
        <p className="muted" style={{ marginTop: '0.6rem', fontSize: '0.82rem' }}>
          The bar has been set. Do not show up with something boring.
        </p>
      </div>
    </div>
  )
}
