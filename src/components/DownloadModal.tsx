
import { motion, AnimatePresence } from 'framer-motion';
import { useSceneStore } from '../store/useSceneStore';
import { X, Download, ExternalLink, Shield } from 'lucide-react';

const mirrors = [
  { name: 'Worldwide', url: 'https://archlinux.org/download/', region: 'Global' },
  { name: 'United States', url: 'https://mirror.rackspace.com/archlinux/', region: 'US' },
  { name: 'Germany', url: 'https://mirror.de.leaseweb.net/archlinux/', region: 'EU' },
  { name: 'Japan', url: 'https://ftp.jaist.ac.jp/pub/Linux/ArchLinux/', region: 'Asia' },
];

export const DownloadModal = () => {
  const { showDownloadModal, setShowDownloadModal } = useSceneStore();

  return (
    <AnimatePresence>
      {showDownloadModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setShowDownloadModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass-panel p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold gradient-text">Download Arch Linux</h2>
              <button
                onClick={() => setShowDownloadModal(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white/70" />
              </button>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-arch-cyan" />
                <span className="text-lg font-semibold text-white">Latest Release</span>
              </div>
              <div className="glass-panel p-4 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-mono text-lg">archlinux-2024.06.01-x86_64.iso</p>
                    <p className="text-white/60 text-sm">Size: 850 MB</p>
                  </div>
                  <div className="text-right text-sm text-white/60">
                    <p>SHA256: verified</p>
                    <p>GPG: signed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Choose a Mirror</h3>
              <div className="space-y-3">
                {mirrors.map((mirror, index) => (
                  <motion.a
                    key={mirror.name}
                    href={mirror.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 glass-panel hover:bg-white/5 transition-all group"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <Download className="w-5 h-5 text-arch-blue group-hover:text-arch-cyan transition-colors" />
                      <div>
                        <p className="text-white font-medium">{mirror.name}</p>
                        <p className="text-white/60 text-sm">{mirror.region}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-panel p-4 border border-yellow-500/30">
              <p className="text-yellow-300 text-sm">
                <strong>Note:</strong> Arch Linux requires manual installation. 
                Please read the{' '}
                <a 
                  href="https://wiki.archlinux.org/title/Installation_guide" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-arch-cyan hover:underline"
                >
                  Installation Guide
                </a>{' '}
                before proceeding.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
