import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { FaChartBar, FaDatabase, FaLaptopCode } from 'react-icons/fa'; // Importing icons from react-icons

const Projects = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    });
    sr.reveal('.project-item', { interval: 200 });
  }, []);

  const projects = [
    {
      title: 'B2B SaaS ERP Platform',
      desc: 'Developed a production-ready UI for a Global Fortune 500 client using Angular, integrating REST APIs with a Java backend for real-time pricing updates. Designed responsive layouts in Figma and managed collaboration via Git and Jira to meet tight deadlines.',
      bg: 'bg-gradient-to-br from-[rgb(30,58,138)] to-[rgb(59,130,246)]', // Gradient blue
      tech: ['Angular', 'Figma', 'REST APIs', 'Git', 'Jira', 'Java'],
      duration: 'June 2024 - December 2024',
      icon: <FaLaptopCode className="text-3xl md:text-4xl text-white mb-3 md:mb-4 mx-auto" />, // ERP icon
    },
    {
      title: 'Data Quality & Relevancy System',
      desc: 'Led UI development in Angular, crafting intuitive dashboards with Apache ECharts and NGX Charts for dynamic data visualization. Contributed to backend data quality features using Python, optimizing UX with responsive designs and Git workflows.',
      bg: 'bg-gradient-to-br from-[rgb(55,65,81)] to-[rgb(75,85,99)]', // Gradient gray
      tech: ['Angular', 'Figma', 'Apache ECharts', 'NGX Charts', 'Python', 'Git'],
      duration: 'November 2024 - April 2025',
      icon: <FaChartBar className="text-3xl md:text-4xl text-white mb-3 md:mb-4 mx-auto" />, // Chart icon
    },
    {
      title: 'Enterprise Data Visualization Framework',
      desc: 'Built a reusable Angular UI framework for data visualization, leveraging Angular Workspace and Tailwind CSS to create scalable, modular components. Reduced development time by 25% through automation of component creation.',
      bg: 'bg-gradient-to-br from-[rgb(20,83,45)] to-[rgb(34,197,94)]', // Gradient green
      tech: ['Angular', 'Angular Workspace', 'Tailwind CSS', 'Angular Material', 'Apache ECharts', 'NGX Charts', 'Git'],
      duration: 'January 2024 - April 2025',
      icon: <FaDatabase className="text-3xl md:text-4xl text-white mb-3 md:mb-4 mx-auto" />, // Data icon
    },
  ];

  return (
    <section id="projects" className="pt-16 pb-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-[2rem] font-semibold text-white mb-10 ml-3">Projects</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-item w-full md:w-[400px] mb-6 md:mb-12"
            >
              <div
                className={`project-item-inner ${project.bg} p-4 md:p-8 rounded-2xl shadow-lg min-h-[300px] md:h-[400px] flex flex-col justify-between border border-gray-700/50 transition-transform duration-300 hover:-translate-y-3 hover:shadow-xl`}
              >
                <div>
                  {project.icon}
                  <h3 className="text-white text-2xl font-semibold mb-3 md:mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 text-xs mb-4 italic">
                    {project.duration}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium text-white bg-gray-800/80 px-3 py-1 rounded-full border border-gray-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;