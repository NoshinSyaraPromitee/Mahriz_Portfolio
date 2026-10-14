import { SectionHead } from '../../ui'
import { publications } from '../../config/site'
import PublicationCard from './PublicationCard'
import './publications.css'

export default function Publications() {
  return (
    <section id="publications">
      <div className="container">
        <SectionHead title="Paddock Press" />
        <div className="pubs">
          {publications.map((p, i) => (
            <PublicationCard key={p.title} item={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}