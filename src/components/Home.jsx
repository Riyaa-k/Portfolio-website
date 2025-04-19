import React, { useEffect } from 'react'
import Typed from 'typed.js'
import ScrollReveal from 'scrollreveal'
import { FaEnvelope, FaLinkedin, FaGithub,FaTwitter } from 'react-icons/fa';

const Home = () => {
  useEffect(() => {
    const typed = new Typed('#element', {
      strings: ["Software Developer", "Full-Stack Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    })

    const sr = ScrollReveal({
      origin: "top",
      distance: '60px',
      duration: 2500,
      delay: 400,
    })
    sr.reveal('.intro', { interval: 200 })

    return () => typed.destroy()
  }, [])

  return (
    <section id="home" className="min-h-[100vh] flex items-center relative bg-black">
      <div className="container mx-auto px-4">
        <div className="intro max-w-[540px] mx-auto text-center">
          <img 
            src="src\assets\img\final.png" 
            alt="Avatar"
            className="w-1/2 mx-auto mb-8 hover:-translate-y-2 transition-transform duration-500"
          />
          <h1 className="text-5xl md:text-[2.25rem] font-semibold text-white mb-2">
            Anshita <span className="text-[#146c94]">Koshta</span>
          </h1>
          <span id="element" className="text-xl text-white"></span>
          
          <ul className="flex justify-center gap-4 mt-6 mb-8">
            <li className="hover:-translate-y-1 transition-transform">
              <a
                href="https://github.com/Riyaa-k"
                className="text-xl text-[#19a7ce] hover:text-yellow-400"
              >
                <FaGithub />
              </a>
            </li>
            <li className="hover:-translate-y-1 transition-transform">
              <a
                href="https://www.linkedin.com/in/anshitakoshta/"
                className="text-xl text-[#19a7ce] hover:text-yellow-400"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="hover:-translate-y-1 transition-transform">
              <a href="#" className="text-xl text-[#19a7ce] hover:text-yellow-400">
                <FaTwitter />
              </a>
            </li>
        </ul>
          
          <a 
            href="#contact-us"
            className="inline-block bg-[#19a7ce] text-black px-8 py-3 rounded-[1.25rem] hover:bg-yellow-400 
              transition-colors duration-300 hover:scale-100 active:scale-80"
          >
            Hire me
          </a>
        </div>
      </div>
      <div className="absolute bottom-[-34px] w-full h-[17vh] min-h-[100px] max-h-[150px] md:hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(2, 128, 221, 0.49)" className="animate-[move-forever_7s_cubic-bezier(0.55,0.5,0.45,0.5)_-2s_infinite]" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(97, 203, 204, 0.70)" className="animate-[move-forever_10s_cubic-bezier(0.55,0.5,0.45,0.5)_-3s_infinite]" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(1, 14, 146, 0.23)" className="animate-[move-forever_13s_cubic-bezier(0.55,0.5,0.45,0.5)_-4s_infinite]" />
            <use xlinkHref="#gentle-wave" x="15" y="8" fill="rgba(0, 0, 0, 1)" className="animate-[move-forever_20s_cubic-bezier(0.55,0.5,0.45,0.5)_-5s_infinite]" />
          </g>
        </svg>
      </div>
    </section>
  )
}

export default Home