import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Menu, X, Sun, Moon, Phone, MessageCircle } from 'lucide-react';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? theme === 'dark'
              ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900/50 shadow-lg py-3'
              : 'bg-white/95 backdrop-blur-md border-b border-nude-200/50 shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex flex-col group">
              <span className="text-2xl md:text-3xl font-serif font-bold tracking-wider text-zinc-900 dark:text-white transition-colors duration-300">
                EXPRESSIONS
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.25em] text-gold-500 dark:text-gold-400 font-sans uppercase font-medium -mt-1 group-hover:text-gold-600 transition-colors duration-300">
                Beauty Bar
              </span>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="font-sans text-xs uppercase tracking-widest text-zinc-600 hover:text-gold-500 dark:text-zinc-300 dark:hover:text-gold-300 font-medium transition-colors duration-300 cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Action Group */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                id="theme-toggle-desktop"
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 dark:text-zinc-400 transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Call Button */}
              <a
                id="call-now-nav"
                href="tel:+923049125728"
                className="flex items-center space-x-2 text-xs font-sans tracking-widest uppercase border border-gold-300 hover:border-gold-500 dark:border-gold-500 dark:hover:border-gold-300 text-gold-600 dark:text-gold-400 px-4 py-2 rounded-full transition-all duration-300"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>

              {/* Quick Book Button */}
              <button
                id="quick-book-nav"
                onClick={() => handleLinkClick('#booking')}
                className="bg-gold-500 hover:bg-gold-600 dark:bg-gold-400 dark:hover:bg-gold-500 text-white dark:text-zinc-950 text-xs font-sans font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-gold-500/10 cursor-pointer hover:scale-105"
              >
                Book Slot
              </button>
            </div>

            {/* Mobile Actions (Mobile only) */}
            <div className="flex lg:hidden items-center space-x-3">
              {/* Theme Toggle (Mobile) */}
              <button
                id="theme-toggle-mobile"
                onClick={toggleTheme}
                className="p-1.5 rounded-full text-zinc-500 dark:text-zinc-400"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                id="mobile-menu-trigger"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 text-zinc-900 dark:text-white"
                aria-label="Open menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-[60px] left-0 w-full z-40 lg:hidden shadow-xl border-b ${
              theme === 'dark'
                ? 'bg-zinc-950 border-zinc-900 text-white'
                : 'bg-white border-nude-100 text-zinc-900'
            }`}
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.href)}
                    className="text-left font-sans text-xs uppercase tracking-widest text-zinc-600 hover:text-gold-500 dark:text-zinc-300 dark:hover:text-gold-300 py-2.5 border-b border-zinc-100 dark:border-zinc-900 font-medium transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  id="mobile-call-btn"
                  href="tel:+923049125728"
                  className="flex-1 flex items-center justify-center space-x-2 text-xs font-sans tracking-widest uppercase border border-gold-400 text-gold-600 dark:text-gold-400 py-3 rounded-full"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +92 304 9125728</span>
                </a>

                <button
                  id="mobile-book-btn"
                  onClick={() => handleLinkClick('#booking')}
                  className="flex-1 bg-gold-500 text-white text-xs font-sans font-semibold tracking-widest uppercase py-3 rounded-full shadow-md text-center cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
