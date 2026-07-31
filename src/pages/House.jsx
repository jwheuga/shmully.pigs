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

      {house.entry && (
        <div className="card gingham">
          <div className="gingham-strip" />
          <h3>🔑 Entry Codes</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem 1.2rem', marginTop: '0.2rem' }}>
            <div>
              <div className="eyebrow">Garage</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '1.15rem', letterSpacing: '0.05em' }}>{house.entry.garage}</div>
            </div>
            <div>
              <div className="eyebrow">Front Door</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '1.15rem', letterSpacing: '0.05em' }}>{house.entry.frontDoor}</div>
            </div>
          </div>
        </div>
      )}

      {house.wifi && (
        <div className="card gingham">
          <div className="gingham-strip" />
          <h3>📶 Wi-Fi</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem 1.2rem', marginTop: '0.2rem' }}>
            <div>
              <div className="eyebrow">Network</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '1.05rem' }}>{house.wifi.network}</div>
            </div>
            <div>
              <div className="eyebrow">Password</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '1.05rem' }}>{house.wifi.password}</div>
            </div>
          </div>
        </div>
      )}

      {house.sections.map((s) => (
        <div className="card" key={s.title}>
          <h3>{s.icon} {s.title}</h3>
          <p style={{ fontSize: '0.9rem' }}>{s.body}</p>
        </div>
      ))}
    </div>
  )
}
