'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/95 backdrop-blur-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-white tracking-tight">
            Prentice
          </Link>

          <div className="flex items-center gap-12">
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/services" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/blog" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                Blog
              </Link>
            </div>

            <button className="hidden md:block px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-transform duration-300 ease-in-out hover:scale-105 text-sm tracking-tight">
              Book Now
            </button>
            
            {/* Mobile hamburger */}
            <button 
              className="md:hidden flex flex-col gap-1 w-6 h-6"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.span 
                className="w-full h-0.5 bg-white origin-center"
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              />
              <motion.span 
                className="w-full h-0.5 bg-white"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span 
                className="w-full h-0.5 bg-white origin-center"
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-4">
              <Link href="/about" className="block text-white/80 hover:text-white text-lg font-medium transition-colors">
                About
              </Link>
              <Link href="/services" className="block text-white/80 hover:text-white text-lg font-medium transition-colors">
                Services
              </Link>
              <Link href="/blog" className="block text-white/80 hover:text-white text-lg font-medium transition-colors">
                Blog
              </Link>
              <button className="w-full mt-4 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors text-sm tracking-tight">
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}