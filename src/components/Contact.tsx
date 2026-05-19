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
    <section id="contact" className="py-32 relative overflow-hidden bg-bg-main">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-brand-secondary font-mono">Contact</span>
                <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-none">Ready to tighten your operations and launch the next system?</h2>
              </div>
              <p className="text-brand-secondary text-lg font-light leading-relaxed max-w-md">
                I am currently open to collaboration on high-impact projects, strategic consulting, and new startup ventures.
              </p>
              
              <div className="pt-4">
                <motion.a
                  href="mailto:hello@conradmsaya.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-black rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors shadow-2xl shadow-white/5"
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
                  className="p-6 glass rounded-2xl hover:bg-white/10 transition-all border border-white/5 group"
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
