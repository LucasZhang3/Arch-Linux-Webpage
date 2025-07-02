
import { motion } from 'framer-motion';
import { Globe, CheckCircle } from 'lucide-react';

const SystemRequirements = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="glass-panel p-6 border border-blue-500/30"
    >
      <h4 className="text-lg font-semibold text-blue-300 mb-4 flex items-center gap-2">
        <Globe className="w-5 h-5" />
        System Requirements
      </h4>
      <ul className="text-white/70 space-y-2 text-sm">
        <li className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-400" />
          x86_64 compatible machine
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-400" />
          Minimum 512 MB RAM
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-400" />
          At least 2 GB storage space
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-400" />
          Internet connection (recommended)
        </li>
      </ul>
    </motion.div>
  );
};

export default SystemRequirements;
