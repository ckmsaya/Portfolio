import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-bg-main">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-brand-secondary mb-8"
          >
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
            Systems Architect & Founder
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.8, 1, 0.8],
              y: 0,
            }}
            transition={{
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 0.8, ease: "easeOut" },
              delay: 0.3,
            }}
            className="text-5xl md:text-8xl font-sans font-medium mb-6 leading-[1.1] md:leading-[0.9] tracking-tighter"
          >
            I build systems that help <span className="text-brand-secondary italic">businesses</span> run smoother.
          </motion.h1>

          <p className="text-lg md:text-xl text-brand-secondary mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Operational software, automation tools, and digital products designed to reduce chaos and improve workflows.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full text-sm font-semibold flex items-center justify-center gap-2 group transition-all shadow-xl shadow-white/10"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 rounded-full text-sm font-semibold hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              Work With Me
              <ChevronRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-secondary">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
