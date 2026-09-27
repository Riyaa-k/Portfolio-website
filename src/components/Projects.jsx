import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaChartBar,
  FaChartPie,
  FaDatabase,
  FaLaptopCode,
  FaRobot,
} from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';
import SpotlightCard from './ui/SpotlightCard';

const projects = [
  {
    title: 'Self-Service Dashboard & Visualization Platform',
    meta: '25+ chart types',
    accent: '#22d3ee',
    summary:
      'A no-code dashboarding platform that carries non-technical users from raw data to a published dashboard.',
    points: [
      'End-to-end builder: data upload, computed columns, filters, field mapping across 25+ chart types, and a drag-and-drop canvas.',
      'Formula engine for virtual computed columns with Excel-style conditionals plus string, date and math functions.',
      'Pluggable microservices for server-side calculations that degrade gracefully when APIs are unavailable.',
    ],
    tech: ['Angular 20', 'TypeScript', 'ECharts', 'Angular Material', 'Nx'],
    Icon: FaChartPie,
  },
  {
    title: 'LLM-Powered Job Aggregation Pipeline',
    meta: 'Personal project',
    accent: '#a78bfa',
    summary:
      'A job aggregator that crawls career portals and uses an LLM to keep only the relevant tech roles.',
    points: [
      'Crawls Workday and Eightfold.ai portals, using an LLM to filter out non-tech listings.',
      'Two-pass pipeline: classify departments first, then enrich with experience level and work mode.',
      'Per-company caching, a persistent blacklist and a regex pre-filter cut redundant LLM calls and cost.',
      'Incremental and interruption-safe — writes the combined JSON/CSV feed after every company.',
    ],
    tech: ['Python', 'Groq LLM API', 'Web Scraping', 'JSON/CSV'],
    Icon: FaRobot,
  },
  {
    title: 'B2B SaaS ERP Platform',
    meta: 'Jun 2024 — Dec 2024',
    accent: '#60a5fa',
    summary:
      'Production-ready UI for a Global Fortune 500 client in Angular, integrating REST APIs with a Java backend for real-time pricing updates.',
    points: [
      'Designed responsive layouts in Figma and shipped them as reusable Angular components.',
      'Managed collaboration through Git and Jira to land releases against tight client deadlines.',
    ],
    tech: ['Angular', 'Figma', 'REST APIs', 'Java', 'Git', 'Jira'],
    Icon: FaLaptopCode,
  },
  {
    title: 'Data Quality & Relevancy System',
    meta: 'Nov 2024 — Apr 2025',
    accent: '#f472b6',
    summary:
      'Led UI development in Angular, building dashboards with Apache ECharts and NGX Charts for dynamic data visualization.',
    points: [
      'Contributed backend data-quality features in Python alongside the visualization layer.',
      'Optimised UX with responsive layouts and disciplined Git workflows.',
    ],
    tech: ['Angular', 'Apache ECharts', 'NGX Charts', 'Python', 'Figma', 'Git'],
    Icon: FaChartBar,
  },
  {
    title: 'Enterprise Data Visualization Framework',
    meta: 'Jan 2024 — Apr 2025',
    accent: '#4ade80',
    summary:
      'A reusable Angular UI framework for data visualization, built on Angular Workspace and Tailwind CSS for scalable, modular components.',
    points: [
      'Automated component creation, reducing development time by 25%.',
      'Standardised charting across teams with Angular Material and ECharts building blocks.',
    ],
    tech: ['Angular', 'Angular Workspace', 'Tailwind CSS', 'Angular Material', 'ECharts'],
    Icon: FaDatabase,
  },
];

const EASE = [0.22, 1, 0.36, 1];

const ProjectRow = ({ project, index }) => {
  const reduce = useReducedMotion();
  const flipped = index % 2 === 1;
  const { accent } = project;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{ visible: { transition: { staggerChildren: reduce ? 0 : 0.12 } } }}
      className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center"
    >
      {/* Visual panel */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: reduce ? 0 : flipped ? 50 : -50, scale: 0.95 },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.7, ease: EASE },
          },
        }}
        className={flipped ? 'md:order-2' : ''}
      >
        <SpotlightCard
          className="relative aspect-[5/4] sm:aspect-[16/10] rounded-3xl overflow-hidden
            border border-white/10 bg-white/[0.02] grid place-items-center
            transition-colors duration-500"
        >
          {/* accent wash */}
          <div
            className="absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
            style={{
              background: `radial-gradient(ellipse 70% 70% at 50% 120%, ${accent}38, transparent 70%)`,
            }}
          />
          {/* fine grid */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            aria-hidden="true"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.35) 1px, transparent 1px)',
              backgroundSize: '38px 38px',
              maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 75%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 75%)',
            }}
          />

          {/* ghost index */}
          <span
            className="absolute top-4 right-6 text-[5rem] sm:text-[6.5rem] font-bold leading-none
              select-none pointer-events-none transition-colors duration-500"
            aria-hidden="true"
            style={{ color: `${accent}1f` }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <motion.div
            animate={reduce ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
            className="relative z-10"
          >
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 grid place-items-center rounded-3xl
                border backdrop-blur-sm transition-transform duration-500 group-hover:scale-110"
              style={{
                borderColor: `${accent}59`,
                background: `${accent}1a`,
                boxShadow: `0 0 50px ${accent}33`,
              }}
            >
              <project.Icon className="text-3xl sm:text-4xl" style={{ color: accent }} />
            </div>
          </motion.div>
        </SpotlightCard>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: reduce ? 0 : flipped ? -50 : 50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
        }}
        className={flipped ? 'md:order-1' : ''}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8" style={{ background: accent }} aria-hidden="true" />
          <span
            className="text-[11px] uppercase tracking-[0.2em]"
            style={{ color: accent }}
          >
            {project.meta}
          </span>
        </div>

        <h3
          className="text-2xl md:text-[1.75rem] font-semibold text-white leading-snug mb-4
            transition-colors duration-300"
        >
          {project.title}
        </h3>

        <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-5">
          {project.summary}
        </p>

        <ul className="space-y-2.5 mb-7">
          {project.points.map((point) => (
            <li
              key={point}
              className="relative pl-5 text-xs md:text-sm text-gray-500 leading-relaxed"
            >
              <span
                className="absolute left-0 top-[0.5em] w-1.5 h-1.5 rounded-full"
                style={{ background: `${accent}b3` }}
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="tech-chip text-[11px] font-medium px-3 py-1.5 rounded-full border
                text-gray-300 border-white/10 bg-white/[0.03]
                transition-all duration-300 hover:text-white hover:-translate-y-0.5"
              style={{ '--chip-accent': accent }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.article>
  );
};

const Projects = () => (
  <section id="projects" className="pt-24 pb-24 bg-black relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <SectionHeading eyebrow="Selected work" title="Projects" />

      <div className="flex flex-col gap-20 md:gap-28 max-w-6xl mx-auto mt-4">
        {projects.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
