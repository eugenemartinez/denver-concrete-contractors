"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const FormStatusMessage = ({ formStatus }) => {
  return (
    <AnimatePresence mode="wait">
      {formStatus.submitted && (
        <motion.div 
          className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-r-md"
          initial={{ opacity: 0, y: -10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -10, height: 0 }}
          transition={{ duration: 0.3 }}
          key="success"
        >
          <div className="flex items-start">
            <motion.div 
              className="flex-shrink-0 mr-3 mt-0.5"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
            >
              <FaCheckCircle className="h-5 w-5 text-green-500" />
            </motion.div>
            <div>
              <motion.p 
                className="font-bold"
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                Thank you for your message!
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
              >
                We'll get back to you as soon as possible.
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
      
      {formStatus.error && (
        <motion.div 
          className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-r-md"
          initial={{ opacity: 0, y: -10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -10, height: 0 }}
          transition={{ duration: 0.3 }}
          key="error"
        >
          <div className="flex items-start">
            <motion.div 
              className="flex-shrink-0 mr-3 mt-0.5"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
            >
              <FaTimesCircle className="h-5 w-5 text-red-500" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
            >
              There was an error sending your message. Please try again.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormStatusMessage;