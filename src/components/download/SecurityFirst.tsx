
import { motion } from 'framer-motion';
import { Fingerprint, ExternalLink } from 'lucide-react';

const SecurityFirst = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="glass-panel p-6 border border-green-500/30"
    >
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
          <Fingerprint className="w-4 h-4 text-green-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-green-300 mb-2">Security First</h3>
          <p className="text-green-100/80 mb-4 text-sm">
            Always verify the integrity of your download using GPG signatures and checksums.
          </p>
          <a
            href="https://wiki.archlinux.org/title/Installation_guide#Verify_signature"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-arch-cyan hover:text-arch-blue transition-colors font-medium text-sm"
          >
            Learn about verification
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SecurityFirst;
