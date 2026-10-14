import { motion } from 'framer-motion'
import { SectionHead } from '../../ui'
import { inView } from '../../lib/motion'
import { driver } from '../../config/site'
import ContactChannels from './ContactChannels'
import ContactForm from './ContactForm'
import './contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <SectionHead title="Team Radio" />
        <motion.p className="contact__intro" {...inView({ y: 20 })}>
          Open for sponsors, team invites, and fresh opportunities! If you're looking for a driver who truly thinks like an engineer,kindly reach out through the channel !
        </motion.p>
        <div className="contact__grid">
          <ContactChannels />
          <motion.div className="contact__form" {...inView({ y: 40 }, 0.15)}>
            <h3>Send a message</h3>
            <ContactForm email={driver.email} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}