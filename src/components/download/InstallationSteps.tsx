
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const InstallationSteps = () => {
  const verificationSteps = [
    { step: '1', title: 'Download ISO', desc: 'Get the latest Arch Linux image' },
    { step: '2', title: 'Verify Signature', desc: 'Check GPG signature for authenticity' },
    { step: '3', title: 'Create Bootable Media', desc: 'Flash to USB or burn to DVD' },
    { step: '4', title: 'Install', desc: 'Follow the installation guide' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="glass-panel p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <Lock className="w-6 h-6 text-green-400" />
        <h2 className="text-2xl font-bold text-white">Installation Steps</h2>
      </div>
      <div className="space-y-4">
        {verificationSteps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + index * 0.1 }}
            className="flex items-start gap-4 p-4 glass-panel hover:bg-white/5 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-arch-blue/20 flex items-center justify-center flex-shrink-0">
              <span className="text-arch-cyan font-bold text-sm">{step.step}</span>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">{step.title}</h3>
              <p className="text-white/60 text-sm">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InstallationSteps;
