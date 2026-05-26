import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-surface-soft border-t border-white/5">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-[0.26em] text-brand-secondary font-mono sm:text-[10px] sm:tracking-[0.4em]">Origins</span>
              <h2 className="text-[clamp(2rem,9vw,3rem)] font-medium tracking-tight leading-[1.08] md:text-5xl">Solving systems through empathy and code.</h2>
            </div>
            
            <div className="space-y-5 text-brand-secondary leading-relaxed text-base font-light sm:space-y-6 sm:text-lg">
              <p>
                I am a software developer and systems thinker driven by a simple question: <span className="text-white italic">How can we make things work better?</span>
              </p>
              <p>
                As a startup builder, I've seen firsthand how operational friction consumes the creative energy of founders and their teams. My work is dedicated to identifying those bottlenecks and building surgical digital tools to eliminate them.
              </p>
              <p>
                Beyond the code, I am a writer interested in the philosophy of technology and human behavior. I believe that the tools we build are extensions of our values—meaning they should be as intuitive as they are powerful.
              </p>
            </div>

            <div className="hidden gap-12 pt-4">
              <div>
                <div className="text-2xl font-mono mb-1"></div>
                <div className="text-[10px] uppercase tracking-widest text-brand-secondary"></div>
              </div>
              <div>
                <div className="text-2xl font-mono mb-1"></div>
                <div className="text-[10px] uppercase tracking-widest text-brand-secondary"></div>
              </div>
              <div>
                <div className="text-2xl font-mono mb-1"></div>
                <div className="text-[10px] uppercase tracking-widest text-brand-secondary"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] relative group w-full max-w-[360px] mx-auto sm:max-w-[420px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl z-10 opacity-100 transition-opacity duration-700 md:opacity-0 md:group-hover:opacity-100 sm:rounded-3xl" />
            <img 
              src="/images/profile.jpg" 
              alt="Professional Portrait" 
              className="w-full h-full object-cover rounded-2xl brightness-90 transition-all duration-700 md:grayscale md:brightness-75 md:group-hover:grayscale-0 md:group-hover:scale-[1.02] sm:rounded-3xl"
            />
            {/* Abstract geometric overlay */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl z-20 hidden md:flex items-center justify-center p-6 text-center">
              <span className="text-xs font-mono uppercase leading-relaxed text-brand-secondary">
                "The system is the product of our understanding of the problem."
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
