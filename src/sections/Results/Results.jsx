import { SectionHead } from '../../ui'
import { results } from '../../config/site'
import ResultRow from './ResultRow'
import './results.css'

export default function Results() {
  return (
    <section id="results">
      <div className="container">
        <SectionHead title="Race Results" />
        <div className="tower">
          {results.map((r, i) => (
            <ResultRow key={r.title} result={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}