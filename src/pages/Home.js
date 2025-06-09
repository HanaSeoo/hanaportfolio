import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default Home;