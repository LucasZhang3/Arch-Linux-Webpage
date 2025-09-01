
import { motion } from 'framer-motion';
import { Terminal, Code, Users, Zap } from 'lucide-react';

const WhyChooseArch = () => {
  const features = [
    { icon: Terminal, title: 'Rolling Release', desc: 'Always up-to-date packages' },
    { icon: Code, title: 'Minimalist', desc: 'Build your perfect system' },
    { icon: Users, title: 'Community', desc: 'Extensive documentation' },
    { icon: Zap, title: 'Performance', desc: 'Optimized for speed' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="glass-panel p-8"
    >
      <h2 className="text-2xl font-bold gradient-text mb-6">Why Choose Arch?</h2>
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="glass-panel p-4 hover:bg-white/5 transition-all"
          >
            <feature.icon className="w-6 h-6 text-arch-cyan mb-2" />
            <h3 className="text-white font-semibold text-sm mb-1">{feature.title}</h3>
            <p className="text-white/60 text-xs">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyChooseArch;
