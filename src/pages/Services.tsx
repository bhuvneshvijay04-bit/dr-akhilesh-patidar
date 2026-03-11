import React from 'react';
import { motion } from 'motion/react';
import { DETAILED_SERVICES } from '../constants';
import { Stethoscope, Activity, Droplets, HeartPulse, Thermometer, ClipboardList, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  Stethoscope,
  Activity,
  Droplets,
  HeartPulse,
  Thermometer,
  ClipboardList,
  ShieldCheck
};

export default function Services() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Services Offered</h1>
            <p className="text-xl text-slate-400">
              Physician & Critical Care Consultant
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DETAILED_SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || Activity;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col gap-6 p-8 rounded-3xl border border-slate-200 hover:border-navy-900 transition-all group bg-slate-50/50"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-navy-50 flex items-center justify-center text-navy-900 shrink-0 group-hover:bg-navy-900 group-hover:text-white transition-all">
                      <Icon size={28} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h2>
                      <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-200/60">
                    <Link to="/contact" className="text-sm font-bold text-navy-900 flex items-center gap-2 hover:gap-3 transition-all">
                      Book Consultation <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Preventive Care */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Comprehensive Health Monitoring</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Proactive healthcare through preventive evaluation and continuous health surveillance. We offer structured health monitoring programs designed to support preventive care, early detection of diseases, and long-term wellness management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Preventive Care', desc: 'Early detection of potential health issues through structured screening.' },
              { title: 'Disease Surveillance', desc: 'Continuous monitoring of health parameters for long-term wellness.' },
              { title: 'Wellness Management', desc: 'Personalized strategies to maintain and improve your overall quality of life.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="text-xl font-bold text-navy-900 mb-4">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
