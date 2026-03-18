import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, MapPin, Calendar, Star, Award, ShieldCheck, Activity, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO, HOME_SERVICES, REVIEWS, FAQS, TRUST_SIGNALS, COMMON_CONDITIONS, HOSPITAL_INFO, GALLERY_IMAGES } from '../constants';
import { CheckCircle2, Building2, Image as ImageIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-navy-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6 border border-white/20">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>Trusted Medical Consultant</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
                Comprehensive Internal Medicine & <span className="text-slate-400">Critical Care Consultation</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-xl">
                Focused Diagnosis. Evidence-Based Treatment. Personalized Care for complex medical conditions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${CLINIC_INFO.phone}`} className="btn-primary flex items-center gap-2 bg-white text-navy-900 hover:bg-slate-100">
                  <Phone size={18} />
                  Call Now
                </a>
                <Link to="/contact" className="btn-secondary flex items-center gap-2 border-white text-white hover:bg-white/10">
                  <Calendar size={18} />
                  Book Consultation
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">5.0</span>
                  <span className="text-slate-400 text-xs uppercase tracking-widest">Google Rating</span>
                </div>
                <div className="w-px h-10 bg-slate-700"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">56+</span>
                  <span className="text-slate-400 text-xs uppercase tracking-widest">Verified Reviews</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white/5 shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/doff350cy/image/upload/v1773157516/dr-akhilesh-patidar-homepic_fbquvf.jpg" 
                  alt="Dr. Akhilesh Patidar" 
                  className="w-full h-auto grayscale-[0.1]"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-navy-700 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-slate-500 rounded-full blur-3xl opacity-20 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Highlights */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { label: 'MD Internal Medicine', sub: 'Mumbai – GGMC and Sir JJ Groups of Hospital', icon: Award },
              { label: 'AFIC Certified', sub: 'Advanced Fellowship in Intensive Care', icon: ShieldCheck },
              { label: 'Critical Care Consultant', sub: 'Specialist in ICU & Emergency Management', icon: Activity },
              { label: '5.0 Patient Rating', sub: 'Trusted by Patients', icon: Star },
              { label: 'Advanced Clinical Training', sub: 'JPNATC – AIIMS, New Delhi | P. D. Hinduja Hospital, Mumbai | Cooper Hospital, Mumbai | S. R. Mehta & Sir K. P. Cardiac Institute, Mumbai', icon: Building },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group p-6 rounded-2xl hover:bg-slate-50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-navy-50 flex items-center justify-center text-navy-900 mb-4 group-hover:bg-navy-900 group-hover:text-white transition-all">
                  <item.icon size={28} />
                </div>
                <h3 className="font-bold text-navy-900 text-lg">{item.label}</h3>
                <p className="text-slate-500 text-sm mt-2">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center text-center max-w-3xl mx-auto pt-8 border-t border-slate-100">
            <div className="inline-flex items-center gap-3 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-2xl font-bold mb-6 border border-emerald-100">
              <Star size={20} fill="currentColor" />
              <span>10+ Years Clinical Experience — Managing ICU, Emergency & Critical Care Patients</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {TRUST_SIGNALS.map((signal, i) => (
                <div key={i} className="flex items-center gap-2 text-navy-900 font-bold">
                  <CheckCircle2 size={18} className="text-emerald-600" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Conditions Treated */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Common Conditions Treated</h2>
            <p className="text-slate-600">Expert medical management for a wide range of health concerns.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {COMMON_CONDITIONS.map((condition, i) => (
              <div key={i} className="px-8 py-4 bg-white rounded-2xl shadow-sm border border-slate-200 text-navy-900 font-bold hover:border-navy-900 transition-all">
                • {condition}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-navy-900 font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 italic leading-relaxed">
              “We listen to patients carefully, analyze symptoms thoroughly, and apply medical expertise to determine the best treatment approach.”
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-slate-50 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-navy-900 mb-2">Thoughtful Diagnosis</h4>
                <p className="text-slate-600 text-sm">Going beyond surface symptoms to find the root cause.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-navy-900 mb-2">Real-time Attention</h4>
                <p className="text-slate-600 text-sm">Dedicated time for every patient evaluation.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-navy-900 mb-2">Ethical Care</h4>
                <p className="text-slate-600 text-sm">Evidence-based treatments with full transparency.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Structured Clinical Services</h2>
              <p className="text-slate-600">Specialized consultation for acute and chronic conditions with a focus on diagnostic accuracy.</p>
            </div>
            <Link to="/services" className="text-navy-900 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOME_SERVICES.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-navy-900 transition-all group"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">{service.description}</p>
                <div className="space-y-4 mb-8">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Who Should Consider This?</span>
                    <p className="text-xs text-slate-700">{service.whoNeeds}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Our Approach</span>
                    <p className="text-xs text-slate-700">{service.approach}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Expected Outcome</span>
                    <p className="text-xs text-slate-700">{service.outcome}</p>
                  </div>
                </div>
                <Link to="/contact" className="text-sm font-bold text-navy-900 flex items-center gap-2 group-hover:text-navy-700">
                  Book Consultation <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Health Monitoring Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Comprehensive Health Monitoring</h2>
            <p className="text-lg text-slate-600 mb-8 font-medium">Proactive healthcare through preventive evaluation and continuous health surveillance.</p>
            <p className="text-slate-600 leading-relaxed">
              We offer structured health monitoring programs designed to support preventive care, early detection of diseases, and long-term wellness management, ensuring sustained health and improved quality of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Dr. Akhilesh Patidar?</h2>
              <div className="space-y-8">
                {[
                  { title: '10+ Years Clinical Experience', desc: 'Managing complex medical cases in ICU and hospital settings with proven expertise.' },
                  { title: 'Advanced Medical Training', desc: 'MD Medicine from Mumbai and AFIC certification ensures high-standard clinical knowledge.' },
                  { title: 'Evidence-Based Treatment', desc: 'Treatment plans based on the latest medical guidelines and scientific evidence.' },
                  { title: 'Patient-Focused Listening', desc: 'We believe a detailed history is the first step to an accurate diagnosis.' },
                  { title: 'Thorough Clinical Assessment', desc: 'Adequate time dedicated for every patient to ensure a comprehensive medical evaluation.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-1">
                      <ShieldCheck size={14} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-navy-800 flex items-center justify-center">
                  <Star size={32} className="text-yellow-400" fill="currentColor" />
                </div>
                <div>
                  <div className="text-3xl font-bold">5.0 / 5</div>
                  <div className="text-slate-400 text-sm">Based on 56 Verified Patient Reviews</div>
                </div>
              </div>
              <div className="space-y-6">
                {REVIEWS.map((review, i) => (
                  <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/5 italic text-slate-300">
                    "{review.text}"
                    <div className="mt-3 text-xs font-bold text-white not-italic">— Verified Patient</div>
                  </div>
                ))}
              </div>
              <Link to="/reviews" className="mt-8 inline-block text-white font-bold border-b border-white/30 hover:border-white transition-all">
                Read All Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-navy-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <ImageIcon size={16} />
              <span>Image Gallery</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-md border border-slate-200"
              >
                <img 
                  src={img} 
                  alt={`Clinic Gallery ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ImageIcon size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Planning */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12 text-center">Plan Your Visit</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Clinic Section */}
            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center shrink-0">
                    <Activity size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">Clinic Consultation (Evening)</h3>
                </div>
                {CLINIC_INFO.logo && (
                  <div className="shrink-0">
                    <img 
                      src={CLINIC_INFO.logo} 
                      alt="Health Plus Clinic Logo" 
                      className="h-[72px] sm:h-[84px] w-auto object-contain max-w-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
              </div>
              
              <div className="space-y-8 flex-grow">
                <div className="flex gap-4">
                  <Clock className="text-navy-900 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-navy-900">Clinic Hours: 6:30 PM – 8:30 PM</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Ideal for working professionals and patients seeking detailed evening consultations.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <ShieldCheck className="text-navy-900 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-navy-900">Visit Duration</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Consultation time varies depending on the complexity of the medical condition to ensure a thorough evaluation and accurate diagnosis.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <MapPin className="text-navy-900 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-navy-900">Clinic Location</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      111, AB Road, Near Baba Kulfi House<br />
                      Shanti Kamal Kunj, Rau<br />
                      Indore, Madhya Pradesh – 453331
                    </p>
                    <p className="text-navy-900 font-bold mt-2">+91 97529 40244</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 h-[250px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                <iframe 
                  src="https://www.google.com/maps?q=Health%20Plus%20Clinic%20Rau%20Indore%20111%20AB%20Road&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  title="Health Plus Clinic Location"
                ></iframe>
              </div>
            </div>

            {/* Hospital Section */}
            <div className="bg-navy-900 rounded-3xl p-8 md:p-10 text-white flex flex-col">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                    <Building2 size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Hospital Consultation – Shalby Hospital</h3>
                </div>
                {HOSPITAL_INFO.logo && (
                  <div className="shrink-0">
                    <img 
                      src={HOSPITAL_INFO.logo} 
                      alt="Shalby Hospital Logo" 
                      className="h-[62px] sm:h-[73px] w-auto object-contain max-w-full bg-white/10 p-1 rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
              </div>
              
              <div className="space-y-8 flex-grow">
                <div className="flex gap-4">
                  <Clock className="text-slate-300 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Hospital Hours: 11:00 AM – 4:00 PM</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Available for hospital consultations, inpatient evaluation, and critical care expertise.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <ShieldCheck className="text-slate-300 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Clinical Expertise</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Providing tertiary-level medical care and specialist critical care opinions for hospitalized patients.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <MapPin className="text-slate-300 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Hospital Location</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Shalby Multispecialty Hospital<br />
                      R.S. Bhandari Marg, Near Janjeerwala Square<br />
                      Indore, Madhya Pradesh – 452003
                    </p>
                    <p className="text-white font-bold mt-2">+91 731-6677600</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 h-[250px] rounded-2xl overflow-hidden border border-white/10 shadow-inner opacity-80">
                <iframe 
                  src="https://www.google.com/maps?q=Shalby%20Hospital%20Indore%20Janjeerwala%20Square&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  title="Shalby Hospital Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full">
                <h4 className="font-bold text-navy-900 mb-2">{faq.question}</h4>
                <p className="text-slate-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-navy-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Get Expert Medical Guidance for Your Health Concerns</h2>
          <p className="text-xl text-slate-400 mb-12">Consult with Dr. Akhilesh Patidar for comprehensive diagnosis and evidence-based treatment.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${CLINIC_INFO.phone}`} className="btn-primary bg-white text-navy-900 hover:bg-slate-100">
              Call Now
            </a>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
              Book Consultation
            </Link>
            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CLINIC_INFO.address)}`}
              target="_blank"
              className="px-6 py-3 rounded-lg font-medium border border-white/30 hover:bg-white/5 transition-all"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
