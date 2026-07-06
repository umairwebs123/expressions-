import { Service, Testimonial, GalleryItem, WhyChooseUsItem, FAQItem } from './types';

// Let's use the local generated asset paths and high-quality premium CDN links
export const SALON_SERVICES: Service[] = [
  {
    id: 'bridal-makeup',
    name: 'Luxury Bridal Makeup',
    category: 'Makeup',
    description: 'Bespoke bridal look customized to perfection, featuring long-wear flawless base, HD contouring, premium lashes, and setting tailored for Pakistani weddings.',
    startingPrice: 18000,
    duration: '3 hours',
    imageUrl: '/src/assets/images/bridal_makeup_1783357546644.jpg',
    features: ['Signature HD Makeup', 'Luxury Lash Application', 'Dupatta Setting & Jewelry Styling', 'Includes complimentary premium trial']
  },
  {
    id: 'party-makeup',
    name: 'Glamour Party Makeup',
    category: 'Makeup',
    description: 'Chic, modern party makeup that matches your dress and style perfectly. Ideal for dinners, Eid, family events, and wedding guests.',
    startingPrice: 4500,
    duration: '1.5 hours',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop',
    features: ['Custom eye glam', 'Airbrush finish', 'Premium false lashes', 'Long-lasting lock-in setting spray']
  },
  {
    id: 'hair-styling',
    name: 'Premium Hair Styling',
    category: 'Hair',
    description: 'Signature blowouts, Hollywood waves, elegant bridal buns, up-dos, and braids designed by our master hair architects.',
    startingPrice: 2000,
    duration: '45 mins',
    imageUrl: '/src/assets/images/hair_styling_1783357573498.jpg',
    features: ['Deep wash & blow-dry', 'Thermal styling (curls/straightening)', 'Heat protection shields', 'Texturizing and shine spray']
  },
  {
    id: 'hair-treatment',
    name: 'Luxury Hair Treatment',
    category: 'Hair',
    description: 'Revitalize your hair with premium Keratin, Protein treatment, Botox, or Hydra therapy. Eliminates frizz and restores brilliant shine.',
    startingPrice: 8500,
    duration: '2-3 hours',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop',
    features: ['Intense protein restoration', 'Organic keratin shield', 'Scalp detox & nourishment', 'Sleek, frizz-free finish for months']
  },
  {
    id: 'nail-art',
    name: 'Luxury Nail Art & Extensions',
    category: 'Nails',
    description: 'Elevate your nails with elegant Gel/Acrylic extensions, custom high-contrast gold leaf accents, rhinestone embeddings, and 3D floral designs.',
    startingPrice: 1500,
    duration: '1 hour',
    imageUrl: '/src/assets/images/nail_art_1783357560444.jpg',
    features: ['Gel/Acrylic extensions', 'Stunning custom designs', 'Nail reinforcement & repair', 'UV non-chipping polish']
  },
  {
    id: 'mani-pedi',
    name: 'Royal Manicure & Pedicure',
    category: 'Nails',
    description: 'Soothing luxury spa care for your hands and feet. Involves gentle organic exfoliating scrubs, paraffin wax therapy, and standard shaping.',
    startingPrice: 2500,
    duration: '1.5 hours',
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=600&auto=format&fit=crop',
    features: ['Mineral sea-salt scrub', 'Nourishing clay mask', 'Relaxing hot stone massage', 'Paraffin hydrating wax treatment']
  },
  {
    id: 'facial-skincare',
    name: 'Golden Glow Facial & Skincare',
    category: 'Skincare',
    description: 'Deep hydrating facial treatments, involving organic botanical serums, charcoal detox, gold mask application, and lymphatic massage.',
    startingPrice: 3500,
    duration: '1 hour',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop',
    features: ['Hydrating steam & extraction', 'Premium gold peel-off mask', 'Fine line collagen boost', 'Lymphatic circulation face massage']
  },
  {
    id: 'waxing',
    name: 'Organic Body Waxing',
    category: 'Skincare',
    description: 'Gentle, hygienic, and smooth organic wax treatment that leaves your skin feeling incredibly soft and hair-free for weeks.',
    startingPrice: 1000,
    duration: '30 mins',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop',
    features: ['Organic sugar/honey wax', 'Sensitive skin protection formulas', 'Hygienic single-use applicators', 'Soothing lavender after-treatment lotion']
  },
  {
    id: 'mehndhi',
    name: 'Exquisite Mehndi Art',
    category: 'Mehndi & Spa',
    description: 'Beautiful traditional Pakistani, Arabic, and heavy bridal henna designs featuring fine strokes, gorgeous symmetry, and rich stain guarantees.',
    startingPrice: 1200,
    duration: '45 mins',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop',
    features: ['100% organic dark-stain henna', 'Custom Arabic, Kashee-style & Indian designs', 'Bridal forearm coverage packages', 'Intricate custom motifs']
  },
  {
    id: 'spa-relaxation',
    name: 'Spa & Relaxation Therapy',
    category: 'Mehndi & Spa',
    description: 'Unwind with custom aromatic herbal steam treatments, back & neck massages, scalp relaxation routines, and total mind-body calm.',
    startingPrice: 3900,
    duration: '1.5 hours',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
    features: ['Pure essential oils aromatherapy', 'Deep tissue back tension release', 'Hot towel facial compressions', 'Calming ambiance & herbal tea']
  }
];

export const SALON_REVIEWS: Testimonial[] = [
  {
    id: '1',
    name: 'Sana Fatima',
    rating: 5,
    review: 'The makeup here is absolutely magical. I booked my bridal makeup package at Expressions and got so many compliments. Highly professional staff and very hygienic!',
    date: '2026-06-25',
    tag: 'Bridal Client'
  },
  {
    id: '2',
    name: 'Ayesha Khan',
    rating: 5,
    review: 'Best beauty salon in Farid Town, Sahiwal. Their Hydra Facial and manicures are incredibly relaxing, and the price is very affordable compared to the luxury they offer.',
    date: '2026-07-01',
    tag: 'Regular Customer'
  },
  {
    id: '3',
    name: 'Zainab Bibi',
    rating: 5,
    review: 'Excellent service! They are open 24 hours, which helped me secure an emergency styling session late at night. The environment is fully air-conditioned and comfortable.',
    date: '2026-05-18',
    tag: 'Late Night Client'
  },
  {
    id: '4',
    name: 'Maria Batool',
    rating: 5,
    review: 'Clean and highly recommended beauty bar. Their nail art extensions are beautiful and lasted for over a month without any chips. Truly where beauty meets perfection!',
    date: '2026-07-04',
    tag: 'Nail Client'
  }
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: 'experts',
    title: 'Experienced Beauty Experts',
    description: 'Our team comprises certified makeup designers, master hair architects, and elite skincare practitioners with years of experience.',
    iconName: 'Sparkles'
  },
  {
    id: 'hygiene',
    title: 'Hygienic Environment',
    description: 'We follow stringent sanitation protocols. All tools are sterilized in medical-grade autoclaves, and single-use supplies are used where applicable.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'affordable',
    title: 'Affordable Packages',
    description: 'We believe premium beauty shouldn’t be a luxury out of reach. We offer highly competitive pricing, tailored discounts, and beautiful bridal packages.',
    iconName: 'Gem'
  },
  {
    id: 'products',
    title: 'Premium Products Only',
    description: 'We only use world-class, genuine international cosmetic brands (MAC, Huda Beauty, Kryolan, L’Oreal, and premium dermatological skincare).',
    iconName: 'Award'
  },
  {
    id: 'service',
    title: 'Friendly & Personalized Service',
    description: 'Every woman’s face, hair, and skin is unique. We provide a tailored, highly attentive consultation before any procedure to guarantee absolute satisfaction.',
    iconName: 'Heart'
  },
  {
    id: 'styles',
    title: 'Trendy & Up-To-Date Styles',
    description: 'Whether you want a classic vintage look, a modern minimalist aesthetic, or heavy traditional Pakistani glow, our artists keep up with global trends.',
    iconName: 'Flame'
  },
  {
    id: 'support',
    title: '24/7 Booking Support',
    description: 'Never worry about finding time. Book your slot online or via WhatsApp anytime. We are open 24 hours to support your schedules!',
    iconName: 'Clock'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Traditional Bridal Glow',
    category: 'Makeup',
    imageUrl: '/src/assets/images/bridal_makeup_1783357546644.jpg'
  },
  {
    id: 'g2',
    title: 'Hollywood Soft Waves',
    category: 'Hair',
    imageUrl: '/src/assets/images/hair_styling_1783357573498.jpg'
  },
  {
    id: 'g3',
    title: 'Gold-Accented Chic Extensions',
    category: 'Nails',
    imageUrl: '/src/assets/images/nail_art_1783357560444.jpg'
  },
  {
    id: 'g4',
    title: 'Flawless Glam Party Makeup',
    category: 'Makeup',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'g5',
    title: 'Dermal Hydra Facial Spa',
    category: 'Skincare',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'g6',
    title: 'Our Modern Salon Lounge',
    category: 'Salon Interior',
    imageUrl: '/src/assets/images/hero_background_1783357531079.jpg'
  },
  {
    id: 'g7',
    title: 'Symmetrical Mehndi Henna',
    category: 'Mehndi & Spa',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'g8',
    title: 'Paraffin Spa Therapy',
    category: 'Nails',
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=600&auto=format&fit=crop'
  }
];

export const SALON_FAQS: FAQItem[] = [
  {
    question: 'Where is Expressions Beauty Bar located in Sahiwal?',
    answer: 'We are located at House no 384S, Stop No 6, Farid Town, Sahiwal, Pakistan. This is a very secure, premium, and easily accessible neighborhood with ample parking.'
  },
  {
    question: 'Are you really open 24 Hours?',
    answer: 'Yes! Expressions Beauty Bar is proud to offer 24/7 services. However, late-night sessions (10:00 PM to 8:00 AM) must be pre-booked in advance via our website, call, or WhatsApp to ensure our top stylists are ready for you.'
  },
  {
    question: 'What cosmetics and skincare brands do you use?',
    answer: 'We use 100% original, authenticated premium brands like MAC, Huda Beauty, Kryolan, Anastasia Beverly Hills, L’Oreal, Olaplex, Dermalogica, and Janssen. Your skin and hair hygiene is our absolute top priority.'
  },
  {
    question: 'How does the online booking work?',
    answer: 'Simply fill out our elegant online booking form with your contact details, service, and desired date/time. The site will instantly save it under your "Booking History" tab. You can also generate a direct pre-filled WhatsApp message with one click to confirm your appointment instantly with our coordinator!'
  },
  {
    question: 'Do you offer customized group/wedding packages?',
    answer: 'Absolutely! We offer highly customized packages for brides, bridesmaids, and group makeup. Contact us directly on WhatsApp or phone (+92 304 9125728) and our salon director will provide a discounted quote.'
  }
];
