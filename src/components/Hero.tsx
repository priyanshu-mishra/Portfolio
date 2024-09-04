import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <motion.section 
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="text-center z-10">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 text-white"
        >
          Priyanshu Mishra
        </motion.h1>
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl mb-8 text-blue-300"
        >
          Engineering • Design • Innovation
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(66, 153, 225, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
          >
            Explore My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(66, 153, 225, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full text-lg font-semibold"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;