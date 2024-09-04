import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion, useScroll, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Design from '../components/Design';
import Photography from '../components/Photography';
import Music from '../components/Music';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const DynamicBackground = dynamic(() => import('../components/DynamicBackground'), { ssr: false });

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Head>
        <title>Priyanshu Mishra - Portfolio</title>
        <meta name="description" content="Priyanshu Mishra's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DynamicBackground />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 transform origin-left z-50"
        style={{ scaleX }}
      />

      <motion.div
        className="cursor-glow fixed pointer-events-none z-50 mix-blend-screen"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: 30,
          height: 30,
          backgroundColor: 'rgba(59, 130, 246, 0.5)',
          borderRadius: '50%',
          filter: 'blur(10px)',
        }}
      />

      <Header />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Design />
        <Photography />
        <Music />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}