import React, { useState, useEffect } from 'react';
import { SALON_SERVICES } from '../data';
import { Appointment } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle, AlertCircle, Trash2, Send, MessageCircle } from 'lucide-react';

interface BookingFormProps {
  preselectedServiceId: string;
  preselectedServiceName: string;
  onClearPreselection: () => void;
}

export default function BookingForm({ preselectedServiceId, preselectedServiceName, onClearPreselection }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceId: '',
    date: '',
    time: '',
    message: '',
  });

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Pre-fill if a service was clicked from services section
  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({
        ...prev,
        serviceId: preselectedServiceId,
      }));
    }
  }, [preselectedServiceId]);

  // Load bookings from local storage
  useEffect(() => {
    const saved = localStorage.getItem('expressions-appointments');
    if (saved) {
      setAppointments(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookOnline = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name || !formData.phone || !formData.serviceId || !formData.date || !formData.time) {
      setErrorMsg('Please fill out all required fields.');
      return;
    }

    const serviceObj = SALON_SERVICES.find((s) => s.id === formData.serviceId);
    const serviceName = serviceObj ? serviceObj.name : 'Selected Treatment';

    const newAppointment: Appointment = {
      id: 'EXP-' + Math.floor(1000 + Math.random() * 9000),
      name: formData.name,
      phone: formData.phone,
      serviceId: formData.serviceId,
      serviceName: serviceName,
      date: formData.date,
      time: formData.time,
      message: formData.message,
      status: 'pending',
      createdAt: new Date().toLocaleDateString(),
    };

    const updated = [newAppointment, ...appointments];
    setAppointments(updated);
    localStorage.setItem('expressions-appointments', JSON.stringify(updated));

    setIsSuccess(true);
    onClearPreselection();

    // Reset form
    setFormData({
      name: '',
      phone: '',
      serviceId: '',
      date: '',
      time: '',
      message: '',
    });

    setTimeout(() => {
      setIsSuccess(false);
    }, 4500);
  };

  const handleBookWhatsApp = () => {
    if (!formData.name || !formData.phone || !formData.serviceId || !formData.date || !formData.time) {
      setErrorMsg('Please fill out Name, Phone, Service, Date, & Time before choosing WhatsApp booking.');
      return;
    }

    const serviceObj = SALON_SERVICES.find((s) => s.id === formData.serviceId);
    const serviceName = serviceObj ? serviceObj.name : 'Luxury Treatment';

    const text = `*Expressions Beauty Bar Booking Request*\n\n` +
                 `*Client Name:* ${formData.name}\n` +
                 `*Phone Number:* ${formData.phone}\n` +
                 `*Desired Service:* ${serviceName}\n` +
                 `*Date:* ${formData.date}\n` +
                 `*Preferred Time Slot:* ${formData.time}\n` +
                 `*Message/Note:* ${formData.message || 'None'}\n\n` +
                 `_Please confirm slot availability._`;

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/923049125728?text=${encoded}`;
    window.open(url, '_blank');
  };

  const handleDeleteBooking = (id: string) => {
    const updated = appointments.filter((app) => app.id !== id);
    setAppointments(updated);
    localStorage.setItem('expressions-appointments', JSON.stringify(updated));
  };

  return (
    <section id="booking" className="py-24 bg-white dark:bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Booking Form Layout */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3 text-left">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 dark:text-gold-400 font-sans font-semibold flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Your Luxury Slot</span>
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                Schedule Appointment
              </h2>
              <div className="w-16 h-[2px] bg-gold-400" />
              <p className="text-zinc-500 dark:text-zinc-400 font-sans font-light text-xs sm:text-sm">
                Reserve your luxury treatment securely. You can choose standard online slot reservation (tracked below) or instant live coordination via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleBookOnline} className="bg-neutral-50 dark:bg-zinc-900/40 p-6 sm:p-10 rounded-3xl border border-zinc-200/40 dark:border-zinc-800 space-y-6 text-left font-sans">
              
              {/* Success Notification */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div className="text-xs space-y-1">
                      <p className="font-bold uppercase tracking-wider">Slot Reserved Successfully!</p>
                      <p>Your booking is saved locally. We will contact you shortly to confirm. Check "Your Bookings" below.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Notification */}
              {errorMsg && (
                <div className="p-4 bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 rounded-2xl flex items-start gap-3 text-xs">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Grid 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Sana Fatima"
                    className="w-full text-sm px-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:border-gold-400 text-zinc-800 dark:text-white"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g., +92 304 9125728"
                    className="w-full text-sm px-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:border-gold-400 text-zinc-800 dark:text-white"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>Select Treatment *</span>
                  </label>
                  <select
                    required
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleChange}
                    className="w-full text-sm px-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:border-gold-400 text-zinc-700 dark:text-zinc-300"
                  >
                    <option value="">-- Choose a Beauty Service --</option>
                    {SALON_SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} (Starts: Rs. {s.startingPrice.toLocaleString()})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Selection */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full text-sm px-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:border-gold-400 text-zinc-700 dark:text-zinc-300"
                  />
                </div>

                {/* Time Selection */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Preferred Time Slot *</span>
                  </label>
                  <input
                    type="time"
                    required
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full text-sm px-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:border-gold-400 text-zinc-700 dark:text-zinc-300"
                  />
                </div>

                {/* Notes/Message */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    <span>Special Instructions / Dress Color (Optional)</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe any skin sensitivities, desired lashes style, or bridal details..."
                    className="w-full text-sm px-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:border-gold-400 text-zinc-800 dark:text-white resize-none"
                  />
                </div>

              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <button
                  id="book-form-whatsapp-btn"
                  type="button"
                  onClick={handleBookWhatsApp}
                  className="w-full py-4 border border-emerald-500 text-emerald-600 hover:bg-emerald-500/10 font-bold rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-600/10" />
                  <span>Book via WhatsApp</span>
                </button>

                <button
                  id="book-form-online-btn"
                  type="submit"
                  className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-gold-500/10"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Online Slot</span>
                </button>
              </div>

            </form>
          </div>

          {/* Client Booking History Tracker (Right column) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-zinc-50 dark:bg-zinc-900/40 p-6 sm:p-8 rounded-3xl border border-zinc-200/40 dark:border-zinc-800 text-left">
              <h3 className="text-xl font-serif font-bold text-zinc-800 dark:text-white flex items-center gap-2">
                <span>Your Appointments</span>
                {appointments.length > 0 && (
                  <span className="text-xs font-sans px-2.5 py-0.5 bg-gold-500 text-white rounded-full">
                    {appointments.length}
                  </span>
                )}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-sans mt-1 leading-relaxed font-light">
                Manage your saved salon slots. These are stored securely in your browser's Cache. Present this ID at Farid Town Stop No 6 on arrival.
              </p>

              <div className="mt-8 space-y-4 max-h-[460px] overflow-y-auto pr-1">
                {appointments.length === 0 ? (
                  <div className="py-12 text-center text-zinc-400 space-y-3 border-2 border-dashed border-zinc-200 dark:border-zinc-800/80 rounded-2xl">
                    <Calendar className="w-8 h-8 text-zinc-300 dark:text-zinc-700 mx-auto" />
                    <p className="text-xs font-sans">No pending slots booked yet.</p>
                  </div>
                ) : (
                  <AnimatePresence>
                    {appointments.map((app) => (
                      <motion.div
                        key={app.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, x: -30 }}
                        className="bg-white dark:bg-zinc-950 p-5 rounded-2xl border border-zinc-200/40 dark:border-zinc-900 flex justify-between items-start gap-4 shadow-sm"
                      >
                        <div className="space-y-2 font-sans">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-gold-500 dark:text-gold-400 bg-gold-500/10 dark:bg-gold-500/5 px-2 py-0.5 rounded-md">
                              {app.id}
                            </span>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-400">
                              PENDING SLOTS
                            </span>
                          </div>
                          
                          <h4 className="font-bold text-sm text-zinc-800 dark:text-white leading-tight">
                            {app.serviceName}
                          </h4>

                          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-zinc-500 dark:text-zinc-400 font-light">
                            <p>👤 {app.name}</p>
                            <p>📞 {app.phone}</p>
                            <p>📅 {app.date}</p>
                            <p>⏰ {app.time}</p>
                          </div>
                          {app.message && (
                            <p className="text-[11px] italic text-zinc-400 border-l border-gold-300 pl-2 mt-1">
                              "{app.message}"
                            </p>
                          )}
                        </div>

                        <button
                          id={`cancel-${app.id}`}
                          onClick={() => handleDeleteBooking(app.id)}
                          className="p-2 text-zinc-400 hover:text-rose-500 rounded-lg hover:bg-rose-500/5 transition-colors cursor-pointer"
                          title="Cancel appointment"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
