import { motion } from 'framer-motion';
import { Download, CheckCircle, ExternalLink, Terminal, Shield, Globe, AlertTriangle } from 'lucide-react';
import Navbar from '@/components/Navbar';

const DownloadPage = () => {
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
            Download
          </h1>
          <p className="text-white/30 font-mono text-sm tracking-wider max-w-xl">
            Get the latest Arch Linux release and build your system from the ground up.
          </p>
        </motion.div>

        {/* Latest Release Card */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="border border-white/10 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-5 h-5 text-white/50" />
              <h2 className="text-2xl font-bold tracking-tight">Latest Release</h2>
            </div>
            
            <h3 className="text-lg font-mono text-white/70 mb-6">archlinux-2024.12.01-x86_64.iso</h3>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Size', value: '785 MB' },
                { label: 'SHA256', value: 'Verified' },
                { label: 'GPG', value: 'Signed' },
              ].map((item) => (
                <div key={item.label} className="border border-white/5 p-4">
                  <span className="text-white/30 text-xs font-mono uppercase tracking-wider">{item.label}</span>
                  <div className="flex items-center gap-2 mt-1">
                    <CheckCircle className="w-3.5 h-3.5 text-white/40" />
                    <span className="text-white/80 text-sm font-mono">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://archlinux.org/download/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-white/50 text-white/80 hover:text-white font-mono text-sm tracking-wider uppercase transition-all duration-300 group"
            >
              <Download className="w-4 h-4" />
              Download ISO
              <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </motion.section>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* System Requirements */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="border border-white/10 p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-5 h-5 text-white/50" />
                <h2 className="text-lg font-bold tracking-tight">System Requirements</h2>
              </div>
              <ul className="space-y-4">
                {[
                  'x86_64 compatible machine',
                  'Minimum 512 MB RAM',
                  'At least 2 GB storage space',
                  'Internet connection (recommended)',
                ].map((req) => (
                  <li key={req} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-white/30 rounded-full" />
                    <span className="text-white/50 text-sm font-mono">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Installation Steps */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="border border-white/10 p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="w-5 h-5 text-white/50" />
                <h2 className="text-lg font-bold tracking-tight">Installation</h2>
              </div>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Download ISO', desc: 'Get the latest image' },
                  { step: '02', title: 'Verify Signature', desc: 'Check GPG signature' },
                  { step: '03', title: 'Create Bootable Media', desc: 'Flash to USB drive' },
                  { step: '04', title: 'Install', desc: 'Follow the installation guide' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 py-3 border-b border-white/5 last:border-0">
                    <span className="text-white/15 font-mono text-xs mt-1">{item.step}</span>
                    <div>
                      <h3 className="text-white/80 text-sm font-medium">{item.title}</h3>
                      <p className="text-white/30 text-xs font-mono mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        {/* Security Notice */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="border border-white/10 p-8">
            <div className="flex items-start gap-4">
              <Shield className="w-5 h-5 text-white/30 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold tracking-tight mb-2">Security</h3>
                <p className="text-white/40 text-sm font-mono leading-relaxed mb-3">
                  Always verify the integrity of your download using GPG signatures and checksums.
                </p>
                <a
                  href="https://wiki.archlinux.org/title/Installation_guide#Verify_signature"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  Verification Guide
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Important Notice */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="border border-white/[0.07] p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-5 h-5 text-white/20 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold tracking-tight mb-2">Important</h3>
                <p className="text-white/35 text-sm font-mono leading-relaxed mb-3">
                  Arch Linux requires manual installation and configuration. It's designed for users who want complete control over their system.
                </p>
                <a
                  href="https://wiki.archlinux.org/title/Installation_guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  Installation Guide
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default DownloadPage;
