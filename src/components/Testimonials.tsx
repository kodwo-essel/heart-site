'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Prentice has revolutionized our patient monitoring capabilities. The real-time analytics and AI-powered insights have significantly improved our response times and patient outcomes.",
    name: "Dr. Sarah Chen",
    title: "Chief Medical Officer at Metropolitan General Hospital",
    avatar: "/images/dr_chen.png"
  },
  {
    id: 2,
    type: "video",
    name: "Dr. Michael Thorne",
    title: "Head of Cardiothoracic Surgery at Advanced Heart Institute",
    avatar: "/images/dr_thorne.png",
    videoThumbnail: "/images/surgery_about.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 3,
    quote: "Implementation was seamless and the support team is exceptional. Prentice has transformed how we deliver healthcare to our patients with unprecedented accuracy.",
    name: "Dr. Elena Vasquez",
    title: "Director of Medical Technology at Regional Medical Center",
    avatar: "/images/dr_vasquez.png"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4"
        >
          TESTIMONIALS
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl mb-16"
        >
          Don't take our word for it!<br />
          Hear it from our partners.
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group ${testimonial.type === 'video' ? 'relative overflow-hidden' : 'bg-white hover:bg-black'} rounded-2xl py-8 px-6 shadow-sm hover:shadow-lg transition-all cursor-pointer`}
              style={testimonial.type === 'video' ? {
                backgroundImage: `url(${testimonial.avatar})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              } : {}}
              onClick={testimonial.type === 'video' ? () => window.open(testimonial.videoUrl, '_blank') : undefined}
            >
              {testimonial.type === 'video' && (
                <div className="absolute inset-0 bg-black/50 rounded-2xl" />
              )}
              
              <div className={testimonial.type === 'video' ? 'relative z-10' : ''}>
                {/* Avatar at top - only for non-video */}
                {testimonial.type !== 'video' && (
                  <div className="flex justify-start mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                )}
                
                {/* Content - Text or Play Button */}
                {testimonial.type === 'video' ? (
                  <div className="flex items-center justify-center h-48">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <span className="absolute -top-4 -left-2 text-6xl text-gray-300 font-serif leading-none">&ldquo;</span>
                    <p className="text-gray-700 group-hover:text-white leading-relaxed mb-8 text-sm pl-6 transition-colors">
                      {testimonial.quote}
                    </p>
                    <span className="absolute -bottom-8 -right-2 text-6xl text-gray-300 font-serif leading-none">&rdquo;</span>
                  </div>
                )}
                
                {/* Name and Title at bottom */}
                <div className={testimonial.type === 'video' ? 'text-white' : 'group-hover:text-white transition-colors'}>
                  <h4 className="text-2xl mb-1" style={{ fontFamily: 'var(--font-handwriting), Dancing Script, cursive' }}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-xs ${testimonial.type === 'video' ? 'text-gray-200' : 'text-gray-600 group-hover:text-gray-300'} transition-colors`}>
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}