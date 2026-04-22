'use client'

import { Phone, MapPin, Clock, FacebookLogo } from '@phosphor-icons/react'

export default function ContactBlocks() {
  return (
    <div className="space-y-3">
      <a
        href="tel:+441978000000"
        className="flex items-center gap-4 p-4 rounded-sm border border-noir-700 bg-noir-900 hover:border-ember-500/60 hover:bg-noir-800 transition-colors group"
        onClick={() => {
          if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'tel_link_click', { event_category: 'contact' })
          }
        }}
      >
        <div className="w-11 h-11 rounded-sm bg-ember-500 flex items-center justify-center group-hover:bg-ember-400 transition-colors">
          <Phone weight="fill" className="w-5 h-5 text-noir-950" />
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-cream/50">
            Call the bar
          </p>
          <p className="font-medium text-cream">Tap to ring us</p>
        </div>
      </a>

      <div className="flex items-center gap-4 p-4 rounded-sm border border-noir-700 bg-noir-900">
        <div className="w-11 h-11 rounded-sm bg-noir-700 flex items-center justify-center">
          <MapPin weight="fill" className="w-5 h-5 text-ember-400" />
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-cream/50">
            Find us
          </p>
          <p className="font-medium text-cream">Wrexham town centre</p>
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 rounded-sm border border-noir-700 bg-noir-900">
        <div className="w-11 h-11 rounded-sm bg-noir-700 flex items-center justify-center">
          <Clock weight="fill" className="w-5 h-5 text-ember-400" />
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-cream/50">
            Hours
          </p>
          <p className="font-medium text-cream">Thu&ndash;Sun &middot; Open Late</p>
        </div>
      </div>

      <a
        href="https://www.facebook.com/rns-suite.official"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 rounded-sm border border-noir-700 bg-noir-900 hover:border-ember-500/60 hover:bg-noir-800 transition-colors group"
      >
        <div className="w-11 h-11 rounded-sm bg-noir-700 flex items-center justify-center group-hover:bg-ember-500 transition-colors">
          <FacebookLogo weight="fill" className="w-5 h-5 text-ember-400 group-hover:text-noir-950" />
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-cream/50">
            Follow
          </p>
          <p className="font-medium text-cream">@rns-suite.official</p>
        </div>
      </a>
    </div>
  )
}
