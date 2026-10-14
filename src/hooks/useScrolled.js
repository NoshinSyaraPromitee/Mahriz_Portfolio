import { useEffect, useState } from 'react'

export default function useScrolled(offset = 40) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > offset)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [offset])

  return scrolled
}