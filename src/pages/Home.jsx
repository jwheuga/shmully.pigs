import { Link } from 'react-router-dom'
import Countdown from '../components/Countdown.jsx'
import { trip, reigningChampions } from '../data/content.ts'

const quickLinks = [
  ['/scoreboard', '📊 Scoreboard'],
  ['/agenda', '📅 Agenda'],
  ['/house', '🏠 The Pig Pen'],
  ['/beds', '🛏️ Pigsties'],
  ['/rules', '📜 Rules'],
  ['/new-pigs', '🐷 New Pigs'],
]

export default function Home() {
  return (
    <>
      <div className="hero">
        <img
          className="hero-art"
          src="/hero-pigs.webp"
          srcSet="/hero-pigs-sm.webp 800w, /hero-pigs.webp 1600w"
          sizes="100vw"
          alt="Pigs in lederhosen with alphorns golfing on a ridge above Vail"
          fetchpriority="high"
        />
        <div className="hero-sign wood-panel screws">
          <div className="hero-title carved">Shmully 2026</div>
          <div className="hero-sub">Vail, CO · ({trip.elevation})</div>
        </div>
      </div>

      <div className="page">
        <p className="center muted" style={{ margin: '1.1rem auto 0', maxWidth: '32rem' }}>
          {trip.dates}
        </p>

        <div style={{ marginTop: '1.3rem' }}>
          <Countdown />
        </div>

        <div className="champs-banner wood-panel screws">
          <div className="champs-title carved">🏆 Reigning Champions 🏆</div>
          <div className="champ-row">
            {reigningChampions.names.map((name) => (
              <div className="champ-slot" key={name}>
                <div className="champ-photo" title={`${name} — photo coming soon`}>🐷</div>
                <div className="champ-name">{name}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '0.6rem', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--tan)', opacity: 0.8 }}>
            {reigningChampions.note} — slots reserved
          </p>
        </div>

        <div className="quick-links">
          {quickLinks.map(([to, label]) => (
            <Link key={to} to={to} className="btn">
              {label}
            </Link>
          ))}
        </div>

        <div className="card gingham" style={{ marginTop: '1.3rem' }}>
          <div className="gingham-strip" />
          <h3>First time? What is a Shmully?</h3>
          <p style={{ fontSize: '0.92rem' }}>{trip.explainer}</p>
          <p style={{ marginTop: '0.5rem' }}>
            <Link to="/new-pigs" style={{ fontWeight: 700 }}>Read the New Pig Orientation →</Link>
          </p>
        </div>
      </div>
    </>
  )
}
