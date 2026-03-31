import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import CTA from './components/CTA';
import Contact from './components/Contact';
import ServiceAreas from './components/ServiceAreas';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* About Section */}
      <About />
      
      {/* Process Section */}
      <Process />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* CTA Banner */}
      <CTA />
      
      {/* Service Areas Section */}
      <ServiceAreas />
      
      {/* FAQs Section */}
      <FAQs />
      
      {/* Contact Section */}
      <Contact />
    </>
  );
}
