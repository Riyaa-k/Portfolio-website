import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    });
    sr.reveal('.contact-info-item', { interval: 200 });
    sr.reveal('.contact-form-field', { interval: 200, delay: 600 });
  }, []);

  return (
    <section id="contact-us" className="pt-16 pb-20 ">
      <div className="container mx-auto px-4 md:px-8">
      <h2 className="text-4xl md:text-[2rem] font-semibold text-white mb-10 ml-3">Contact Me</h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="contact-box w-full md:w-1/3">
            <div className="grid gap-6">
              <div className="contact-info-item flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors duration-300">
                <FaEnvelope className="text-2xl text-indigo-400" />
                <div>
                  <p className="text-white text-sm font-medium">Email</p>
                  <a
                    href="mailto:anshitakoshta28@gmail.com"
                    className="text-gray-300 text-base hover:text-indigo-400 transition-colors"
                  >
                    anshitakoshta28@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors duration-300">
                <FaLinkedin className="text-2xl text-indigo-400" />
                <div>
                  <p className="text-white text-sm font-medium">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/your-profile" // Replace with your LinkedIn
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-base hover:text-indigo-400 transition-colors"
                  >
                    https://www.linkedin.com/in/anshitakoshta/
                  </a>
                </div>
              </div>
              <div className="contact-info-item flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors duration-300">
                <FaGithub className="text-2xl text-indigo-400" />
                <div>
                  <p className="text-white text-sm font-medium">GitHub</p>
                  <a
                    href="https://github.com/your-profile" // Replace with your GitHub
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-base hover:text-indigo-400 transition-colors"
                  >
                    https://github.com/Riyaa-k
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <form
            action="https://formspree.io/f/meqbedgp"
            method="POST"
            className="contact-form w-full md:w-2/3"
          >
            <div className="grid gap-6">
              <div className="contact-form-field relative group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full h-14 px-4 pt-6 pb-2 bg-gray-800/70 text-gray-400 rounded-lg border border-gray-700/50 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/30 outline-none transition-all duration-300 peer"
                  required
                  style={{ color: '#D1D5DB' }} // Inline style to enforce text color
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base transition-all duration-300 peer-focus:top-3 peer-focus:text-xs peer-focus:text-indigo-400 peer-valid:top-3 peer-valid:text-xs peer-valid:text-indigo-400"
                >
                  Your Name
                </label>
              </div>
              <div className="contact-form-field relative group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full h-14 px-4 pt-6 pb-2 bg-gray-800/70 text-gray-400 rounded-lg border border-gray-700/50 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/30 outline-none transition-all duration-300 peer"
                  required
                  style={{ color: '#D1D5DB' }} // Inline style to enforce text color
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base transition-all duration-300 peer-focus:top-3 peer-focus:text-xs peer-focus:text-indigo-400 peer-valid:top-3 peer-valid:text-xs peer-valid:text-indigo-400"
                >
                  Your Email
                </label>
              </div>
              <div className="contact-form-field relative group">
                <textarea
                  name="message"
                  id="message"
                  className="w-full h-36 px-4 pt-6 pb-2 bg-gray-800/70 text-gray-400 rounded-lg border border-gray-700/50 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/30 outline-none resize-none transition-all duration-300 peer"
                  required
                  style={{ color: '#D1D5DB' }} // Inline style to enforce text color
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-6 text-gray-400 text-base transition-all duration-300 peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-400 peer-valid:top-2 peer-valid:text-xs peer-valid:text-indigo-400"
                >
                  Your Message
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-500 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;