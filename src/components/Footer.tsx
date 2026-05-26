import { Rocket } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="footer" className="py-12 border-t border-subtle bg-surface-strong">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center">
              <Rocket size={20} />
            </div>
            <div>
              <div className="text-sm font-bold uppercase tracking-widest leading-none">Conrad Msaya</div>
              <div className="text-[10px] uppercase tracking-widest text-brand-secondary mt-1">Systems Architect</div>
            </div>
          </div>

          <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] text-brand-secondary">
            <a href="#projects" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#services" className="hover:text-white transition-colors">Expertise</a>
            <a href="#about" className="hover:text-white transition-colors">Biography</a>
            <a href="#writing" className="hover:text-white transition-colors">Skills</a>
          </div>

          <div className="text-[10px] uppercase tracking-widest text-zinc-600">
            © {currentYear} Conrad Msaya. All Rights Reserved.
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/2 text-center">
          <p className="text-[9px] uppercase tracking-[0.5em] text-zinc-700 font-mono">
            Optimized for human progress • Built with intent
          </p>
        </div>
      </div>
    </footer>
  );
}
