import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { images } from '../data/images';

const About: React.FC = () => {
  const skills = [
    { category: "Technical", items: ["Python", "C++", "JavaScript", "AWS", "TensorFlow", "PyTorch"] },
    { category: "Engineering", items: ["Robotics", "Computer Vision", "Machine Learning", "Data Analysis"] },
    { category: "Creative", items: ["UI/UX Design", "3D Modeling", "Digital Art", "Music Production"] }
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.75 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-850"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-blue-400"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src={`/images/about/${images.about[0].name}`}
              alt="Priyanshu Mishra"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-6 text-gray-300">
  As a General Engineering student at NYU Abu Dhabi with a focus on Robotics and Artificial Intelligence, I&apos;m passionate about pushing the boundaries of technology and innovation.
</p>
<p className="text-lg mb-6 text-gray-300">
  My journey has taken me from developing data pipelines at Tata Consultancy Services to researching image-to-image translation using GANs at NYU&apos;s Multimedia and Visual Computing Lab.
</p>
<p className="text-lg mb-6 text-gray-300">
  Beyond engineering, I&apos;m deeply interested in UI/UX design, 3D modeling, and music production, allowing me to bring a unique creative perspective to my technical projects.
</p>
            <div className="space-y-4">
              {skills.map((skillSet, index) => (
                <motion.div key={skillSet.category} className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{skillSet.category} Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.items.map((skill) => (
                      <span key={skill} className="bg-blue-600 bg-opacity-50 text-white text-sm px-2 py-1 rounded">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;