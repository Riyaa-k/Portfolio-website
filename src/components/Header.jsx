import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact-us', label: 'Contact' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll spy: highlight whichever section currently owns the viewport.
  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Don't let the page scroll behind the open drawer.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // Escape closes the drawer.
  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isMenuOpen])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        className={`container mx-auto px-4 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-[72px]' : 'h-[100px]'
        }`}
      >
        <a
          href="#home"
          className="text-white text-2xl md:text-3xl font-semibold tracking-wider group"
        >
          PORTFOLIO
          <span className="text-[#19a7ce] group-hover:text-yellow-400 transition-colors">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = active === item.href
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  isActive ? 'text-black' : 'text-gray-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-[#19a7ce]"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            )
          })}
        </div>

        <button
          className="md:hidden text-white text-2xl relative z-[60]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              className="md:hidden fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#0a0a0a]
                border-l border-white/10 rounded-l-3xl p-10 pt-28 z-50"
            >
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
                className="flex flex-col gap-5"
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, x: 24 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-lg font-medium transition-colors ${
                        active === item.href
                          ? 'text-[#19a7ce]'
                          : 'text-white hover:text-[#19a7ce]'
                      }`}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
