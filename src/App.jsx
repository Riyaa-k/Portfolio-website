import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-rubik overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <main className="w-full">
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
