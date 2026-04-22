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
          <span>Wrexham, LL13</span>
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

      {/* ═══════════════════════════════════════ WHAT'S ON ═══════════════════════════════════════ */}
      <section id="whats-on" className="relative py-24 md:py-32 bg-noir-900 overflow-hidden">
        <div aria-hidden className="absolute inset-0 smoke-texture pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-6">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-ember-400 mb-4 flex items-center gap-2">
                  <Lightning weight="fill" className="w-3.5 h-3.5" />
                  / This Week
                </p>
                <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-wide leading-[0.9] uppercase text-cream">
                  What&rsquo;s <span className="text-ember-500">on</span>
                  <br />
                  <span className="italic font-display text-blaze-400">the bill.</span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 lg:pt-4">
                <p className="text-lg text-cream/60 leading-relaxed">
                  Seven nights, never the same twice. From Thursday karaoke riots to
                  Saturday live bands and Sunday soul sessions — there&rsquo;s always
                  a reason to walk through the door.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                day: 'Thursday',
                title: 'Karaoke Riot',
                time: '9pm — late',
                desc: 'Grab the mic or grab a drink. Either way, you&rsquo;re in.',
                accent: 'ember',
              },
              {
                day: 'Friday',
                title: 'Live Band Night',
                time: '9:30pm',
                desc: 'Rock covers, original acts, full PA. The room moves.',
                accent: 'blaze',
              },
              {
                day: 'Saturday',
                title: 'The Main Event',
                time: '10pm — late',
                desc: 'Our biggest live night. Book a table — it fills fast.',
                accent: 'ember',
              },
              {
                day: 'Sunday',
                title: 'Soul Sessions',
                time: '7pm',
                desc: 'Motown, R&B, classic soul. Slower pace, same quality drinks.',
                accent: 'blaze',
              },
              {
                day: 'Midweek',
                title: 'Open Mic',
                time: 'Tues 8pm',
                desc: 'Singers, players, songwriters — sign up, bring the house.',
                accent: 'ember',
              },
              {
                day: 'Any Night',
                title: 'Private Hire',
                time: 'By arrangement',
                desc: 'Birthdays, stag dos, work parties, wakes. Your night, our room.',
                accent: 'blaze',
              },
            ].map((ev, i) => (
              <ScrollReveal key={ev.title} delay={i * 60}>
                <div
                  className={`group relative h-full bg-noir-800 border border-noir-700 rounded-sm p-7 hover:border-ember-500/60 transition-all overflow-hidden`}
                >
                  {/* Corner flame accent */}
                  <div
                    aria-hidden
                    className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity ${
                      ev.accent === 'ember' ? 'bg-ember-500' : 'bg-blaze-500'
                    }`}
                  />

                  <div className="relative flex items-start justify-between mb-6">
                    <span
                      className={`font-mono text-xs uppercase tracking-[0.2em] ${
                        ev.accent === 'ember' ? 'text-ember-400' : 'text-blaze-400'
                      }`}
                    >
                      {ev.day}
                    </span>
                    <CalendarBlank
                      weight="duotone"
                      className={`w-5 h-5 ${
                        ev.accent === 'ember' ? 'text-ember-500' : 'text-blaze-500'
                      }`}
                    />
                  </div>

                  <h3 className="relative font-heading text-3xl md:text-4xl tracking-wide uppercase text-cream mb-3 leading-tight">
                    {ev.title}
                  </h3>

                  <p className="relative text-sm font-mono uppercase tracking-wider text-cream/50 mb-4">
                    {ev.time}
                  </p>

                  <p
                    className="relative text-cream/70 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: ev.desc }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
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
                {/* Decorative flame card — logo-inspired */}
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-ember-500/30 bg-noir-950">
                  {/* Fire gradient bg */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(ellipse at 50% 70%, rgba(225,66,32,0.45) 0%, transparent 55%), radial-gradient(ellipse at 30% 30%, rgba(226,149,31,0.25) 0%, transparent 50%), radial-gradient(ellipse at 70% 20%, rgba(42,99,236,0.15) 0%, transparent 50%)',
                    }}
                  />
                  {/* Tall thin stripes like sound bars */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(90deg, transparent 0 34px, rgba(245,236,225,0.04) 34px 36px)',
                    }}
                  />

                  {/* Big flame icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Flame
                      weight="fill"
                      className="w-56 h-56 text-ember-500/70 animate-flicker"
                      style={{
                        filter: 'drop-shadow(0 0 60px rgba(225,66,32,0.6))',
                      }}
                    />
                  </div>

                  {/* Floating caption badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-noir-950/90 backdrop-blur-sm border border-ember-500/30 rounded-sm p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Star weight="fill" className="w-4 h-4 text-blaze-400" />
                      <span className="text-xs font-mono uppercase tracking-widest text-cream/60">
                        Wrexham · Est. Locals
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
                <li>Wrexham town centre</li>
                <li>LL13 · North Wales</li>
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
