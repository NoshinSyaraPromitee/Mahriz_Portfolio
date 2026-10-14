import { SectionHead } from '../../ui'
import { experience } from '../../config/site'
import ExperienceCard from './ExperienceCard'
import './experience.css'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <SectionHead title="Team History" />
        <div className="exp">
          {experience.map((e, i) => (
            <ExperienceCard key={e.org} item={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}