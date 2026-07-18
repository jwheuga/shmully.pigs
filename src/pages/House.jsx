import SignHeader from '../components/SignHeader.jsx'
import { house } from '../data/content.ts'

export default function House() {
  return (
    <div className="page">
      <SignHeader title="The Pig Pen" elev="4842 MEADOW LANE · VAIL, CO" />

      <div className="card gingham center">
        <div className="gingham-strip" />
        <h3>🏔️ Basecamp</h3>
        <p style={{ fontWeight: 700 }}>{house.address}</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
          <a href={house.map} target="_blank" rel="noreferrer">Map</a>
          {' · '}
          <a href={house.airbnb} target="_blank" rel="noreferrer">Airbnb listing</a>
          {' · '}
          <a href={house.guidebook} target="_blank" rel="noreferrer">Full guidebook</a>
        </p>
      </div>

      {house.sections.map((s) => (
        <div className="card" key={s.title}>
          <h3>{s.icon} {s.title}</h3>
          <p style={{ fontSize: '0.9rem' }}>{s.body}</p>
        </div>
      ))}
    </div>
  )
}
