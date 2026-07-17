import SignHeader from '../components/SignHeader.jsx'
import { glossary } from '../data/content.ts'

export default function NewPigs() {
  return (
    <div className="page">
      <SignHeader title="New Pig Orientation" elev="REQUIRED READING" />

      <p className="center muted" style={{ marginBottom: '1rem' }}>
        First Shmully? Welcome. Read this and you won't embarrass yourself. Much.
      </p>

      {glossary.map((g) => (
        <div className="card" key={g.term}>
          <h3>🐷 {g.term}</h3>
          <p style={{ fontSize: '0.92rem' }}>{g.def}</p>
        </div>
      ))}
    </div>
  )
}
