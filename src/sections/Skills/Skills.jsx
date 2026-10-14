import { SectionHead } from '../../ui'
import { skills } from '../../config/site'
import SkillGroup from './SkillGroup'
import './skills.css'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHead title="Driver Toolkit" />
        <div className="skills">
          {skills.map((g, i) => (
            <SkillGroup key={g.title} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}