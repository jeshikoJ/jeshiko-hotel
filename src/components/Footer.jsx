import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-ink border-t border-sand/10 pt-20 pb-10 text-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-display font-semibold tracking-widest mb-6">NAMA THANN</h2>
            <p className="text-sand/60 text-sm font-light leading-relaxed">
              A luxury sanctuary offering unparalleled experiences, serene accommodations, and world-class hospitality.
            </p>
          </div>
          
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-semibold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm font-light text-sand/80">
              <li><a href="#" className="hover:text-gold transition-colors">Our Suites</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Dining</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Spa & Wellness</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-light text-sand/80">
              <li>123 Serenity Boulevard</li>
              <li>Paradise Island, 90210</li>
              <li>info@namathann.com</li>
              <li>+1 (800) 123-4567</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-semibold mb-6">Newsletter</h4>
            <p className="text-sm font-light text-sand/80 mb-4">Subscribe for exclusive offers and news.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border border-sand/20 px-4 py-2 text-sm w-full focus:outline-none focus:border-gold transition-colors"
              />
              <button className="bg-gold text-ink px-4 py-2 text-sm font-medium hover:bg-gold-light transition-colors">
                JOIN
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-sand/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-sand/50 font-light">&copy; {new Date().getFullYear()} Nama Thann Luxury Hotel. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-sand/50 font-light">
            <a href="#" className="hover:text-sand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sand transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
