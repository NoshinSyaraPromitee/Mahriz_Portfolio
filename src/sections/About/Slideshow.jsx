import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { driver, gallery } from '../../config/site'

const images = gallery.length ? gallery : [driver.photo]

export default function Slideshow({ interval = 3500 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const t = setTimeout(() => setIndex((n) => (n + 1) % images.length), interval)
    return () => clearTimeout(t)
  }, [index, interval])

  return (
    <div className="slides">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt={driver.fullName}
          className="slides__img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
      {images.length > 1 && (
        <div className="slides__dots">
          {images.map((_, n) => (
            <button
              key={n}
              className={n === index ? 'is-active' : ''}
              onClick={() => setIndex(n)}
              aria-label={`Show photo ${n + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}