import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const rooms = [
  {
    title: 'Ocean View Suite',
    description: 'Awake to the sound of waves and a panoramic view of the azure sea from your private balcony.',
    price: '$450',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2940&auto=format&fit=crop',
    amenities: ['King Bed', 'Ocean View', 'Balcony', 'Free WiFi']
  },
  {
    title: 'Presidential Villa',
    description: 'The ultimate luxury experience with a private pool, dedicated butler, and expansive living spaces.',
    price: '$1200',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2940&auto=format&fit=crop',
    amenities: ['Private Pool', 'Butler', '2 Bedrooms', 'Lounge']
  },
  {
    title: 'Garden Retreat',
    description: 'Nestled in lush tropical foliage, perfect for nature lovers seeking peace and privacy.',
    price: '$350',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2874&auto=format&fit=crop',
    amenities: ['Queen Bed', 'Garden Access', 'Bathtub', 'Mini Bar']
  }
];

const Rooms = () => {
  return (
    <section className="py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold tracking-[0.2em] text-sm uppercase font-semibold mb-4 block">Accommodations</span>
          <h2 className="text-4xl md:text-5xl font-display text-ink mb-6">Signature Suites</h2>
          <p className="text-ink-light max-w-2xl mx-auto font-light leading-relaxed">
            Every room at Nama Thann is a masterpiece of design, offering an unparalleled blend of comfort, elegance, and breathtaking views.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden relative h-96 mb-6 rounded-sm">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-end mb-3">
                <h3 className="text-2xl font-display text-ink">{room.title}</h3>
                <span className="text-gold font-medium">{room.price} <span className="text-sm text-ink-light font-light">/ night</span></span>
              </div>
              <p className="text-ink-light text-sm leading-relaxed mb-4 font-light">
                {room.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {room.amenities.map((amenity, i) => (
                  <span key={i} className="text-xs text-ink-light border border-ink/10 px-2 py-1 rounded-sm">
                    {amenity}
                  </span>
                ))}
              </div>

              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-ink group-hover:text-gold transition-colors">
                EXPLORE <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
