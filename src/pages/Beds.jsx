import SignHeader from '../components/SignHeader.jsx'
import { beds } from '../data/content.ts'

export default function Beds() {
  const bunk = beds.filter((b) => b.type === 'bunk')
  const rest = beds.filter((b) => b.type !== 'bunk')

  return (
    <div className="page">
      <SignHeader title="Pigsties" elev="6 BUNKS · 2 KINGS · 2 QUEENS" />

      <p className="center muted" style={{ marginBottom: '1rem' }}>
        Who sleeps where. Complaints may be filed with the Committee (there is no Committee).
      </p>

      {bunk.map((room) => (
        <div className="card gingham" key={room.room}>
          <div className="gingham-strip" />
          <h3>🛏️ {room.room} <span className="badge tan">{room.capacity} bunks</span></h3>
          <div>
            {room.sleepers.map((s) => (
              <span className="sleeper" key={s}>{s}</span>
            ))}
          </div>
          {room.note && (
            <p className="notice" style={{ marginTop: '0.7rem' }}>🌡️ {room.note}</p>
          )}
        </div>
      ))}

      <div className="room-grid" style={{ marginTop: '0.85rem' }}>
        {rest.map((room) => (
          <div className="card room-card" key={room.room}>
            <div className="room-type">{room.icon}</div>
            <h3 style={{ marginBottom: '0.25rem' }}>{room.room}</h3>
            <div>
              {room.sleepers.map((s) => (
                <span className="sleeper" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="muted center" style={{ marginTop: '1.1rem' }}>
        Reassignments flow through the sheet — this page reflects the "Beds" tab.
      </p>
    </div>
  )
}
