'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';
import FadeIn from './FadeIn';

const distances = [
  { place: 'Chandigarh Airport', dist: '8 km' },
  { place: 'Chandigarh Railway Station', dist: '8 km' },
  { place: 'Sukhna Lake', dist: 'Nearby' },
  { place: 'Rock Garden', dist: '10 min' },
  { place: 'Nada Sahib', dist: '15 min' },
  { place: 'Morni Hills', dist: 'Day trip' },
];

export default function Location() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="location" className="py-24 md:py-32 px-6" style={{ background: 'var(--cream-light)' }}>
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="section-label mb-5 text-center">Find Us</p>
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
            At the Centre of Everything
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start" ref={ref}>
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-start gap-3 mb-8">
              <MapPin size={16} color="var(--accent)" className="mt-1 flex-shrink-0" />
              <div>
                <p className="font-body text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                  City Centre, Sector 3
                </p>
                <p className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Panchkula, Haryana 134109, India
                </p>
              </div>
            </div>

            <div className="mb-10">
              <p
                className="font-body text-[10px] tracking-[0.18em] uppercase mb-5"
                style={{ color: 'var(--accent-gold)' }}
              >
                Getting Here
              </p>
              <div className="space-y-3">
                {distances.map((item, i) => (
                  <motion.div
                    key={item.place}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.07 }}
                    className="flex items-center justify-between py-3 border-b"
                    style={{ borderColor: 'rgba(201,169,138,0.25)' }}
                  >
                    <span className="font-body text-sm" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                      {item.place}
                    </span>
                    <span
                      className="font-body text-[10px] tracking-wider"
                      style={{ color: 'var(--accent)', fontWeight: 500 }}
                    >
                      {item.dist}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <p
              className="font-body text-xs leading-relaxed"
              style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '0.78rem' }}
            >
              Positioned on the Kalka-Shimla Highway corridor, The AARLIS offers easy access
              to Chandigarh, the hill station of Shimla, and the forested trails of Morni Hills.
              Airport transfers and curated day excursions can be arranged by our concierge.
            </p>
          </motion.div>

          {/* Right: decorative map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-80 md:h-96"
            style={{
              background: `
                radial-gradient(ellipse 60% 50% at 40% 65%, rgba(201,169,138,0.12) 0%, transparent 60%),
                linear-gradient(135deg, #EDE8E0 0%, #E2DDD4 100%)
              `,
              border: '1px solid rgba(201,169,138,0.3)',
            }}
          >
            {/* Decorative road lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320">
              {/* Roads */}
              <path d="M200 0 L200 320" stroke="rgba(201,169,138,0.3)" strokeWidth="2" strokeDasharray="8 6"/>
              <path d="M0 160 L400 160" stroke="rgba(201,169,138,0.3)" strokeWidth="2" strokeDasharray="8 6"/>
              <path d="M80 0 L80 320" stroke="rgba(201,169,138,0.15)" strokeWidth="1" strokeDasharray="4 8"/>
              <path d="M320 0 L320 320" stroke="rgba(201,169,138,0.15)" strokeWidth="1" strokeDasharray="4 8"/>
              <path d="M0 80 L400 80" stroke="rgba(201,169,138,0.15)" strokeWidth="1" strokeDasharray="4 8"/>
              <path d="M0 240 L400 240" stroke="rgba(201,169,138,0.15)" strokeWidth="1" strokeDasharray="4 8"/>
              {/* Diagonal — Kalka Shimla Highway */}
              <path d="M0 320 L160 80" stroke="rgba(139,38,53,0.2)" strokeWidth="2.5"/>
              {/* Hills silhouette top */}
              <path d="M0 60 Q60 20 120 45 Q180 70 240 30 Q300 0 360 35 Q380 45 400 30 L400 0 L0 0Z"
                fill="rgba(90,70,40,0.08)"/>
              {/* Lake shape */}
              <ellipse cx="280" cy="90" rx="40" ry="18" fill="rgba(100,160,180,0.18)" stroke="rgba(100,160,180,0.3)" strokeWidth="1"/>
              <text x="280" y="95" textAnchor="middle" fontSize="7" fill="rgba(100,140,160,0.7)" fontFamily="Montserrat">Sukhna Lake</text>
              {/* Hotel pin */}
              <circle cx="175" cy="165" r="10" fill="var(--accent)" opacity="0.9"/>
              <circle cx="175" cy="165" r="6" fill="white" opacity="0.9"/>
              <circle cx="175" cy="165" r="3" fill="var(--accent)"/>
              {/* Pulse rings */}
              <circle cx="175" cy="165" r="18" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.3">
                <animate attributeName="r" from="10" to="26" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite"/>
              </circle>
              {/* Labels */}
              <text x="175" y="192" textAnchor="middle" fontSize="7.5" fill="var(--accent)" fontFamily="Montserrat" fontWeight="500" letterSpacing="1">THE AARLIS</text>
              <text x="60" y="280" fontSize="7" fill="rgba(107,95,84,0.6)" fontFamily="Montserrat">Sector 3, Panchkula</text>
              <text x="280" y="200" fontSize="7" fill="rgba(107,95,84,0.5)" fontFamily="Montserrat">Chandigarh →</text>
              <text x="40" y="55" fontSize="7" fill="rgba(107,95,84,0.5)" fontFamily="Montserrat" transform="rotate(-30 40 55)">Shimla ↑</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
