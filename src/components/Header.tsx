import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Design', href: '#design' },
  { name: 'Photography', href: '#photography' },
  { name: 'Music', href: '#music' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 bg-black backdrop-filter backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-6">
          {navItems.map((item) => (
            <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href={item.href}>
                <motion.a 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                </motion.a>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;