import SignHeader from '../components/SignHeader.jsx'
import TbdSlot from '../components/TbdSlot.jsx'
import { money } from '../data/content.ts'

export default function Money() {
  return (
    <div className="page">
      <SignHeader title="Money" elev="PAY THE PIPER" />

      <div className="card">
        <h3>💰 The Damage</h3>
        <div className="table-scroll">
          <table className="scorecard">
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Item</th>
                <th>Total</th>
                <th>Per Pig</th>
              </tr>
            </thead>
            <tbody>
              {money.lineItems.map((li) => (
                <tr key={li.item}>
                  <td className="rowlabel">{li.item}</td>
                  <td style={{ whiteSpace: 'normal', minWidth: '9rem' }}>{li.amount || '—'}</td>
                  <td style={{ whiteSpace: 'normal', minWidth: '7rem' }}>{li.perPerson}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card gingham">
        <div className="gingham-strip" />
        <h3>📜 A Lesson From 2023</h3>
        <p style={{ fontSize: '0.9rem' }}>{money.context2023}</p>
      </div>

      <SignHeader title="Amount Paid" elev="THE LEDGER" />

      <div className="card">
        <div className="grid-3">
          {money.payments.map((p) => (
            <div
              key={p.name}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'var(--parchment)',
                border: '1px solid rgba(94,69,43,0.25)',
                borderRadius: '6px',
                padding: '0.4rem 0.6rem',
                fontSize: '0.84rem',
                fontWeight: 700,
              }}
            >
              <span>{p.name}</span>
              {p.paid ? <span className="badge green">PAID</span> : <span className="badge outline">DUE</span>}
            </div>
          ))}
        </div>
        <div style={{ marginTop: '0.8rem' }}>
          <TbdSlot label="TRACKING SOON">
            <p>Payments aren't logged in the sheet yet — everyone shows DUE until they are. Venmo whoever booked the thing.</p>
          </TbdSlot>
        </div>
      </div>
    </div>
  )
}
