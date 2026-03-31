"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FAQHeader from './FAQHeader';
import FAQList from './FAQList';
import ContactPrompt from './ContactPrompt';

const FAQs = () => {
  // FAQ items with questions and answers
  const faqItems = [
    {
      question: "How long does concrete take to cure?",
      answer: "While concrete typically sets within 24-48 hours, the full curing process takes about 28 days. However, most concrete reaches about 70% of its strength within the first week. Weather conditions like temperature and humidity can affect curing time. We apply professional techniques to ensure optimal curing for maximum durability."
    },
    {
      question: "What's the difference between concrete and cement?",
      answer: "Cement is an ingredient in concrete. Concrete is made by mixing cement (usually Portland cement) with water, sand, and aggregates like gravel or crushed stone. The cement acts as a binding agent that hardens when water is added. So while cement is a component of concrete, concrete is the final building material we use for driveways, foundations, and other structures."
    },
    {
      question: "How much does a concrete driveway cost in Denver?",
      answer: "The cost of a concrete driveway in Denver typically ranges from $6 to $12 per square foot, depending on various factors including size, thickness, finish type, and site preparation requirements. For a standard 2-car driveway (approximately 500 square feet), costs typically range from $3,000 to $6,000. We provide detailed, transparent estimates based on your specific project requirements."
    },
    {
      question: "How do I maintain my concrete surfaces?",
      answer: "Proper concrete maintenance includes regular cleaning with mild soap and water, avoiding harsh chemicals, sealing every 2-3 years, promptly removing stains, controlling drainage around concrete areas, and addressing cracks early. In Denver's climate, it's also important to avoid using de-icing salts during winter, as these can damage concrete surfaces."
    },
    {
      question: "Do you provide warranties on your concrete work?",
      answer: "Yes, we stand behind our work with confidence. Denver Concrete Contractors provides a standard 2-year warranty on workmanship for all residential projects and a 3-year warranty for commercial projects. This covers structural issues related to our installation. We also pass on manufacturer warranties for materials used. Specific warranty details are outlined in your project contract."
    },
    {
      question: "How soon can I use my new concrete driveway or patio?",
      answer: "While concrete begins to harden quickly, we recommend avoiding foot traffic for at least 24 hours, and waiting 7 days before allowing vehicle traffic on new driveways. Complete curing takes approximately 28 days. Your project manager will provide specific guidance based on your particular installation and current weather conditions."
    }
  ];
  
  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);
  
  // Toggle FAQ open/close
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Animation variants for children
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 }
    }
  };
  
  return (
    <motion.section 
      id="faqs" 
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#F5F5F5] opacity-50 -mr-32 -mt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#F5F5F5] opacity-50 -ml-48 -mb-48"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={itemVariants}>
          <FAQHeader />
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <FAQList 
            faqItems={faqItems} 
            openIndex={openIndex} 
            toggleFAQ={toggleFAQ} 
          />
        </motion.div>
        
        <motion.div 
          className="mt-16"
          variants={itemVariants}
        >
          <ContactPrompt />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default FAQs;