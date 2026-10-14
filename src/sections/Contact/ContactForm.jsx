import { useState } from 'react'
import { Button } from '../../ui'
import sendMessage from '../../lib/sendMessage'

const EMPTY = { name: '', email: '', message: '', botcheck: '' }

export default function ContactForm({ email }) {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    setError('')
    try {
      await sendMessage(form)
      setStatus('sent')
      setForm(EMPTY)
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-status form-status--ok" role="status">
        <b>COPY THAT</b>
        <p>Your message is on its way. Mahriz will get back to you soon.</p>
        <button type="button" className="form-status__again" onClick={() => setStatus('idle')}>
          SEND ANOTHER
        </button>
      </div>
    )
  }

  return (
    <form className="radio__form" onSubmit={submit} noValidate={false}>
      <input required name="name" autoComplete="name" placeholder="Your name" value={form.name} onChange={set('name')} />
      <input required name="email" type="email" autoComplete="email" placeholder="Your email" value={form.email} onChange={set('email')} />
      <textarea required name="message" rows="5" placeholder="Your message..." value={form.message} onChange={set('message')} />
      <input
        type="text" name="botcheck" className="form-trap" tabIndex={-1} autoComplete="off"
        value={form.botcheck} onChange={set('botcheck')} aria-hidden="true"
      />
      <Button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'SENDING...' : 'TRANSMIT'}
      </Button>
      {status === 'error' && (
        <p className="form-status form-status--error" role="alert">
          Message failed to send{error ? ` (${error})` : ''}. Please email <a href={`mailto:${email}`}>{email}</a> directly.
        </p>
      )}
    </form>
  )
}