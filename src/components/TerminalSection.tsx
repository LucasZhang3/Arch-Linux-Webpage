
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { useSceneStore } from '../store/useSceneStore';
import { Terminal, Copy } from 'lucide-react';
import { toast } from 'sonner';

const commands = [
  '$ sudo pacman -Syu',
  '$ yay -S visual-studio-code-bin',
  '$ systemctl enable --now NetworkManager',
  '$ neofetch'
];

export const TerminalSection = () => {
  const { setCurrentSection } = useSceneStore();
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [currentCommand, setCurrentCommand] = useState(0);

  useEffect(() => {
    if (inView) {
      setCurrentSection(2);
      const interval = setInterval(() => {
        setCurrentCommand((prev) => (prev + 1) % commands.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [inView, setCurrentSection]);

  const copyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    toast.success('Command copied to clipboard!');
  };

  return (
    <section ref={ref} className="min-h-screen py-20 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">
            Command Line Power
          </h2>
          <p className="text-xl text-white/70">
            Experience the elegance of pacman package management
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="terminal-glow glass-panel p-6 font-mono"
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/20">
            <Terminal className="w-5 h-5 text-arch-cyan" />
            <span className="text-white font-semibold">arch@terminal</span>
            <div className="flex gap-2 ml-auto">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="space-y-4">
            {commands.map((command, index) => (
              <motion.div
                key={command}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                  index === currentCommand 
                    ? 'bg-arch-blue/20 border border-arch-blue/30' 
                    : 'hover:bg-white/5'
                }`}
              >
                <span className={`${
                  index === currentCommand ? 'text-arch-cyan' : 'text-white/80'
                }`}>
                  {command}
                </span>
                <button
                  onClick={() => copyCommand(command)}
                  className="opacity-0 group-hover:opacity-100 hover:text-arch-cyan transition-all p-1"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-6 text-arch-cyan"
          >
            <span className="animate-pulse">|</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
