'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const portfolios = [
  {
    id: 1,
    title: "Cardiac Monitoring System",
    description: "Real-time heart rate analysis with AI-powered anomaly detection",
    image: "/images/heart1.png",
    color: "bg-black",
    textColor: "text-white"
  },
  {
    id: 2,
    title: "Neural Interface Platform",
    description: "Advanced brain-computer interface for medical diagnostics",
    image: "/images/heart2.png",
    color: "bg-gray-200",
    textColor: "text-black"
  },
  {
    id: 3,
    title: "Surgical Precision Tools",
    description: "Robotic assistance for minimally invasive procedures",
    image: "/images/heart1.png",
    color: "bg-black",
    textColor: "text-white"
  },
  {
    id: 4,
    title: "Diagnostic Imaging Suite",
    description: "Next-generation medical imaging with enhanced clarity",
    image: "/images/heart2.png",
    color: "bg-gray-200",
    textColor: "text-black"
  }
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -3600]);

  return (
    <>
      {/* Desktop */}
      <section ref={containerRef} className="relative h-[1200vh] bg-black hidden md:block">
        <div className="sticky py-8 top-20 h-[calc(100vh-5rem)] overflow-hidden">

          {/* Sticky Title */}
          <div className="absolute top-0 left-0 w-full z-20 py-16 bg-black">
            <div className="container mx-auto px-4 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-white"
              >
                Our Portfolio
              </motion.h2>
            </div>
          </div>

          {/* Offset content so it clears the title */}
          <div className="pt-32 h-full">
            <motion.div style={{ x }} className="flex h-full">
              {portfolios.map((portfolio) => (
                <div
                  key={portfolio.id}
                  className={`flex-shrink-0 w-[85vw] h-full ${portfolio.color} flex items-center justify-center relative`}
                >
                  <div className="max-w-4xl mx-auto px-8 grid grid-cols-2 gap-16 items-center">
                    <div>
                      <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-5xl font-bold ${portfolio.textColor} mb-6`}
                      >
                        {portfolio.title}
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`text-xl ${
                          portfolio.textColor === 'text-white'
                            ? 'text-gray-300'
                            : 'text-gray-600'
                        } leading-relaxed mb-8`}
                      >
                        {portfolio.description}
                      </motion.p>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-8 py-4 inline-flex ${
                          portfolio.textColor === 'text-white'
                            ? 'bg-white text-black hover:bg-gray-200'
                            : 'bg-black text-white hover:bg-gray-800'
                        } font-medium rounded-full transition-colors duration-300 text-sm tracking-tight`}
                      >
                        Learn More
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </motion.button>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <img
                        src={portfolio.image}
                        alt={portfolio.title}
                        className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                      />
                    </motion.div>
                  </div>

                  <div
                    className={`absolute top-8 right-8 text-6xl font-light ${
                      portfolio.textColor === 'text-white'
                        ? 'text-gray-700'
                        : 'text-gray-400'
                    }`}
                  >
                    0{portfolio.id}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


      {/* Mobile */}
      <div className="md:hidden bg-black">
        <div className="py-16 bg-black">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white"
            >
              Our Portfolio
            </motion.h2>
          </div>
        </div>
        {portfolios.map((portfolio) => (
          <div
            key={portfolio.id}
            className={`min-h-screen ${portfolio.color} flex items-center justify-center px-6 py-16`}
          >
            <div className="max-w-lg text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-3xl font-bold ${portfolio.textColor} mb-4`}
              >
                {portfolio.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  className="w-full h-64 object-cover rounded-xl shadow-xl"
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className={`text-lg ${portfolio.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} mb-6`}
              >
                {portfolio.description}
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 inline-flex ${portfolio.textColor === 'text-white' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} font-medium rounded-full transition-colors duration-300 text-sm tracking-tight`}
              >
                Learn More
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
