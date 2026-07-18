import SignHeader from '../components/SignHeader.jsx'
import { teams, players, tbdPigs, hallOfFame } from '../data/content.ts'

export default function Teams() {
  return (
    <div className="page">
      <SignHeader title="Teams" elev="5 GROUPS · A THROUGH E" />

      <p className="notice center" style={{ marginBottom: '1rem' }}>{teams.structureNote}</p>

      <div className="grid-2">
        {teams.groups.map((g) => {
          const members = players.filter((p) => p.group === g)
          const pending = tbdPigs.filter((p) => p.group === g)
          return (
            <div className="card" key={g} style={{ marginTop: 0 }}>
              <h3>
                Group {g}{' '}
                {teams.avgHandicaps[g] != null && <span className="badge tan">AVG {teams.avgHandicaps[g]}</span>}
              </h3>
              <div>
                {members.map((p) => (
                  <span className="sleeper" key={p.name}>
                    {p.nickname || p.name} · {p.handicap}
                  </span>
                ))}
                {pending.map((p) => (
                  <span className="sleeper" key={p.name} style={{ borderStyle: 'dashed', opacity: 0.7 }}>
                    {p.name} · {p.handicap} (TBD)
                  </span>
                ))}
              </div>
            </div>
          )
        })}
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

      <div className="card">
        <h3>🏆 2023 Final Standings</h3>
        <div className="table-scroll">
          <table className="scorecard">
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Team</th>
                <th>Final</th>
              </tr>
            </thead>
            <tbody>
              {hallOfFame.finals2023.map((t) => (
                <tr key={t.team}>
                  <td className="rowlabel">{t.champion ? '👑 ' : ''}{t.team}</td>
                  <td>{t.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
