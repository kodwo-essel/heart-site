"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const images = [
  "/images/alms-nutrition-2.jpg",
  "/images/alms-nutrition.jpg", 
  "/images/alms-workout.jpg",
  "/images/alms-workout-2.jpg"
];

export default function CommunitySection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-green-600">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              Join a COMMUNITY dedicated to achieving better health and lifestyle improvements. 
              Impactful changes for a healthier future.
            </h2>
            
            <Link 
              href="/programs"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white/10">
              <img 
                src={images[currentImage]} 
                alt="Community" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImage ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}