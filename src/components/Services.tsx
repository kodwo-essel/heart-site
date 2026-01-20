'use client';

import { motion } from 'framer-motion';
import { Activity, Cpu, Network, Globe, ShieldCheck, Microscope, ArrowUpRight } from 'lucide-react';

const services = [
    {
        icon: Network,
        id: "01",
        title: "Global Telemetry",
        description: "Our distributed sensor network relays patient vitals to data centers in milliseconds, ensuring 24/7 global coverage."
    },
    {
        icon: Cpu,
        id: "02",
        title: "Neural & Systemic Diagnostics",
        description: "Proprietary AI models analyze complex biosignals to predict anomalies up to 48 hours before they occur."
    },
    {
        icon: Activity,
        id: "03",
        title: "Real-Time Intervention",
        description: "Automated alert systems instantly connect compromised patients with emergency response units."
    },
    {
        icon: Globe,
        id: "04",
        title: "Remote Consultation",
        description: "HD video links integrate directly with vital streams, allowing specialists to diagnose from anywhere."
    },
    {
        icon: ShieldCheck,
        id: "05",
        title: "Enterprise Security",
        description: "HIPAA-compliant end-to-end encryption ensures patient data remains sovereign and secure."
    },
    {
        icon: Microscope,
        id: "06",
        title: "Clinical Precision",
        description: "Hardware calibrated to ICU standards, delivering hospital-grade accuracy in a wearable form factor."
    }
];

export default function Services() {
    return (
        <section className="relative z-10 bg-white py-40 px-6 border-t border-gray-200">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-gray-200 pb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-light tracking-tighter text-brand-green max-w-2xl"
                    >
                        Holistic Health <br /> Architecture
                    </motion.h2>
                    <div className="text-gray-400 mb-2 md:mb-0">
                        [ EST. 2026 ]
                    </div>
                </div>

                <div className="grid grid-cols-1">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ 
                                rotateX: 2,
                                rotateY: 5,
                                scale: 1.02,
                                z: 50
                            }}
                            style={{ transformStyle: "preserve-3d" }}
                            className="group border-b border-gray-200 py-16 flex flex-col md:flex-row gap-8 md:gap-32 items-start md:items-center hover:bg-brand-green/5 transition-colors cursor-pointer"
                        >
                            <motion.div 
                                className="text-brand-green/40 font-mono text-sm tracking-widest"
                                whileHover={{ scale: 1.2, rotateZ: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                /{service.id}
                            </motion.div>

                            <div className="flex-1">
                                <motion.h3 
                                    className="text-3xl font-light text-brand-green mb-4 group-hover:pl-4 transition-all duration-300 flex items-center gap-4"
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    {service.title}
                                    <motion.div
                                        initial={{ opacity: 0, rotate: 0 }}
                                        whileHover={{ opacity: 1, rotate: 45 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ArrowUpRight className="w-6 h-6 text-brand-green" />
                                    </motion.div>
                                </motion.h3>
                            </div>

                            <motion.div 
                                className="w-full md:w-1/3 text-gray-600 leading-relaxed font-light"
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {service.description}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
