'use client'

import { ArrowDown, ArrowRight } from '@phosphor-icons/react'

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href="#contact"
        className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-ember-500 text-noir-950 font-bold uppercase tracking-wider rounded-sm hover:bg-ember-400 active:scale-[0.98] transition-all"
        onClick={() => {
          if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'cta_click', { event_category: 'hero', event_label: 'book_table' })
          }
        }}
      >
        Book a Table
        <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </a>
      <a
        href="#whats-on"
        className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream/25 text-cream font-medium uppercase tracking-wider rounded-sm hover:bg-cream/5 hover:border-ember-400/50 active:scale-[0.98] transition-all"
      >
        See What&rsquo;s On
        <ArrowDown weight="bold" className="w-4 h-4" />
      </a>
    </div>
  )
}
