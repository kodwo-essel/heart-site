'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';

export default function About() {
    return (
        <section className="relative z-10 bg-black py-32 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8">
                        The Engine of <span className="text-white/50">Modern Medicine.</span>
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        We use the heart as our symbol not just because we excel in cardiology, but because we are the
                        <span className="text-brand-green font-medium"> Heart of Healthcare</span>.
                        Just as the heart circulates vitality to every corner of the body, Prentice connects data, diagnostics,
                        and treatment across every medical discipline—from Neurology to Oncology—to keep the entire system thriving.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative aspect-square rounded-2xl overflow-hidden bg-gray-800"
                >
                    <Image
                        src="/images/heart1.png"
                        alt="Advanced Surgical Team"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
                </motion.div>
            </div>
        </section>
    );
}
