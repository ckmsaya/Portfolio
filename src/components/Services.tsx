import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  Globe,
  AppWindow,
  Palette,
  CreditCard,
  Megaphone,
  Search,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Crown,
} from "lucide-react";

/* ─── Types ─────────────────────────────────────────────── */
type Tier = { name: string; price: string; features: string[]; highlight?: boolean };
type Service = {
  id: string;
  icon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  tiers: Tier[];
  badge?: string;
};

/* ─── Data ───────────────────────────────────────────────── */
const SERVICES: Service[] = [
  {
    id: "website",
    icon: <Globe size={22} strokeWidth={1.5} />,
    category: "Web",
    title: "Website Design",
    description: "Stunning, conversion-optimised websites built to make your brand unforgettable.",
    badge: "Most Popular",
    tiers: [
      {
        name: "Starter",
        price: "R4,500",
        features: ["Up to 5 pages", "Mobile responsive", "Contact form", "Basic SEO setup", "1 revision round"],
      },
      {
        name: "Business",
        price: "R9,900",
        highlight: true,
        features: ["Up to 12 pages", "Custom animations", "Blog / CMS", "Google Analytics", "3 revision rounds", "30-day support"],
      },
      {
        name: "Premium",
        price: "R18,500",
        features: ["Unlimited pages", "Custom illustrations", "Advanced SEO", "Speed optimisation", "Unlimited revisions", "60-day support"],
      },
    ],
  },
  {
    id: "webapp",
    icon: <AppWindow size={22} strokeWidth={1.5} />,
    category: "Development",
    title: "Web Application",
    description: "Full-stack web apps — dashboards, portals, booking systems, and more.",
    tiers: [
      {
        name: "MVP",
        price: "R15,000",
        features: ["Core feature set", "User authentication", "Basic dashboard", "Mobile responsive", "2-week delivery"],
      },
      {
        name: "Growth",
        price: "R35,000",
        highlight: true,
        features: ["Full feature build", "Role-based access", "Payment integration", "Admin panel", "API integrations", "4-week delivery"],
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: ["Bespoke architecture", "Multi-tenant system", "Advanced analytics", "Dedicated support", "SLA agreement"],
      },
    ],
  },
  {
    id: "logo",
    icon: <Palette size={22} strokeWidth={1.5} />,
    category: "Branding",
    title: "Logo Design",
    description: "Bold, timeless logos that communicate your brand at a glance.",
    tiers: [
      {
        name: "Basic",
        price: "R800",
        features: ["2 logo concepts", "3 colour variations", "PNG & JPG files", "1 revision round"],
      },
      {
        name: "Standard",
        price: "R1,800",
        highlight: true,
        features: ["4 logo concepts", "Full colour palette", "PNG, JPG, SVG, PDF", "Brand guidelines doc", "3 revision rounds"],
      },
      {
        name: "Brand Kit",
        price: "R3,500",
        features: ["6 logo concepts", "Complete brand identity", "All file formats", "Stationery mockups", "Social media kit", "Unlimited revisions"],
      },
    ],
  },
  {
    id: "bizcard",
    icon: <CreditCard size={22} strokeWidth={1.5} />,
    category: "Digital",
    title: "Digital Business Card",
    description: "Interactive digital cards with one tap — share your brand instantly.",
    tiers: [
      {
        name: "Basic",
        price: "R350",
        features: ["1-page digital card", "Contact links", "WhatsApp button", "Shareable link"],
      },
      {
        name: "Pro",
        price: "R750",
        highlight: true,
        features: ["Animated card", "Services showcase", "QR code included", "All social links", "Custom domain link"],
      },
      {
        name: "Premium",
        price: "R1,400",
        features: ["Full micro-site", "Gallery / portfolio", "Lead capture form", "Analytics dashboard", "NFC card ready"],
      },
    ],
  },
  {
    id: "ecommerce",
    icon: <Globe size={22} strokeWidth={1.5} />,
    category: "E-Commerce",
    title: "Online Store",
    description: "Sell online with confidence — beautiful storefronts that convert browsers into buyers.",
    tiers: [
      {
        name: "Starter Store",
        price: "R8,500",
        features: ["Up to 30 products", "Payment gateway", "Order management", "Mobile optimised"],
      },
      {
        name: "Growth Store",
        price: "R18,000",
        highlight: true,
        features: ["Unlimited products", "Inventory system", "Discount codes", "Email automation", "Multi-currency"],
      },
      {
        name: "Full Commerce",
        price: "R35,000",
        features: ["Custom platform", "Subscription billing", "Loyalty programme", "ERP integration", "Dedicated support"],
      },
    ],
  },
  {
    id: "social",
    icon: <Megaphone size={22} strokeWidth={1.5} />,
    category: "Marketing",
    title: "Social Media Management",
    description: "Content creation, scheduling, and community management to grow your audience.",
    tiers: [
      {
        name: "Basic",
        price: "R2,500/mo",
        features: ["8 posts / month", "2 platforms", "Caption copywriting", "Monthly report"],
      },
      {
        name: "Growth",
        price: "R5,500/mo",
        highlight: true,
        features: ["20 posts / month", "4 platforms", "Stories & reels", "Engagement replies", "Bi-weekly report"],
      },
      {
        name: "Full Management",
        price: "R10,000/mo",
        features: ["Daily posting", "All platforms", "Paid ad management", "Influencer outreach", "Weekly strategy call"],
      },
    ],
  },
  {
    id: "seo",
    icon: <Search size={22} strokeWidth={1.5} />,
    category: "Marketing",
    title: "SEO & Digital Marketing",
    description: "Get found on Google. Data-driven strategies that drive organic traffic and leads.",
    tiers: [
      {
        name: "Local SEO",
        price: "R3,000/mo",
        features: ["Keyword research", "On-page optimisation", "Google Business setup", "Monthly report"],
      },
      {
        name: "Growth SEO",
        price: "R6,500/mo",
        highlight: true,
        features: ["Technical SEO audit", "Link building", "Content strategy", "Competitor analysis", "Bi-weekly reporting"],
      },
      {
        name: "Full Digital",
        price: "R14,000/mo",
        features: ["SEO + Google Ads", "Meta Ads management", "Conversion tracking", "Landing page builds", "Dedicated strategist"],
      },
    ],
  },
  {
    id: "mobile",
    icon: <Smartphone size={22} strokeWidth={1.5} />,
    category: "Development",
    title: "Mobile App",
    description: "iOS & Android apps built with React Native — one codebase, two platforms.",
    tiers: [
      {
        name: "MVP App",
        price: "R25,000",
        features: ["Core screens", "User authentication", "Push notifications", "App store submission"],
      },
      {
        name: "Full App",
        price: "R55,000",
        highlight: true,
        features: ["Custom UI/UX design", "Payment integration", "Offline support", "Admin dashboard", "6-week delivery"],
      },
      {
        name: "Enterprise App",
        price: "Custom",
        features: ["Complex architecture", "Third-party APIs", "Analytics suite", "Ongoing maintenance", "SLA contract"],
      },
    ],
  },
];

/* ─── Tier Badge Icons ───────────────────────────────────── */
const TIER_ICONS = [
  <Zap size={12} />,
  <Sparkles size={12} />,
  <Crown size={12} />,
];

/* ─── Component ──────────────────────────────────────────── */
export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(SERVICES.map((s) => s.category)))];
  const filtered = filter === "All" ? SERVICES : SERVICES.filter((s) => s.category === filter);

  return (
    <section id="services" className="py-16 sm:py-28 bg-surface-soft border-y border-subtle relative overflow-hidden">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 space-y-4 sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[9px] uppercase tracking-[0.26em] text-brand-secondary font-mono sm:text-[10px] sm:tracking-[0.4em]">How I Help</span>
          <h2 className="text-[clamp(2rem,9vw,3rem)] font-medium tracking-tight leading-[1.08] md:text-5xl">
            Services &amp; Pricing
          </h2>
          <p className="text-brand-secondary font-light text-base sm:text-lg">
            Pricing built for founders and teams who need practical systems, not buzzwords.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-2 rounded-full text-[10px] tracking-wider uppercase font-mono border transition-all duration-200 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-widest
                ${filter === cat
                  ? "bg-white text-black border-white"
                  : "bg-white/5 text-brand-secondary border-white/10 hover:border-white/30 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((service, i) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                className="group cursor-pointer"
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                {/* Card */}
                <div className={`relative rounded-2xl border p-5 h-full flex flex-col transition-all duration-300 sm:p-6
                  ${activeService === service.id
                    ? "bg-white/10 border-white/30 shadow-lg shadow-black/30"
                    : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                  }`}
                >
                  {service.badge && (
                    <span className="absolute -top-3 left-5 rounded-full bg-white px-3 py-0.5 text-[8px] font-mono uppercase tracking-wider text-black sm:text-[9px] sm:tracking-widest">
                      {service.badge}
                    </span>
                  )}

                  <div className="flex items-start justify-between mb-5">
                    <div className={`p-3 rounded-xl border transition-all duration-300
                      ${activeService === service.id
                        ? "bg-white/10 border-white/20 text-white"
                        : "bg-white/5 border-white/10 text-brand-secondary group-hover:text-white group-hover:bg-white/10"
                      }`}>
                      {service.icon}
                    </div>
                    <span className="max-w-[7rem] text-right text-[9px] font-mono tracking-wider text-brand-secondary uppercase sm:max-w-none sm:tracking-widest">{service.category}</span>
                  </div>

                  <h3 className="text-base font-medium tracking-tight mb-2 group-hover:translate-x-0.5 transition-transform">
                    {service.title}
                  </h3>
                  <p className="text-xs text-brand-secondary leading-relaxed font-light flex-1 mb-5">
                    {service.description}
                  </p>

                  {/* Price preview */}
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <div className="text-[9px] text-brand-secondary font-mono uppercase tracking-wider mb-0.5 sm:tracking-widest">Starting from</div>
                      <div className="text-lg font-semibold tracking-tight">{service.tiers[0].price}</div>
                    </div>
                    <div className={`shrink-0 flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider transition-all duration-300
                      ${activeService === service.id ? "text-white" : "text-brand-secondary group-hover:text-white"}`}>
                      {activeService === service.id ? "Hide" : "Pricing"}
                      <ArrowRight size={10} className={`transition-transform duration-300 ${activeService === service.id ? "rotate-90" : "group-hover:translate-x-0.5"}`} />
                    </div>
                  </div>
                </div>

                {/* Pricing Tiers — Expanded */}
                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-3">
                        {service.tiers.map((tier, ti) => (
                          <div
                            key={tier.name}
                            className={`rounded-xl border p-4 relative transition-all
                              ${tier.highlight
                                ? "bg-white/10 border-white/25 shadow-sm"
                                : "bg-white/[0.03] border-white/10"
                              }`}
                          >
                            {tier.highlight && (
                              <span className="absolute -top-2.5 left-4 px-2 py-0.5 rounded-full bg-white text-black text-[8px] font-mono tracking-widest uppercase">
                                Best Value
                              </span>
                            )}
                            <div className="flex items-start justify-between gap-3 mb-3">
                              <div className="flex min-w-0 items-center gap-2">
                                <span className={`flex items-center justify-center w-5 h-5 rounded-full text-[10px]
                                  ${tier.highlight ? "bg-white text-black" : "bg-white/10 text-brand-secondary"}`}>
                                  {TIER_ICONS[ti]}
                                </span>
                                <span className="text-xs font-medium tracking-tight">{tier.name}</span>
                              </div>
                              <span className="shrink-0 text-right text-sm font-semibold tracking-tight">{tier.price}</span>
                            </div>
                            <ul className="space-y-1.5">
                              {tier.features.map((f) => (
                                <li key={f} className="flex items-start gap-2 text-[11px] text-brand-secondary font-light">
                                  <CheckCircle2 size={11} className="text-white mt-0.5 flex-shrink-0" />
                                  {f}
                                </li>
                              ))}
                            </ul>
                            <button className={`mt-4 w-full py-2 rounded-lg text-[10px] font-mono uppercase tracking-widest border transition-all duration-200
                              ${tier.highlight
                                ? "bg-white text-black border-white hover:bg-white/90"
                                : "bg-transparent text-brand-secondary border-white/15 hover:border-white/40 hover:text-white"
                              }`}>
                              Request quote
                            </button>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Banner */}
        <motion.div
          className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center relative overflow-hidden sm:mt-20 sm:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
          <span className="text-[9px] uppercase tracking-[0.22em] text-brand-secondary font-mono block mb-4 sm:text-[10px] sm:tracking-[0.4em]">Not sure where to start?</span>
          <h3 className="text-[clamp(1.75rem,8vw,2.25rem)] md:text-4xl font-medium tracking-tight leading-[1.1] mb-3">
            Let's build something great together
          </h3>
          <p className="text-brand-secondary font-light mb-8 max-w-xl mx-auto">
            Get a free consultation and custom quote tailored to your specific goals and budget.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="https://wa.me/27646261102"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-full text-sm font-medium tracking-tight hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 sm:px-8"
            >
              WhatsApp Us
              <ArrowRight size={14} />
            </a>
            <a
              href="tel:0646261102"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white border border-white/20 rounded-full text-sm font-medium tracking-tight hover:border-white/50 transition-all duration-200 hover:-translate-y-0.5 sm:px-8"
            >
              Call 064 626 1102
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
