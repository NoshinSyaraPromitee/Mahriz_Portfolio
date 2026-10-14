export const ease = [0.16, 1, 0.3, 1]

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: 'easeOut' },
})

export const inView = (from = { y: 40 }, delay = 0) => ({
  initial: { opacity: 0, ...from },
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { delay, duration: 0.7, ease: 'easeOut' },
})