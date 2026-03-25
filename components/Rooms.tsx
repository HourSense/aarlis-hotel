'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from './FadeIn';

const rooms = [
  {
    name: 'Deluxe Room',
    description: "Spacious retreats with warm timber millwork, 32\" LCD TV, executive desk, and sweeping views over Panchkula's skyline.",
    image: '/images/room-1.jpg',
    detail: '134 rooms',
  },
  {
    name: 'Executive Suite',
    description: 'Elevated living with a separate lounge, premium bath amenities, dual telephone lines, and personalised service throughout.',
    image: '/images/room-2.jpg',
    detail: '11 suites',
  },
  {
    name: 'Superior Room',
    description: 'Refined comfort with contemporary furnishings, glass-panel bathroom, plush bedding, and complimentary high-speed Wi-Fi.',
    image: '/images/room-3.jpg',
    detail: 'From ₹ on request',
  },
];

function RoomCard({ room, index }: { room: typeof rooms[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col"
      style={{ background: 'var(--cream-light)' }}
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <motion.div className="absolute inset-0" whileHover={{ scale: 1.05 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <Image
            src={room.image}
            alt={room.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
        <div className="absolute bottom-4 right-4">
          <span
            className="font-body text-[9px] tracking-[0.18em] uppercase px-3 py-1.5"
            style={{
              background: 'rgba(0,0,0,0.45)',
              backdropFilter: 'blur(8px)',
              color: 'rgba(255,255,255,0.85)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            {room.detail}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <h3
          className="font-display mb-3"
          style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--text-primary)' }}
        >
          {room.name}
        </h3>
        <p
          className="font-body text-sm leading-relaxed flex-1 mb-6"
          style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '0.8rem' }}
        >
          {room.description}
        </p>
        <button
          className="font-body text-[10px] tracking-[0.18em] uppercase self-start border-b pb-0.5 transition-all duration-300 hover:opacity-50"
          style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}
        >
          Enquire
        </button>
      </div>
    </motion.div>
  );
}

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 md:py-32 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="section-label mb-5 text-center">Stay</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="font-display text-center mb-16"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 300,
              letterSpacing: '0.02em',
              color: 'var(--text-primary)',
            }}
          >
            145 Rooms. 11 Suites. All Extraordinary.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'rgba(201,169,138,0.3)' }}>
          {rooms.map((room, i) => (
            <RoomCard key={room.name} room={room} index={i} />
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <p
              className="font-body text-xs tracking-wider"
              style={{ color: 'var(--text-secondary)', letterSpacing: '0.08em' }}
            >
              All rooms feature complimentary high-speed Wi-Fi · 32&quot; LCD TV · Electronic safe · Premium toiletries · Daily water replenishment
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
