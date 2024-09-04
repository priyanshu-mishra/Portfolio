import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Experience {
  id: number;
  type: 'work' | 'research';
  title: string;
  organization: string;
  date: string;
  description: string;
  details: string[];
}

const experiences: Experience[] = [
    {
        id: 1,
        type: 'work',
        title: "Tata Consultancy Services",
        organization: "Global Engineering Intern",
        date: "June – August 2023",
        description: "Developed internal data access and analytics pipeline/framework, reducing data processing time.",
        details: [
          "Leveraged SAP BW/4HANA, SAP Appgyver, and AWS RDS to streamline operations",
          "Researched and drafted reports on sustainability and integration of generative AI tools",
          "Enabled real-time insights for decision-makers through efficient data management"
        ]
      },
      {
        id: 2,
        type: 'research',
        title: "NYU Multimedia and Visual Computing Lab",
        organization: "Engineering Research Assistant",
        date: "October 2022 – May 2023",
        description: "Implemented a GAN-based model for image-to-image translation, generating lifelike images from low-resolution inputs.",
        details: [
          "Developed a user-friendly web application using PyTorch, Tensorflow, React, and Replicate",
          "Conducted literature reviews and collaborated with senior research faculty",
          "Contributed to data-collection, preprocessing, and problem-solving in the research process"
        ]
      },
      {
        id: 3,
        type: 'work',
        title: "Tamkeen/Executive Affairs Authority, UAE",
        organization: "Policy and Strategy Intern",
        date: "May – August 2020",
        description: "Conducted research and analysis on higher education benchmarking for Government stakeholders.",
        details: [
          "Focused on evaluating research performance and output levels of universities on local, regional, and international scales",
          "Designed and drafted articles for the FoodTech Challenge",
          "Created how-to guides for setting up start-ups in the UAE and product development analysis"
        ]
      },
      {
        id: 4,
        type: 'research',
        title: "CAMeL Lab (TOIA Project)",
        organization: "Research Assistant",
        date: "December 2021 – March 2022",
        description: "Led optimization efforts for the Time-Offset Interaction Application (TOIA) project.",
        details: [
          "Enhanced AI and backend performance through Node.js and GPT-3",
          "Improved frontend visuals using Next.js and Tailwind CSS",
          "Analyzed and documented key components of interference for Arabic-English translation and NLP models"
        ]
      },
      // Add more experiences as needed
    
];

const ExperienceCards: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'work' | 'research'>('work');
    const [activeExperience, setActiveExperience] = useState<Experience | null>(null);
  
    const filteredExperiences = experiences.filter(exp => exp.type === activeTab);
  
    return (
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab('work')}
            className={`px-6 py-2 rounded-l-full ${activeTab === 'work' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            Work
          </button>
          <button
            onClick={() => setActiveTab('research')}
            className={`px-6 py-2 rounded-r-full ${activeTab === 'research' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            Research
          </button>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                <p className="text-gray-400 mb-2">{exp.organization}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.date}</p>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <button
                  onClick={() => setActiveExperience(exp)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 transition"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
  
        <AnimatePresence>
          {activeExperience && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setActiveExperience(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full m-4"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold text-white mb-4">{activeExperience.title}</h2>
                <p className="text-gray-400 mb-2">{activeExperience.organization} | {activeExperience.date}</p>
                <ul className="list-disc list-inside text-gray-300 mb-4">
                  {activeExperience.details.map((detail, index) => (
                    <li key={index} className="mb-2">{detail}</li>
                  ))}
                </ul>
                <button
                  onClick={() => setActiveExperience(null)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  const Experience: React.FC = () => {
    return (
      <motion.section
        id="experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
      >
        <motion.h2
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-blue-400"
        >
          Experiences
        </motion.h2>
        <ExperienceCards />
      </motion.section>
    );
  };
  
  export default Experience;