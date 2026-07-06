import { useState } from 'react';
import { SALON_FAQS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, MessageSquare, Clock, Instagram, Facebook, ChevronDown, ChevronUp, Mail, Sparkles } from 'lucide-react';

export default function ContactLocation() {
  const [activeFAQIndex, setActiveFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQIndex(activeFAQIndex === index ? null : index);
  };

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'Facebook', href: 'https://facebook.com', icon: Facebook, color: 'hover:text-blue-500' },
  ];

  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-500 dark:text-gold-400 font-sans font-semibold flex items-center justify-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us in Sahiwal</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-zinc-900 dark:text-white">
            Find Our Location
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto" />
          <p className="text-zinc-500 dark:text-zinc-400 font-sans font-light text-sm sm:text-base">
            Drop by for a premium makeup or nail session. We are situated in Sahiwal’s most elegant neighborhood.
          </p>
        </div>

        {/* Contact info + Maps Embed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left font-sans">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-zinc-800 dark:text-white">Contact & Ambiance</h3>
              
              <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light leading-relaxed">
                Expressions Beauty Bar features a dedicated secure waiting lounge, air-conditioning, custom coffee services, and elite private makeup pods.
              </p>

              {/* Specific info rows */}
              <div className="space-y-4">
                {/* Location Address */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-gold-500/10 text-gold-600 dark:text-gold-400 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-zinc-400">Salon Address</h4>
                    <p className="text-sm text-zinc-700 dark:text-zinc-200 mt-1 font-semibold leading-relaxed">
                      House no 384S, Stop No 6, Farid Town, Sahiwal, Pakistan
                    </p>
                  </div>
                </div>

                {/* Calling Phone */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-gold-500/10 text-gold-600 dark:text-gold-400 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-zinc-400">Call Support</h4>
                    <a href="tel:+923049125728" className="text-sm text-zinc-700 dark:text-zinc-200 mt-1 font-semibold hover:text-gold-500 block transition-colors">
                      +92 304 9125728
                    </a>
                  </div>
                </div>

                {/* WhatsApp Support */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-zinc-400">WhatsApp Coordinator</h4>
                    <a 
                      href="https://wa.me/923049125728" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-zinc-700 dark:text-zinc-200 mt-1 font-semibold hover:text-emerald-500 block transition-colors"
                    >
                      +92 304 9125728 (Instant Slot Confirmation)
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-gold-500/10 text-gold-600 dark:text-gold-400 rounded-xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-zinc-400">Business Hours</h4>
                    <p className="text-sm text-zinc-700 dark:text-zinc-200 mt-1 font-semibold leading-relaxed">
                      Open 24 Hours (Prior late-night reservation required)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social handles with icons */}
            <div className="border-t border-zinc-200/50 dark:border-zinc-800/50 pt-6 space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-widest text-zinc-400">Join Our Social Circle</h4>
              <div className="flex space-x-3">
                {socialLinks.map((soc) => {
                  const Icon = soc.icon;
                  return (
                    <a
                      key={soc.name}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-xl transition-all ${soc.color} hover:scale-105`}
                      aria-label={soc.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Iframe Frame */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[350px] rounded-3xl overflow-hidden shadow-xl border border-zinc-200/40 dark:border-zinc-800 relative bg-zinc-900">
            <iframe
              title="Expressions Beauty Bar Farid Town Sahiwal Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.7397701768475!2d73.08581297626966!3d30.697622874601173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b7c61bf6e32d%3A0xe5a14d5930e181ee!2sFarid%20Town%2C%20Sahiwal%2C%20Sahiwal%20District%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        {/* Collapsible FAQs Section Integrated below Maps */}
        <div className="mt-24 max-w-4xl mx-auto space-y-8 font-sans">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-gold-500 dark:text-gold-400 font-bold flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Answers to Common Queries</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 dark:text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {SALON_FAQS.map((faq, index) => {
              const isOpen = activeFAQIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-zinc-900/35 border border-zinc-200/40 dark:border-zinc-800/80 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    id={`faq-btn-${index}`}
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left text-zinc-800 dark:text-white hover:text-gold-500 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold pr-4">{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 shrink-0 text-gold-500" /> : <ChevronDown className="w-5 h-5 shrink-0" />}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-zinc-100 dark:border-zinc-800/60"
                      >
                        <div className="px-6 py-5 text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
