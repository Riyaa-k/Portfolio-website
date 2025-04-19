import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'left',
      distance: '60px',
      duration: 1500,
      delay: 200,
    });

    sr.reveal('.timeline-item', { interval: 300 });
  }, []);

  const experiences = [
    {
      date: 'June 2024 - Present',
      title: 'Software Developer',
      text: 'SIM Advisory',
      details:
        'A skilled developer built interactive Angular UIs and integrated REST APIs with microservices to optimize performance for client projects. They also designed responsive layouts in Figma, processed data with Python, and managed Git for team collaboration.',
    },
    {
      date: 'Nov 2023 - Jan 2024',
      title: 'Software Intern',
      text: 'Kalvium',
      details:
        'I built dynamic React JS components for front-end solutions and contributed to Node.js back-end work during a 3-month internship. I sharpened my Git skills to boost team workflows and full-stack delivery.',
    },
  ];

  return (
    <section id="experience" className="pt-16 pb-20 bg-black">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl md:text-[2rem] font-semibold text-white mb-10 ml-3 text-center md:text-left">
          Experience
        </h3>
        <div className="experience w-full md:max-w-[80%] mx-auto">
          <div className="timeline-box w-full">
            <div className="timeline p-4 md:p-8 relative">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="timeline-item relative pl-10 md:pl-12 pb-6 md:pb-10 before:content-[''] before:absolute 
                    before:w-0.5 before:h-full before:left-4 md:left-5 before:bg-[#19a7ce] before:top-0 before:origin-top
                    before:animate-line-grow "
                >
                  {/* Icon Circle */}
                  <div className="absolute left-2 md:left-1 top-0 text-xl md:text-2xl bg-black text-[#b9ce19] 
                    w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full border-2 border-[#19a7ce] p-1 md:p-2">
                    <FaBriefcase />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-semibold text-yellow-400 mb-1 md:mb-2">
                    {exp.title}
                  </h3>
                  <h3 className="text-xs md:text-sm text-[#19a7ce] mb-1 md:mb-2 flex items-center">
                    <FaCalendarAlt className="mr-1 md:mr-2" />
                    {exp.date}
                  </h3>

                  <p className="text-base md:text-lg text-white mb-1">{exp.text}</p>
                  <p className="text-xs md:text-sm text-white">{exp.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;