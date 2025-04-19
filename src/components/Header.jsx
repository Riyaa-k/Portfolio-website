import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact-us', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-2 w-full ${isScrolled ? 'shadow-lg' : ''} bg-black z-50 transition-all`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between h-[100px]">
        <a href="/" className="text-white text-3xl font-semibold tracking-wider">PORTFOLIO.</a>
        
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`lni ${isMenuOpen ? 'lni-close' : 'lni-grid-alt'}`}></i>
        </button>

        <div className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-white font-medium hover:text-[#146c94] transition-colors relative
                after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:w-1.5 after:h-1.5 
                after:bg-[#19a7ce] after:rounded-full after:opacity-0 hover:after:opacity-100"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className={`fixed top-0 ${isMenuOpen ? 'right-0' : '-right-full'} md:hidden bg-black w-4/5 h-full 
          p-16 pt-16 rounded-l-3xl transition-all duration-300 z-50`}>
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  className="text-white font-medium hover:text-[#146c94] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header