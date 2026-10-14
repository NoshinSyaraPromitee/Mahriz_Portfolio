import { motion, useScroll, useTransform } from 'framer-motion'
import { SpeedLines, Car } from '../../ui'
import { ease } from '../../lib/motion'
import HeroIntro from './HeroIntro'
import Licence from './Licence/Licence'
import './hero.css'

export default function Hero() {
  const { scrollY } = useScroll()
  const carX = useTransform(scrollY, [0, 900], [0, 700])

  return (
    <section id="home" className="hero">
      <div className="hero__glow" />
      <div className="hero__grid">
        <HeroIntro />
        <Licence />
      </div>
      <motion.div className="hero__car" style={{ x: carX }}>
        <SpeedLines count={14} />
        <motion.div initial={{ x: '-130vw' }} animate={{ x: 0 }} transition={{ delay: 0.2, duration: 1.4, ease }}>
          <Car />
        </motion.div>
        <div className="hero__asphalt" />
      </motion.div>
    </section>
  )
}