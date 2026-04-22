'use client'

import { useState, type FormEvent } from 'react'
import { PaperPlaneTilt } from '@phosphor-icons/react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Failed')

      setStatus('sent')
      form.reset()

      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'form_submit', { event_category: 'contact' })
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-cream/60 mb-2">
          Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3.5 bg-noir-950 border border-noir-700 rounded-sm text-cream placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-ember-500/30 focus:border-ember-500 transition-colors"
          placeholder="First and last name"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-cream/60 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3.5 bg-noir-950 border border-noir-700 rounded-sm text-cream placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-ember-500/30 focus:border-ember-500 transition-colors"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-widest text-cream/60 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3.5 bg-noir-950 border border-noir-700 rounded-sm text-cream placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-ember-500/30 focus:border-ember-500 transition-colors"
            placeholder="07xxx xxxxxx"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-cream/60 mb-2">
          Tell us about it
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3.5 bg-noir-950 border border-noir-700 rounded-sm text-cream placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-ember-500/30 focus:border-ember-500 transition-colors resize-none"
          placeholder="Booking a table? Planning a private hire? Birthday, stag, hen, band night — give us the details."
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full inline-flex items-center justify-center gap-2 py-4 bg-ember-500 text-noir-950 font-bold uppercase tracking-wider rounded-sm hover:bg-ember-400 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          'Sending…'
        ) : (
          <>
            Send Message
            <PaperPlaneTilt weight="fill" className="w-4 h-4" />
          </>
        )}
      </button>

      {status === 'sent' && (
        <div className="p-4 bg-ember-500/10 border border-ember-500/40 rounded-sm">
          <p className="text-ember-200 text-sm font-medium">
            Cheers — message received. We&rsquo;ll get back to you as soon as we&rsquo;re behind the bar.
          </p>
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/40 rounded-sm">
          <p className="text-red-300 text-sm font-medium">
            Something went wrong. Give us a ring instead.
          </p>
        </div>
      )}
    </form>
  )
}
