'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', dates: '', message: '' });

  return (
    <section id="contact" className="py-24 md:py-32 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="section-label mb-5 text-center">Contact</p>
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
            Begin Your Story
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: form */}
          <FadeIn direction="left" delay={0.15}>
            <form className="flex flex-col gap-6" onSubmit={e => e.preventDefault()}>
              {[
                { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                { id: 'dates', label: 'Preferred Dates', type: 'text', placeholder: 'e.g. 15–18 April 2026' },
              ].map((field) => (
                <div key={field.id} className="flex flex-col gap-2">
                  <label
                    className="font-body text-[9px] tracking-[0.18em] uppercase"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.id as keyof typeof form]}
                    onChange={e => setForm({ ...form, [field.id]: e.target.value })}
                    className="font-body text-sm py-3 px-0 border-0 border-b outline-none bg-transparent transition-all duration-300 placeholder:opacity-30"
                    style={{
                      borderColor: 'rgba(201,169,138,0.4)',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(201,169,138,0.4)')}
                  />
                </div>
              ))}
              <div className="flex flex-col gap-2">
                <label
                  className="font-body text-[9px] tracking-[0.18em] uppercase"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your stay..."
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="font-body text-sm py-3 px-0 border-0 border-b outline-none bg-transparent resize-none transition-all duration-300 placeholder:opacity-30"
                  style={{
                    borderColor: 'rgba(201,169,138,0.4)',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,169,138,0.4)')}
                />
              </div>
              <motion.button
                type="submit"
                className="font-body text-[10px] tracking-[0.2em] uppercase py-4 mt-2 transition-all duration-300"
                style={{ background: 'var(--accent)', color: 'white' }}
                whileHover={{ opacity: 0.85 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Enquiry
              </motion.button>
            </form>
          </FadeIn>

          {/* Right: contact info */}
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col gap-10">
              <div>
                <p
                  className="font-body text-[9px] tracking-[0.2em] uppercase mb-4"
                  style={{ color: 'var(--accent-gold)' }}
                >
                  Address
                </p>
                <p className="font-display text-xl mb-1" style={{ color: 'var(--text-primary)', fontWeight: 400 }}>
                  The AARLIS Hotel
                </p>
                <p className="font-body text-sm" style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.9' }}>
                  City Centre, Sector 3<br />
                  Panchkula, Haryana 134109<br />
                  India
                </p>
              </div>

              <div>
                <p
                  className="font-body text-[9px] tracking-[0.2em] uppercase mb-4"
                  style={{ color: 'var(--accent-gold)' }}
                >
                  Reservations
                </p>
                <p className="font-body text-sm" style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '2' }}>
                  +91 (172) 000 0000<br />
                  reservations@theaarlis.com
                </p>
              </div>

              <div>
                <p
                  className="font-body text-[9px] tracking-[0.2em] uppercase mb-4"
                  style={{ color: 'var(--accent-gold)' }}
                >
                  Check-in / Check-out
                </p>
                <p className="font-body text-sm" style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '2' }}>
                  Check-in: 2:00 PM<br />
                  Check-out: 12:00 PM<br />
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-gold)' }}>Early / late options available on request</span>
                </p>
              </div>

              <div
                className="p-6 border-l-2"
                style={{
                  borderColor: 'var(--accent)',
                  background: 'rgba(139,38,53,0.04)',
                }}
              >
                <p
                  className="font-display italic"
                  style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 300 }}
                >
                  "Introducing Vignette Collection to India is a significant milestone. Panchkula presents the perfect landscape for our brand&rsquo;s entry."
                </p>
                <p
                  className="font-body text-[9px] tracking-wider uppercase mt-4"
                  style={{ color: 'var(--accent-gold)' }}
                >
                  — Sudeep Jain, MD South West Asia, IHG
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
