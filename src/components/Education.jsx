import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';

const experiences = [
  {
    date: 'Apr 2024 - Present',
    title: 'Software Engineer',
    company: 'BXP Support and Solutions Private Limited',
    location: 'Bengaluru, India',
    current: true,
    points: [
      'Built scalable, responsive web applications in Angular and React with a mobile-first approach, delivering end-to-end features that improved project outcomes by ~30% across client engagements.',
      'Integrated RESTful APIs with Java Spring Boot microservices, automating pipelines and adding CI/CD to cut development time by 25%.',
      'Developed backend services in Python and Java for data-driven applications, enabling modular architecture, real-time analytics and efficient data processing.',
      'Managed the enterprise UI framework for new client requirements and feature rollouts, and led knowledge-transfer sessions to keep delivery consistent and scalable.',
      'Optimised large-scale data rendering with lazy loading, aggregation and dynamic filtering, plus Webpack tree shaking and code splitting — boosting performance by 35%.',
    ],
  },
  {
    date: 'Dec 2023 - Feb 2024',
    title: 'Full-Stack Developer',
    company: 'Freelance',
    location: 'Remote',
    points: [
      'Architected a healthcare platform: a React Native patient app alongside React web dashboards for hospital management, appointment scheduling and admin controls.',
      'Built a Java and PostgreSQL backend with secure OTP verification and role-based access control across portals.',
      'Delivered a full-stack e-commerce application, handling API integration, deployment, testing and ongoing maintenance.',
    ],
  },
  {
    date: 'Jun 2023 - Sep 2023',
    title: 'Software Developer Intern',
    company: 'Kalvium',
    location: 'Coimbatore, India',
    points: [
      'Developed reusable React components and Python backend services, improving UI performance and accessibility.',
      'Maintained code quality through active code reviews and disciplined Git/GitHub version control in an Agile team.',
    ],
  },
];

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Jabalpur Engineering College',
    result: 'CGPA 8.9 / 10',
    year: '2023',
  },
  {
    degree: 'B.Sc. in Computer Science',
    school: "St. Aloysius' College (Autonomous)",
    result: '85%',
    year: '2021',
  },
];

const EASE = [0.22, 1, 0.36, 1];

const Experience = () => {
  const trackRef = useRef(null);
  const reduce = useReducedMotion();

  // Draw the spine in step with the reader's scroll through the timeline.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 75%', 'end 55%'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });

  return (
    <section id="experience" className="pt-24 pb-24 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Where I've worked" title="Experience" />

        <div ref={trackRef} className="relative w-full md:max-w-[85%] mx-auto pl-10 md:pl-14">
          {/* Track + animated fill */}
          <div className="absolute left-[14px] md:left-[18px] top-2 bottom-2 w-[2px] bg-white/10" />
          <motion.div
            style={{ scaleY: reduce ? 1 : scaleY, transformOrigin: 'top' }}
            className="absolute left-[14px] md:left-[18px] top-2 bottom-2 w-[2px]
              bg-gradient-to-b from-[#19a7ce] to-[#facc15]"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.date}
              initial={{ opacity: 0, x: reduce ? 0 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.1, ease: EASE }}
              className="relative pb-12 last:pb-0 group"
            >
              {/* Node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ type: 'spring', stiffness: 320, damping: 18, delay: index * 0.1 + 0.2 }}
                className="absolute -left-10 md:-left-14 top-0 w-8 h-8 md:w-9 md:h-9 grid place-items-center
                  rounded-full bg-black border-2 border-[#19a7ce] text-[#b9ce19] text-sm
                  group-hover:border-yellow-400 group-hover:text-yellow-400 transition-colors"
              >
                <FaBriefcase />
                {exp.current && !reduce && (
                  <span
                    className="absolute inset-0 rounded-full border-2 border-[#19a7ce] animate-ping opacity-60"
                    aria-hidden="true"
                  />
                )}
              </motion.div>

              <div
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6
                  transition-all duration-300 hover:border-[#19a7ce]/40 hover:bg-white/[0.06]
                  hover:-translate-y-1"
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-lg md:text-xl font-semibold text-yellow-400">{exp.title}</h3>
                  {exp.current && (
                    <span
                      className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full
                        bg-[#19a7ce]/15 text-[#19a7ce] border border-[#19a7ce]/30"
                    >
                      Current
                    </span>
                  )}
                </div>

                <p className="text-base text-white mb-3">{exp.company}</p>

                <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs md:text-sm text-[#19a7ce] mb-4">
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {exp.date}
                  </span>
                  <span className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    {exp.location}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 text-xs md:text-sm text-gray-400 leading-relaxed
                        before:content-[''] before:absolute before:left-0 before:top-[0.55em]
                        before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#19a7ce]/70"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-20">
          <SectionHeading eyebrow="Academics" title="Education" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: reduce ? 0 : 0.12 } } }}
            className="grid gap-5 sm:grid-cols-2 md:max-w-[85%] mx-auto"
          >
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                }}
                whileHover={reduce ? {} : { y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6
                  transition-colors duration-300 hover:border-[#19a7ce]/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="w-11 h-11 shrink-0 grid place-items-center rounded-xl
                      bg-[#19a7ce]/10 text-[#19a7ce] text-lg"
                  >
                    <FaGraduationCap />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold leading-snug">{edu.degree}</h3>
                    <p className="text-sm text-gray-400 mt-1">{edu.school}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full
                          bg-[#19a7ce]/15 text-[#19a7ce] border border-[#19a7ce]/25"
                      >
                        {edu.result}
                      </span>
                      <span
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full
                          bg-white/5 text-gray-400 border border-white/10"
                      >
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
