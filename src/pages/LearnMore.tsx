import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Users, Book } from 'lucide-react';
import Navbar from '@/components/Navbar';

const features = [
  {
    title: 'Rolling Release',
    description: 'No version numbers or scheduled releases. Packages are updated continuously—you install once and update forever. The Linux kernel typically arrives within days of upstream release.',
  },
  {
    title: 'Pacman',
    description: 'Lightweight package manager written in C. Install, update, and remove packages with a single command. Supports dependency resolution, package groups, and compiled package caching.',
  },
  {
    title: 'AUR',
    description: 'Community-driven repository with 85,000+ packages. Users submit PKGBUILDs that compile software from source, giving access to virtually any Linux-compatible software.',
  },
  {
    title: 'Minimal Base',
    description: 'Default install is ~800MB with only essential packages: base system, Linux kernel, and a shell. No pre-installed desktop environment—build exactly what you need.',
  },
];

const principles = [
  {
    title: 'Arch Build System (ABS)',
    description: 'A ports-like system for compiling packages from source. Users can modify PKGBUILDs to customize compile flags, enable/disable features, or apply patches.',
  },
  {
    title: 'Systemd Integration',
    description: 'Uses systemd as init system and service manager. Provides unified logging with journalctl, socket activation, and parallel service startup for faster boot times.',
  },
  {
    title: 'KISS Principle',
    description: 'Keep It Simple, Stupid. Arch defines simplicity as without unnecessary additions or modifications—exposing the underlying Linux system rather than abstracting it.',
  },
  {
    title: 'User-Centric',
    description: 'Designed for competent GNU/Linux users. Rather than being user-friendly, Arch is user-centric—filling the needs of those contributing to it.',
  },
  {
    title: 'Arch Wiki',
    description: 'The most comprehensive Linux documentation resource. Community-maintained, covering virtually every aspect of system administration and software configuration.',
  },
  {
    title: 'x86_64 Only',
    description: 'Targets only the x86_64 architecture, allowing for optimized binaries and simpler maintenance without the overhead of supporting legacy platforms.',
  },
];

const resources = [
  {
    title: 'Arch Wiki',
    description: 'Comprehensive documentation for everything Arch Linux',
    url: 'https://wiki.archlinux.org/',
    icon: Book,
  },
  {
    title: 'Installation Guide',
    description: 'Step-by-step guide to install Arch Linux',
    url: 'https://wiki.archlinux.org/title/Installation_guide',
    icon: Terminal,
  },
  {
    title: 'Community Forums',
    description: 'Get help and discuss with the Arch community',
    url: 'https://bbs.archlinux.org/',
    icon: Users,
  },
];

const LearnMorePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-5xl mx-auto px-8 pt-32 pb-24">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            About
          </h1>
          <p className="text-white/30 font-mono text-sm tracking-wider max-w-xl">
            An independently developed, x86-64 general-purpose GNU/Linux distribution
            that strives to provide the latest stable versions of most software.
          </p>
        </motion.div>

        {/* What is Arch */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">What is Arch Linux?</h2>
              <div className="space-y-4">
                <p className="text-white/40 text-sm font-mono leading-relaxed">
                  Arch Linux is an independently developed, x86-64 general-purpose GNU/Linux distribution 
                  that strives to provide the latest stable versions of most software by following a 
                  rolling-release model.
                </p>
                <p className="text-white/40 text-sm font-mono leading-relaxed">
                  The default installation is a minimal base system, configured by the user to only 
                  add what is purposely required. This approach allows for a lightweight, flexible, 
                  and simple system.
                </p>
              </div>
            </div>
            <div className="border border-white/10 p-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-6">Key Facts</h3>
              <div className="space-y-4">
                {[
                  { label: 'Release Model', value: 'Rolling' },
                  { label: 'Package Manager', value: 'Pacman' },
                  { label: 'Init System', value: 'systemd' },
                  { label: 'Architecture', value: 'x86_64' },
                  { label: 'Default Shell', value: 'Bash' },
                  { label: 'License', value: 'Various (FOSS)' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <span className="text-white/30 text-sm font-mono">{item.label}</span>
                    <span className="text-white/70 text-sm font-mono">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-8">Core Features</h2>
          <div className="grid md:grid-cols-2 gap-px bg-white/10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-black p-8"
              >
                <h3 className="text-lg font-bold tracking-tight mb-3">{feature.title}</h3>
                <p className="text-white/35 text-sm font-mono leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* The Arch Way */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-8">The Arch Way</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="bg-black p-6"
              >
                <h3 className="text-sm font-bold tracking-tight mb-2">{principle.title}</h3>
                <p className="text-white/30 text-xs font-mono leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Resources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-8">Resources</h2>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {resources.map((resource, index) => (
              <motion.a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-black p-8 group hover:bg-white/[0.02] transition-colors duration-300"
              >
                <resource.icon className="w-5 h-5 text-white/20 group-hover:text-white/50 transition-colors mb-4" />
                <h3 className="text-sm font-bold tracking-tight mb-2 group-hover:text-white transition-colors">
                  {resource.title}
                </h3>
                <p className="text-white/30 text-xs font-mono leading-relaxed mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center gap-2 text-white/20 group-hover:text-white/50 transition-colors">
                  <span className="text-xs font-mono uppercase tracking-wider">Visit</span>
                  <ExternalLink className="w-3 h-3" />
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
