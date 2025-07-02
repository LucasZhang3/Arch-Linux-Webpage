
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { useSceneStore } from '../store/useSceneStore';

export const HeroSection = () => {
  const { setCurrentSection, setShowDownloadModal } = useSceneStore();

  const scrollToFeatures = () => {
    setCurrentSection(1);
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
      
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 gradient-text">
            ARCH LINUX
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/80 mb-8 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            A simple, lightweight Linux distribution that lets you
            <br />
            <span className="text-arch-cyan font-medium">build your perfect system</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.button
              onClick={scrollToFeatures}
              className="px-8 py-4 bg-gradient-to-r from-arch-blue to-arch-cyan text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Features
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </motion.button>
            
            <motion.button
              onClick={() => setShowDownloadModal(true)}
              className="px-8 py-4 glass-panel text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group animate-pulse-neon"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download ISO
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </div>
  );
};
