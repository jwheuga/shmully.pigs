import SignHeader from '../components/SignHeader.jsx'
import { money } from '../data/content.ts'

const usd = (n) => '$' + n.toFixed(2)

export default function Money() {
  const outstanding = money.ledger.reduce((sum, p) => sum + Math.max(0, p.owed - p.paid), 0)
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

      <SignHeader title="Airbnb Settlement" elev="PAY WILDER BACK" />

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
            Scan in your bank app, or send to the number above. Each house pig owes {usd(money.airbnbShare)}.
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
              {money.ledger.map((p) => {
                const owes = Math.max(0, p.owed - p.paid)
                return (
                  <tr key={p.name}>
                    <td className="rowlabel">{p.name}</td>
                    <td>{usd(p.owed)}</td>
                    <td>{usd(p.paid)}</td>
                    <td style={{ color: owes === 0 ? 'var(--meadow-dark)' : 'var(--danger)', fontWeight: 600 }}>
                      {owes === 0 ? 'PAID' : usd(owes)}
                    </td>
                  </tr>
                )
              })}
              <tr className="total-row">
                <td className="rowlabel">Still outstanding</td>
                <td />
                <td />
                <td style={{ fontWeight: 700 }}>{usd(outstanding)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="muted" style={{ marginTop: '0.6rem', fontSize: '0.8rem' }}>
          Airbnb settlement only ({usd(money.airbnbShare)} per house pig). Golf, shuttle, and groceries settle separately.
        </p>
      </div>
    </div>
  )
}
