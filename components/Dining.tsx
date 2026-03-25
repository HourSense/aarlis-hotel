'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import FadeIn from './FadeIn';

const mainVenues = [
  {
    name: 'Cafe G',
    subtitle: 'The Signature Restaurant',
    description:
      'Our all-day dining destination. Authentic dishes from international food traditions — reimagined with produce sourced from the fertile plains of Haryana. Every plate tells a story of craft, season, and place.',
    image: '/images/restaurant-1.jpg',
    hours: 'Open daily · 7am – 11pm',
    flip: false,
  },
  {
    name: 'The Lobby Lounge',
    subtitle: 'All-Day Lounge & Bar',
    description:
      'Artisanal teas, handcrafted cocktails, and light bites served in an atmosphere of quiet refinement. Where business conversations happen, and unhurried afternoons find their rhythm.',
    image: '/images/bar-1.jpg',
    hours: 'Open daily · 11am – midnight',
    flip: true,
  },
];

const secondaryVenues = [
  {
    name: 'Private Dining',
    image: '/images/restaurant-2.jpg',
    description: 'Intimate celebrations and executive gatherings in an exclusively yours setting. Our culinary team crafts bespoke menus for every occasion.',
  },
  {
    name: 'The Bar',
    image: '/images/bar-2.jpg',
    description: 'An evening ritual. Single malts, curated wines, and house-crafted cocktails inspired by the botanicals of the Shivalik foothills.',
  },
];

function MainVenue({ venue, index }: { venue: typeof mainVenues[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.9, delay: 0.1 }}
      className={`grid grid-cols-1 md:grid-cols-2 ${venue.flip ? 'md:[direction:rtl]' : ''}`}
    >
      {/* Image */}
      <motion.div
        initial={{ x: venue.flip ? 60 : -60, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-80 md:h-[480px] overflow-hidden"
        style={{ direction: 'ltr' }}
      >
        <Image
          src={venue.image}
          alt={venue.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ x: venue.flip ? -60 : 60, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col justify-center px-10 md:px-16 py-12"
        style={{ background: 'var(--cream-light)', direction: 'ltr' }}
      >
        <p className="section-label mb-4">{venue.subtitle}</p>
        <h3
          className="font-display mb-5"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, color: 'var(--text-primary)' }}
        >
          {venue.name}
        </h3>
        <p
          className="font-body text-sm leading-relaxed mb-8"
          style={{ color: 'var(--text-secondary)', lineHeight: '2', fontSize: '0.8rem' }}
        >
          {venue.description}
        </p>
        <p
          className="font-body text-[9px] tracking-[0.18em] uppercase mb-6"
          style={{ color: 'var(--accent-gold)' }}
        >
          {venue.hours}
        </p>
        <button
          className="font-body text-[10px] tracking-[0.18em] uppercase self-start border-b pb-0.5 transition-all hover:opacity-50"
          style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}
        >
          View Menu
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function Dining() {
  return (
    <section id="dining" className="py-24 md:py-32" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <FadeIn>
          <p className="section-label mb-5 text-center">Dine</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="font-display text-center"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 300,
              letterSpacing: '0.02em',
              color: 'var(--text-primary)',
            }}
          >
            Four Distinct Venues. One Culinary Philosophy.
          </h2>
        </FadeIn>
      </div>

      {/* Main venues */}
      <div className="overflow-hidden">
        {mainVenues.map((venue, i) => (
          <MainVenue key={venue.name} venue={venue} index={i} />
        ))}
      </div>

      {/* Secondary venues */}
      <div className="max-w-7xl mx-auto px-6 mt-2 grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: 'rgba(201,169,138,0.3)' }}>
        {secondaryVenues.map((venue, i) => (
          <FadeIn key={venue.name} delay={i * 0.1}>
            <div className="flex gap-0 flex-col" style={{ background: 'var(--cream)' }}>
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="font-display text-white text-xl" style={{ fontWeight: 400 }}>{venue.name}</h3>
                </div>
              </div>
              <div className="p-8">
                <p
                  className="font-body text-sm"
                  style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '0.8rem' }}
                >
                  {venue.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
