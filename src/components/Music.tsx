import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Music: React.FC = () => {
  return (
    <motion.section
      id="music"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-850"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-purple-400">Music</h2>
        <Link href="/music-player">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <motion.div
              className="relative px-8 py-4 bg-transparent border-2 border-purple-500 text-white font-semibold rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Discover My Music</span>
              <motion.div
                className="absolute inset-0 bg-purple-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.a>
        </Link>
      </div>
    </motion.section>
  );
};

export default Music;