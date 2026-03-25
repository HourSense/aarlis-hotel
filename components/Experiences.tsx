'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from './FadeIn';

const experiences = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="20" rx="12" ry="6" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M4 20 Q16 10 28 20" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <circle cx="16" cy="17" r="3" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M16 8 L16 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M10 10 L8 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M22 10 L24 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Outdoor Pool',
    description: 'A sun-drenched escape above the city',
    image: null,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M16 4 C10 4 6 9 6 14 C6 20 10 24 16 28 C22 24 26 20 26 14 C26 9 22 4 16 4Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <circle cx="16" cy="15" r="4" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
    label: 'Spa & Wellness',
    description: 'Ancient traditions, modern therapies',
    image: '/images/fitness-2.jpg',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="10" width="6" height="14" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <rect x="22" y="10" width="6" height="14" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M10 17 L22 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M13 14 L13 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M19 14 L19 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Fitness Centre',
    description: 'State-of-the-art Cybex equipment',
    image: '/images/fitness-1.jpg',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M8 26 L8 12 L16 6 L24 12 L24 26" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
        <rect x="13" y="18" width="6" height="8" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <rect x="10" y="14" width="4" height="4" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <rect x="18" y="14" width="4" height="4" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
    label: 'Curated Retail',
    description: 'Handpicked boutiques within the hotel',
    image: null,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M6 22 Q10 16 16 16 Q22 16 26 22" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M4 25 Q8 14 16 14 Q24 14 28 25" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <circle cx="16" cy="10" r="3" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
    label: 'Sukhna Lake',
    description: '10 minutes from your suite',
    image: null,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M2 24 L8 14 L12 18 L16 10 L20 16 L24 8 L30 24 Z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
        <path d="M2 24 L30 24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Morni Hills',
    description: 'The Shivaliks await — day trips arranged',
    image: null,
  },
];

function ExperienceTile({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden flex flex-col items-center text-center cursor-default"
      style={{ background: 'var(--cream-light)', minHeight: '220px' }}
      whileHover={{ y: -3 }}
    >
      {/* Real photo background if available */}
      {exp.image && (
        <>
          <div className="absolute inset-0">
            <Image src={exp.image} alt={exp.label} fill className="object-cover" sizes="33vw" />
          </div>
          <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-all duration-500" />
        </>
      )}

      <div className={`relative z-10 flex flex-col items-center text-center p-8 h-full justify-center`}>
        <motion.div
          className="mb-4 transition-all duration-300"
          style={{ color: exp.image ? 'rgba(201,169,138,0.9)' : 'var(--accent-gold)' }}
        >
          {exp.icon}
        </motion.div>
        <h3
          className="font-display mb-2"
          style={{
            fontSize: '1.1rem',
            fontWeight: 400,
            color: exp.image ? 'white' : 'var(--text-primary)',
          }}
        >
          {exp.label}
        </h3>
        <p
          className="font-body"
          style={{
            fontSize: '0.72rem',
            color: exp.image ? 'rgba(255,255,255,0.7)' : 'var(--text-secondary)',
            lineHeight: '1.8',
          }}
        >
          {exp.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 md:py-32 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="section-label mb-5 text-center">Experience</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="font-display text-center mb-16"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 300,
              color: 'var(--text-primary)',
            }}
          >
            Beyond the Room
          </h2>
        </FadeIn>

        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-px"
          style={{ background: 'rgba(201,169,138,0.3)' }}
        >
          {experiences.map((exp, i) => (
            <ExperienceTile key={exp.label} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
