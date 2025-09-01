
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useSceneStore } from '../store/useSceneStore';
import { Zap, Wrench, Package, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Rolling Release',
    description: 'Always up-to-date with the latest software packages and security updates.',
    animation: 'rotating'
  },
  {
    icon: Wrench,
    title: 'Customizable',
    description: 'Build your system exactly how you want it, with complete control over every component.',
    animation: 'pulsing'
  },
  {
    icon: Package,
    title: 'AUR Integration',
    description: 'Access to the largest software repository in the Linux ecosystem.',
    animation: 'ripple'
  },
  {
    icon: Shield,
    title: 'Minimalist',
    description: 'Start with a minimal base system and add only what you need.',
    animation: 'idle'
  }
];

export const FeaturesSection = () => {
  const { setCurrentSection, setAnimationState } = useSceneStore();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      setCurrentSection(1);
    }
  }, [inView, setCurrentSection]);

  return (
    <section id="features" ref={ref} className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">
            Why Choose Arch?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Experience the power of a truly customizable Linux distribution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-panel p-8 group cursor-pointer"
              whileHover={{ scale: 1.02, y: -5 }}
              onHoverStart={() => setAnimationState(feature.animation as any)}
              onHoverEnd={() => setAnimationState('idle')}
            >
              <feature.icon className="w-12 h-12 text-arch-blue mb-4 group-hover:text-arch-cyan transition-colors" />
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-arch-cyan transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
