import SignHeader from '../components/SignHeader.jsx'
import { teams } from '../data/content.ts'

export default function Teams() {
  return (
    <div className="page">
      <SignHeader title="Teams" elev="CLASSIFIED" />

      <div className="champs-banner wood-panel screws" style={{ marginTop: '1.2rem' }}>
        <div className="champs-title carved">🐷 Teams Will Be Revealed Soon 🐷</div>
        <p style={{ marginTop: '0.6rem', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--tan)' }}>
          {teams.revealNote}
        </p>
        <p style={{ marginTop: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--tan)', opacity: 0.75 }}>
          Announced at the Opening Ceremony · Thursday 7/30
        </p>
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
