'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden" id="home">
      {/* Parallax background image */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: imgY }}>
        <Image
          src="/images/hero-exterior.jpg"
          alt="The AARLIS Hotel Panchkula — Aerial View"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Layered overlays for depth + text legibility */}
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.3) 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ y: textY, opacity }}
      >
        {/* Location pill */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[10px] tracking-[0.28em] uppercase mb-6"
          style={{ color: 'rgba(201,169,138,0.9)' }}
        >
          Panchkula &nbsp;·&nbsp; Haryana &nbsp;·&nbsp; India
        </motion.p>

        {/* Hotel name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-white leading-none mb-3"
          style={{
            fontSize: 'clamp(3rem, 9vw, 8rem)',
            fontWeight: 300,
            letterSpacing: '0.08em',
            textShadow: '0 2px 40px rgba(0,0,0,0.3)',
          }}
        >
          THE AARLIS
        </motion.h1>

        {/* Brand line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="font-body uppercase tracking-[0.22em] mb-10"
          style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem' }}
        >
          Vignette Collection by IHG
        </motion.p>

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="h-px w-16" style={{ background: 'rgba(201,169,138,0.5)' }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ background: 'rgba(201,169,138,0.7)' }} />
          <div className="h-px w-16" style={{ background: 'rgba(201,169,138,0.5)' }} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="font-display italic mb-12"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 300,
            letterSpacing: '0.04em',
          }}
        >
          Stay distinctly, venture endlessly
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center gap-4 flex-wrap justify-center"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-body text-[10px] tracking-[0.18em] uppercase px-10 py-4 transition-all duration-300 hover:opacity-85"
            style={{ background: 'var(--accent)', color: 'white' }}
          >
            Book Your Stay
          </button>
          <button
            onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-body text-[10px] tracking-[0.18em] uppercase px-10 py-4 border transition-all duration-300 hover:bg-white/10"
            style={{ borderColor: 'rgba(255,255,255,0.45)', color: 'rgba(255,255,255,0.85)' }}
          >
            Explore Rooms
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.12], [1, 0]) }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} color="rgba(255,255,255,0.4)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
