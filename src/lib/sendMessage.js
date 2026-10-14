import { contactForm } from '../config/site'

// Sends the contact form to email. Uses Web3Forms when a key is set, otherwise FormSubmit.
export default async function sendMessage({ name, email, message, botcheck }) {
  if (botcheck) return { ok: true } // spam bot filled the hidden field - pretend success

  const subject = `${contactForm.subject} - ${name}`
  let res

  if (contactForm.web3formsKey) {
    res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: contactForm.web3formsKey,
        subject,
        from_name: 'Mahriz Portfolio',
        name,
        email,
        message,
      }),
    })
  } else {
    res = await fetch(`https://formsubmit.co/ajax/${contactForm.to}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: subject,
        _replyto: email,
        _template: 'table',
        _captcha: 'false',
      }),
    })
  }

  const data = await res.json().catch(() => ({}))
  const ok = res.ok && (data.success === true || data.success === 'true')
  if (!ok) throw new Error(data.message || `Request failed (${res.status})`)
  return { ok: true }
}