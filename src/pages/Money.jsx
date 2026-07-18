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
                <th>Per Pig</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {money.lineItems.map((li) => (
                <tr key={li.item}>
                  <td className="rowlabel">{li.item}</td>
                  <td style={{ whiteSpace: 'normal', minWidth: '6rem' }}>{li.perPerson}</td>
                  <td style={{ whiteSpace: 'normal', minWidth: '9rem' }}>{li.amount || '—'}</td>
                </tr>
              ))}
              {money.totals.map((t) => (
                <tr className="total-row" key={t.label}>
                  <td className="rowlabel">{t.label}</td>
                  <td>{t.amount}</td>
                  <td />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="muted" style={{ marginTop: '0.6rem', fontSize: '0.8rem' }}>{money.assumptions}</p>
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
