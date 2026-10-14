import { useMemo } from 'react'
import './speed-lines.css'

export default function SpeedLines({ count = 22 }) {
  const lines = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        top: Math.random() * 100,
        width: 80 + Math.random() * 260,
        dur: 0.6 + Math.random() * 1.4,
        delay: Math.random() * 2,
        op: 0.15 + Math.random() * 0.5,
      })),
    [count]
  )

  return (
    <div className="speed-lines">
      {lines.map((l, i) => (
        <span key={i} style={{ top: `${l.top}%`, width: l.width, opacity: l.op, animationDuration: `${l.dur}s`, animationDelay: `${l.delay}s` }} />
      ))}
    </div>
  )
}