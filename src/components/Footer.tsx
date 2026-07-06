import { MapPin, Phone, Clock, Heart, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 font-sans">
      
      {/* Upper Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-left">
          
          {/* Logo & Slogan Column */}
          <div className="lg:col-span-4 space-y-6">
            <button onClick={() => handleLinkClick('#home')} className="flex flex-col text-left group cursor-pointer">
              <span className="text-2xl sm:text-3xl font-serif font-bold tracking-wider text-white">
                EXPRESSIONS
              </span>
              <span className="text-xs tracking-[0.25em] text-gold-400 font-sans uppercase font-medium -mt-1 group-hover:text-gold-300 transition-all">
                Beauty Bar
              </span>
            </button>
            <p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed max-w-sm">
              Sahiwal's premium beauty bar specializing in high-definition bridal cosmetics, customized nail art extensions, holistic skincare, and luxury hair architectures.
            </p>
            <div className="flex space-x-4 text-zinc-500">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gold-400">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              {['Home', 'About', 'Services', 'Why Us', 'Gallery', 'Reviews'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleLinkClick(`#${link.toLowerCase().replace(' ', '-')}`)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Categories Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gold-400">Salon Menu</h4>
            <ul className="space-y-2.5 text-xs">
              {['Bridal Makeup Packages', 'Luxury Nail Extensions', 'Organic Hydra Facials', 'Keratin Frizz Treatments', 'Traditional Mehndi Design', 'Relaxing Head Massage'].map((srv) => (
                <li key={srv}>
                  <button
                    onClick={() => handleLinkClick('#services')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {srv}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact coordinates Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gold-400">Contact Details</h4>
            <ul className="space-y-3.5 text-xs font-light">
              <li className="flex items-start space-x-3.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                <span>House no 384S, Stop No 6, Farid Town, Sahiwal, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+923049125728" className="hover:text-white transition-colors">
                  +92 304 9125728
                </a>
              </li>
              <li className="flex items-center space-x-3.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Open 24 Hours • Prior Reservation Recommended</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Lower Copyright Row */}
      <div className="border-t border-zinc-900 bg-zinc-950/80 py-8 text-xs font-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Expressions Beauty Bar Sahiwal. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Expressions Beauty Bar</span>
          </p>
        </div>
      </div>

    </footer>
  );
}
