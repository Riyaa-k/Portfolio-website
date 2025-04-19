import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import finalImage from '../assets/img/final.png';
import '../App.css'

const About = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    });
    sr.reveal('.row', { interval: 200 });
  }, []);

  const skills = [
    { name: 'Development', percentage: 95, color: 'bg-yellow-400' },
    { name: 'UI/UX Design', percentage: 85, color: 'bg-blue-500' },
    { name: 'Git', percentage: 85, color: 'bg-red-500' },
  ];

  return (
    <section id="about" className="pt-16 pb-20 bg-black relative">
      {/* Wave SVG relying on CSS for mobile hide */}
      <div className="waves hidden sm:block" style={{ top: '-80px' }}>
        <svg
          className="waves-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#wave"
              x="48"
              y="0"
              fill="rgba(2, 128, 221, 0.49)"
            />
            <use
              xlinkHref="#wave"
              x="48"
              y="3"
              fill="rgba(97, 203, 204, 0.70)"
            />
            <use
              xlinkHref="#wave"
              x="48"
              y="5"
              fill="rgba(1, 14, 146, 0.23)"
            />
            <use
              xlinkHref="#wave"
              x="15"
              y="8"
              fill="rgba(0, 0, 0, 1)"
            />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-[2rem] font-semibold text-white mb-10 ml-3">About Me</h2>
        <div className="row flex flex-col md:flex-row justify-evenly items-center gap-2">
          <div className="about-img flex justify-center max-w-[180px] md:max-w-[180px] sm:max-w-[150px] xs:max-w-[100px] rounded-full overflow-hidden bg-blue-200 mx-auto md:mx-0">
            <img
              src={finalImage}
              alt="Avatar"
              className="w-full h-auto hover:rotate-y-180 transition-transform duration-1000"
            />
          </div>

          <div className="about-content bg-gray-800 p-4 md:p-6 rounded-[1.25rem] shadow-lg w-full lg:max-w-[900px]">
            <div className="flex flex-col md:flex-row justify-evenly items-start gap-2 md:gap-6">
              <div className="about-text text-white mb-4 md:mb-0 w-full md:w-3/6">
                <p className="text-sm sm:text-base md:text-lg mb-4 text-left leading-relaxed">
                  Full-Stack Developer with 1+ years of experience in Angular, React JS, and Node.js. I design slick, responsive UIs in Figma and wire up REST APIs seamlessly. Python and Git fuel my scalable, game-changing solutions.
                </p>
                <a
                  href="src\assets\Anshita Koshta Software Developer.pdf"
                  target="_blank"
                  className="inline-block bg-[#19a7ce] text-black px-6 py-2 md:px-8 md:py-3 rounded-[1.25rem] hover:bg-yellow-400 
                  transition-colors duration-300 hover:scale-100 active:scale-80 text-center w-full sm:w-auto"
                >
                  Download CV
                </a>
              </div>

              <div className="about-skills w-full md:w-3/6 p-4 md:p-6 rounded-[1.25rem] shadow-lg">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-2 md:mb-4">
                    <div className="flex justify-between text-white text-xs sm:text-sm md:text-base mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2 md:h-2.5">
                      <div
                        className={`h-1.5 sm:h-2 md:h-2.5 rounded-full ${skill.color}`}
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;