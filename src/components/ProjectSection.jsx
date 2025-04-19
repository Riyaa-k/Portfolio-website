import React from 'react';
import PageFlip from 'react-pageflip';
import '../App.css'; // For Tailwind CSS
import { useRef } from 'react';

const ProjectSection = () => {
  const flipBookRef = useRef(null);

  const projects = [
    {
      title: "Project 1",
      description: "A cool web app built with React and Tailwind.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Project 2",
      description: "An e-commerce site with dynamic features.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Project 3",
      description: "A portfolio site with sleek animations.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Project 4",
      description: "A game built with JavaScript and Canvas.",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  const nextPage = () => {
    flipBookRef.current.pageFlip().flipNext('hard');
  };

  const prevPage = () => {
    flipBookRef.current.pageFlip().flipPrev('hard');
  };

  return (
    <section className="py-16 bg-black min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-[2rem] font-semibold text-white mb-10 text-left">About Me</h2>
        <div className="relative flex justify-center items-center max-w-[600px] mx-auto">
          <PageFlip
            width={500}
            height={500}
            size="stretch"
            minWidth={300}
            maxWidth={500}
            minHeight={400}
            maxHeight={600}
            ref={flipBookRef}
            className="book shadow-2xl"
            showCover={true}
            flippingTime={1}
            usePortrait={true}
          >
            {/* Cover Page */}
            <div className="page bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center">
              <h3 className="text-3xl font-bold">My Projects</h3>
            </div>
            {/* Project Pages */}
            {projects.map((project, index) => (
              <div key={index} className="page bg-white p-8 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover mb-6 rounded-lg shadow-md"
                />
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
            {/* Back Cover */}
            <div className="page bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center">
              <h3 className="text-2xl font-bold">The End</h3>
            </div>
          </PageFlip>
          {/* Navigation Buttons */}
          <button
            onClick={prevPage}
            className="absolute left-[-50px] top-1/2  "
          >
            ◀
          </button>
          <button
            onClick={nextPage}
            className="absolute right-[-50px] top-1/2 "
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};
export default ProjectSection;