import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lightbox } from '../../ui'

export default function ResultRow({ result, index }) {
  const { pos, title, detail, badge, c, image, view } = result
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="tower__row"
      style={{ '--c': c }}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.12, type: 'spring', stiffness: 90 }}
    >
      <div className="tower__pos">{pos}</div>
      <motion.div
        className="tower__stripe"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.12 }}
      />
      <div>
        <h3>{title}</h3>
        <p>{detail}</p>
        {image && (
          <button className="tower__view" onClick={() => setOpen(true)}>{view || 'VIEW'}</button>
        )}
      </div>
      <span className="tower__badge">{badge}</span>
      {image && <Lightbox open={open} images={[image]} title={title} onClose={() => setOpen(false)} />}
    </motion.div>
  )
}