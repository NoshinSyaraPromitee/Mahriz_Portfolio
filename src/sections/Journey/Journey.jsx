import { useEffect, useRef, useState } from 'react'
import { SectionHead } from '../../ui'
import { calendar } from '../../config/site'
import Round from './Round'
import './journey.css'

const Arrow = ({ flip }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export default function Journey() {
  const ref = useRef(null)
  const [pos, setPos] = useState(0)
  const [edge, setEdge] = useState({ start: true, end: false })

  const sync = () => {
    const el = ref.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setPos(max > 0 ? Math.round((el.scrollLeft / max) * 1000) : 0)
    setEdge({ start: el.scrollLeft <= 2, end: el.scrollLeft >= max - 2 })
  }

  useEffect(() => {
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [])

  const step = (dir) => {
    const el = ref.current
    const slot = el.querySelector('.cal__slot')
    el.scrollBy({ left: dir * (slot?.offsetWidth || 360), behavior: 'smooth' })
  }

  const seek = (e) => {
    const el = ref.current
    const max = el.scrollWidth - el.clientWidth
    el.scrollTo({ left: (Number(e.target.value) / 1000) * max })
  }

  return (
    <section id="journey" className="cal">
      <div className="container cal__head">
        <SectionHead title="Race Calendar" />
        <div className="cal__arrows">
          <button onClick={() => step(-1)} disabled={edge.start} aria-label="Previous"><Arrow flip /></button>
          <button onClick={() => step(1)} disabled={edge.end} aria-label="Next"><Arrow /></button>
        </div>
      </div>

      <div className="cal__viewport" ref={ref} onScroll={sync}>
        <div className="cal__track">
          <div className="cal__road" />
          {calendar.map((item, i) => (
            <Round key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>

      <div className="container">
        <input
          type="range"
          className="cal__slider"
          min="0"
          max="1000"
          value={pos}
          onChange={seek}
          style={{ '--fill': `${pos / 10}%` }}
          aria-label="Move through the race calendar"
        />
      </div>
    </section>
  )
}