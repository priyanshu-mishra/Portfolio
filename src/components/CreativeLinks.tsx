import React from 'react';
import { motion } from 'framer-motion';

const CreativeLinks = () => {
  return (
    <section className="section-container">
      <div className="flex justify-center space-x-8">
        <motion.a
          href="https://your-photography-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          <motion.div
            className="relative px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Photography</span>
            <motion.div
              className="absolute inset-0 bg-blue-400"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.a>

        <motion.div
          className="relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-purple-500 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          <motion.div
            className="relative px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Music (Coming Soon)</span>
            <motion.div
              className="absolute inset-0 bg-purple-400"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeLinks;