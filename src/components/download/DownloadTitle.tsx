
import { motion } from 'framer-motion';

const DownloadTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-center mb-16"
    >
      <h1 className="text-6xl font-bold gradient-text mb-6">Download Arch Linux</h1>
      <p className="text-xl text-white/70 max-w-3xl mx-auto">
        Get the latest release of Arch Linux and start building your perfect system
      </p>
    </motion.div>
  );
};

export default DownloadTitle;
