import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { images } from '../data/images';

const designProjects = [
  {
    id: 1,
    title: 'UI/UX for Mobile App',
    description: 'Designed a sleek and intuitive interface for a fitness tracking app.',
    image: `/images/design/${images.design[0].name}`,
    figmaLink: 'https://www.figma.com/file/example1',
  },
  {
    id: 2,
    title: 'Brand Identity Design',
    description: 'Created a comprehensive brand identity for a tech startup.',
    image: `/images/design/${images.design[1].name}`,
    figmaLink: 'https://www.figma.com/file/example2',
  },
  {
    id: 3,
    title: 'Web Design for E-commerce',
    description: 'Designed a modern and user-friendly e-commerce website.',
    image: `/images/design/${images.design[2].name}`,
    figmaLink: 'https://www.figma.com/file/example3',
  },
];

const Design: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof designProjects[0]>(null);

  return (
    <motion.section
      id="design"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-875"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">Design Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-300">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-300">{selectedProject.title}</h3>
              <div className="mb-4 relative h-48">
                <Image src={selectedProject.image} alt={selectedProject.title} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>
              <motion.a
                href={selectedProject.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                View on Figma
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Design;