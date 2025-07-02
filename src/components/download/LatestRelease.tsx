
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Download, ExternalLink } from 'lucide-react';

const LatestRelease = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass-panel p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <Shield className="w-8 h-8 text-arch-cyan" />
        <h2 className="text-3xl font-bold text-white">Latest Release</h2>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">archlinux-2024.12.01-x86_64.iso</h3>
          <div className="space-y-2 text-white/70">
            <p className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Size: 785 MB
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              SHA256: Verified
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              GPG: Signed
            </p>
          </div>
        </div>
        
        <motion.a
          href="https://archlinux.org/download/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel p-6 hover:bg-white/5 transition-all group block"
          whileHover={{ scale: 1.02, y: -2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🌍</span>
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-arch-cyan transition-colors">
                  Worldwide Mirror
                </h3>
                <p className="text-white/60 text-sm">Official Arch Linux Repository</p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-arch-cyan transition-colors" />
          </div>
          <div className="flex items-center gap-2 text-arch-blue group-hover:text-arch-cyan transition-colors">
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Download ISO</span>
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default LatestRelease;
