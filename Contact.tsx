import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    const message = `New Appointment Request:
Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    
    try {
      // Still send to our API for logging/tracking if needed
      await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      // Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');
      
      setFormState('success');
      setFormData({ name: '', phone: '', date: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Even if API fails, try to redirect to WhatsApp
      window.open(whatsappUrl, '_blank');
      setFormState('success');
    }
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-navy-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact & Appointments</h1>
            <p className="text-xl text-slate-400">
              Get in touch for expert medical consultation or visit our clinic in Rau, Indore.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-8">Clinic Information</h2>
              <div className="space-y-8">
                <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Address</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{CLINIC_INFO.address}</p>
                    <a 
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CLINIC_INFO.address)}`}
                      target="_blank"
                      className="text-navy-900 text-xs font-bold underline mt-2 inline-block"
                    >
                      Get Directions on Maps
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Phone</h4>
                    <p className="text-slate-600 text-sm">{CLINIC_INFO.phone}</p>
                    <p className="text-slate-400 text-xs mt-1">Available for calls during clinic hours</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Clinic Timings</h4>
                    <p className="text-slate-600 text-sm">{CLINIC_INFO.timings}</p>
                    <p className="text-slate-400 text-xs mt-1">Thorough clinical assessment for every patient</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-900 mb-1">WhatsApp Support</h4>
                    <p className="text-emerald-700 text-sm">Quick queries and appointment requests via WhatsApp.</p>
                    <a 
                      href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                      target="_blank"
                      className="text-emerald-900 text-xs font-bold underline mt-2 inline-block"
                    >
                      Start Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">Request Received</h3>
                  <p className="text-slate-600 mb-8">
                    Thank you for reaching out. We will get back to you shortly to confirm your appointment.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="btn-primary"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-navy-900 mb-8">Book a Consultation</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase font-bold text-slate-400 tracking-widest">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase font-bold text-slate-400 tracking-widest">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="098765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold text-slate-400 tracking-widest">Preferred Date</label>
                      <input 
                        required
                        type="date" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold text-slate-400 tracking-widest">Message / Symptoms</label>
                      <textarea 
                        rows={4}
                        placeholder="Briefly describe your health concern..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>
                    <button 
                      disabled={formState === 'submitting'}
                      type="submit" 
                      className="w-full btn-primary flex items-center justify-center gap-2 py-4"
                    >
                      {formState === 'submitting' ? 'Processing...' : (
                        <>
                          Request Appointment <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-100 relative">
        <iframe 
          src="https://www.google.com/maps?q=Health%20Plus%20Clinic%20Rau%20Indore%20111%20AB%20Road&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          title="Health Plus Clinic Location"
        ></iframe>
      </section>
    </div>
  );
}
