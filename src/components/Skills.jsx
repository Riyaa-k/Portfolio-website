import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import TiltCard from './ui/TiltCard'

// Core stack — shown as icon cards. Nothing here is repeated below.
const coreSkills = [
  { name: 'HTML 5', img: '/assets/img/html-5.png' },
  { name: 'CSS 3', img: '/assets/img/css-3.png' },
  { name: 'JavaScript', img: '/assets/img/js.png' },
  { name: 'TypeScript', img: '/assets/img/typescript.png' },
  { name: 'React', img: '/assets/img/react.png' },
  { name: 'Angular', img: '/assets/img/angular.png' },
  { name: 'Node.js', img: '/assets/img/node.png' },
  { name: 'Python', img: '/assets/img/ppython.jpg' },
  { name: 'MongoDB', img: '/assets/img/mongo.png' },
  { name: 'Git', img: '/assets/img/git.png' },
]

// Everything else, grouped. Deliberately excludes the icon grid above.
const categories = [
  {
    title: 'Backend & Data',
    items: [
      'Java',
      'Spring Boot',
      'Express.js',
      'REST APIs',
      'Microservices',
      'PostgreSQL',
      'SQL',
      'Keycloak',
      'Auth & RBAC',
    ],
  },
  {
    title: 'Frontend & Design',
    items: [
      'React Native',
      'RxJS',
      'Material UI',
      'ECharts',
      'Chart.js',
      'Figma',
      'UI/UX Design',
      'Responsive & Mobile-First',
      'Accessibility',
    ],
  },
  {
    title: 'AI & Automation',
    items: ['LLM API integration', 'Prompt design', 'Web scraping', 'Data pipelines'],
  },
  {
    title: 'Tooling & Practices',
    items: ['GitHub', 'Nx Monorepo', 'Webpack', 'CI/CD', 'Jira', 'Agile/Scrum'],
  },
]

const EASE = [0.22, 1, 0.36, 1]

const Subhead = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-4 max-w-5xl mx-auto mb-7"
  >
    <span className="text-[11px] uppercase tracking-[0.22em] text-gray-500 whitespace-nowrap">
      {children}
    </span>
    <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
  </motion.div>
)

const Skills = () => {
  const reduce = useReducedMotion()

  return (
    <section id="skills" className="pt-24 pb-24 bg-black relative overflow-hidden">
      {/* soft wash so the grid doesn't sit on flat black */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(25,167,206,0.14), transparent 70%)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading eyebrow="What I work with" title="Skills" align="center" />

        <Subhead>Core stack</Subhead>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            visible: { transition: { staggerChildren: reduce ? 0 : 0.06 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto"
        >
          {coreSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 26, scale: 0.94 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: EASE },
                },
              }}
            >
              <TiltCard
                max={10}
                className="group relative overflow-hidden h-full rounded-2xl border border-white/10
                  bg-white/[0.03] px-4 py-6 flex flex-col items-center justify-center gap-3
                  cursor-pointer transition-colors duration-300
                  hover:border-[#19a7ce]/50 hover:bg-white/[0.07]"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 0%, rgba(25,167,206,0.18), transparent 70%)',
                  }}
                />
                <img
                  src={skill.img}
                  alt={skill.name}
                  loading="lazy"
                  className="w-12 h-12 object-contain transition-transform duration-500
                    group-hover:-translate-y-1.5 group-hover:scale-110"
                  style={{ transform: 'translateZ(40px)' }}
                />
                <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center">
                  {skill.name}
                </h3>
                <span
                  className="h-[2px] w-0 rounded-full bg-gradient-to-r from-[#19a7ce] to-[#facc15]
                    transition-all duration-400 group-hover:w-10"
                />
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16">
          <Subhead>Also working with</Subhead>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: reduce ? 0 : 0.1 } } }}
            className="grid gap-4 sm:grid-cols-2 max-w-5xl mx-auto"
          >
            {categories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6
                  transition-colors duration-300 hover:border-[#19a7ce]/35 hover:bg-white/[0.06]"
              >
                <h3 className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#19a7ce] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19a7ce]" aria-hidden="true" />
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium text-gray-300 bg-white/5 px-3 py-1.5
                        rounded-full border border-white/10 transition-colors
                        hover:text-white hover:border-[#19a7ce]/50 hover:bg-[#19a7ce]/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
