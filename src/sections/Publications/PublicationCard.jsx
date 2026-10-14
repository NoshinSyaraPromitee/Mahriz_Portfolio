import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lightbox } from '../../ui'
import { inView } from '../../lib/motion'

export default function PublicationCard({ item, index }) {
  const [open, setOpen] = useState(false)
  const pages = item.pages || []

  return (
    <motion.article className="pubs__card" {...inView({ y: 40 }, index * 0.1)}>
      {pages.length > 0 && (
        <button className="pubs__thumb" onClick={() => setOpen(true)} aria-label={`Read ${item.title}`}>
          <img src={pages[0]} alt="" loading="lazy" />
          <span>VIEW {pages.length} {pages.length > 1 ? 'PAGES' : 'PAGE'}</span>
        </button>
      )}
      <div className="pubs__top">
        <small>{item.outlet}</small>
        <span className="pubs__page">PG {item.page}</span>
      </div>
      <h3>{item.title}</h3>
      <div className="pubs__foot">
        <span>{item.date}</span>
        {item.href && (
          <a href={item.href} target="_blank" rel="noreferrer">READ ONLINE</a>
        )}
      </div>
      <Lightbox open={open} images={pages} title={item.title} onClose={() => setOpen(false)} />
    </motion.article>
  )
}