import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Heart, ShieldCheck, CheckCircle } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dr. Akhilesh Patidar</h1>
            <p className="text-xl text-slate-400">
              A dedicated Physician and Critical Care Consultant committed to precise diagnosis and evidence-based medical care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/doff350cy/image/upload/v1773157524/dr-akhilesh-patidar-aboutpic_vyqrcx.jpg" 
                  alt="Dr. Akhilesh Patidar" 
                  className="w-full h-auto grayscale-[0.1]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-navy-900 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-3xl font-bold mb-1">10+ Years</div>
                <div className="text-xs uppercase tracking-widest text-slate-400">Clinical Experience</div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Education & Qualifications</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center shrink-0">
                      <Award className="text-navy-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900">MD Medicine (Mumbai)</h4>
                      <p className="text-slate-600 text-sm">Advanced medical training from prestigious institutions in Mumbai.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center shrink-0">
                      <ShieldCheck className="text-navy-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900">AFIC Certified</h4>
                      <p className="text-slate-600 text-sm">Specialized certification in critical care and advanced medical evaluation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center shrink-0">
                      <BookOpen className="text-navy-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900">MBBS</h4>
                      <p className="text-slate-600 text-sm">Foundation in medical sciences with excellence in clinical practice.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Clinical Approach</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Dr. Akhilesh Patidar follows an analytical, patient-centered, and evidence-based approach to medicine. He believes that every patient deserves a thorough diagnostic evaluation, especially those dealing with complex or chronic conditions.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Analytical Diagnosis',
                    'Patient-Centered Care',
                    'Evidence-Based Strategy',
                    'Ethical Medical Practice',
                    'Continuous Monitoring',
                    'Tertiary Care Expertise'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      <CheckCircle size={16} className="text-emerald-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-navy-900 text-white rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart size={32} />
          </div>
          <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Mission</h2>
          <p className="text-2xl text-slate-600 italic leading-relaxed">
            “To deliver precise diagnosis and responsible medical care for every patient, ensuring that complex health concerns are addressed with expertise and empathy.”
          </p>
        </div>
      </section>

      {/* Hospital Association */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 rounded-3xl p-12 text-white flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Hospital Association</h2>
              <p className="text-slate-400 text-lg mb-8">
                In addition to his practice at Health Plus Clinic, Dr. Akhilesh Patidar serves as a Consultant at <strong>Shalby Hospital</strong>, bringing tertiary-level expertise to his clinic patients.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/10 text-sm font-bold">
                  Critical Care Consultant
                </div>
                <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/10 text-sm font-bold">
                  Internal Medicine Specialist
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-8">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80" 
                  alt="Shalby Hospital" 
                  className="w-full h-auto opacity-50 grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
