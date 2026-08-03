import SignHeader from '../components/SignHeader.jsx'
import { money } from '../data/content.ts'

const usd = (n) => (n < 0 ? '-$' + Math.abs(n).toFixed(2) : '$' + n.toFixed(2))

export default function Money() {
  return (
    <div className="page">
      <SignHeader title="Money" elev="" />

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
                  <td style={{ whiteSpace: 'normal', minWidth: '5.5rem' }}>{li.perPerson}</td>
                  <td style={{ whiteSpace: 'normal', minWidth: '7rem' }}>{li.amount || '—'}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td className="rowlabel">Shared pool</td>
                <td />
                <td style={{ fontWeight: 700 }}>{money.poolTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="muted" style={{ marginTop: '0.6rem', fontSize: '0.8rem' }}>{money.costNote}</p>
      </div>

      <SignHeader title="Settlement" elev="" />

      {money.zelle && (
        <div className="card gingham center">
          <div className="gingham-strip" />
          <h3>💸 Pay via Zelle</h3>
          <p style={{ fontWeight: 700 }}>{money.zelle.name}</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '1.05rem', marginTop: '0.15rem' }}>
            <a href={`tel:${money.zelle.contact.replace(/[^0-9]/g, '')}`}>{money.zelle.contact}</a>
          </p>
          {money.zelle.qr && (
            <img
              src={money.zelle.qr}
              alt={`Zelle QR for ${money.zelle.name}`}
              style={{ width: 200, maxWidth: '70%', margin: '0.7rem auto 0', borderRadius: '8px', border: '1px solid rgba(94,69,43,0.25)' }}
            />
          )}
          <p className="muted" style={{ marginTop: '0.5rem', fontSize: '0.82rem' }}>
            Scan in your bank app, or send to the number above — your amount is in the table below.
          </p>
        </div>
      )}

      <div className="card">
        <h3>🧾 Who Owes What</h3>
        <div className="table-scroll">
          <table className="scorecard">
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Pig</th>
                <th>Owed</th>
                <th>Paid</th>
                <th>Owes</th>
              </tr>
            </thead>
            <tbody>
              {money.ledger.map((p) => (
                <tr key={p.name}>
                  <td className="rowlabel">{p.name}</td>
                  <td>{usd(p.owed)}</td>
                  <td>{usd(p.paid)}</td>
                  <td style={{ color: p.diff > 0 ? 'var(--danger)' : 'var(--meadow-dark)', fontWeight: 600 }}>
                    {p.diff > 0 ? usd(p.diff) : p.diff < 0 ? `${usd(p.diff)} (credit)` : 'PAID'}
                  </td>
                </tr>
              ))}
              <tr className="total-row">
                <td className="rowlabel">Totals</td>
                <td>{usd(money.ledgerTotals.owed)}</td>
                <td>{usd(money.ledgerTotals.paid)}</td>
                <td style={{ fontWeight: 700 }}>{usd(money.ledgerTotals.diff)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="muted" style={{ marginTop: '0.6rem', fontSize: '0.8rem' }}>
          Shared costs only (Airbnb, dinner, shuttle, groceries). Golf greens fees are paid at each course.
        </p>
      </div>
    </div>
  )
}
