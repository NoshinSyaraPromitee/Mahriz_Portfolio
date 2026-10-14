import { motion, useScroll, useTransform } from 'framer-motion'
import { Button, CvMenu } from '../../ui'
import { fadeUp } from '../../lib/motion'
import { driver } from '../../config/site'

const Letters = ({ text, start }) =>
  text.split('').map((c, i) => (
    <motion.span
      key={i}
      initial={{ y: 140, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: start + i * 0.05, type: 'spring', stiffness: 180 }}
    >
      {c}
    </motion.span>
  ))

export default function HeroIntro() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -120])
  const opacity = useTransform(scrollY, [0, 450], [1, 0])

  return (
    <motion.div className="hero__intro" style={{ y, opacity }}>
      <h1 className="hero__name"><Letters text={driver.first} start={0.4} /></h1>
      <h1 className="hero__name hero__name--outline"><Letters text={driver.last} start={0.7} /></h1>
      <motion.p className="hero__sub" {...fadeUp(1.1)}>{driver.tagline}</motion.p>
      <motion.div className="hero__cta" {...fadeUp(1.3)}>
        <Button href="#results">View Results</Button>
        <CvMenu triggerClass="btn btn--ghost" align="left">Download CV</CvMenu>
      </motion.div>
    </motion.div>
  )
}