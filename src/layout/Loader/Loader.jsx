import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas'
import { loader } from '../../config/site'
import './loader.css'

export default function Loader({ onDone }) {
  const { RiveComponent } = useRive({
    src: loader.src,
    stateMachines: loader.stateMachine,
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
    onLoadError: () => onDone(),
  })

  useEffect(() => {
    const t = setTimeout(onDone, loader.duration)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div
      className="loader"
      exit={{ opacity: 0, scale: 1.08, filter: 'blur(8px)' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <RiveComponent className="loader__canvas" />
      <motion.div
        className="loader__bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: loader.duration / 1000, ease: 'linear' }}
      />
      <button className="loader__skip" onClick={onDone}>SKIP</button>
    </motion.div>
  )
}