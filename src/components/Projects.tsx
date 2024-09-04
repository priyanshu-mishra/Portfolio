import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { images } from '../data/images';

const projectData = [
  { 
    title: "Data Access and Analytics Pipeline",
    description: "Developed an internal data access and analytics framework at Tata Consultancy Services, reducing data processing time and enabling real-time insights.",
    tags: ["SAP BW/4HANA", "SAP Appgyver", "AWS RDS", "Data Analytics"],
    image: `/images/projects/${images.projects[0].name}`,
    github: "https://github.com/yourusername/project1"
  },
  { 
    title: "GAN-based Image-to-Image Translation",
    description: "Implemented a GAN model for generating lifelike images from low-resolution inputs with scribbled cursor inputs, showcased through a web application.",
    tags: ["PyTorch", "TensorFlow", "React", "Computer Vision"],
    image: `/images/projects/${images.projects[1].name}`,
    github: "https://github.com/yourusername/project2"
  },
  { 
    title: "Robotic Augmentation and Grasping",
    description: "Simulated robotic grasping in 3D space using Reinforcement Learning from Human Feedback (RLHF), implementing SLAM and object detection.",
    tags: ["Robotics", "RLHF", "SLAM", "Object Detection"],
    image: `/images/projects/${images.projects[2].name}`,
    github: "https://github.com/yourusername/project3"
  },
  {
    title: "GPT Prompter Tool",
    description: "Developed an open-source browser extension for generating customizable prompts using OpenAI's GPT and Whisper API.",
    tags: ["Browser Extension", "OpenAI API", "JavaScript"],
    image: `/images/projects/${images.projects[3].name}`,
    github: "https://github.com/yourusername/project4"
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projectData[0]>(null);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.h2
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-center text-blue-400"
      >
        Featured Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projectData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-300">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-blue-600 bg-opacity-50 text-white text-sm px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
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
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="bg-blue-600 bg-opacity-50 text-white text-sm px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                View on GitHub
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;