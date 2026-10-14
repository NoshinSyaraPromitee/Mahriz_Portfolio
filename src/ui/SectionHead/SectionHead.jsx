import { motion } from 'framer-motion'
import { inView } from '../../lib/motion'
import './section-head.css'

export default function SectionHead({ title }) {
  return (
    <motion.div className="sec-head" {...inView()}>
      <h2>{title}</h2>
    </motion.div>
  )
}