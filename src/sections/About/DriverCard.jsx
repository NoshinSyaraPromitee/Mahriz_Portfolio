import { motion } from 'framer-motion'
import { inView } from '../../lib/motion'
import { driver, info } from '../../config/site'
import Slideshow from './Slideshow'

export default function DriverCard() {
  return (
    <motion.div className="driver-card" {...inView({ x: -80 })}>
      <Slideshow />
      <div className="driver-card__name">{driver.fullName.toUpperCase()}</div>
      {info.map(([k, v]) => (
        <div className="driver-card__row" key={k}>
          <span>{k}</span>
          <b>{v}</b>
        </div>
      ))}
    </motion.div>
  )
}