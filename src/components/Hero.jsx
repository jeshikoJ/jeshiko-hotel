import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Search } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-c6a4d1409e1c?q=80&w=2832&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 mt-16 max-w-5xl mx-auto w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white font-display mb-6 tracking-tight"
        >
          A Sanctuary of <br /> <span className="text-gold-light italic font-light">Serenity</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 font-light tracking-wide mb-12 max-w-2xl mx-auto"
        >
          Experience unparalleled luxury and tranquility at Nama Thann. Your perfect escape awaits.
        </motion.p>

        {/* Liquid Glass Booking Widget */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="glass-panel rounded-lg p-2 md:p-4 max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between"
        >
          <div className="flex-1 w-full bg-white/10 rounded px-4 py-3 flex items-center gap-3 border border-white/20">
            <Calendar className="text-gold w-5 h-5" />
            <div className="flex flex-col text-left">
              <span className="text-xs text-white/70 uppercase tracking-wider">Check In</span>
              <span className="text-white text-sm">Add Dates</span>
            </div>
          </div>
          
          <div className="flex-1 w-full bg-white/10 rounded px-4 py-3 flex items-center gap-3 border border-white/20">
            <Calendar className="text-gold w-5 h-5" />
            <div className="flex flex-col text-left">
              <span className="text-xs text-white/70 uppercase tracking-wider">Check Out</span>
              <span className="text-white text-sm">Add Dates</span>
            </div>
          </div>

          <div className="flex-1 w-full bg-white/10 rounded px-4 py-3 flex items-center gap-3 border border-white/20">
            <Users className="text-gold w-5 h-5" />
            <div className="flex flex-col text-left">
              <span className="text-xs text-white/70 uppercase tracking-wider">Guests</span>
              <span className="text-white text-sm">2 Adults, 0 Children</span>
            </div>
          </div>

          <button className="w-full md:w-auto bg-gold hover:bg-gold-light text-ink px-8 py-4 rounded font-medium tracking-widest flex items-center justify-center gap-2 transition-colors">
            <Search className="w-4 h-4" />
            CHECK
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
