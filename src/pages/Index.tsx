import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SpiralAnimation } from '@/components/ui/spiral-animation';
import Navbar from '@/components/Navbar';

const Index = () => {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Spiral Animation Background */}
      <div className="absolute inset-0">
        <SpiralAnimation />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Center Content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center z-10 transition-opacity duration-1000 ${
          contentVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white text-7xl md:text-9xl font-black tracking-tighter mb-4"
          style={{ textShadow: '0 0 80px rgba(255,255,255,0.1)' }}
        >
          ARCH
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={contentVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/30 text-sm md:text-base font-mono tracking-[0.3em] uppercase mb-12"
        >
          A simple, lightweight distribution
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-6"
        >
          <Link
            to="/download"
            className="px-8 py-3 border border-white/20 text-white/70 hover:text-white hover:border-white/50 text-sm font-mono tracking-widest uppercase transition-all duration-300"
          >
            Download
          </Link>
          <Link
            to="/learn-more"
            className="px-8 py-3 text-white/40 hover:text-white/80 text-sm font-mono tracking-widest uppercase transition-all duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* Bottom subtle indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/20" />
      </motion.div>
    </div>
  );
};

export default Index;
