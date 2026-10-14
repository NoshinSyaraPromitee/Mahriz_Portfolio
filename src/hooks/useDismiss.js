import { useEffect } from 'react'

// Calls onClose on outside pointer-down or Escape while `open` is true
export default function useDismiss(ref, open, onClose) {
  useEffect(() => {
    if (!open) return
    const outside = (e) => {
      if (!ref.current?.contains(e.target)) onClose()
    }
    const esc = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('pointerdown', outside)
    window.addEventListener('keydown', esc)
    return () => {
      document.removeEventListener('pointerdown', outside)
      window.removeEventListener('keydown', esc)
    }
  }, [ref, open, onClose])
}