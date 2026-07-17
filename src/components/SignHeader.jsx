export default function SignHeader({ title, elev = 'ELEV 11,500 FT', as: Tag = 'h2' }) {
  return (
    <div className="sign-header wood-panel screws">
      <Tag className="carved">{title}</Tag>
      <span className="sign-elev">— {elev} —</span>
    </div>
  )
}
