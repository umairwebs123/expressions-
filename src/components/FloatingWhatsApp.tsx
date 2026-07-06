import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/923049125728?text=Hello%20Expressions%20Beauty%20Bar%2C%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20reserve%20an%20appointment%20or%20ask%20a%20question!`;

  return (
    <motion.a
      id="floating-whatsapp-widget"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/20 hover:bg-emerald-600 transition-colors flex items-center justify-center border border-white/20"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white/10" />
      {/* Subtle ping waves */}
      <span className="absolute inset-0 rounded-full border border-emerald-500 animate-[ping_2s_infinite_margin-1s] opacity-75 pointer-events-none" />
    </motion.a>
  );
}
