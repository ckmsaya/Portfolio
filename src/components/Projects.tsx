import { motion } from "motion/react";
import { PROJECTS } from "../constants";
import { ExternalLink, Layers, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-surface-soft">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 sm:mb-16">
          <div className="space-y-4">
            <span className="text-[9px] uppercase tracking-[0.26em] text-brand-secondary font-mono sm:text-[10px] sm:tracking-[0.4em]">Portfolio</span>
            <h2 className="text-[clamp(2rem,10vw,3.75rem)] font-medium tracking-tight leading-[1.05] md:text-6xl">Operational Ecosystem</h2>
          </div>
          <p className="max-w-md text-brand-secondary text-sm leading-relaxed font-light">
            A specialized collection of systems designed to address specific operational challenges in modern business environments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-bg-card rounded-2xl border border-white/5 p-5 overflow-hidden transition-all duration-500 sm:p-8 sm:rounded-[2rem]"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100`} />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-white">
                    <Layers size={20} />
                  </div>
                  <div className="max-w-[8rem] rounded-full bg-white/10 px-3 py-1 text-right text-[9px] uppercase tracking-wider text-white font-medium border border-white/10 sm:max-w-none sm:tracking-widest">
                    {project.status}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-[10px] uppercase tracking-widest text-brand-secondary mb-2 font-mono">{project.category}</div>
                  <h3 className="text-xl sm:text-2xl font-medium mb-3 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-brand-secondary text-sm leading-relaxed font-light sm:line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span key={metric} className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-brand-secondary border border-white/5 empty:hidden">
                        {metric}
                      </span>
                    ))}
                  </div>
                  <a href="#contact" className="w-full py-3 bg-white/5 hover:bg-white text-brand-secondary hover:text-black rounded-xl text-xs font-semibold uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                    See the work
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
