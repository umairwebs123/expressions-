import { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  // Shared state to allow services section to pre-fill the booking dropdown
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [selectedServiceName, setSelectedServiceName] = useState('');

  const handleSelectService = (serviceName: string, serviceId: string) => {
    setSelectedServiceId(serviceId);
    setSelectedServiceName(serviceName);
  };

  const handleClearPreselection = () => {
    setSelectedServiceId('');
    setSelectedServiceName('');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col justify-between overflow-x-hidden antialiased">
        {/* Navigation Head */}
        <Header />

        {/* Core Main Content Body */}
        <main className="flex-1">
          {/* Hero Slider & Showcase Banner */}
          <Hero />

          {/* Sahiwal Salon Intro & Overlay Gallery */}
          <About />

          {/* Tabbed Salon Services Menu */}
          <Services onSelectService={handleSelectService} />

          {/* Premium Quality Standard Points */}
          <WhyChooseUs />

          {/* Instagram Portfolio & Lightbox Viewer */}
          <Gallery />

          {/* Custom Testimonials & Guest Reviews */}
          <Reviews />

          {/* Appointment Scheduling Engine */}
          <BookingForm
            preselectedServiceId={selectedServiceId}
            preselectedServiceName={selectedServiceName}
            onClearPreselection={handleClearPreselection}
          />

          {/* Embedded Map, Coordinates & FAQ */}
          <ContactLocation />
        </main>

        {/* Footer Coordinate Information */}
        <Footer />

        {/* Floating WhatsApp Quick Support Action */}
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
}
