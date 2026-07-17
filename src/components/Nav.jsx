import { NavLink, Link } from 'react-router-dom'

const links = [
  ['/', 'Home'],
  ['/scoreboard', 'Scoreboard'],
  ['/agenda', 'Agenda'],
  ['/beds', 'Beds'],
  ['/house', 'House'],
  ['/players', 'Players'],
  ['/teams', 'Teams'],
  ['/rules', 'Rules'],
  ['/money', 'Money'],
  ['/new-pigs', 'New Pigs'],
]

export default function Nav() {
  return (
    <nav className="nav-root">
      <Link to="/" className="nav-brand">
        <span className="brand-pig">🐷</span>
        <span className="brand-sign">Shmully 2026</span>
        <span className="brand-pig">⛳</span>
      </Link>
      <div className="nav-links">
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
