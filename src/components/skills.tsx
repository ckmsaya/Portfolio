import { motion } from "motion/react";
import { useRef, useState } from "react";

/* ── Skill Data ─────────────────────────────────────────── */
const SKILLS = [
  {
    id: "html-css",
    label: "HTML & CSS",
    level: 95,
    tag: "Foundation",
    desc: "Pixel-perfect layouts, animations, and responsive design that breathe.",
    color: "#e8643a",
    index: "01",
  },
  {
    id: "js",
    label: "JavaScript",
    level: 90,
    tag: "Core",
    desc: "DOM manipulation, event-driven logic, and modern ES2024+ patterns.",
    color: "#f0c040",
    index: "02",
  },
  {
    id: "apis",
    label: "APIs & Async JS",
    level: 88,
    tag: "Core",
    desc: "Fetch, Axios, WebSockets, REST, and async/await mastery.",
    color: "#58c4dc",
    index: "03",
  },
  {
    id: "react",
    label: "React",
    level: 92,
    tag: "Frontend",
    desc: "Component architecture, hooks, context, and state patterns that scale.",
    color: "#61dafb",
    index: "04",
  },
  {
    id: "react-adv",
    label: "Advanced React",
    level: 85,
    tag: "Frontend",
    desc: "Performance optimization, compound components, render patterns & portals.",
    color: "#a78bfa",
    index: "05",
  },
  {
    id: "ts",
    label: "TypeScript",
    level: 83,
    tag: "Language",
    desc: "Strict typing, generics, utility types, and zero-runtime-error confidence.",
    color: "#3178c6",
    index: "06",
  },
  {
    id: "next",
    label: "Next.js",
    level: 87,
    tag: "Framework",
    desc: "SSR, SSG, App Router, server actions, and edge-ready deployments.",
    color: "#ffffff",
    index: "07",
  },
  {
    id: "node",
    label: "Node.js",
    level: 80,
    tag: "Backend",
    desc: "Event loop mastery, streams, file systems, and server-side JavaScript.",
    color: "#68a063",
    index: "08",
  },
  {
    id: "express",
    label: "Express",
    level: 82,
    tag: "Backend",
    desc: "RESTful APIs, middleware chains, auth flows, and rate limiting.",
    color: "#eeeeee",
    index: "09",
  },
  {
    id: "db",
    label: "Databases",
    level: 78,
    tag: "Backend",
    desc: "PostgreSQL, MongoDB, Prisma ORM, Redis caching, and query optimisation.",
    color: "#4db33d",
    index: "10",
  },
  {
    id: "ai",
    label: "AI Engineering",
    level: 86,
    tag: "Emerging",
    desc: "LLM APIs, RAG pipelines, prompt engineering, and AI-powered product builds.",
    color: "#f472b6",
    index: "11",
  },
  {
    id: "testing",
    label: "Testing",
    level: 75,
    tag: "Quality",
    desc: "Jest, Vitest, React Testing Library, and end-to-end with Playwright.",
    color: "#22c55e",
    index: "12",
  },
  {
    id: "ui",
    label: "UI Design",
    level: 88,
    tag: "Design",
    desc: "Figma, design systems, micro-interactions, and interfaces that feel alive.",
    color: "#fb923c",
    index: "13",
  },
];

const TAG_GROUPS = ["All", "Frontend", "Backend", "Design", "Emerging"];

/* ── Skill Row ──────────────────────────────────────────── */
function SkillRow({
  skill,
  i,
  active,
  onHover,
}: {
  skill: (typeof SKILLS)[0];
  i: number;
  active: boolean;
  onHover: (id: string | null) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => onHover(skill.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onHover(active ? null : skill.id)}
      className={`group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-6 py-5 px-3 -mx-3 rounded-xl border transition-all duration-300 cursor-pointer md:cursor-default sm:px-4 sm:-mx-4
        ${active
          ? "border-white/10 bg-white/[0.04]"
          : "border-transparent hover:border-white/5 hover:bg-white/[0.02]"
        }`}
    >
      {/* Top Row: Index + Label + Level */}
        <div className="flex items-center gap-3 w-full sm:gap-6">
        {/* Index */}
        <span className="hidden md:block w-10 shrink-0 font-mono text-[10px] text-brand-secondary/40 tracking-widest">
          {skill.index}
        </span>

        {/* Dot + Label */}
        <div className="flex min-w-0 items-center gap-3 flex-1 md:w-48 md:flex-none md:shrink-0">
          <span
            className="w-2 h-2 rounded-full shrink-0 transition-all duration-300"
            style={{
              background: skill.color,
              boxShadow: active ? `0 0 10px ${skill.color}88` : "none",
            }}
          />
          <span
            className="font-medium text-sm md:text-base tracking-tight transition-colors duration-300"
            style={{ color: active ? skill.color : "inherit" }}
          >
            {skill.label}
          </span>
        </div>

        {/* Tag */}
        <span className="hidden lg:block w-24 shrink-0 text-[9px] font-mono uppercase tracking-[0.2em] text-brand-secondary/50">
          {skill.tag}
        </span>

        {/* Level */}
        <span className="w-10 shrink-0 text-right font-mono text-xs text-brand-secondary/50">
          {skill.level}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full md:flex-1">
        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: skill.color }}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 + 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>

      {/* Desc — expands on tap/hover */}
      <motion.div
        initial={false}
        animate={{ opacity: active ? 1 : 0, maxHeight: active ? 100 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-full md:hidden overflow-hidden"
      >
        <p className="text-xs text-brand-secondary font-light leading-relaxed mt-3 pb-2">
          {skill.desc}
        </p>
      </motion.div>

      {/* Desc on desktop */}
      <motion.div
        initial={false}
        animate={{ opacity: active ? 1 : 0, maxWidth: active ? 320 : 0 }}
        transition={{ duration: 0.3 }}
        className="hidden xl:block overflow-hidden"
      >
        <p className="text-xs text-brand-secondary font-light leading-relaxed whitespace-nowrap pl-4 border-l border-white/10">
          {skill.desc}
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ── Main Component ─────────────────────────────────────── */
export default function Skills() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);

  const filtered =
    activeTag === "All"
      ? SKILLS
      : SKILLS.filter(
          (s) =>
            s.tag === activeTag ||
            (activeTag === "Frontend" && ["Foundation", "Core", "Language", "Framework"].includes(s.tag)) ||
            (activeTag === "Backend" && s.tag === "Backend") ||
            (activeTag === "Design" && s.tag === "Design") ||
            (activeTag === "Emerging" && s.tag === "Emerging")
        );

  const totalSkills = SKILLS.length;
  const avgLevel = Math.round(SKILLS.reduce((a, s) => a + s.level, 0) / totalSkills);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-surface-soft relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(97,218,251,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-white/5 pb-8 gap-8 sm:mb-16 sm:pb-10">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[9px] uppercase tracking-[0.26em] text-brand-secondary font-mono sm:text-[10px] sm:tracking-[0.4em]">
              Arsenal
            </span>
            <h2 className="text-[clamp(2rem,9vw,3rem)] md:text-5xl font-medium tracking-tight leading-[1.08]">
              Skills &{" "}
              <span className="italic font-light text-brand-secondary">
                Expertise
              </span>
            </h2>
            <p className="text-brand-secondary font-light text-base max-w-md leading-relaxed">
              Every tool I've sharpened. Every concept I've wrestled with
              until it clicked. This is the stack I build with.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-8 shrink-0 sm:gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="text-right">
              <div className="text-3xl font-medium tracking-tighter tabular-nums">
                {totalSkills}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-brand-secondary font-mono mt-1">
                Skills
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-medium tracking-tighter tabular-nums">
                {avgLevel}
                <span className="text-brand-secondary text-xl">%</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-brand-secondary font-mono mt-1">
                Avg. Mastery
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Filter Tabs ── */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          {TAG_GROUPS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-2 rounded-full text-[10px] font-mono uppercase tracking-[0.14em] border transition-all duration-200 sm:px-4 sm:py-1.5 sm:tracking-[0.2em]
                ${activeTag === tag
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-brand-secondary border-white/10 hover:border-white/30 hover:text-white"
                }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* ── Column Headers ── */}
        <div className="flex items-center gap-3 px-3 mb-2 sm:gap-6 sm:px-4">
          <span className="hidden md:block w-10 shrink-0 font-mono text-[9px] uppercase tracking-widest text-brand-secondary/30">#</span>
          <span className="flex-1 md:w-48 md:flex-none md:shrink-0 font-mono text-[9px] uppercase tracking-widest text-brand-secondary/30">Skill</span>
          <span className="hidden lg:block w-24 shrink-0 font-mono text-[9px] uppercase tracking-widest text-brand-secondary/30">Category</span>
          <span className="flex-1 hidden md:block font-mono text-[9px] uppercase tracking-widest text-brand-secondary/30">Proficiency</span>
          <span className="w-10 text-right font-mono text-[9px] uppercase tracking-widest text-brand-secondary/30">Lvl</span>
        </div>

        {/* ── Skill Rows ── */}
        <div className="space-y-0">
          {filtered.map((skill, i) => (
            <SkillRow
              key={skill.id}
              skill={skill}
              i={i}
              active={activeId === skill.id}
              onHover={setActiveId}
            />
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10 border-t border-white/5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-brand-secondary font-light text-sm leading-relaxed max-w-md">
            The craft never stops. Currently deepening my AI Engineering skills
            and exploring edge runtimes.{" "}
            <span className="text-white">Always learning.</span>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 group text-sm font-medium tracking-tight hover:text-white transition-colors text-brand-secondary"
          >
            <span>Let's build something</span>
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 group-hover:bg-white/5 transition-all duration-200 text-xs">
              →
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
