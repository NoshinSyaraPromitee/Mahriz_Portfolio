import { motion } from 'framer-motion'
import { inView } from '../../lib/motion'

export default function ExperienceCard({ item, index }) {
  return (
    <motion.article className="exp__card" {...inView({ y: 40 }, index * 0.1)}>
      <div className="exp__head">
        <div>
          <h3>{item.org}</h3>
          <p>{item.role}</p>
        </div>
        <span>{item.period}</span>
      </div>
      <ul>
        {item.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </motion.article>
  )
}