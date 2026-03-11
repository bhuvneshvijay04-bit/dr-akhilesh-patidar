import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { CLINIC_INFO, cn } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <span className={cn(
              "text-xl font-bold tracking-tight leading-none",
              scrolled ? "text-navy-900" : "text-navy-900 md:text-white"
            )}>
              {CLINIC_INFO.doctor}
            </span>
            <span className={cn(
              "text-[10px] uppercase tracking-widest mt-1 font-semibold",
              scrolled ? "text-steel-600" : "text-steel-600 md:text-slate-300"
            )}>
              {CLINIC_INFO.role}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-navy-700",
                  location.pathname === link.path 
                    ? (scrolled ? "text-navy-900 border-b-2 border-navy-900" : "text-white border-b-2 border-white")
                    : (scrolled ? "text-slate-600" : "text-slate-200")
                )}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`tel:${CLINIC_INFO.phone}`}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all",
                scrolled 
                  ? "bg-navy-900 text-white hover:bg-navy-800" 
                  : "bg-white text-navy-900 hover:bg-slate-100"
              )}
            >
              <Phone size={16} />
              {CLINIC_INFO.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md",
                scrolled ? "text-navy-900" : "text-navy-900"
              )}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium rounded-md",
                    location.pathname === link.path 
                      ? "bg-navy-50 text-navy-900" 
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a 
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-navy-900 text-white py-3 rounded-lg font-bold"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <Link 
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full border border-navy-900 text-navy-900 py-3 rounded-lg font-bold"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
