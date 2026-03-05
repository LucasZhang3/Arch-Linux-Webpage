import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter text-white/5 mb-4">
            404
          </h1>
          <p className="text-white/30 font-mono text-sm tracking-wider mb-8">
            Page not found
          </p>
          <Link
            to="/"
            className="inline-flex px-8 py-3 border border-white/20 text-white/50 hover:text-white hover:border-white/50 text-sm font-mono tracking-widest uppercase transition-all duration-300"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
