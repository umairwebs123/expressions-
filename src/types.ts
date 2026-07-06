/**
 * Types and interfaces for Expressions Beauty Bar
 */

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  startingPrice: number; // in PKR
  duration: string; // e.g., "60 mins" or "2-3 hours"
  imageUrl: string;
  features: string[];
}

export type ServiceCategory =
  | 'Makeup'
  | 'Hair'
  | 'Nails'
  | 'Skincare'
  | 'Mehndi & Spa';

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  date: string;
  tag: string; // e.g., "Bridal Client", "Regular Customer"
}

export interface GalleryItem {
  id: string;
  title: string;
  category: ServiceCategory | 'Salon Interior';
  imageUrl: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to match Lucide icons dynamically
}

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
