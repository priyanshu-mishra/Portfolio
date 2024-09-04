import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { images } from '../data/images';

const blogPosts = [
  {
    id: 1,
    title: "The Metamorphosis of Bits and Creativity: Crafting My Digital Persona",
    excerpt: "A journey into the heart of what it means to be a creator in the 21st century.",
    date: "September 4, 2023",
    slug: "crafting-digital-persona",
    image: `/images/blog/${images.blog[0].name}`
  },
  // Add more blog posts here
];

const Blog: React.FC = () => {
  return (
    <motion.section
      id="blog"
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
        Blog
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative h-48">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-300">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <p className="text-sm text-gray-400">{post.date}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Blog;