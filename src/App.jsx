import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import Agenda from './pages/Agenda.jsx'
import House from './pages/House.jsx'
import Beds from './pages/Beds.jsx'
import Players from './pages/Players.jsx'
import Teams from './pages/Teams.jsx'
import Rules from './pages/Rules.jsx'
import Scoreboard from './pages/Scoreboard.jsx'
import Money from './pages/Money.jsx'
import NewPigs from './pages/NewPigs.jsx'
import { trip } from './data/content.ts'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/house" element={<House />} />
        <Route path="/beds" element={<Beds />} />
        <Route path="/players" element={<Players />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/money" element={<Money />} />
        <Route path="/new-pigs" element={<NewPigs />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <footer className="site-footer">
        <p className="eyebrow">Shmully {trip.year} · {trip.location} · {trip.elevation}</p>
        <p style={{ marginTop: '0.4rem', fontSize: '0.85rem' }}>No shmullies on the greens. 🐷</p>
      </footer>
    </BrowserRouter>
  )
}
