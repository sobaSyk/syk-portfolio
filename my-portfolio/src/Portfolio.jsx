import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Hammer, Rocket, ChevronRight } from "lucide-react";

// ---- Quick customization (edit these) ----
const PROFILE = {
  name: "Syukran Shaari",
  title: "Web Developer (HTML • CSS • JS • Bootstrap)",
  blurb:
    "I build clean, responsive interfaces with modern JavaScript. One year of hands-on experience shipping landing pages, dashboards, and component libraries.",
  location: "Shah Alam, Selangor",
  email: "syukranshaari21@gmail.com",
  phone: "+6018-2679479",
  github: "https://github.com/yourhandle",
  linkedin: "https://www.linkedin.com/in/syukranshaari/",
  resumeUrl: "/resume.pdf", // Replace with actual file path
};

const SKILLS = [
  { name: "HTML5", level: 85 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript (ES6+)", level: 80 },
  { name: "Bootstrap", level: 80 },
  { name: "Tailwind CSS", level: 75 },
  { name: "React", level: 70 },
  { name: "Git", level: 70 },
  { name: "REST APIs", level: 65 },
];

const PROJECTS = [
  {
    title: "Responsive Landing Page",
    stack: ["HTML", "CSS", "Bootstrap"],
    description:
      "Marketing landing with sticky navbar, hero CTA, pricing cards, and newsletter integration. Lighthouse 95+ on mobile.",
    highlights: ["Pixel-perfect sections", "Accessible forms", "SEO-friendly head tags"],
    link: "#",
  },
  {
    title: "Admin Dashboard Widgets",
    stack: ["React", "Tailwind", "Chart.js"],
    description:
      "KPI dashboard with reusable cards, charts, and dark mode. Built design tokens and utility components.",
    highlights: ["Component-driven", "Themeable", "Lazy-loaded charts"],
    link: "#",
  },
  {
    title: "UI Component Library",
    stack: ["HTML", "CSS", "JS"],
    description:
      "Mini library of buttons, modals, and tabs. Documented with examples and code snippets.",
    highlights: ["BEM utilities", "Keyboard navigation", "Docs site"],
    link: "#",
  },
];

const EXPERIENCE = [
  {
    role: "Junior Web Developer",
    company: "Company Name",
    period: "Nov 2024 – Oct 2025",
    points: [
      "Built 10+ responsive pages with Bootstrap and vanilla JS.",
      "Converted Figma designs into clean, semantic HTML/CSS.",
      "Improved performance scores (LCP under 2.5s).",
    ],
  },
  {
    role: "Web Dev Intern",
    company: "Another Company",
    period: "Jun 2024 – Oct 2024",
    points: [
      "Maintained marketing site; fixed CSS bugs and layout issues.",
      "Wrote JS utilities for accordions, carousels, and form validation.",
      "Collaborated via Git, PR reviews, and standups.",
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 py-16 md:py-24">
    <motion.div {...fadeUp} className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </motion.div>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm">
    {children}
  </span>
);

const Progress = ({ value }) => (
  <div className="w-full rounded-xl border p-2">
    <div className="h-2 w-full rounded-md bg-gray-200 dark:bg-gray-800">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="h-2 rounded-md bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
      />
    </div>
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border shadow-sm p-6 bg-white/70 dark:bg-gray-900/60 backdrop-blur ${className}`}>
    {children}
  </div>
);

export default function Portfolio() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950 text-gray-900 dark:text-gray-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b bg-white/70 dark:bg-gray-950/60 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="font-semibold tracking-tight">
            {PROFILE.name.split(" ")[0]}
          </a>
          <div className="hidden gap-4 md:flex">
            {[
              ["About", "about"],
              ["Skills", "skills"],
              ["Projects", "projects"],
              ["Experience", "experience"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-sm hover:underline">
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-xl border hover:shadow">
              <Github size={18} />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-xl border hover:shadow">
              <Linkedin size={18} />
            </a>
            <a href={PROFILE.resumeUrl} className="hidden md:inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:shadow">
              <Download size={16} /> <span>Resume</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-indigo-200 blur-3xl opacity-40 dark:opacity-20" />
          <div className="absolute -right-24 top-40 h-72 w-72 rounded-full bg-emerald-200 blur-3xl opacity-40 dark:opacity-20" />
          <div className="absolute left-1/3 -bottom-16 h-48 w-48 rounded-full bg-sky-200 blur-3xl opacity-40 dark:opacity-20" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-28"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500">Open to Work</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-semibold leading-tight">
              {PROFILE.name}
            </h1>
            <p className="mt-2 text-lg md:text-xl text-gray-700 dark:text-gray-300">
              {PROFILE.title}
            </p>
            <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-400">
              {PROFILE.blurb}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 text-white px-4 py-2 text-sm hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform shadow">
                <Rocket size={16} /> View Projects
              </a>
              <a href={PROFILE.resumeUrl} className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm">
                <Download size={16} /> Download Resume
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs md:text-sm">
              {["HTML","CSS","JavaScript","Bootstrap","Tailwind","React"].map(s => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
          <Card className="md:ml-auto">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-500" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Based in</p>
                <p className="font-medium">{PROFILE.location}</p>
                <div className="mt-2 flex gap-2 text-sm">
                  <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-xl border px-3 py-1"><Mail size={14}/>{PROFILE.email}</a>
                  <a href={`tel:${PROFILE.phone}`} className="inline-flex items-center gap-2 rounded-xl border px-3 py-1"><Phone size={14}/>{PROFILE.phone}</a>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: "Projects", value: 12 },
                { label: "Pages Shipped", value: 30 },
                { label: "Lighthouse 90+", value: 8 },
              ].map((m) => (
                <div key={m.label} className="rounded-xl border p-4 text-center">
                  <p className="text-2xl font-semibold">{m.value}</p>
                  <p className="text-xs text-gray-500">{m.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <div className="grid gap-6 md:grid-cols-2">
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            I focus on turning designs into accessible, responsive web experiences. I write semantic HTML, modern CSS (including Flexbox and Grid), and progressive enhancement with vanilla JS. Recently, I’ve been using Tailwind and React to build component-driven UIs.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {["Responsive Layouts","Accessibility (a11y)","Performance Basics","Reusable Components","Cross-browser CSS","Git & PRs"].map((t) => (
              <div key={t} className="rounded-xl border p-4 text-sm">
                <div className="flex items-center gap-2"><Code size={16}/><span className="font-medium">{t}</span></div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid gap-4 md:grid-cols-2">
          {SKILLS.map((s) => (
            <div key={s.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{s.name}</span>
                <span className="text-xs text-gray-500">{s.level}%</span>
              </div>
              <Progress value={s.level} />
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Featured Projects">
        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <Card key={p.title}>
              <div className="h-36 w-full rounded-xl bg-gradient-to-tr from-indigo-200 via-sky-200 to-emerald-200 dark:from-indigo-900/40 dark:via-sky-900/40 dark:to-emerald-900/40" />
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{p.description}</p>
                </div>
                <a className="rounded-lg border p-2" href={p.link} target="_blank" rel="noreferrer" aria-label="Open project">
                  <ExternalLink size={16} />
                </a>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-6">
          {EXPERIENCE.map((e) => (
            <div key={e.role} className="relative rounded-2xl border p-6">
              <div className="absolute -left-3 top-6 hidden h-6 w-6 -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-500 md:block"/>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-lg font-semibold">{e.role} • {e.company}</p>
                <span className="text-sm text-gray-500">{e.period}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Let’s work together">
        <Card>
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-lg font-medium">Have a role that fits my toolkit?</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                I’m available for junior web developer roles and freelance UI builds. I can share code samples and a live walkthrough.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 text-white px-4 py-2 hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform shadow">
                  <Mail size={16}/> Email Me
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2">
                  <Linkedin size={16}/> Connect on LinkedIn
                </a>
              </div>
            </div>
            <div className="mx-auto md:mx-0">
              <div className="rounded-2xl border p-6 text-center">
                <Hammer className="mx-auto" />
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Available Immediately</p>
                <a href={PROFILE.resumeUrl} className="mt-3 inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm">
                  <Download size={16}/> Get Resume
                </a>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-gray-500">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>© {year} {PROFILE.name}. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-2">
              <a href="#home" className="inline-flex items-center gap-1 rounded-xl border px-3 py-1">
                Back to top <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}