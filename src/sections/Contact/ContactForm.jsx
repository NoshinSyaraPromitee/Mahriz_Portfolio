import { useState } from 'react'
import { Button } from '../../ui'

export default function ContactForm({ email }) {
  const [form, setForm] = useState({ name: '', from: '', msg: '' })
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Team Radio from ${form.name}`)
    const body = encodeURIComponent(`${form.msg}\n\n- ${form.name} (${form.from})`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <form className="radio__form" onSubmit={submit}>
      <input required placeholder="Your name" value={form.name} onChange={set('name')} />
      <input required type="email" placeholder="Your email" value={form.from} onChange={set('from')} />
      <textarea required rows="5" placeholder="Your message..." value={form.msg} onChange={set('msg')} />
      <Button type="submit">{sent ? 'COPY THAT' : 'TRANSMIT'}</Button>
    </form>
  )
}