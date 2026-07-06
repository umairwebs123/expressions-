import React, { useState, useEffect } from 'react';
import { SALON_REVIEWS } from '../data';
import { Testimonial } from '../types';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare, CheckCircle, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Reviews() {
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, review: '', tag: 'Regular Customer' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load reviews on mount
  useEffect(() => {
    const local = localStorage.getItem('expressions-reviews');
    if (local) {
      setReviews(JSON.parse(local));
    } else {
      setReviews(SALON_REVIEWS);
    }
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto scroll testimonials
  useEffect(() => {
    if (isFormOpen || reviews.length === 0) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isFormOpen, reviews.length]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.review) return;

    const submittedReview: Testimonial = {
      id: Date.now().toString(),
      name: newReview.name,
      rating: newReview.rating,
      review: newReview.review,
      date: new Date().toISOString().split('T')[0],
      tag: newReview.tag,
    };

    const updatedReviews = [submittedReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('expressions-reviews', JSON.stringify(updatedReviews));
    setIsSubmitted(true);
    setCurrentIndex(0); // View the newly added review first

    setTimeout(() => {
      setIsSubmitted(false);
      setIsFormOpen(false);
      setNewReview({ name: '', rating: 5, review: '', tag: 'Regular Customer' });
    }, 2500);
  };

  if (reviews.length === 0) return null;

  const activeReview = reviews[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-zinc-50 dark:bg-zinc-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-500 dark:text-gold-400 font-sans font-semibold flex items-center justify-center gap-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Words from Our Respected Guests</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-zinc-900 dark:text-white">
            Client Testimonials
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto" />
          <p className="text-zinc-500 dark:text-zinc-400 font-sans font-light text-sm sm:text-base">
            Read real feedback from women who have experienced our luxurious hair transformations, flawless bridal cosmetics, and relaxing skin rituals.
          </p>
        </div>

        {/* Carousel & Form Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Slider (Left column) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="relative min-h-[300px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800 p-8 sm:p-12 rounded-3xl shadow-xl relative w-full space-y-6"
                >
                  {/* Big quotation design mark */}
                  <Quote className="absolute right-8 top-8 w-16 h-16 text-gold-500/10 pointer-events-none" />

                  {/* Stars */}
                  <div className="flex space-x-1 text-gold-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < activeReview.rating ? 'fill-gold-500' : 'text-zinc-200 dark:text-zinc-700'}`}
                      />
                    ))}
                  </div>

                  {/* Review Quote text */}
                  <p className="text-lg sm:text-xl font-serif italic text-zinc-700 dark:text-zinc-200 leading-relaxed font-light">
                    "{activeReview.review}"
                  </p>

                  {/* Author and Metadata */}
                  <div className="flex justify-between items-center border-t border-zinc-100 dark:border-zinc-800 pt-6 font-sans">
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-zinc-800 dark:text-white">
                        {activeReview.name}
                      </h4>
                      <p className="text-xs text-gold-500 dark:text-gold-400 font-medium tracking-wide">
                        {activeReview.tag}
                      </p>
                    </div>
                    <span className="text-xs text-zinc-400 font-mono">
                      {activeReview.date}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-between items-center">
              <div className="flex space-x-3">
                <button
                  id="review-prev-btn"
                  onClick={handlePrev}
                  className="p-3 bg-white hover:bg-gold-500 dark:bg-zinc-900 dark:hover:bg-gold-500 text-zinc-600 hover:text-white dark:text-zinc-300 dark:hover:text-zinc-950 border border-zinc-200/50 dark:border-zinc-800 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  id="review-next-btn"
                  onClick={handleNext}
                  className="p-3 bg-white hover:bg-gold-500 dark:bg-zinc-900 dark:hover:bg-gold-500 text-zinc-600 hover:text-white dark:text-zinc-300 dark:hover:text-zinc-950 border border-zinc-200/50 dark:border-zinc-800 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Indicators */}
              <div className="flex space-x-1.5">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx ? 'w-6 bg-gold-500' : 'w-1.5 bg-zinc-300 dark:bg-zinc-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Guest Feedback Submission Block (Right column) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-br from-gold-100/30 to-blush-100/30 dark:from-zinc-900 dark:to-zinc-900/40 border border-gold-300/20 dark:border-zinc-800 p-8 rounded-3xl shadow-sm text-left">
              <h3 className="text-xl font-serif font-bold text-zinc-800 dark:text-white">Love Your Glow?</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-sans mt-1 leading-relaxed font-light">
                Your feedback motivates our team to maintain pristine standards in Farid Town. Share your thoughts instantly!
              </p>

              {!isFormOpen ? (
                <button
                  id="toggle-write-review"
                  onClick={() => setIsFormOpen(true)}
                  className="w-full mt-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-sans text-xs uppercase font-semibold tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-gold-500/10"
                >
                  <Plus className="w-4 h-4" />
                  <span>Write a Review</span>
                </button>
              ) : (
                <AnimatePresence>
                  <motion.form
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    onSubmit={handleSubmitReview}
                    className="mt-6 space-y-4 font-sans text-left"
                  >
                    {isSubmitted ? (
                      <div className="flex flex-col items-center justify-center py-6 text-center space-y-3">
                        <CheckCircle className="w-12 h-12 text-emerald-500" />
                        <h4 className="font-bold text-zinc-800 dark:text-white">Review Posted!</h4>
                        <p className="text-xs text-zinc-400">Thank you for sharing your Expressions experience.</p>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Your Name</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g., Sadia Imran"
                            value={newReview.name}
                            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                            className="w-full text-sm px-4 py-2.5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:border-gold-400 text-zinc-800 dark:text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Rating</label>
                          <div className="flex space-x-2 pt-1">
                            {[1, 2, 3, 4, 5].map((starVal) => (
                              <button
                                key={starVal}
                                type="button"
                                onClick={() => setNewReview({ ...newReview, rating: starVal })}
                                className="text-gold-500 hover:scale-110 transition-transform cursor-pointer"
                              >
                                <Star
                                  className={`w-6 h-6 ${
                                    starVal <= newReview.rating ? 'fill-gold-500 text-gold-500' : 'text-zinc-200 dark:text-zinc-700'
                                  }`}
                                />
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Your Feedback</label>
                          <textarea
                            required
                            rows={3}
                            placeholder="How was your bridal makeup, facial, or nails service?"
                            value={newReview.review}
                            onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                            className="w-full text-sm px-4 py-2.5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:border-gold-400 text-zinc-800 dark:text-white resize-none"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Service Tag</label>
                          <select
                            value={newReview.tag}
                            onChange={(e) => setNewReview({ ...newReview, tag: e.target.value })}
                            className="w-full text-sm px-4 py-2.5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:border-gold-400 text-zinc-700 dark:text-zinc-300"
                          >
                            <option value="Bridal Client">Bridal Client</option>
                            <option value="Regular Customer">Regular Customer</option>
                            <option value="Nail Art Client">Nail Art Client</option>
                            <option value="Hair Styling Client">Hair Styling Client</option>
                          </select>
                        </div>

                        <div className="flex gap-2 pt-2">
                          <button
                            type="button"
                            onClick={() => setIsFormOpen(false)}
                            className="flex-1 py-2.5 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs text-zinc-500 dark:text-zinc-400 font-medium tracking-wide hover:bg-zinc-100 dark:hover:bg-zinc-800"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="flex-1 py-2.5 bg-zinc-950 dark:bg-gold-500 text-white dark:text-zinc-950 font-bold rounded-xl text-xs uppercase tracking-widest hover:opacity-90"
                          >
                            Submit
                          </button>
                        </div>
                      </>
                    )}
                  </motion.form>
                </AnimatePresence>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
