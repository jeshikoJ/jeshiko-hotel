import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { profile } from '../data';

export default function Hero() {
  const [typed, setTyped] = useState('');
  const full = profile.role;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(interval);
    }, 55);
    return () => clearInterval(interval);
  }, [full]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden border-b border-line-soft"
    >
      {/* Watermark name */}
      <div
        className="absolute right-0 bottom-0 select-none pointer-events-none font-display text-[28vw] leading-none"
        style={{ WebkitTextStroke: '1px #232326', color: 'transparent' }}
        aria-hidden="true"
      >
        {profile.watermark}
      </div>

      {/* Photo */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[42%] opacity-90">
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent z-10 md:bg-gradient-to-r" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40 z-10" />
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-full h-full object-cover object-top grayscale-[35%] opacity-70"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="max-w-2xl fade-up">
          <div className="flex items-center gap-3 text-gold font-mono text-xs tracking-[0.3em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full border border-gold" />
            Portfolio
          </div>

          <p className="font-head text-sm md:text-base tracking-[0.25em] uppercase text-dim mb-3">
            Welcome to
          </p>

          <h1 className="font-display text-[15vw] md:text-7xl lg:text-8xl leading-[0.95] text-paper mb-6">
            MY <span className="text-gold">UNIVERSE</span>
          </h1>

          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-gold" />
            <p className="font-mono text-sm md:text-base tracking-[0.15em] text-paper uppercase">
              {typed}
              <span className="cursor-blink text-gold">|</span>
            </p>
          </div>

          <p className="font-head text-dim text-sm md:text-base tracking-[0.05em] uppercase mb-2">
            {profile.tagline}
          </p>

          <p className="text-dim text-sm md:text-[15px] leading-relaxed max-w-md mb-10">
            {profile.blurb}
          </p>

          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 font-head text-xs tracking-[0.25em] uppercase text-gold hover:gap-3 transition-all group"
          >
            Explore
            <span className="w-8 h-px bg-gold group-hover:w-12 transition-all" />
            <ArrowDown size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
