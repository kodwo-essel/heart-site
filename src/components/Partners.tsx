'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: 'Microsoft', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png' },
  { name: 'Google', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png' },
  { name: 'Apple', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png' },
  { name: 'Amazon', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png' },
  { name: 'Meta', logo: 'https://logos-world.net/wp-content/uploads/2021/10/Meta-Logo.png' },
  { name: 'IBM', logo: 'https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png' },
  { name: 'Netflix', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png' }
];

export default function Partners() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="text-center mb-12">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900"
          >
            Trusted by Industry Leaders
          </motion.h3>
        </div>
      
      <div className="relative">
        <div 
          className="flex gap-16 items-center"
          style={{
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 20%, rgb(0,0,0) 80%, rgba(0,0,0,0) 100%)'
          }}
        >
          <motion.div
            className="flex gap-16 items-center"
            animate={{
              x: [0, -1600]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}