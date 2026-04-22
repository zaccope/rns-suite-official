import {
  MicrophoneStage,
  MusicNotes,
  Guitar,
  Martini,
  UsersThree,
  Champagne,
  Quotes,
  MapPin,
  FacebookLogo,
  InstagramLogo,
  Flame,
  ArrowUpRight,
  CalendarBlank,
  Fire,
  Lightning,
  Star,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from '@/components/ContactForm'
import HeroButtons from '@/components/HeroButtons'
import ContactBlocks from '@/components/ContactBlocks'

export default function Home() {
  return (
    <main>
      {/* ═══════════════════════════════════════ HERO ═══════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] flex items-end overflow-hidden bg-noir-950">
        {/* Stage lights from above */}
        <div aria-hidden className="absolute inset-0 stage-lights pointer-events-none" />

        {/* Ember glow lower left */}
        <div
          aria-hidden
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full opacity-40 blur-3xl animate-pulse-slow"
          style={{
            background:
              'radial-gradient(circle, rgba(225,66,32,0.45) 0%, transparent 60%)',
          }}
        />

        {/* Cool blue glow upper right */}
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(42,99,236,0.4) 0%, transparent 60%)',
          }}
        />

        {/* Gold accent glow center */}
        <div
          aria-hidden
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(226,149,31,0.5) 0%, transparent 60%)',
          }}
        />

        {/* Grain/noise texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-radial-gradient(circle at 50% 50%, #F5ECE1 0 1px, transparent 1px 4px)',
          }}
        />

        {/* Top-right live status */}
        <div className="hidden md:flex absolute top-6 right-8 z-10 items-center gap-6 text-xs font-mono tracking-widest uppercase text-cream/50">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ember-500" />
            </span>
            Open Late Tonight
          </span>
          <span>Hill St &middot; Wrexham</span>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-20 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-8">
              {/* Location badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-ember-500/10 border border-ember-500/25 rounded-full mb-8 backdrop-blur-sm">
                <MapPin weight="fill" className="w-3.5 h-3.5 text-ember-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-cream">
                  Live Music · Wrexham
                </span>
              </div>

              <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] tracking-wide leading-[0.85] uppercase text-cream mb-6">
                Loud guitars.
                <br />
                <span className="text-ember-500 text-shadow-flame">Smoother</span>
                <br />
                <span className="italic font-display text-blaze-400">nights.</span>
              </h1>

              <p className="text-lg md:text-xl text-cream/70 leading-relaxed max-w-xl mb-10 font-light">
                Wrexham&rsquo;s late-night home of live rock, soul and every good song in
                between. Proper drinks, real bands, and the kind of atmosphere you don&rsquo;t
                get from a chain pub on the high street.
              </p>

              <HeroButtons />
            </div>

            {/* Side info rail */}
            <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-ember-500/20">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-ember-400 mb-6 flex items-center gap-2">
                <Flame weight="fill" className="w-3.5 h-3.5" />
                On Tonight
              </p>
              <div className="space-y-4">
                {[
                  { k: 'Live band', v: 'Fri & Sat' },
                  { k: 'Open until', v: 'Late' },
                  { k: 'Cocktails', v: '2 for £12' },
                  { k: 'Private hire', v: 'Available' },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="flex items-baseline justify-between pb-3 border-b border-cream/10 last:border-0"
                  >
                    <span className="text-sm text-cream/60 uppercase tracking-wider font-mono">
                      {item.k}
                    </span>
                    <span className="font-heading text-xl text-cream tracking-wide uppercase">
                      {item.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-noir-950 to-transparent pointer-events-none"
        />
      </section>

      {/* ═══════════════════════════════════════ MARQUEE ═══════════════════════════════════════ */}
      <section className="bg-ember-500 border-y-2 border-noir-900 py-4 overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, groupIdx) => (
            <div key={groupIdx} className="flex gap-10 shrink-0">
              {[
                'Live Rock',
                'Classic Soul',
                'Craft Cocktails',
                'Late Bar',
                'Private Hire',
                'DJ Sets',
                'Karaoke Thursdays',
                'Sunday Sessions',
              ].map((item, i) => (
                <span
                  key={`${groupIdx}-${i}`}
                  className="flex items-center gap-10 text-noir-950 font-heading text-xl tracking-wider uppercase"
                >
                  {item}
                  <Fire weight="fill" className="w-5 h-5" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════ WHAT'S ON — HEADLINE EVENTS ═══════════════════════════════════════ */}
      <section id="whats-on" className="relative py-24 md:py-32 bg-noir-900 overflow-hidden">
        <div aria-hidden className="absolute inset-0 smoke-texture pointer-events-none" />
        <div
          aria-hidden
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(225,66,32,0.4) 0%, transparent 60%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-6">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-ember-400 mb-4 flex items-center gap-2">
                  <Lightning weight="fill" className="w-3.5 h-3.5" />
                  / What&rsquo;s Coming
                </p>
                <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-wide leading-[0.9] uppercase text-cream">
                  Tribute
                  <br />
                  <span className="italic font-display text-blaze-400">nights</span>{' '}
                  <span className="text-ember-500">locked in.</span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 lg:pt-4">
                <p className="text-lg text-cream/60 leading-relaxed">
                  The biggest nights on the calendar — full tribute acts, Skiddle
                  tickets, and a room that fills before the support even starts.
                  Lock in early or pay on the door.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Poster feature pair */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {[
              {
                poster: '/images/POSTER2.jpg',
                headline: 'Diana Ross Tribute',
                artist: 'Cherie Jade',
                subtitle: 'Queen of Motown & Disco Hits',
                date: 'Sat 30 May',
                time: 'Doors 9pm',
                price: '£10 Skiddle / £15 Door',
                tag: 'Headline',
                accent: 'blaze',
              },
              {
                poster: '/images/POSTER3.jpg',
                headline: 'MJ Tribute Night',
                artist: 'Jay Styles',
                subtitle: 'Hosted by NSE — Non Stop Entertainment',
                date: 'Sat 2 May 2026',
                time: '10pm',
                price: 'Tickets on Skiddle',
                tag: 'Headline',
                accent: 'ember',
              },
            ].map((ev, i) => {
              const isEmber = ev.accent === 'ember'
              const borderHover = isEmber ? 'hover:border-ember-500/60' : 'hover:border-blaze-500/60'
              const tagBg = isEmber ? 'bg-ember-500' : 'bg-blaze-500'
              const dateText = isEmber ? 'text-ember-400' : 'text-blaze-400'
              const iconColor = isEmber ? 'text-ember-500' : 'text-blaze-500'

              return (
                <ScrollReveal key={ev.headline} delay={i * 100}>
                  <div
                    className={`group relative bg-noir-800 border border-noir-700 ${borderHover} rounded-sm overflow-hidden transition-all`}
                  >
                    {/* Poster image */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-noir-950">
                      <Image
                        src={ev.poster}
                        alt={`${ev.headline} — ${ev.artist}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      {/* Corner tag */}
                      <div
                        className={`absolute top-4 left-4 px-3 py-1.5 ${tagBg} text-noir-950 text-xs font-mono font-bold uppercase tracking-widest rounded-sm`}
                      >
                        {ev.tag}
                      </div>
                      {/* Bottom gradient */}
                      <div
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-noir-900 to-transparent"
                      />
                    </div>

                    {/* Text below */}
                    <div className="p-6 md:p-8">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <p
                            className={`text-xs font-mono uppercase tracking-[0.2em] ${dateText} mb-1`}
                          >
                            {ev.date} &middot; {ev.time}
                          </p>
                          <h3 className="font-heading text-3xl md:text-4xl tracking-wide uppercase text-cream leading-tight">
                            {ev.headline}
                          </h3>
                        </div>
                        <CalendarBlank
                          weight="duotone"
                          className={`w-7 h-7 ${iconColor} shrink-0`}
                        />
                      </div>
                      <p className="text-cream/70 mb-2 text-base">
                        <span className="font-semibold text-cream">Featuring {ev.artist}</span>{' '}
                        &mdash; {ev.subtitle}
                      </p>
                      <p className="text-sm font-mono uppercase tracking-wider text-cream/50">
                        {ev.price}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Weekly schedule — compact rail */}
          <ScrollReveal delay={200}>
            <div className="bg-noir-950 border border-noir-700 rounded-sm p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-noir-800">
                <Fire weight="fill" className="w-4 h-4 text-ember-500" />
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-ember-400">
                  Every Week At The Suite
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-noir-800">
                {[
                  {
                    day: 'Tuesdays',
                    title: 'Open Mic',
                    time: '8pm',
                    accent: 'blaze',
                  },
                  {
                    day: 'Thursdays',
                    title: 'Karaoke',
                    time: '9pm',
                    accent: 'ember',
                  },
                  {
                    day: 'Fri & Sat',
                    title: 'Live Music',
                    time: 'From 9:30pm',
                    accent: 'ember',
                  },
                  {
                    day: 'Sundays',
                    title: 'Soul Sessions',
                    time: '7pm',
                    accent: 'blaze',
                  },
                ].map((w) => (
                  <div key={w.title} className="py-5 lg:py-2 lg:px-6 first:pt-0 lg:first:pl-0 last:pb-0 lg:last:pr-0">
                    <p
                      className={`text-xs font-mono uppercase tracking-[0.2em] mb-1 ${
                        w.accent === 'ember' ? 'text-ember-400' : 'text-blaze-400'
                      }`}
                    >
                      {w.day}
                    </p>
                    <p className="font-heading text-2xl tracking-wide uppercase text-cream">
                      {w.title}
                    </p>
                    <p className="text-xs font-mono uppercase tracking-wider text-cream/50 mt-1">
                      {w.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════ SERVICES / THE BAR ═══════════════════════════════════════ */}
      <section id="services" className="relative py-24 md:py-32 bg-noir-950 overflow-hidden">
        <div aria-hidden className="absolute inset-0 texture-grain pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-6">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-ember-400 mb-4 flex items-center gap-2">
                  <Flame weight="fill" className="w-3.5 h-3.5" />
                  / The Bar
                </p>
                <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-wide leading-[0.9] uppercase text-cream">
                  More than
                  <br />
                  <span className="text-ember-500">just</span>{' '}
                  <span className="italic font-display text-blaze-400">a pub.</span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 lg:pt-4">
                <p className="text-lg text-cream/60 leading-relaxed">
                  Proper drinks poured by people who give a damn, live entertainment
                  worth staying up for, and a room built for the best nights of your
                  week.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Bento-ish asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {/* Big feature card */}
            <ScrollReveal className="md:col-span-4">
              <div className="group relative h-full min-h-[340px] bg-gradient-to-br from-ember-900 via-ember-800 to-noir-800 border border-ember-700/40 rounded-sm p-8 md:p-10 overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-30 blur-3xl bg-ember-500"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, #F5ECE1 0 1px, transparent 1px 28px)',
                  }}
                />

                <div className="relative">
                  <MicrophoneStage
                    weight="duotone"
                    className="w-12 h-12 text-ember-300 mb-6"
                  />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-ember-300">
                    01 · Flagship
                  </span>
                  <h3 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-cream mt-3 mb-4 leading-tight">
                    Live Music,
                    <br />
                    <span className="italic font-display text-blaze-300">done properly.</span>
                  </h3>
                  <p className="text-cream/80 leading-relaxed max-w-lg">
                    Full PA, proper stage lighting, and a booker who actually picks the
                    bands. Rock covers on Fridays, original acts most Saturdays, soul
                    and Motown on Sundays. No backing tracks, no phoned-in sets.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-2" delay={80}>
              <div className="group h-full bg-noir-800 border border-noir-700 hover:border-blaze-500/60 rounded-sm p-8 transition-colors">
                <Martini weight="duotone" className="w-10 h-10 text-blaze-400 mb-5" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-blaze-400">
                  02
                </span>
                <h3 className="font-heading text-3xl tracking-wide uppercase text-cream mt-2 mb-3 leading-tight">
                  Craft
                  <br />
                  Cocktails
                </h3>
                <p className="text-sm text-cream/60 leading-relaxed">
                  Signature serves, classics done right, and a 2-for-£12 list that
                  makes the first round easy.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-2" delay={160}>
              <div className="group h-full bg-noir-800 border border-noir-700 hover:border-ember-500/60 rounded-sm p-8 transition-colors">
                <UsersThree weight="duotone" className="w-10 h-10 text-ember-400 mb-5" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-ember-400">
                  03
                </span>
                <h3 className="font-heading text-3xl tracking-wide uppercase text-cream mt-2 mb-3 leading-tight">
                  Private
                  <br />
                  Hire
                </h3>
                <p className="text-sm text-cream/60 leading-relaxed">
                  Birthdays, work parties, stag and hen nights. The whole suite,
                  dressed to your brief.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-2" delay={240}>
              <div className="group h-full bg-noir-800 border border-noir-700 hover:border-blaze-500/60 rounded-sm p-8 transition-colors">
                <MusicNotes weight="duotone" className="w-10 h-10 text-blaze-400 mb-5" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-blaze-400">
                  04
                </span>
                <h3 className="font-heading text-3xl tracking-wide uppercase text-cream mt-2 mb-3 leading-tight">
                  DJs &amp;
                  <br />
                  Karaoke
                </h3>
                <p className="text-sm text-cream/60 leading-relaxed">
                  Thursday mic-drop riots and weekend late sets that carry the
                  night long past closing.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-2" delay={320}>
              <div className="group h-full bg-noir-800 border border-noir-700 hover:border-ember-500/60 rounded-sm p-8 transition-colors">
                <Champagne weight="duotone" className="w-10 h-10 text-ember-400 mb-5" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-ember-400">
                  05
                </span>
                <h3 className="font-heading text-3xl tracking-wide uppercase text-cream mt-2 mb-3 leading-tight">
                  VIP &amp;
                  <br />
                  Booths
                </h3>
                <p className="text-sm text-cream/60 leading-relaxed">
                  Bottle service, reserved seating, and the best view of the stage
                  for a proper night out.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-2" delay={400}>
              <div className="group h-full bg-noir-800 border border-noir-700 hover:border-blaze-500/60 rounded-sm p-8 transition-colors">
                <Guitar weight="duotone" className="w-10 h-10 text-blaze-400 mb-5" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-blaze-400">
                  06
                </span>
                <h3 className="font-heading text-3xl tracking-wide uppercase text-cream mt-2 mb-3 leading-tight">
                  Open Mic
                  <br />
                  Tuesdays
                </h3>
                <p className="text-sm text-cream/60 leading-relaxed">
                  Wrexham&rsquo;s best midweek room for new acts. Sign up on the door,
                  play the stage.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Kitchen / Menu feature — uses real poster */}
          <ScrollReveal delay={100}>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-0 bg-noir-800 border border-noir-700 hover:border-ember-500/60 rounded-sm overflow-hidden transition-colors">
              <div className="relative md:col-span-5 aspect-[4/5] md:aspect-auto min-h-[320px] overflow-hidden bg-noir-950">
                <Image
                  src="/images/POSTER1.jpg"
                  alt="Rock N Soul Suite new menu — burgers, chicken, fries, beer"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-transparent to-noir-800/40"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-blaze-500 text-noir-950 text-xs font-mono font-bold uppercase tracking-widest rounded-sm">
                  New
                </div>
              </div>
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-blaze-400 mb-3">
                  07 &middot; The Kitchen
                </span>
                <h3 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-cream mb-4 leading-tight">
                  New menu,
                  <br />
                  <span className="italic font-display text-blaze-400">just launched.</span>
                </h3>
                <p className="text-cream/70 leading-relaxed mb-6 max-w-xl">
                  Proper pub food to go with the music. Loaded burgers, crispy chicken,
                  fries piled high, and a cold pint to wash it down. Something for
                  everyone — whether you&rsquo;re here for the band or just the bite.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Burgers', 'Chicken', 'Sharers', 'Cold Pints', 'Sunday Bites'].map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1.5 bg-noir-950 text-cream/70 text-xs font-mono uppercase tracking-wider rounded-sm border border-noir-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════ ABOUT ═══════════════════════════════════════ */}
      <section id="about" className="relative py-24 md:py-32 bg-noir-900 overflow-hidden">
        <div
          aria-hidden
          className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(225,66,32,0.4) 0%, transparent 60%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <ScrollReveal className="lg:col-span-5">
              <div className="relative">
                {/* Logo feature card */}
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-ember-500/30 bg-noir-950">
                  {/* Ambient fire glow behind logo */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(ellipse at 50% 50%, rgba(225,66,32,0.35) 0%, transparent 55%), radial-gradient(ellipse at 30% 80%, rgba(226,149,31,0.2) 0%, transparent 50%)',
                    }}
                  />

                  {/* Real logo image, centered */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div
                      className="relative w-full max-w-[340px] aspect-square"
                      style={{
                        filter:
                          'drop-shadow(0 0 60px rgba(225, 66, 32, 0.45)) drop-shadow(0 0 120px rgba(226, 149, 31, 0.25))',
                      }}
                    >
                      <Image
                        src="/images/LOGO.jpg"
                        alt="Rock N Soul Suite logo"
                        fill
                        sizes="(max-width: 1024px) 340px, 340px"
                        className="object-contain rounded-sm"
                      />
                    </div>
                  </div>

                  {/* Sound-bar stripes overlay */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-40 pointer-events-none"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(90deg, transparent 0 34px, rgba(245,236,225,0.04) 34px 36px)',
                    }}
                  />

                  {/* Floating caption badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-noir-950/90 backdrop-blur-sm border border-ember-500/30 rounded-sm p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Star weight="fill" className="w-4 h-4 text-blaze-400" />
                      <span className="text-xs font-mono uppercase tracking-widest text-cream/60">
                        15&ndash;17 Hill St &middot; Wrexham
                      </span>
                    </div>
                    <p className="font-heading text-2xl tracking-wide uppercase text-cream leading-snug">
                      Built for the music,
                      <br />
                      made for the night.
                    </p>
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  className="absolute -top-3 -right-3 w-20 h-20 border-2 border-ember-500 rounded-sm -z-10"
                  aria-hidden
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} className="lg:col-span-7 lg:pl-4">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-ember-400 mb-4 flex items-center gap-2">
                <Flame weight="fill" className="w-3.5 h-3.5" />
                / The Story
              </p>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase leading-[0.9] text-cream mb-8">
                Where the best
                <br />
                <span className="italic font-display text-blaze-400">nights</span>{' '}
                <span className="text-ember-500">start.</span>
              </h2>

              <div className="space-y-5 text-cream/75 leading-relaxed text-lg max-w-2xl">
                <p>
                  The Rock N Soul Suite was built on one simple idea — Wrexham
                  deserves a proper music bar. Not a karaoke corner tacked onto a chain
                  pub. Not a disco on a Saturday. A real venue, booked with real bands,
                  run by people who still get goosebumps when the room sings along.
                </p>
                <p>
                  We pour honest drinks, play loud, and keep the doors open late.
                  Whether you&rsquo;re down for Friday&rsquo;s live band, Thursday&rsquo;s
                  karaoke riot, or booking the whole place out for a birthday that
                  won&rsquo;t get forgotten — you&rsquo;ll find the stage lit and a
                  cold one waiting.
                </p>
                <p className="text-cream/90 font-medium">
                  One room. Seven nights. All the best music, played loud enough to
                  matter.
                </p>
              </div>

              {/* Value pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-10 border-t border-cream/10">
                {[
                  {
                    icon: MicrophoneStage,
                    title: 'Real live music',
                    body: 'Booked bands, not laptops. Every weekend.',
                  },
                  {
                    icon: Martini,
                    title: 'Proper drinks',
                    body: 'Cocktails poured with care, never shortcuts.',
                  },
                  {
                    icon: UsersThree,
                    title: 'Whole-room hire',
                    body: 'Your night, dressed and staffed to brief.',
                  },
                ].map((pillar) => (
                  <div key={pillar.title}>
                    <pillar.icon
                      weight="duotone"
                      className="w-7 h-7 text-ember-400 mb-3"
                    />
                    <p className="font-heading text-xl tracking-wide uppercase text-cream mb-1.5">
                      {pillar.title}
                    </p>
                    <p className="text-sm text-cream/60 leading-relaxed">
                      {pillar.body}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ TESTIMONIAL ═══════════════════════════════════════ */}
      <section className="relative py-20 md:py-24 bg-noir-800 border-y border-ember-500/20 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #F5ECE1 0 1px, transparent 1px 48px)',
          }}
        />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <Quotes weight="fill" className="w-10 h-10 text-ember-500 mb-6" />
            <blockquote className="font-heading text-3xl md:text-5xl tracking-wide leading-tight uppercase text-cream italic">
              &ldquo;Proper live bar. The kind of place you walk into for one and
              stay for <span className="text-ember-500">five</span>. Band was class,
              drinks kept coming, and the staff made it feel like home.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-cream/10">
              <div className="w-10 h-10 rounded-full bg-ember-500 text-noir-950 flex items-center justify-center font-heading text-sm tracking-wide">
                RW
              </div>
              <div>
                <p className="font-medium text-cream text-sm">Rhys W.</p>
                <p className="text-xs text-cream/50 font-mono uppercase tracking-widest">
                  Saturday live night · Wrexham
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════ CONTACT ═══════════════════════════════════════ */}
      <section id="contact" className="relative py-24 md:py-32 bg-noir-950 overflow-hidden">
        <div
          aria-hidden
          className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-15 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(225,66,32,0.5) 0%, transparent 60%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <ScrollReveal className="lg:col-span-5">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-ember-400 mb-4 flex items-center gap-2">
                <Flame weight="fill" className="w-3.5 h-3.5" />
                / Get In Touch
              </p>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase leading-[0.9] text-cream mb-8">
                Book a table.
                <br />
                <span className="italic font-display text-blaze-400">Book the room.</span>
                <br />
                <span className="text-ember-500">Come say hi.</span>
              </h2>
              <p className="text-lg text-cream/60 leading-relaxed mb-10 max-w-md">
                Want a table for the weekend? Planning a birthday? Chasing a band
                spot? Drop us a line below — or message the Facebook page, we&rsquo;re
                quick on there too.
              </p>

              {/* Contact blocks */}
              <ContactBlocks />
            </ScrollReveal>

            <ScrollReveal delay={100} className="lg:col-span-7">
              <div className="relative">
                <div className="bg-noir-900 border border-noir-700 rounded-sm p-6 md:p-10">
                  <div className="flex items-center gap-2 mb-6 pb-6 border-b border-noir-700">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-ember-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-blaze-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-electric-500" />
                    </div>
                    <span className="ml-auto text-xs font-mono uppercase tracking-widest text-cream/40">
                      enquiry.form
                    </span>
                  </div>
                  <ContactForm />
                </div>

                <div
                  className="hidden md:block absolute -bottom-3 -right-3 w-24 h-24 bg-ember-500 rounded-sm -z-10"
                  aria-hidden
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ FOOTER ═══════════════════════════════════════ */}
      <footer className="relative py-16 bg-noir-950 border-t border-ember-500/20 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #F5ECE1 0 1px, transparent 1px 36px)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 pb-12 border-b border-noir-800">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2.5 mb-4">
                <Flame
                  weight="fill"
                  className="w-6 h-6 text-ember-500 animate-flicker"
                />
                <span className="font-heading text-2xl tracking-wider text-cream uppercase">
                  Rock <span className="text-ember-500">N</span> Soul Suite
                </span>
              </div>
              <p className="text-cream/50 text-sm leading-relaxed max-w-sm">
                Wrexham&rsquo;s live music bar. Proper drinks, real bands, late
                nights, and a stage that knows how to behave itself on a Saturday.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://www.facebook.com/rns-suite.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 flex items-center justify-center rounded-sm bg-noir-800 text-ember-400 hover:bg-ember-500 hover:text-noir-950 transition-colors"
                >
                  <FacebookLogo weight="fill" className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 flex items-center justify-center rounded-sm bg-noir-800 text-ember-400 hover:bg-ember-500 hover:text-noir-950 transition-colors"
                >
                  <InstagramLogo weight="fill" className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 md:col-start-7">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-ember-400 mb-4">
                The Suite
              </p>
              <ul className="space-y-2 text-sm text-cream/60">
                <li><a href="#whats-on" className="hover:text-ember-400 transition-colors">What&rsquo;s On</a></li>
                <li><a href="#services" className="hover:text-ember-400 transition-colors">The Bar</a></li>
                <li><a href="#about" className="hover:text-ember-400 transition-colors">The Story</a></li>
                <li><a href="#contact" className="hover:text-ember-400 transition-colors">Book a Table</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-ember-400 mb-4">
                Find Us
              </p>
              <ul className="space-y-2 text-sm text-cream/60">
                <li>15&ndash;17 Hill Street</li>
                <li>Wrexham, LL11 1SN</li>
                <li>Thu&ndash;Sun, open late</li>
                <li>Private hire by request</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-cream/40 text-xs font-mono uppercase tracking-widest">
              © {new Date().getFullYear()} Rock N Soul Suite · Wrexham
            </p>
            <a
              href="https://zcubed.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cream/40 text-xs font-mono uppercase tracking-widest hover:text-ember-400 transition-colors"
            >
              Site by Z Cubed Digital
              <ArrowUpRight weight="bold" className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
