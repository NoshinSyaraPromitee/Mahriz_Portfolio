import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useDismiss from '../../hooks/useDismiss'

export default function MoreMenu({ items, active }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const close = useCallback(() => setOpen(false), [])
  useDismiss(ref, open, close)

  const isActive = items.some((n) => n.tier === 3 && n.href === `#${active}`)

  return (
    <li className="nav__more" ref={ref}>
      <button
        type="button"
        className={`nav__link nav__more-btn ${isActive ? 'is-active' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        MORE
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className={open ? 'is-open' : ''}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            role="menu"
            className="nav__more-list"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            {items.map((n) => (
              <li key={n.href} className={`tier-${n.tier}`}>
                <a
                  role="menuitem"
                  href={n.href}
                  className={active === n.href.slice(1) ? 'is-active' : ''}
                  onClick={close}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  )
}