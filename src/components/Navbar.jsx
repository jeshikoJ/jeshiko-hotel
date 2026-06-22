import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Rooms & Suites', 'Dining', 'Spa & Wellness', 'Experiences'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className={`text-2xl font-display font-semibold tracking-wider ${scrolled ? 'text-ink' : 'text-white'}`}>
            NAMA THANN
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link} href="#" className={`text-sm tracking-wide transition-colors ${scrolled ? 'text-ink hover:text-gold' : 'text-white/90 hover:text-white'}`}>
              {link}
            </a>
          ))}
          <button className="bg-gold text-white px-6 py-2 rounded-sm text-sm tracking-wider font-medium hover:bg-gold-light hover:text-ink transition-colors">
            BOOK NOW
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-ink' : 'text-white'} /> : <Menu className={scrolled ? 'text-ink' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass-panel flex flex-col items-center py-6 gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-ink text-lg font-display">
              {link}
            </a>
          ))}
          <button className="bg-gold text-white px-8 py-3 rounded-sm tracking-widest font-medium mt-4">
            BOOK NOW
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
