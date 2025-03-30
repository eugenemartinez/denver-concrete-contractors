"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectsHeader from './ProjectsHeader';
import CategoryFilter from './CategoryFilter';
import ProjectsGrid from './ProjectsGrid';
import ProjectModal from './ProjectModal';
import ProjectsCTA from './ProjectsCTA';

const Projects = () => {
  // Project categories for filtering
  const categories = ['All', 'Driveways', 'Patios', 'Commercial', 'Foundations', 'Decorative'];
  
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Projects data
  const projectsData = [
    {
      id: 1,
      title: 'Modern Exposed Driveway',
      category: 'Driveways',
      image: 'https://images.pexels.com/photos/15827510/pexels-photo-15827510/free-photo-of-little-modern-house-in-japan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Custom exposed aggregate driveway installation for a modern Denver home, featuring superior drainage and unique texture.'
    },
    {
      id: 2,
      title: 'Commercial Parking Structure',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1604063155785-ee4488b8ad15?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Large-scale commercial concrete parking structure with reinforced concrete and precision expansion joints.'
    },
    {
      id: 3,
      title: 'Custom Stamped Concrete Patio',
      category: 'Patios',
      image: 'https://images.unsplash.com/photo-1602860739945-9a61573cd62d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Stamped concrete patio with custom pattern design, integrated seating, and outdoor kitchen foundation.'
    },
    {
      id: 4,
      title: 'Residential Foundation Installation',
      category: 'Foundations',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'New home foundation installation with moisture barriers, precise elevation control, and superior strength.'
    },
    {
      id: 5,
      title: 'Decorative Concrete Walkway',
      category: 'Decorative',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Custom colored and textured decorative concrete walkway featuring integrated landscape lighting.'
    },
    {
      id: 6,
      title: 'Commercial Plaza Installation',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1589085947445-a491beee038d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Large commercial plaza with specialized concrete finishes, drainage solutions, and ADA-compliant design.'
    },
    {
      id: 7,
      title: 'Circular Concrete Driveway',
      category: 'Driveways',
      image: 'https://images.unsplash.com/photo-1483728788451-2708e0270131?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Circular driveway installation with decorative borders and custom concrete coloring for upscale residence.'
    },
    {
      id: 8,
      title: 'Stained Concrete Patio with Fire Pit',
      category: 'Patios',
      image: 'https://images.pexels.com/photos/31148279/pexels-photo-31148279/free-photo-of-cozy-fire-pit-by-the-beach-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Custom stained concrete patio featuring built-in fire pit foundation and seamless transitions to landscaping.'
    }
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);
  
  // State for project details modal
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Handle opening project details
  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  // Handle closing project details
  const closeProjectDetails = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
    // We keep the selected project until animation completes
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };
  
  // Handle navigating between projects in modal
  const navigateProjects = (direction) => {
    const currentIndex = projectsData.findIndex(p => p.id === selectedProject.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % projectsData.length;
    } else {
      newIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    }
    
    setSelectedProject(projectsData[newIndex]);
  };
  
  // Clean up body style on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  
  return (
    <motion.section 
      id="projects" 
      className="py-16 md:py-24 bg-[#F5F5F5] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background decorative elements */}
      <motion.div 
        className="hidden md:block absolute right-0 top-20 w-72 h-72 bg-[#FFCC00]/5 rounded-full -mr-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.div 
        className="hidden md:block absolute left-0 bottom-40 w-96 h-96 bg-[#FFCC00]/5 rounded-full -ml-48"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ProjectsHeader />
        </motion.div>
        
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        
        {/* We handle animations in the Grid component instead of using AnimatePresence here */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ProjectsGrid 
            projects={filteredProjects}
            openProjectDetails={openProjectDetails}
          />
        </motion.div>
        
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <ProjectModal 
              project={selectedProject}
              closeModal={closeProjectDetails}
              navigateProjects={navigateProjects}
            />
          )}
        </AnimatePresence>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ProjectsCTA />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;