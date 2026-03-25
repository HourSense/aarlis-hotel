'use client';

const cols = [
  {
    title: 'Rooms & Suites',
    links: ['Deluxe Room', 'Executive Suite', 'Presidential Suite', 'Accessibility'],
  },
  {
    title: 'Dining',
    links: ['Cafe G', 'The Lobby Lounge', 'Private Dining', 'The Bar'],
  },
  {
    title: 'Experiences',
    links: ['Outdoor Pool', 'Spa & Wellness', 'Fitness Centre', 'Weddings & Events'],
  },
  {
    title: 'Plan Your Stay',
    links: ['Book a Room', 'IHG One Rewards', 'Airport Transfers', 'Contact Us'],
  },
];

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8 px-6"
      style={{ background: '#0E0B08', borderTop: '1px solid rgba(201,169,138,0.1)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top: logo + columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-12 border-b" style={{ borderColor: 'rgba(201,169,138,0.1)' }}>
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p
              className="font-display text-white mb-1 tracking-widest"
              style={{ fontSize: '1.1rem', fontWeight: 400, letterSpacing: '0.12em' }}
            >
              THE AARLIS
            </p>
            <p
              className="font-body text-[8px] tracking-[0.16em] uppercase mb-6"
              style={{ color: 'rgba(201,169,138,0.5)' }}
            >
              Vignette Collection by IHG
            </p>
            <p
              className="font-display italic"
              style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.95rem', fontWeight: 300 }}
            >
              Stay distinctly,<br />venture endlessly.
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <p
                className="font-body text-[9px] tracking-[0.18em] uppercase mb-5"
                style={{ color: 'rgba(201,169,138,0.6)' }}
              >
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <button
                      className="font-body text-xs transition-all duration-200 hover:opacity-60 text-left"
                      style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="font-body text-[9px] tracking-wider"
            style={{ color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em' }}
          >
            © 2026 The AARLIS Hotel Panchkula. Part of IHG Hotels &amp; Resorts · Vignette Collection.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Settings'].map((item) => (
              <button
                key={item}
                className="font-body text-[9px] tracking-wider transition-opacity hover:opacity-60"
                style={{ color: 'rgba(255,255,255,0.2)' }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
