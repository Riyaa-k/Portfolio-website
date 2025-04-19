import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Certificates = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: '60px',
      duration: 2500,
      delay: 400,
    });
    sr.reveal('.portfolio-item', { interval: 200 });
  }, []);

  const certificates = [
    { issuer: 'Meta', title: 'Programming with JavaScript', img: '/src/assets/img/certificates/fro_page-0001.jpg', link: 'https://coursera.org/share/b1e1808d8d1c3af6510d3ed95018c2ca' },
    { issuer: 'Meta', title: 'HTML and CSS in depth', img: '/assets/img/certificates/fro_page-0001.jpg', link: 'https://coursera.org/share/72f9121d67ebb39fef8e9b31c806fb2c' },
    { issuer: 'Meta', title: 'Introduction to Front-End Development', img: '/assets/img/certificates/fro_page-0001.jpg', link: 'https://coursera.org/share/28be2f6275f7c0fff827711d2b0c722c' },
    { issuer: 'University of Michigan', title: 'Programming for Everybody (Getting Started with Python)', img: '/assets/img/certificates/pr_page-0001.jpg', link: 'https://coursera.org/share/f2d22aac5fc916148e0dd4397fb25805' },
    { issuer: 'University of Michigan', title: 'Python Data Structures', img: '/assets/img/certificates/py_page-0001.jpg', link: 'https://coursera.org/share/e450590fc6da7bf4ec94896cabf46a7a' },
    { issuer: 'Accenture', title: 'Developer Virtual Experience Program', img: '/assets/img/certificates/acc_page-0001.jpg', link: '' },
    { issuer: 'Udemy', title: 'Mastering React: React Crash Course', img: '/assets/img/certificates/udemy react.png', link: '' }
  ];

  return (
    <section id="portfolio" className="pt-16 pb-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-[2rem] font-semibold text-white mb-10 ml-3">Certificates</h2>
        <div className="row flex flex-wrap justify-center gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="portfolio-item flex-0 max-w-[33.3%]">
              <div className="portfolio-item-inner relative rounded-[20px] overflow-hidden group">
                <img src={cert.img} alt={cert.title} className="w-full h-auto" />
                <div className="mask absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                <span className="term absolute top-0 left-6 text-white bg-[#19a7ce] text-sm px-2 py-1 rounded-b-3xl 
                  -translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                  {cert.issuer}
                </span>
                <h3 className="absolute top-16 text-white text-xl p-5 opacity-0 group-hover:opacity-100 
                  group-hover:translate-y-0 translate-y-8 transition-all duration-300">
                  {cert.title}
                </h3>
                <a href={cert.link} target="_blank" className="absolute inset-0"></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
