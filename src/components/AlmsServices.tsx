'use client';

import Link from "next/link";
import { ShoppingCart, ArrowUpRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function AlmsServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900"
          >
            Our Services
          </motion.h3>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {/* Service 1 - Nutrition */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-[3fr_2fr] gap-4"
          >
            <motion.div 
              whileHover={{ 
                rotateY: 5,
                rotateX: 2,
                scale: 1.02
              }}
              whileInView={{
                rotateY: [0, 3, 0],
                scale: [1, 1.01, 1]
              }}
              transition={{ 
                hover: { type: "spring", stiffness: 300 },
                inView: { duration: 3, repeat: Infinity, repeatType: "reverse" }
              }}
              className="bg-black py-8 rounded-2xl text-white relative overflow-hidden h-full cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 flex flex-col gap-4 p-8 items-start h-full justify-center">
                <motion.span 
                  whileHover={{ scale: 1.2, rotateZ: 5 }}
                  whileInView={{ rotateZ: [0, 5, -5, 0] }}
                  transition={{
                    hover: { duration: 0.2 },
                    inView: { duration: 4, repeat: Infinity }
                  }}
                  className="text-4xl font-bold opacity-60"
                >
                  01
                </motion.span>
                <motion.h4 
                  whileHover={{ x: 10 }}
                  className="text-2xl font-bold"
                >
                  NUTRITION
                </motion.h4>
                <p className="leading-relaxed opacity-90">
                  Welcome to PRENTICE, your ultimate destination for health, wellness, and
                  fitness essentials. Explore natural supplements, self-care tools, workout gear,
                  nutritious foods, refreshing juices, and more, all thoughtfully curated to support
                  your journey to a healthier, happier lifestyle!
                </p>
      
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-transform duration-300 ease-in-out text-sm tracking-tight"
                >
                  Learn More
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              whileInView={{
                rotateZ: [0, -2, 2, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                hover: { type: "spring", stiffness: 300 },
                inView: { duration: 3.5, repeat: Infinity, repeatType: "reverse" }
              }}
              className="rounded-2xl overflow-hidden h-full cursor-pointer"
            >
              <img
                src="https://cdn.pixabay.com/photo/2016/08/31/07/32/pumpkins-1632786_1280.jpg"
                alt="Nutrition"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Service 2 - Fitness */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid lg:grid-cols-[2fr_3fr] gap-4"
          >
            <motion.div 
              whileHover={{ scale: 1.05, rotateZ: -2 }}
              whileInView={{
                rotateZ: [0, 2, -2, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                hover: { type: "spring", stiffness: 300 },
                inView: { duration: 4, repeat: Infinity, repeatType: "reverse" }
              }}
              className="rounded-2xl overflow-hidden lg:order-first h-full cursor-pointer"
            >
              <img
                src="https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg"
                alt="Fitness"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              whileHover={{ 
                rotateY: -5,
                rotateX: 2,
                scale: 1.02
              }}
              whileInView={{
                rotateY: [0, -3, 0],
                scale: [1, 1.01, 1]
              }}
              transition={{ 
                hover: { type: "spring", stiffness: 300 },
                inView: { duration: 3.2, repeat: Infinity, repeatType: "reverse" }
              }}
              className="bg-black py-8 rounded-2xl text-white relative overflow-hidden h-full cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 flex flex-col gap-4 p-8 items-start h-full justify-center">
                <motion.span 
                  whileHover={{ scale: 1.2, rotateZ: -5 }}
                  whileInView={{ rotateZ: [0, -5, 5, 0] }}
                  transition={{
                    hover: { duration: 0.2 },
                    inView: { duration: 4.5, repeat: Infinity }
                  }}
                  className="text-4xl font-bold opacity-60"
                >
                  02
                </motion.span>
                <motion.h4 
                  whileHover={{ x: 10 }}
                  className="text-2xl font-bold"
                >
                  FITNESS & WORKOUTS
                </motion.h4>
                <p className="leading-relaxed opacity-90">
                  At PRENTICE, we believe fitness is vital for a balanced life. Regular exercise
                  boosts energy, strengthens the body, and enhances mental well-being. Our
                  personalized programs empower you to embrace fitness as a lifelong journey
                  toward health and happiness.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-transform duration-300 ease-in-out text-sm tracking-tight"
                >
                  Learn More
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Service 3 - Mental Health */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid lg:grid-cols-[3fr_2fr] gap-4"
          >
            <motion.div 
              whileHover={{ 
                rotateY: 5,
                rotateX: 2,
                scale: 1.02
              }}
              whileInView={{
                rotateY: [0, 4, 0],
                scale: [1, 1.015, 1]
              }}
              transition={{ 
                hover: { type: "spring", stiffness: 300 },
                inView: { duration: 2.8, repeat: Infinity, repeatType: "reverse" }
              }}
              className="bg-black py-8 rounded-2xl text-white relative overflow-hidden h-full cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 flex flex-col gap-4 p-8 items-start h-full justify-center">
                <motion.span 
                  whileHover={{ scale: 1.2, rotateZ: 5 }}
                  whileInView={{ rotateZ: [0, 6, -6, 0] }}
                  transition={{
                    hover: { duration: 0.2 },
                    inView: { duration: 3.8, repeat: Infinity }
                  }}
                  className="text-4xl font-bold opacity-60"
                >
                  03
                </motion.span>
                <motion.h4 
                  whileHover={{ x: 10 }}
                  className="text-2xl font-bold"
                >
                  MENTAL HEALTH
                </motion.h4>
                <p className="leading-relaxed opacity-90">
                  At PRENTICE, we believe therapy benefits everyone, offering support through life
                  transitions, stress, or challenges. Our compassionate therapists provide
                  personalized care, fostering growth, resilience, and emotional well-being. Begin
                  your journey of healing and self-discovery with us today.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-transform duration-300 ease-in-out text-sm tracking-tight"
                >
                  Learn More
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              whileInView={{
                rotateZ: [0, -3, 3, 0],
                scale: [1, 1.025, 1]
              }}
              transition={{ 
                hover: { type: "spring", stiffness: 300 },
                inView: { duration: 3.7, repeat: Infinity, repeatType: "reverse" }
              }}
              className="rounded-2xl overflow-hidden h-full cursor-pointer"
            >
              <img
                src="https://cdn.pixabay.com/photo/2016/07/01/22/34/people-1492052_1280.jpg"
                alt="Mental Health"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}