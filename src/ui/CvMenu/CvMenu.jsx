import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cvs } from '../../config/site'
import './cv-menu.css'

const Chevron = ({ open }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={`cv-menu__chev ${open ? 'is-open' : ''}`}>
    <path d="M6 9l6 6 6-6" />
  </svg>
)

export default function CvMenu({ triggerClass = '', align = 'right', children = 'DOWNLOAD CV' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const outside = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false)
    }
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', outside)
    window.addEventListener('keydown', esc)
    return () => {
      document.removeEventListener('pointerdown', outside)
      window.removeEventListener('keydown', esc)
    }
  }, [open])

  return (
    <div className={`cv-menu cv-menu--${align}`} ref={ref}>
      <button
        type="button"
        className={`cv-menu__trigger ${triggerClass}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {children}
        <Chevron open={open} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            role="menu"
            className="cv-menu__list"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            {cvs.map((cv) => (
              <li key={cv.file}>
                <a role="menuitem" href={cv.file} download={cv.name} onClick={() => setOpen(false)}>
                  <b>{cv.label}</b>
                  <small>{cv.note}</small>
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}