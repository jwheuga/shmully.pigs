import SignHeader from '../components/SignHeader.jsx'
import { format, rules, awards, rejectedAwards } from '../data/content.ts'

export default function Rules() {
  return (
    <div className="page">
      <SignHeader title="Format & Rules" elev="READ THEM. KNOW THEM." />

      <div className="card gingham">
        <div className="gingham-strip" />
        <h3>⛳ Tournament Format — "{format.name}"</h3>
        {format.rounds.map((r) => (
          <div className="rule-item" key={r.label}>
            <div className="rule-name">{r.label}</div>
            <p>{r.detail}</p>
          </div>
        ))}
        <p className="muted" style={{ fontSize: '0.82rem' }}>{format.rejected}</p>
      </div>

      <SignHeader title="The Rules" elev="THE LAW OF THE LAND" />

      {rules.map((r) => (
        <div className={`card${r.highlight ? ' gingham' : ''}`} key={r.name}>
          {r.highlight && <div className="gingham-strip" />}
          <h3>{r.highlight ? '🐷 ' : ''}{r.name}</h3>
          <p style={{ fontSize: '0.93rem', fontWeight: r.highlight ? 700 : 400 }}>{r.text}</p>
        </div>
      ))}

      <SignHeader title="Awards" elev="GLORY AWAITS" />

      <div className="grid-2 collapse">
        {awards.map((a) => (
          <div className="card" key={a.name} style={{ marginTop: 0 }}>
            <div style={{ fontSize: '1.5rem' }}>{a.icon}</div>
            <h3 style={{ marginTop: '0.25rem' }}>{a.name}</h3>
            <p className="muted" style={{ fontSize: '0.84rem' }}>{a.desc}</p>
          </div>
        ))}
      </div>

      <p className="muted center" style={{ marginTop: '0.9rem', fontSize: '0.82rem' }}>{rejectedAwards}</p>
    </div>
  )
}
