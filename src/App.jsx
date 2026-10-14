import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Loader, Navbar, Footer } from './layout'
import { Hero, About, Results, Journey, Experience, Publications, Skills, Contact } from './sections'

const SECTIONS = [Hero, About, Results, Journey, Experience, Publications, Skills, Contact]

export default function App() {
  const [ready, setReady] = useState(false)
  const done = useCallback(() => setReady(true), [])

  return (
    <>
      <AnimatePresence>{!ready && <Loader key="loader" onDone={done} />}</AnimatePresence>
      {ready && (
        <>
          <Navbar />
          <main>
            {SECTIONS.map((Section, i) => (
              <Section key={i} />
            ))}
          </main>
          <Footer />
        </>
      )}
    </>
  )
}