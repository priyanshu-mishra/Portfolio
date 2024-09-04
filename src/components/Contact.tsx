import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('priyanshu.mishra@nyu.edu');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="section-container"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg p-8">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition-colors">Send Message</button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-300 mb-2">Or email me directly:</p>
          <motion.button
            onClick={copyEmail}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-700 text-white rounded-md py-2 px-4 hover:bg-gray-900 transition-colors"
          >
            {copied ? 'Copied!' : 'Copy Email'}
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;