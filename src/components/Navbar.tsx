import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between"
    >
      <Link to="/" className="flex items-center gap-3 group">
        <img
          alt="Arch Linux"
          className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity"
          src="/images/arch-logo.png"
        />

        <span className="text-white/70 group-hover:text-white text-sm font-mono tracking-widest uppercase transition-colors">
          Arch Linux
        </span>
      </Link>

      <div className="flex items-center gap-8">
        {[
          { to: "/learn-more", label: "About" },
          { to: "/download", label: "Download" },
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-sm font-mono tracking-wider uppercase transition-colors duration-300 ${
              location.pathname === link.to ? "text-white" : "text-white/40 hover:text-white/80"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://wiki.archlinux.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-mono tracking-wider uppercase text-white/40 hover:text-white/80 transition-colors duration-300"
        >
          Wiki
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
