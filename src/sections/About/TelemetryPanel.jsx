import { motion } from 'framer-motion'
import { Counter } from '../../ui'
import { inView } from '../../lib/motion'
import { stats } from '../../config/site'
import './telemetry.css'

const LEDS = ['g', 'g', 'g', 'g', 'r', 'r', 'r', 'b', 'b', 'b']

export default function TelemetryPanel() {
  return (
    <motion.div className="telemetry" {...inView({ y: 30 }, 0.3)}>
     
      <div className="telemetry__grid">
        {stats.map((s) => (
          <div key={s.label} className="telemetry__cell">
            <small>{s.label}</small>
            <b>{s.text ?? <Counter to={s.value} decimals={s.decimals} />}</b>
          </div>
        ))}
      </div>
    </motion.div>
  )
}