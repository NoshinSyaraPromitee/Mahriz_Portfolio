import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ThemeToggle, CvMenu, Car } from '../../ui'
import useScrolled from '../../hooks/useScrolled'
import useActiveSection from '../../hooks/useActiveSection'
import { nav } from '../../config/site'
import MoreMenu from './MoreMenu'
import './navbar.css'

const IDS = ['home', ...nav.map((n) => n.href.slice(1)), 'skills']
const MORE = nav.filter((n) => n.tier > 1)
const clamp = (v) => Math.min(Math.max(v, 0), 1)

export default function Navbar() {
  const solid = useScrolled()
  const active = useActiveSection(IDS)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  const racerLeft = useTransform(progress, (v) => `calc(${clamp(v)} * (100% - var(--racer-w)))`)

  return (
    <motion.nav
      className={`nav ${solid ? 'nav--solid' : ''}`}
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}
    >
      <ul className="nav__links">
        {nav.map((n) => (
          <li key={n.href} className={`tier-${n.tier}`}>
            <a
              href={n.href}
              className={`nav__link ${active === n.href.slice(1) ? 'is-active' : ''}`}
              aria-current={active === n.href.slice(1) ? 'true' : undefined}
            >
              {n.label}
            </a>
          </li>
        ))}
        <MoreMenu items={MORE} active={active} />
      </ul>
      <div className="nav__actions">
        <CvMenu triggerClass="nav__cv">
          <span><span className="nav__cv-full">DOWNLOAD </span>CV</span>
        </CvMenu>
        <ThemeToggle />
      </div>

      <motion.div className="nav__progress" style={{ scaleX: progress }} />
      <span className="nav__finish" aria-hidden="true" />
      <motion.div className="nav__racer" style={{ left: racerLeft }} aria-hidden="true">
        <Car />
      </motion.div>
    </motion.nav>
  )
}