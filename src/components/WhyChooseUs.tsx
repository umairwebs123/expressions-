import React from 'react';
import { WHY_CHOOSE_US_DATA } from '../data';
import { Sparkles, ShieldCheck, Gem, Award, Heart, Flame, Clock } from 'lucide-react';
import { motion } from 'motion/react';

// Map icon strings to components
const iconMap: Record<string, React.ComponentType<any>> = {
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Gem: Gem,
  Award: Award,
  Heart: Heart,
  Flame: Flame,
  Clock: Clock,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
      {/* Aesthetic lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-200/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-200/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-500 dark:text-gold-400 font-sans font-semibold flex items-center justify-center gap-2">
            <Award className="w-3.5 h-3.5" />
            <span>Uncompromising Quality & Standards</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-zinc-900 dark:text-white">
            Why Women Trust Expressions
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto" />
          <p className="text-zinc-500 dark:text-zinc-400 font-sans font-light text-sm sm:text-base">
            We merge global beauty standards with standard eastern warmth to bring Sahiwal its most trustworthy beauty haven.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {WHY_CHOOSE_US_DATA.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-neutral-50 dark:bg-zinc-900/40 p-8 rounded-3xl border border-zinc-200/40 dark:border-zinc-900 hover:border-gold-300 dark:hover:border-gold-800/50 hover:bg-white dark:hover:bg-zinc-900 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-2xl bg-gold-500/10 dark:bg-gold-500/5 text-gold-600 dark:text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-all duration-500 shadow-sm">
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  <h3 className="text-lg font-serif font-bold text-zinc-800 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-zinc-500 dark:text-zinc-400 font-sans text-xs leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Micro bottom bar design detail */}
                <div className="w-8 h-[2px] bg-zinc-200 dark:bg-zinc-800 group-hover:w-full group-hover:bg-gold-400 transition-all duration-500 mt-6" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
