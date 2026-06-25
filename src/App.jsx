import { useState } from 'react';
import { ArrowUpRight, Award, Crown, X } from 'lucide-react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Projects", "Studio", "Offerings", "Inquire"];

  return (
    <div className="relative h-screen w-full overflow-hidden text-white bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
      />
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <header className="flex justify-between items-center px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
          <div className="font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
            VANGUARD
          </div>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="font-inter text-sm text-white/80 tracking-widest uppercase hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </nav>

          <a href="#inquire" className="hidden md:flex items-center gap-2 border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase hover:bg-white/10 transition-colors">
            GET IN TOUCH <ArrowUpRight className="w-4 h-4" />
          </a>

          <button className="md:hidden flex flex-col space-y-1.5 items-end group" onClick={() => setMenuOpen(true)}>
            <div className="w-6 h-0.5 bg-white transition-all"></div>
            <div className="w-6 h-0.5 bg-white transition-all"></div>
            <div className="w-4 h-0.5 bg-white transition-all group-hover:w-6"></div>
          </button>
        </header>

        {/* Hero Content */}
        <main className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 pb-20">
          
          {/* Tagline */}
          <div className="animate-fade-up flex items-center gap-2 mb-6 lg:mb-8">
            <Crown className="w-4 h-4 text-white/70" />
            <span className="text-white/70 text-xs sm:text-sm font-inter tracking-[0.3em] uppercase">World-Class Digital Collective</span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-up-delay-1 font-podium text-white uppercase leading-[0.92] tracking-tight flex flex-col text-[clamp(2.8rem,8vw,7rem)]">
            <span>Design.</span>
            <span>Disrupt.</span>
            <span>Conquer.</span>
          </h1>

          {/* Subtext */}
          <p className="animate-fade-up-delay-2 mt-6 lg:mt-8 text-white/70 text-sm sm:text-base font-inter leading-relaxed max-w-md">
            We build fierce brand identities <br/>
            that don't just turn heads -- <strong className="text-white font-semibold">they lead.</strong>
          </p>

          {/* CTA Row */}
          <div className="animate-fade-up-delay-3 mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <button className="bg-black hover:bg-neutral-900 text-white px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase flex items-center gap-2 group transition-colors">
              SEE OUR WORK 
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <div className="hidden sm:flex items-center gap-3">
              <Award className="w-8 h-8 text-white/50" />
              <div className="flex flex-col">
                <span className="text-white/60 text-xs tracking-wider uppercase">Top-Rated</span>
                <span className="text-white/60 text-xs tracking-wider uppercase">Brand Studio</span>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="animate-fade-up-delay-4 mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16">
            <div className="flex flex-col">
              <span className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">250+</span>
              <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">Brands Transformed</span>
            </div>
            <div className="flex flex-col">
              <span className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">95%</span>
              <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">Client Retention</span>
            </div>
            <div className="flex flex-col">
              <span className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">10+</span>
              <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">Years in the Game</span>
            </div>
          </div>

        </main>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col transition-all duration-500 md:hidden ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <header className="flex justify-between items-center px-6 sm:px-10 py-5">
          <div className="font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
            VANGUARD
          </div>
          <button onClick={() => setMenuOpen(false)} className="text-white p-2">
            <X className="w-8 h-8" />
          </button>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-8 px-6">
          {navLinks.map((link, i) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-podium text-4xl sm:text-5xl text-white uppercase block text-center"
              style={{
                transitionDelay: `${i * 80 + 100}ms`,
                transitionProperty: 'opacity, transform',
                transitionDuration: '500ms',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              {link}
            </a>
          ))}
          <a 
            href="#inquire"
            onClick={() => setMenuOpen(false)}
            className="mt-8 border border-white/30 px-8 py-4 text-sm tracking-widest uppercase text-white flex items-center gap-2"
            style={{
              transitionDelay: `${navLinks.length * 80 + 100}ms`,
              transitionProperty: 'opacity, transform',
              transitionDuration: '500ms',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            GET IN TOUCH <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
