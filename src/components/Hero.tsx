import { motion } from 'motion/react';
import { Sparkles, Calendar, MessageCircle, Star } from 'lucide-react';

export default function Hero() {
  const stats = [
    { value: '5.0', label: 'Google Rating', detail: '★ ★ ★ ★ ★' },
    { value: '12+', label: 'Elite Experts', detail: 'Certified Artists' },
    { value: '100%', label: 'Hygienic Care', detail: 'Sterilized Tools' },
    { value: '3,000+', label: 'Happy Clients', detail: 'Locally Trusted' },
  ];

  const handleScrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate prefilled WhatsApp URL
  const whatsappUrl = `https://wa.me/923049125728?text=Hello%20Expressions%20Beauty%20Bar%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20luxury%20salon%20session%20at%20your%20Sahiwal%20branch.`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_background_1783357531079.jpg"
          alt="Expressions Beauty Bar Luxury Interior Sahiwal"
          className="w-full h-full object-cover object-center scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
          referrerPolicy="no-referrer"
        />
        {/* Subtle blur overlay & dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent dark:from-black/95 dark:via-black/85 dark:to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/45" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24 flex flex-col justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Header */}
          <div className="lg:col-span-8 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gold-400/10 border border-gold-300/30 text-gold-300 px-4 py-1.5 rounded-full text-xs font-sans tracking-[0.2em] uppercase font-semibold backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Where Beauty Meets Perfection</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                Luxury Beauty <br />
                <span className="text-gold-300 italic">Experience</span> in Sahiwal
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-sans font-light leading-relaxed max-w-2xl">
                Professional Makeup, Hair, Nails & Skincare treatments tailored carefully to design your stunning signature look. Located in the heart of Farid Town.
              </p>
            </motion.div>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                id="hero-book-btn"
                onClick={handleScrollToBooking}
                className="flex items-center justify-center space-x-3 bg-gold-500 hover:bg-gold-600 active:scale-95 text-white font-sans text-xs sm:text-sm tracking-widest uppercase font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-gold-500/20 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <a
                id="hero-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-sans text-xs sm:text-sm tracking-widest uppercase font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Now</span>
              </a>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-xs font-sans tracking-wider uppercase text-zinc-400 font-medium"
            >
              <span className="flex items-center space-x-1">
                <Star className="w-4.5 h-4.5 fill-gold-400 text-gold-400" />
                <span className="text-white font-bold">5.0</span>
                <span>Verified Salon</span>
              </span>
              <span>•</span>
              <span>Women-Owned</span>
              <span>•</span>
              <span>Open 24 Hours</span>
            </motion.div>
          </div>

          {/* Luxury Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block lg:col-span-4"
          >
            <div className="bg-zinc-950/65 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl space-y-6">
              <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-serif font-bold text-gold-300">Exclusive Offer</h3>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">Bridal & Party Glow</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-300 text-sm">Bridal HD Makeup</span>
                  <span className="text-gold-200 font-semibold font-mono text-sm">Rs. 18,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-300 text-sm">Gold Glow Facial</span>
                  <span className="text-gold-200 font-semibold font-mono text-sm">Rs. 3,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-300 text-sm">Luxury Gel Nails</span>
                  <span className="text-gold-200 font-semibold font-mono text-sm">Rs. 1,500</span>
                </div>
              </div>
              <button
                id="hero-floating-book"
                onClick={handleScrollToBooking}
                className="w-full py-3 bg-white hover:bg-gold-100 text-zinc-950 font-sans font-semibold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 cursor-pointer text-center"
              >
                Inquire Packages
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/10 pt-10"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1 text-left">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl md:text-4xl font-serif font-bold text-gold-300 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-gold-400 font-mono tracking-tighter">
                  {stat.detail}
                </span>
              </div>
              <p className="text-xs font-sans uppercase tracking-widest text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Aesthetic bottom shadow transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none z-10" />
    </section>
  );
}
