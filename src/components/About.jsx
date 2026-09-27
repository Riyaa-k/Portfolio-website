import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import finalImage from '../assets/img/final.png';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const skills = [
  { name: 'Frontend (React / Angular)', percentage: 95, from: 'from-[#19a7ce]', to: 'to-[#7dd3fc]' },
  { name: 'Backend (Node / Java / Python)', percentage: 88, from: 'from-[#22c55e]', to: 'to-[#86efac]' },
  { name: 'UI/UX Design', percentage: 85, from: 'from-[#6366f1]', to: 'to-[#a78bfa]' },
  { name: 'Git & Collaboration', percentage: 90, from: 'from-[#f43f5e]', to: 'to-[#fb923c]' },
];

const stats = [
  { value: '3', label: 'Years experience' },
  { value: '35%', label: 'Perf. boost' },
  { value: '25%', label: 'Faster delivery' },
];

const SkillBar = ({ skill, index }) => {
  const reduce = useReducedMotion();

  return (
    <div className="mb-5 last:mb-0">
      <div className="flex justify-between text-white text-sm mb-2">
        <span className="font-medium">{skill.name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.15 }}
          className="text-[#19a7ce] tabular-nums"
        >
          {skill.percentage}%
        </motion.span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: reduce ? 0.2 : 1.2,
            delay: reduce ? 0 : 0.2 + index * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`h-full rounded-full bg-gradient-to-r ${skill.from} ${skill.to}`}
        />
      </div>
    </div>
  );
};

const About = () => {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="pt-24 pb-24 bg-black relative">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <div className="flex flex-col md:flex-row justify-evenly items-center gap-10">
          <Reveal direction="right" className="shrink-0">
            <motion.div
              whileHover={reduce ? {} : { scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="relative w-[200px] h-[200px]"
            >
              <div
                className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#19a7ce] to-[#facc15]
                  opacity-60 blur-xl"
                aria-hidden="true"
              />
              <div
                className="relative w-full h-full rounded-full overflow-hidden
                  border-2 border-white/15 bg-blue-200/90"
              >
                <img src={finalImage} alt="Anshita Koshta" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </Reveal>

          <Reveal direction="left" className="w-full lg:max-w-[820px]">
            <div
              className="bg-white/[0.04] backdrop-blur-sm border border-white/10 p-6 md:p-8
                rounded-3xl shadow-xl"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                    Full-stack developer with 3 years of experience in React.js, Angular,
                    Node.js, UI/UX design and Python. I build scalable web applications with
                    solid backends and clean REST API integration, focused on delivering
                    enterprise and data-driven solutions.
                  </p>

                  <Reveal stagger className="grid grid-cols-3 gap-3">
                    {stats.map((stat) => (
                      <Reveal.Item key={stat.label}>
                        <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/10">
                          <div className="text-2xl font-semibold text-[#19a7ce]">{stat.value}</div>
                          <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-1">
                            {stat.label}
                          </div>
                        </div>
                      </Reveal.Item>
                    ))}
                  </Reveal>
                </div>

                <div className="w-full md:w-1/2 md:border-l md:border-white/10 md:pl-8">
                  {skills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
