
import { useEffect } from 'react';
import { useSceneStore } from '../store/useSceneStore';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Index = () => {
  const { isLoading, setIsLoading } = useSceneStore();

  useEffect(() => {
    // Simulate brief loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  if (isLoading) {
    return (
      <div className="loading-screen min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-arch-blue border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold gradient-text"
          >
            Loading Arch Experience...
          </motion.h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Main Content */}
      <main className="flex items-center justify-center min-h-screen p-8">
        <div className="text-center">
          {/* Static Arch Linux Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <img
              src="/images/arch-logo.png"
              alt="Arch Linux Logo"
              className="w-64 h-64 mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold gradient-text mb-4"
          >
            Arch Linux
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            A simple, lightweight Linux distribution
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
          >
            <Link 
              to="/download"
              className="glass-panel px-8 py-3 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 inline-block"
            >
              Download
            </Link>
            <Link 
              to="/learn-more"
              className="glass-panel px-8 py-3 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 inline-block"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Ambient Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-arch-blue/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
