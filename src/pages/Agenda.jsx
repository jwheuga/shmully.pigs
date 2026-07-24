import SignHeader from '../components/SignHeader.jsx'
import TbdSlot from '../components/TbdSlot.jsx'
import { agenda, courses, arrivals } from '../data/content.ts'

export default function Agenda() {
  return (
    <div className="page">
      <SignHeader title="Agenda" />

      {agenda.map((day) => (
        <div className="card day-card" key={day.day}>
          <div className="day-date">{day.emoji} {day.day} · {day.date}</div>
          <div style={{ marginTop: '0.4rem' }}>
            {day.items.map((it, i) => (
              <div className="agenda-item" key={i}>
                <div className="agenda-time">{it.time || '—'}</div>
                <div className="agenda-what">
                  {it.what}
                  {it.link && (
                    <>
                      {' '}
                      <a href={it.link} target="_blank" rel="noreferrer" style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>
                        📍 {it.linkLabel || 'Map'}
                      </a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <SignHeader title="The Courses" elev="TWO ROUNDS · NO SIX-HOUR ROUNDS" />

      {courses.map((c) => (
        <div className="card gingham" key={c.name}>
          <div className="gingham-strip" />
          <h3>{c.name}</h3>
          <p className="muted" style={{ fontWeight: 700 }}>{c.round}</p>
          <p style={{ marginTop: '0.4rem', fontSize: '0.9rem' }}>
            {c.address} · <a href={`tel:${c.phone.replace(/[^0-9]/g, '')}`}>{c.phone}</a>
          </p>
          <p style={{ marginTop: '0.3rem', fontSize: '0.9rem' }}>
            <a href={c.site} target="_blank" rel="noreferrer">Website</a>
            {' · '}
            <a href={c.map} target="_blank" rel="noreferrer">Map</a>
            {' · '}
            <span className="badge tan">{c.cost}</span>
          </p>
        </div>
      ))}

      <SignHeader title="Arrivals & Departures" elev="GET HERE" />

      <div className="card">
        <div className="table-scroll">
          <table className="scorecard">
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Pig</th>
                <th>Arrives</th>
                <th>Departs</th>
              </tr>
            </thead>
            <tbody>
              {arrivals.map((a) => (
                <tr key={a.player}>
                  <td className="rowlabel">{a.player}</td>
                  <td>{a.arrive}</td>
                  <td>{a.depart}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: '0.7rem' }}>
          <TbdSlot label="MORE INCOMING">
            <p>Everyone else's flights land here as they book. Send your times to the group chat.</p>
          </TbdSlot>
        </div>
      </div>
    </div>
  )
}
