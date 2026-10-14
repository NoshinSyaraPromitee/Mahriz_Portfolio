import { motion } from 'framer-motion'
import { SectionHead } from '../../ui'
import { inView } from '../../lib/motion'
import { about } from '../../config/site'
import DriverCard from './DriverCard'
import TelemetryPanel from './TelemetryPanel'
import './about.css'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionHead title="Driver Profile" />
        <div className="about__grid">
          <DriverCard />
          <motion.div className="about__text" {...inView({ x: 80 }, 0.15)}>
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <TelemetryPanel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}