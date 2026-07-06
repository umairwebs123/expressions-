import { motion } from 'motion/react';
import { Check, Sparkles, Award } from 'lucide-react';

export default function About() {
  const highlights = [
    { title: 'World-Class Beauty Standards', desc: 'Bringing premium makeup, organic therapies, and global trends to Farid Town.' },
    { title: 'Highly Sanitized & Hygienic', desc: 'All files, nail clippers, scissors, and seats are deeply sterilized after each client session.' },
    { title: 'Luxe AC Lounge Environment', desc: 'Relax in a spacious, air-conditioned, beautifully lit, and completely private salon.' },
    { title: 'Attentive & Personalized Care', desc: 'We take 15 minutes of personal consultation before doing makeup or treatments.' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-200/5 dark:bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blush-200/5 dark:bg-blush-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text and Introduction Section */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 dark:text-gold-400 font-sans font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Story & Philosophy</span>
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.2]">
                Elevating Women’s <br />
                <span className="text-gold-500 dark:text-gold-400 italic">Confidence</span> Every Single Day
              </h2>
            </div>

            <p className="text-zinc-600 dark:text-zinc-300 font-sans font-light leading-relaxed text-sm sm:text-base">
              Welcome to <strong>Expressions Beauty Bar</strong>, a premium women-owned beauty lounge situated in Sahiwal. Our mission is simple: to make every single guest experience ultimate relaxation and leave feeling completely radiant.
            </p>

            <p className="text-zinc-600 dark:text-zinc-300 font-sans font-light leading-relaxed text-sm sm:text-base">
              With custom-built lounge rooms, fully air-conditioned spaces, professional certified artists, and strict international hygiene standards, we offer a cozy oasis where your aesthetic wishes turn into stunning reality.
            </p>

            {/* Structured Value Props */}
            <div className="space-y-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gold-100 dark:bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-400">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-sans font-bold text-zinc-800 dark:text-white uppercase tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Elite Badge */}
            <div className="pt-4 flex items-center space-x-4 border-t border-zinc-200/50 dark:border-zinc-800/50">
              <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-white flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-sans font-bold text-zinc-800 dark:text-white">Premium Products Authorized</p>
                <p className="text-xs text-zinc-400">Guaranteed 100% genuine Huda Beauty, MAC, & Dermalogica</p>
              </div>
            </div>
          </div>

          {/* Luxury Visual Grid Section (Asymmetrical overlapping photos) */}
          <div className="lg:col-span-6 relative flex justify-center py-8">
            <div className="relative w-full max-w-md h-[450px] sm:h-[500px]">
              
              {/* Back card - Salon Interior */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute left-0 bottom-0 w-[65%] h-[75%] rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-zinc-800 z-10"
              >
                <img
                  src="/src/assets/images/hero_background_1783357531079.jpg"
                  alt="Expressions Beauty Bar Lounge Farid Town"
                  className="w-full h-full object-cover grayscale-[15%] hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 z-20 bg-white/95 dark:bg-zinc-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-gold-300/30">
                  <p className="text-[10px] uppercase font-sans tracking-widest text-gold-600 dark:text-gold-400 font-bold">Salon Lounge</p>
                </div>
              </motion.div>

              {/* Front card - Bridal Makeup Close-up */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute right-0 top-0 w-[65%] h-[75%] rounded-3xl overflow-hidden shadow-2xl border border-white/25 dark:border-zinc-800 z-20"
              >
                <img
                  src="/src/assets/images/bridal_makeup_1783357546644.jpg"
                  alt="Elegant Pakistani Bridal Makeup Farid Town Sahiwal"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 right-4 z-20 bg-white/95 dark:bg-zinc-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-gold-300/30">
                  <p className="text-[10px] uppercase font-sans tracking-widest text-gold-600 dark:text-gold-400 font-bold">Bridal Artistry</p>
                </div>
              </motion.div>

              {/* Tiny decorative middle badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute left-[35%] top-[40%] -translate-x-1/2 -translate-y-1/2 bg-gold-400 text-zinc-950 text-xs font-sans uppercase font-bold tracking-[0.15em] px-4 py-4 rounded-full shadow-2xl z-30 border-4 border-neutral-50 dark:border-zinc-950 flex flex-col items-center justify-center w-20 h-20 text-center"
              >
                <span>Est.</span>
                <span className="text-sm font-bold mt-0.5">2020</span>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
