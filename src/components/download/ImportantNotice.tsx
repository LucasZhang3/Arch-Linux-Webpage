
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ImportantNotice = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      className="glass-panel p-6 border border-yellow-500/30 w-full"
    >
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-1">
          <span className="text-yellow-400 text-lg">⚠️</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">Important Notice</h3>
          <p className="text-yellow-100/80 mb-4 text-sm">
            Arch Linux requires manual installation and configuration. It's designed for users who want complete control over their system.
          </p>
          <a
            href="https://wiki.archlinux.org/title/Installation_guide"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-arch-cyan hover:text-arch-blue transition-colors font-medium text-sm"
          >
            Read the Installation Guide
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ImportantNotice;
