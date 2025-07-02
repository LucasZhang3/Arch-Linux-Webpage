
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Wrench, Package, Shield, Terminal, Users, Book, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Zap,
    title: 'Rolling Release',
    description: 'Always stay current with the latest software versions. No major version upgrades needed.',
    details: 'Arch follows a rolling release model, meaning you get continuous updates instead of major version releases.'
  },
  {
    icon: Wrench,
    title: 'Highly Customizable',
    description: 'Build your system exactly how you want it. Complete control over every component.',
    details: 'Start with a minimal base and add only what you need. No bloatware, no unnecessary services.'
  },
  {
    icon: Package,
    title: 'AUR Integration',
    description: 'Access to the largest software repository in the Linux ecosystem.',
    details: 'The Arch User Repository contains over 80,000 packages maintained by the community.'
  },
  {
    icon: Shield,
    title: 'Simplicity & Elegance',
    description: 'Clean, straightforward design philosophy without unnecessary complexity.',
    details: 'Arch follows the KISS principle: Keep It Simple, Stupid. Simplicity is the ultimate sophistication.'
  }
];

const principles = [
  {
    title: 'Simplicity',
    description: 'Arch Linux defines simplicity as without unnecessary additions or modifications.'
  },
  {
    title: 'Modernity',
    description: 'Arch strives to maintain the latest stable release versions of its software.'
  },
  {
    title: 'Pragmatism',
    description: 'Arch is a pragmatic distribution rather than an ideological one.'
  },
  {
    title: 'User-centricity',
    description: 'Arch is intended to fill the needs of those contributing to it, rather than trying to appeal to as many users as possible.'
  },
  {
    title: 'Versatility',
    description: 'Arch is a general-purpose distribution. Upon installation, only a command-line environment is provided.'
  }
];

const resources = [
  {
    title: 'Arch Wiki',
    description: 'Comprehensive documentation for everything Arch Linux',
    url: 'https://wiki.archlinux.org/',
    icon: Book
  },
  {
    title: 'Installation Guide',
    description: 'Step-by-step guide to install Arch Linux',
    url: 'https://wiki.archlinux.org/title/Installation_guide',
    icon: Terminal
  },
  {
    title: 'Community Forums',
    description: 'Get help and discuss with the Arch community',
    url: 'https://bbs.archlinux.org/',
    icon: Users
  }
];

const LearnMorePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
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

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold gradient-text mb-6">About Arch Linux</h1>
          <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            A simple, lightweight Linux distribution that puts you in control
          </p>
        </motion.div>

        {/* What is Arch Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="glass-panel p-12">
            <h2 className="text-4xl font-bold gradient-text mb-8">What is Arch Linux?</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed">
                  Arch Linux is an independently developed, x86-64 general-purpose GNU/Linux distribution 
                  that strives to provide the latest stable versions of most software by following a 
                  rolling-release model.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  The default installation is a minimal base system, configured by the user to only 
                  add what is purposely required. This approach allows for a lightweight, flexible, 
                  and simple system that can be customized in any direction the user desires.
                </p>
              </div>
              <div className="glass-panel p-8 border border-arch-blue/30">
                <h3 className="text-2xl font-bold text-arch-cyan mb-4">Key Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white/70">Release Model:</span>
                    <span className="text-white font-semibold">Rolling</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Package Manager:</span>
                    <span className="text-white font-semibold">Pacman</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Init System:</span>
                    <span className="text-white font-semibold">systemd</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Architecture:</span>
                    <span className="text-white font-semibold">x86_64</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold gradient-text mb-12 text-center">Why Choose Arch?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="glass-panel p-8 group hover:bg-white/5 transition-all"
                whileHover={{ y: -5 }}
              >
                <feature.icon className="w-12 h-12 text-arch-blue mb-4 group-hover:text-arch-cyan transition-colors" />
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-arch-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.details}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Arch Principles */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-20"
        >
          <div className="glass-panel p-12">
            <h2 className="text-4xl font-bold gradient-text mb-8 text-center">The Arch Way</h2>
            <p className="text-lg text-white/70 text-center mb-12 max-w-3xl mx-auto">
              Arch Linux is guided by five core principles that shape its development and philosophy
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="glass-panel p-6 border border-white/10"
                >
                  <h3 className="text-xl font-bold text-arch-cyan mb-3">{principle.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Resources Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <h2 className="text-4xl font-bold gradient-text mb-12 text-center">Learn More</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-8 group hover:bg-white/5 transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                <resource.icon className="w-12 h-12 text-arch-blue mb-4 group-hover:text-arch-cyan transition-colors" />
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-arch-cyan transition-colors">
                  {resource.title}
                </h3>
                <p className="text-white/70 mb-4 leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex items-center text-arch-blue group-hover:text-arch-cyan transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default LearnMorePage;
