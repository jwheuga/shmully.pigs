export default function TbdSlot({ label = 'TBD', children }) {
  return (
    <div className="tbd-slot">
      <span className="tbd-label">{label}</span>
      {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
  )
}
