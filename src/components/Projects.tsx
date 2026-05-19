import { motion } from "motion/react";
import { PROJECTS } from "../constants";
import { ExternalLink, Layers, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface-soft">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-secondary font-mono">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter">Operational Ecosystem</h2>
          </div>
          <p className="max-w-md text-brand-secondary text-sm leading-relaxed font-light">
            A specialized collection of systems designed to address specific operational challenges in modern business environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-bg-card rounded-[2rem] border border-white/5 p-8 overflow-hidden transition-all duration-500"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-white">
                    <Layers size={20} />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/10 text-[9px] uppercase tracking-widest text-white font-medium border border-white/10">
                    {project.status}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-[10px] uppercase tracking-widest text-brand-secondary mb-2 font-mono">{project.category}</div>
                  <h3 className="text-2xl font-medium mb-3 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-brand-secondary text-sm leading-relaxed font-light line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span key={metric} className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-brand-secondary border border-white/5">
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
