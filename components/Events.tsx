'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const stats = [
  { value: '2,200+', label: 'sqm Event Space' },
  { value: '145', label: 'Guest Rooms & Suites' },
  { value: '4', label: 'Dining Venues' },
];

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.4 + index * 0.12 }}
      className="text-center px-8"
    >
      <p
        className="font-display mb-2"
        style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 300, color: 'var(--accent-gold)' }}
      >
        {stat.value}
      </p>
      <p
        className="font-body text-[10px] tracking-[0.18em] uppercase"
        style={{ color: 'rgba(201,169,138,0.6)' }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function Events() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const contentRef = useRef(null);
  const inView = useInView(contentRef, { once: true, margin: '-80px' });

  return (
    <section id="events" className="relative overflow-hidden py-28 md:py-40" ref={ref}>
      {/* Dark background with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: bgY,
          background: `
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139,38,53,0.15) 0%, transparent 70%),
            linear-gradient(135deg, #100C08 0%, #1C1712 50%, #120E0A 100%)
          `,
        }}
      />
      {/* Subtle gold grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,169,138,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,138,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center" ref={contentRef}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-body text-[10px] tracking-[0.24em] uppercase mb-8"
          style={{ color: 'var(--accent)' }}
        >
          Celebrate
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-white mb-8 leading-tight"
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 300,
            letterSpacing: '0.02em',
          }}
        >
          2,200 Square Metres
          <br />
          of Celebration
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-body text-sm leading-relaxed max-w-2xl mx-auto mb-16"
          style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '2', fontSize: '0.82rem' }}
        >
          From intimate gatherings to grand destination weddings, The AARLIS offers
          unparalleled event spaces in the Chandigarh tricity region. Our dedicated events
          team curates every detail — from floral arrangements to multi-course menus — so
          your celebration becomes a story worth telling.
        </motion.p>

        {/* Stats */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-16 divide-y md:divide-y-0 md:divide-x divide-[rgba(201,169,138,0.2)]">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <button
            className="font-body text-[10px] tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300 hover:bg-[var(--accent-gold)] hover:border-[var(--accent-gold)] hover:text-[var(--dark)]"
            style={{
              border: '1px solid var(--accent-gold)',
              color: 'var(--accent-gold)',
            }}
          >
            Plan Your Event
          </button>
        </motion.div>
      </div>
    </section>
  );
}
