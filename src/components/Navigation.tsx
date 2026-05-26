import { motion } from "motion/react";
import { Menu, X, Rocket } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Systems", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-3 sm:px-6 sm:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 glass rounded-2xl px-4 py-3 sm:rounded-full sm:px-6">
        <motion.button
          type="button"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex min-w-0 items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 shrink-0 bg-white text-black rounded-lg flex items-center justify-center">
            <Rocket size={18} />
          </div>
          <span className="font-mono font-medium tracking-tight text-xs uppercase truncate sm:text-sm">Conrad Msaya</span>
        </motion.button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs uppercase tracking-widest text-brand-secondary hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 bg-white text-black rounded-full text-xs font-medium uppercase tracking-wider hover:bg-zinc-200 transition-colors"
          >
            Work With Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden shrink-0 rounded-full p-2 text-white transition-colors hover:bg-white/10"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-4 right-4 max-h-[calc(100svh-6rem)] overflow-y-auto glass rounded-2xl p-5 flex flex-col gap-3 sm:left-6 sm:right-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase tracking-widest text-brand-secondary hover:text-white py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
