import { motion } from 'framer-motion'
import { inView } from '../../lib/motion'

export default function SkillGroup({ group, index }) {
  return (
    <motion.div className="skills__group" {...inView({ y: 40 }, index * 0.1)}>
      <h3>{group.title}</h3>
      <ul>
        {group.items.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </motion.div>
  )
}