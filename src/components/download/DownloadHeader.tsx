
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DownloadHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-white/70 hover:text-arch-blue transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </Link>
    </motion.header>
  );
};

export default DownloadHeader;
