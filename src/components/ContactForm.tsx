'use client'
import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      organization: (form.elements.namedItem('organization') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      website: (form.elements.namedItem('website') as HTMLInputElement).value, // honeypot
    }
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      if (res.ok) { setStatus('sent'); form.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.lbl}>Name</label>
      <input className={styles.cf} name="name" type="text" placeholder="Your full name" required />
      <label className={styles.lbl}>Email</label>
      <input className={styles.cf} name="email" type="email" placeholder="your@email.com" required />
      <label className={styles.lbl}>Organization</label>
      <input className={styles.cf} name="organization" type="text" placeholder="Firm or institution" />
      <label className={styles.lbl}>Message</label>
      <textarea className={styles.cf} name="message" placeholder="Please write your message here" required />

      {/* Honeypot field — hidden from real users, bots fill it in */}
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        style={{ opacity: 0, position: 'absolute', top: 0, left: 0, height: 0, width: 0, zIndex: -1 }}
      />

      <button type="submit" className={styles.btn} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent ✓' : 'Send Message'}
      </button>
      {status === 'error' && <p className={styles.error}>Something went wrong. Please email us directly at contact@wfaglobal.com</p>}
    </form>
  )
}
