import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function FloatingActions() {
  return (
    <>
      {/* Mobile Sticky Call Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-3 flex gap-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <a 
          href={`tel:${CLINIC_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-2 bg-navy-900 text-white py-3 rounded-xl font-bold text-sm"
        >
          <Phone size={18} />
          Call Now
        </a>
        <a 
          href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>

      {/* Desktop Floating WhatsApp */}
      <a 
        href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 z-40 bg-emerald-500 text-white p-4 rounded-full shadow-lg hover:bg-emerald-600 transition-all hover:scale-110 group items-center gap-2"
        aria-label="Chat on WhatsApp"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-medium whitespace-nowrap">
          Chat with us
        </span>
        <MessageCircle size={24} />
      </a>
    </>
  );
}
