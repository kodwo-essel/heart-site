'use client';

import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

const FRAME_COUNT = 240;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Scroll progress for the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth out the scroll value for smoother frame transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map 0-1 scroll progress to 0-(FRAME_COUNT-1) frame index
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises = [];

      for (let i = 0; i < FRAME_COUNT; i++) {
        const promise = new Promise<void>((resolve) => {
          const img = new Image();
          // Pad index with leading zeros: 000, 001, ..., 239
          const paddedIndex = i.toString().padStart(3, '0');
          img.src = `/frames/ezgif-frame-${paddedIndex}.jpg`;
          img.onload = () => {
            loadedImages[i] = img;
            resolve();
          };
          // Handle loose errors gracefully (e.g. if a frame is missing)
          img.onerror = () => resolve();
        });
        promises.push(promise);
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setIsLoading(false);
    };

    loadImages();
  }, []);

  // Drawing Logic
  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // High-DPI screen support
    const render = () => {
      // Get current frame index from the motion value
      let currentFrame = Math.round(frameIndex.get());
      if (currentFrame < 0) currentFrame = 0;
      if (currentFrame >= FRAME_COUNT) currentFrame = FRAME_COUNT - 1;

      const img = images[currentFrame];
      if (img) {
        // Clear logic
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // "Cover" fit logic
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);

        // "Cover" fit logic (Match user request: "cover the full width")
        // Use Math.max to ensure the image covers the entire canvas
        const coverRatio = Math.max(canvas.width / img.width, canvas.height / img.height);

        const centerShift_x = (canvas.width - img.width * coverRatio) / 2;
        const centerShift_y = (canvas.height - img.height * coverRatio) / 2;

        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * coverRatio,
          img.height * coverRatio
        );
      }
    };

    // Animation Loop
    const unsubscribe = frameIndex.on('change', () => {
      requestAnimationFrame(render);
    });

    // Initial Render
    requestAnimationFrame(render);

    // Handle Resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      requestAnimationFrame(render);
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };

  }, [images, frameIndex]);


  return (
    <div ref={containerRef} className="relative h-[400vh] bg-brand-green text-white/90 font-sans">

      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas ref={canvasRef} className="block w-full h-full object-cover" />
        
        {/* Semi-transparent overlay for text contrast */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none z-10" />


      </div>

      <OverlaySection progress={smoothProgress} range={[0.0, 0.2]} className="items-center text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          The Heart of Healthcare.
        </motion.h1>
      </OverlaySection>

      <OverlaySection progress={smoothProgress} range={[0.25, 0.45]} className="items-center md:items-start pl-[10%] text-left">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white/90">Systemic Health<br />Monitoring.</h2>
          <motion.p 
            className="mt-4 max-w-sm text-lg text-white/60"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Tracking vitality across every biological system.
          </motion.p>
        </motion.div>
      </OverlaySection>

      <OverlaySection progress={smoothProgress} range={[0.55, 0.75]} className="items-center md:items-end pr-[10%] text-right">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white/90">Vitality,<br />Reimagined.</h2>
          <motion.p 
            className="mt-4 max-w-sm text-lg text-white/60 ml-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Intelligent care for the whole human.
          </motion.p>
        </motion.div>
      </OverlaySection>

      {/* Scrolling CTA Section (Natural Scroll) */}
      <motion.div 
        className="absolute bottom-0 w-full mb-24 flex flex-col items-center justify-center z-10 pointer-events-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-center px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          Trust in Every Pulse.
        </motion.h2>
        <motion.button 
          className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-transform duration-300 ease-in-out hover:scale-105 text-lg tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.1 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Journey
        </motion.button>
      </motion.div>

    </div>
  );
}

function OverlaySection({
  children,
  progress,
  range,
  className
}: {
  children: React.ReactNode,
  progress: any,
  range: [number, number],
  className?: string
}) {
  const opacity = useTransform(progress, [range[0] - 0.1, range[0], range[1], range[1] + 0.1], [0, 1, 1, 0]);
  const y = useTransform(progress, [range[0] - 0.1, range[0], range[1], range[1] + 0.1], [50, 0, 0, -50]);

  // Pointer events none when not visible to avoid blocking interactions/scroll if they overlap
  const pointerEvents = useTransform(opacity, value => value > 0.1 ? 'auto' : 'none');

  return (
    <motion.div
      style={{ opacity, y, pointerEvents }}
      className={clsx("fixed inset-0 flex flex-col justify-center p-8 pointer-events-none", className)}
    >
      {children}
    </motion.div>
  );
}