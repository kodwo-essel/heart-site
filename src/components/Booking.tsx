'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Booking() {
    return (
        <section className="relative z-10 bg-[#050A08] py-40 px-6 border-t border-white/5">
            {/* Pattern Background */}
            <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] bg-cover bg-center" />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/85" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-medium tracking-tight text-white mb-16 leading-tight"
                >
                    Ready to take <br />
                    <span className="text-gray-500">control?</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link href="/book" className="group inline-flex items-center gap-3 bg-white text-black px-12 py-6 rounded-full text-xl font-medium hover:bg-gray-200 transition-transform duration-300 ease-in-out hover:scale-105">
                        Book a Consultation
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
