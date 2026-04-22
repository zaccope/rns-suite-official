'use client'

import { useState, useEffect } from 'react'
import { List, X, Flame, Phone } from '@phosphor-icons/react'

const navLinks = [
  { label: "What's On", href: '#whats-on' },
  { label: 'The Bar', href: '#services' },
  { label: 'The Story', href: '#about' },
  { label: 'Find Us', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-noir-950/95 backdrop-blur-md border-b border-ember-500/10'
          : 'bg-gradient-to-b from-noir-950/80 to-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2.5 group">
          <Flame
            weight="fill"
            className="w-6 h-6 text-ember-500 group-hover:text-ember-400 transition-colors animate-flicker"
          />
          <span className="font-heading text-xl md:text-2xl tracking-wider text-cream uppercase">
            Rock <span className="text-ember-500">N</span> Soul
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream/70 hover:text-ember-400 transition-colors font-medium uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-ember-500 text-noir-950 text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-ember-400 active:scale-[0.98] transition-all"
          >
            <Phone weight="fill" className="w-4 h-4" />
            Book a Table
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-cream"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X weight="bold" className="w-6 h-6" /> : <List weight="bold" className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu — SOLID background, never transparent */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-noir-950 transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-start gap-7 pt-16 bg-noir-950 min-h-full px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-heading tracking-wider uppercase text-cream hover:text-ember-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-ember-500 text-noir-950 font-bold uppercase tracking-wider rounded-sm text-lg"
          >
            <Phone weight="fill" className="w-5 h-5" />
            Book a Table
          </a>
          <div className="mt-auto pb-12 pt-8 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cream/40">
              Wrexham · Open Late
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
