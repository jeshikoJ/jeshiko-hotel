import React from 'react';
import { motion } from 'framer-motion';

const Amenities = () => {
  return (
    <section className="py-24 bg-ink text-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold tracking-[0.2em] text-sm uppercase font-semibold mb-4 block">Experiences</span>
            <h2 className="text-4xl md:text-6xl font-display mb-8 leading-tight">Elevate Your <br/><span className="italic font-light text-gold-light">Senses</span></h2>
            <p className="text-sand/80 font-light leading-relaxed mb-8 max-w-lg">
              Indulge in world-class culinary creations, rejuvenate your spirit at our award-winning spa, or simply lounge by the infinity pool overlooking the horizon. Every moment here is crafted for your utmost pleasure.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'The Azure Spa', desc: 'Holistic wellness treatments rooted in ancient traditions.' },
                { title: 'Symphony Dining', desc: 'Michelin-starred gastronomy featuring local, seasonal ingredients.' },
                { title: 'Infinity Lounge', desc: 'Sip signature cocktails as the sun dips below the ocean.' }
              ].map((item, i) => (
                <div key={i} className="border-t border-sand/20 pt-4">
                  <h3 className="text-xl font-display mb-2">{item.title}</h3>
                  <p className="text-sm text-sand/60 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop" 
              alt="Spa" 
              className="absolute inset-0 w-full h-full object-cover rounded-sm"
            />
            
            {/* Floating Glass Element */}
            <motion.div 
              initial={{ y: 20 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 glass-panel-dark p-6 rounded-sm max-w-xs hidden md:block"
            >
              <h4 className="font-display text-2xl text-gold-light mb-2">Wellness & Balance</h4>
              <p className="text-xs text-sand/80 font-light leading-relaxed">
                Discover a state of profound relaxation at our sanctuary, where time stands still.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
