import React from 'react';
import Header from './components/Header';
import Home from './components/home';
import About from './components/About';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectSection from './components/ProjectSection';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-rubik overflow-x-hidden">
      <Header />
      <main className="w-full">
        <Home />
        <About />
        <Education />
        {/* <Certificates /> */}
        <Skills />
        {/* <ProjectSection /> */}
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;