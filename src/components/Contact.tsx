import { motion } from "motion/react";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:ckmsaya@gmail.com", value: "ckmsaya@gmail.com" },
    { icon: Github, label: "GitHub", href: "https://github.com/ckmsaya", value: "@ckmsaya" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/conrad-msaya-aa5907302/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bsh4E4aDpQdGLhzC3lVDKhw%3D%3D", value: "Conrad Msaya" },
    { icon: MessageSquare, label: "WhatsApp", href: "https://wa.me/27646261102", value: "+27 64 626 1102" },
  ];

  return (
    <section id="contact" className="py-16 sm:py-32 relative overflow-hidden bg-bg-main">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/[0.02] blur-[80px] pointer-events-none sm:h-[500px] sm:w-[500px] sm:blur-[100px]" />

      <div className="container mx-auto px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-[9px] uppercase tracking-[0.26em] text-brand-secondary font-mono sm:text-[10px] sm:tracking-[0.4em]">Contact</span>
                <h2 className="text-[clamp(2.35rem,12vw,4.5rem)] font-medium tracking-tight leading-[1.02] md:text-7xl">Ready to tighten your operations and launch the next system?</h2>
              </div>
              <p className="text-brand-secondary text-base sm:text-lg font-light leading-relaxed max-w-md">
                I am currently open to collaboration on high-impact projects, strategic consulting, and new startup ventures.
              </p>
              
              <div className="pt-4">
                <motion.a
                  href="mailto:hello@conradmsaya.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-7 py-4 text-xs font-bold uppercase tracking-wider text-black shadow-2xl shadow-white/5 transition-colors hover:bg-zinc-200 sm:w-auto sm:px-10 sm:py-5 sm:tracking-widest"
                >
                  Book a quick call
                </motion.a>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={`${link.label}-${link.href}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 glass rounded-2xl hover:bg-white/10 transition-all border border-white/5 group sm:p-6"
                >
                  <link.icon className="text-brand-secondary mb-4 group-hover:text-white transition-colors" size={24} strokeWidth={1.5} />
                  <div className="space-y-1">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-brand-secondary font-mono">{link.label}</div>
                    <div className="text-sm font-medium tracking-tight truncate">{link.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
