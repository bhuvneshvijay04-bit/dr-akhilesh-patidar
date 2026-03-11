import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Star, ChevronRight } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{CLINIC_INFO.doctor}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {CLINIC_INFO.qualifications}<br />
              {CLINIC_INFO.role}<br />
              {CLINIC_INFO.hospital}
            </p>
            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              <span className="ml-2 text-white text-sm font-medium">{CLINIC_INFO.rating} Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400">
                <MapPin size={20} className="text-white shrink-0" />
                <span className="text-sm">{CLINIC_INFO.address}</span>
              </li>
              <li className="flex gap-3 text-slate-400">
                <Phone size={20} className="text-white shrink-0" />
                <span className="text-sm">{CLINIC_INFO.phone}</span>
              </li>
              <li className="flex gap-3 text-slate-400">
                <Clock size={20} className="text-white shrink-0" />
                <span className="text-sm">{CLINIC_INFO.timings}</span>
              </li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="text-lg font-bold mb-6">Areas Served</h4>
            <div className="flex flex-wrap gap-2">
              {CLINIC_INFO.areasServed.map((area) => (
                <span key={area} className="bg-navy-800 px-3 py-1 rounded-full text-xs text-slate-300 border border-slate-700">
                  {area}
                </span>
              ))}
              <span className="bg-navy-800 px-3 py-1 rounded-full text-xs text-slate-300 border border-slate-700">
                Indore
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.</p>
          <p className="mt-2 text-[10px] uppercase tracking-widest">Clinical | Experienced | Reliable</p>
        </div>
      </div>
    </footer>
  );
}
