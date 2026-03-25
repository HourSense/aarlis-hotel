'use client';

import FadeIn from './FadeIn';

export default function IHGRewards() {
  return (
    <section
      className="py-16 px-6"
      style={{
        background: 'var(--cream)',
        borderTop: '1px solid rgba(201,169,138,0.25)',
        borderBottom: '1px solid rgba(201,169,138,0.25)',
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <FadeIn direction="left">
          <div>
            <p className="section-label mb-2">IHG One Rewards</p>
            <h3
              className="font-display mb-2"
              style={{ fontSize: '1.6rem', fontWeight: 300, color: 'var(--text-primary)' }}
            >
              Earn Points. Unlock Experiences.
            </h3>
            <p
              className="font-body text-sm"
              style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: '1.9' }}
            >
              Every stay at The AARLIS earns IHG One Rewards points redeemable at over
              6,000 hotels worldwide. Members enjoy exclusive rates, early check-in, and
              personalised recognition.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.15}>
          <div className="flex-shrink-0 flex flex-col items-start md:items-end gap-4">
            <button
              className="font-body text-[10px] tracking-[0.18em] uppercase px-8 py-3.5 transition-all hover:opacity-80"
              style={{ background: 'var(--accent)', color: 'white' }}
            >
              Join IHG One Rewards
            </button>
            <p
              className="font-body text-[9px] tracking-wider"
              style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em' }}
            >
              Part of IHG Hotels &amp; Resorts · 6,000+ properties worldwide
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
