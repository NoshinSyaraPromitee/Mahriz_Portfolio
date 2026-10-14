import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './lightbox.css'

const Arrow = ({ flip }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export default function Lightbox({ open, images = [], title = '', onClose }) {
  const [i, setI] = useState(0)
  const last = images.length - 1
  const stop = (e) => e.stopPropagation()

  useEffect(() => {
    if (open) setI(0)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setI((n) => Math.min(n + 1, last))
      if (e.key === 'ArrowLeft') setI((n) => Math.max(n - 1, 0))
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, last, onClose])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <div className="lightbox__bar" onClick={stop}>
            <span className="lightbox__title">{title}</span>
            {images.length > 1 && <span>{i + 1} / {images.length}</span>}
            <button className="lightbox__close" onClick={onClose}>CLOSE</button>
          </div>
          <div className="lightbox__stage">
            {images.length > 1 && (
              <button className="lightbox__nav" disabled={i === 0} onClick={(e) => { stop(e); setI(i - 1) }} aria-label="Previous page">
                <Arrow flip />
              </button>
            )}
            <motion.img
              key={images[i]}
              src={images[i]}
              alt={`${title} - page ${i + 1}`}
              className="lightbox__img"
              onClick={stop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            {images.length > 1 && (
              <button className="lightbox__nav" disabled={i === last} onClick={(e) => { stop(e); setI(i + 1) }} aria-label="Next page">
                <Arrow />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}