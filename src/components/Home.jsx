import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { motion, useReducedMotion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowDown, FaMapMarkerAlt } from 'react-icons/fa'
import MagneticButton from './ui/MagneticButton'

const socials = [
  { href: 'https://github.com/Riyaa-k', label: 'GitHub', Icon: FaGithub },
  { href: 'https://www.linkedin.com/in/anshitakoshta/', label: 'LinkedIn', Icon: FaLinkedin },
  { href: 'mailto:anshitakoshta28@gmail.com', label: 'Email', Icon: FaEnvelope },
]

const EASE = [0.22, 1, 0.36, 1]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

const Home = () => {
  const typedRef = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Full-Stack Developer',
        'React &amp; Angular Engineer',
        'Backend Developer',
        'UI/UX Enthusiast',
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1800,
      loop: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-black"
    >
      {/* Aurora blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="aurora-blob w-[38rem] h-[38rem] -top-40 -left-32 bg-[#146c94]"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="aurora-blob w-[32rem] h-[32rem] top-1/3 -right-32 bg-[#19a7ce]"
          style={{ animationDelay: '-6s' }}
        />
        <div
          className="aurora-blob w-[26rem] h-[26rem] -bottom-32 left-1/3 bg-[#7c3aed] opacity-30"
          style={{ animationDelay: '-12s' }}
        />
      </div>

      {/* Faint grid */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-[600px] mx-auto text-center"
        >
          <motion.div variants={item} className="relative w-1/2 mx-auto mb-8">
            <div
              className="absolute inset-0 rounded-full bg-[#19a7ce]/25 blur-3xl"
              aria-hidden="true"
            />
            <motion.img
              src="/assets/img/final.png"
              alt="Anshita Koshta"
              animate={reduce ? {} : { y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full drop-shadow-2xl"
            />
          </motion.div>

          <motion.p
            variants={item}
            className="text-sm flex items-center justify-center text-gray-300 mb-4"
          >
            Hello
            <img
              src="/assets/img/Hello.gif"
              alt=""
              aria-hidden="true"
              className="inline mx-1.5"
              width="22"
              height="22"
            />
            , I am
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4"
          >
            <span className="text-white">Anshita </span>
            <span className="text-gradient">Koshta</span>
          </motion.h1>

          <motion.div variants={item} className="h-8 mb-2">
            <span className="text-lg sm:text-xl text-gray-200" ref={typedRef} />
          </motion.div>

          <motion.p
            variants={item}
            className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto mt-4"
          >
            Full-stack developer with 3 years of experience building scalable web
            applications in React, Angular, Node.js and Python.
          </motion.p>

          <motion.p
            variants={item}
            className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4"
          >
            <FaMapMarkerAlt className="text-[#19a7ce]" />
            Bengaluru, India
          </motion.p>

          <motion.ul variants={item} className="flex justify-center gap-3 mt-8 mb-9">
            {socials.map((social) => (
              <li key={social.label}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  whileHover={{ y: -5, scale: 1.12 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 16 }}
                  className="w-11 h-11 grid place-items-center rounded-full border border-white/15
                    bg-white/5 text-[#19a7ce] text-lg backdrop-blur-sm
                    hover:text-yellow-400 hover:border-yellow-400/40 transition-colors"
                >
                  <social.Icon />
                </motion.a>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
            <MagneticButton
              href="#contact-us"
              className="inline-block bg-[#19a7ce] text-black font-medium px-8 py-3 rounded-full
                shadow-lg shadow-[#19a7ce]/25 hover:bg-yellow-400 hover:shadow-yellow-400/25
                transition-colors duration-300"
            >
              Hire me
            </MagneticButton>
            <MagneticButton
              href="#projects"
              strength={0.25}
              className="inline-block border border-white/20 text-white font-medium px-8 py-3
                rounded-full hover:border-[#19a7ce] hover:text-[#19a7ce] transition-colors duration-300"
            >
              View work
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gray-500 hover:text-[#19a7ce]
          transition-colors hidden sm:block"
      >
        <motion.span
          animate={reduce ? {} : { y: [0, 9, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="block text-xl"
        >
          <FaArrowDown />
        </motion.span>
      </motion.a>
    </section>
  )
}

export default Home
