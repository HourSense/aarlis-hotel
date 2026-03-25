'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from './FadeIn';

const photoStrip = [
  { src: '/images/room-1.jpg', alt: 'Guest Room' },
  { src: '/images/restaurant-3.jpg', alt: 'Dining' },
  { src: '/images/exterior-4.jpg', alt: 'Reception' },
  { src: '/images/bar-2.jpg', alt: 'The Bar' },
];

export default function Introduction() {
  const stripRef = useRef(null);
  const stripInView = useInView(stripRef, { once: true, margin: '-60px' });

  return (
    <section className="pt-28 md:pt-36 pb-0" style={{ background: 'var(--cream)' }}>
      <div className="max-w-2xl mx-auto text-center px-6 pb-20">
        <FadeIn>
          <p className="section-label mb-8">Vignette Collection by IHG</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="font-display mb-10 leading-tight"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 300,
              letterSpacing: '0.02em',
              color: 'var(--text-primary)',
            }}
          >
            A Pocket of Peace in the Heart of Panchkula
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            className="font-body text-sm leading-relaxed mb-6"
            style={{ color: 'var(--text-secondary)', letterSpacing: '0.02em', lineHeight: '2' }}
          >
            Nestled at City Centre, Sector 3, The AARLIS Hotel sits at the meeting point of
            the Chandigarh tricity&rsquo;s urban energy and the quiet grandeur of the Shivalik
            Hills. With 145 spacious guest rooms and 11 handcrafted suites, every corner of
            the hotel reflects a singular conviction: that luxury is not loudness, but depth.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p
            className="font-body text-sm leading-relaxed mb-14"
            style={{ color: 'var(--text-secondary)', letterSpacing: '0.02em', lineHeight: '2' }}
          >
            Part of IHG&rsquo;s Vignette Collection — a family of one-of-a-kind hotels united by
            a shared commitment to authentic, purposeful hospitality — The AARLIS is minutes from
            Sukhna Lake, Chandigarh Airport, and the Kalka-Shimla Highway. It is a destination in
            itself, and a gateway to the Himalayan foothills beyond.
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="ornament-divider">
            <div className="diamond" />
          </div>
        </FadeIn>
      </div>

      {/* Photo strip */}
      <div ref={stripRef} className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: 'rgba(201,169,138,0.2)' }}>
        {photoStrip.map((photo, i) => (
          <motion.div
            key={photo.alt}
            className="relative overflow-hidden"
            style={{ height: '260px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={stripInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/15 hover:bg-black/5 transition-all duration-500" />
            <div className="absolute bottom-4 left-4">
              <span
                className="font-body text-[9px] tracking-[0.15em] uppercase text-white/70"
              >
                {photo.alt}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
