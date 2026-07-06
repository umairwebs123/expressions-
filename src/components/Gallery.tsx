import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ChevronLeft, ChevronRight, Instagram, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterCategories = ['All', 'Makeup', 'Hair', 'Nails', 'Skincare', 'Salon Interior'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const handleOpenLightbox = (index: number) => {
    // Find absolute index of item in filtered list
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-500 dark:text-gold-400 font-sans font-semibold flex items-center justify-center gap-2">
            <Instagram className="w-3.5 h-3.5" />
            <span>Curated Portfolio of Perfection</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-zinc-900 dark:text-white">
            Our Glamour Gallery
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto" />
          <p className="text-zinc-500 dark:text-zinc-400 font-sans font-light text-sm sm:text-base">
            Witness the breathtaking hair transformations, custom luxury nail styles, and flawless traditional bridal makeup crafted inside Sahiwal.
          </p>
        </div>

        {/* Categories Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-[11px] font-sans uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-zinc-950 dark:bg-gold-500 text-white dark:text-zinc-950 shadow-sm'
                  : 'bg-zinc-50 dark:bg-zinc-900/60 text-zinc-500 dark:text-zinc-400 hover:text-gold-500 dark:hover:text-gold-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-zinc-100 dark:border-zinc-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Elegant overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6" />

                {/* Content on hover */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  {/* Eye Frame */}
                  <div className="self-end w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/35 flex items-center justify-center text-white">
                    <Eye className="w-5 h-5" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-1 text-left">
                    <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-gold-300">
                      {item.category}
                    </span>
                    <h4 className="text-base font-serif font-bold text-white tracking-wide">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Overlay Module */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4">
            
            {/* Dark dismiss backdrop trigger */}
            <div className="absolute inset-0" onClick={handleCloseLightbox} />

            {/* Top Toolbar */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 text-white font-sans">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-gold-400 font-bold">
                  {filteredItems[lightboxIndex].category}
                </span>
                <p className="text-sm font-semibold mt-0.5">{filteredItems[lightboxIndex].title}</p>
              </div>
              <div className="flex items-center space-x-6">
                <span className="text-xs font-mono text-zinc-400">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
                <button
                  id="lightbox-close"
                  onClick={handleCloseLightbox}
                  className="p-2 hover:bg-zinc-900 rounded-full text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Main Visual Image View */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[80vh] aspect-[3/4] md:aspect-auto flex items-center justify-center z-10"
            >
              <img
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Navigation Buttons */}
            <button
              id="lightbox-prev"
              onClick={handlePrev}
              className="absolute left-4 md:left-8 p-3 bg-zinc-950/50 hover:bg-zinc-900 text-white border border-white/10 rounded-full transition-colors z-20 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              id="lightbox-next"
              onClick={handleNext}
              className="absolute right-4 md:right-8 p-3 bg-zinc-950/50 hover:bg-zinc-900 text-white border border-white/10 rounded-full transition-colors z-20 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
