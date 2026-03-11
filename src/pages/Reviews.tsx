import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, User } from 'lucide-react';
import { REVIEWS, CLINIC_INFO } from '../constants';

export default function Reviews() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Patient Testimonials</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
              </div>
              <span className="text-2xl font-bold">5.0 / 5.0</span>
              <span className="text-slate-400">({CLINIC_INFO.reviewsCount} Reviews)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real Reviews */}
            {REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative"
              >
                <Quote className="absolute top-6 right-6 text-slate-200" size={40} />
                <div className="flex items-center gap-1 text-yellow-500 mb-4">
                  {[...Array(review.rating)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white">
                    <User size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">{review.name}</h4>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest">Verified Patient</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Additional Placeholders to fill the grid */}
            {[
              "Very knowledgeable doctor. Explained everything clearly.",
              "Excellent critical care consultation. Highly recommended.",
              "The clinic is very clean and the staff is professional.",
              "Dr. Patidar is very patient and listens to all concerns.",
              "Best physician in Rau area for chronic disease management.",
              "Thorough diagnosis and effective treatment plan."
            ].map((text, i) => (
              <motion.div
                key={i + 10}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 3) * 0.05 }}
                className="p-8 rounded-3xl bg-white border border-slate-200 relative"
              >
                <Quote className="absolute top-6 right-6 text-slate-100" size={40} />
                <div className="flex items-center gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                    <User size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">Verified Patient</h4>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest">Google Review</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">Share Your Experience</h2>
          <p className="text-slate-600 mb-10">Your feedback helps us improve our care and helps other patients find the right medical guidance.</p>
          <a 
            href="https://search.google.com/local/writereview?placeid=ChIJcwv37T77YjkRn4sk5Nm6VmU" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Leave a Google Review
          </a>
        </div>
      </section>
    </div>
  );
}
