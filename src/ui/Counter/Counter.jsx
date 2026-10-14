import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

export default function Counter({ to, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true })
  const [v, setV] = useState(0)

  useEffect(() => {
    if (!visible) return
    const c = animate(0, to, { duration: 1.8, ease: 'easeOut', onUpdate: setV })
    return () => c.stop()
  }, [visible, to])

  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>
}