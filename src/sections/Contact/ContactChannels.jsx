import { motion } from 'framer-motion'
import { inView } from '../../lib/motion'
import { channels, cvs } from '../../config/site'
import { icons } from './icons'

export default function ContactChannels() {
  return (
    <div className="channels">
      {channels.map((ch, i) => {
        const Icon = icons[ch.id]
        const external = ch.href.startsWith('http')
        return (
          <motion.a
            key={ch.id}
            href={ch.href}
            className="channel"
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            {...inView({ y: 30 }, i * 0.06)}
          >
            <span className="channel__icon"><Icon /></span>
            <span className="channel__text">
              <small>{ch.label}</small>
              <b>{ch.value}</b>
            </span>
            <span className="channel__go">OPEN</span>
          </motion.a>
        )
      })}
      {cvs.map((cv) => (
        <a key={cv.file} className="channel channel--cv" href={cv.file} download={cv.name}>
          <span className="channel__text">
            <small>CV | {cv.label}</small>
            <b>{cv.note}</b>
          </span>
          <span className="channel__go">DOWNLOAD</span>
        </a>
      ))}
    </div>
  )
}