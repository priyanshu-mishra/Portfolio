import React from 'react';
import { motion } from 'framer-motion';

const Photography: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black-850"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-400">Photography</h2>
        <motion.a
          href="/photography"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          <motion.div
            className="relative px-8 py-4 bg-transparent border-2 border-blue-500 text-white font-semibold rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore My Photography</span>
            <motion.div
              className="absolute inset-0 bg-blue-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Photography;