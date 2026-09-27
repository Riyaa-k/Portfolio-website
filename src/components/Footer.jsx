import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const socials = [
  { href: 'https://github.com/Riyaa-k', label: 'GitHub', Icon: FaGithub },
  { href: 'https://www.linkedin.com/in/anshitakoshta/', label: 'LinkedIn', Icon: FaLinkedin },
  { href: 'mailto:anshitakoshta28@gmail.com', label: 'Email', Icon: FaEnvelope },
]

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div
        className="container mx-auto px-4 flex flex-col sm:flex-row items-center
          justify-between gap-5 text-center sm:text-left"
      >
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Anshita Koshta.
        </p>

        <ul className="flex gap-3">
          {socials.map((social) => (
            <li key={social.label}>
              <motion.a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -4, scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 380, damping: 16 }}
                className="w-9 h-9 grid place-items-center rounded-full border border-white/10
                  text-gray-400 hover:text-[#19a7ce] hover:border-[#19a7ce]/40 transition-colors"
              >
                <social.Icon />
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
