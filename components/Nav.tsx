'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['Rooms', 'Dining', 'Events', 'Location', 'Contact'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-8 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(253,250,246,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(28,23,18,0.08)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-18 flex items-center justify-between py-4">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col items-start">
            <span
              className="font-display text-xl tracking-widest leading-none"
              style={{
                color: scrolled ? 'var(--text-primary)' : 'white',
                fontWeight: 400,
                letterSpacing: '0.12em',
                transition: 'color 0.4s',
              }}
            >
              THE AARLIS
            </span>
            <span
              className="font-body text-[9px] tracking-[0.18em] uppercase mt-0.5"
              style={{
                color: scrolled ? 'var(--accent-gold)' : 'rgba(255,255,255,0.65)',
                transition: 'color 0.4s',
              }}
            >
              Vignette Collection by IHG
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => handleScroll(link)}
                className="font-body text-[11px] tracking-[0.14em] uppercase transition-all duration-300 hover:opacity-60"
                style={{ color: scrolled ? 'var(--text-primary)' : 'rgba(255,255,255,0.85)' }}
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => handleScroll('contact')}
              className="font-body text-[10px] tracking-[0.14em] uppercase px-5 py-2.5 transition-all duration-300 hover:opacity-80"
              style={{
                background: 'var(--accent)',
                color: 'white',
                letterSpacing: '0.14em',
              }}
            >
              Book Now
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-px w-6"
                style={{ background: scrolled ? 'var(--text-primary)' : 'white' }}
                animate={{
                  rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                  y: menuOpen && i === 0 ? 8 : menuOpen && i === 2 ? -8 : 0,
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
                transition={{ duration: 0.25 }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center"
            style={{ background: 'rgba(28,23,18,0.97)' }}
          >
            {[...links, 'Book Now'].map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleScroll(link === 'Book Now' ? 'contact' : link)}
                className="font-display text-3xl text-white mb-6 tracking-wider hover:opacity-60 transition-opacity"
                style={{ fontWeight: 300 }}
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
