import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';


const blogContent = `
# The Metamorphosis of Bits and Creativity: Crafting My Digital Persona

Look, I get it. You're probably thinking, "Another portfolio website? Doesn't everyone and their dog have one of those now?" And you're not wrong. But hear me out, because this isn't just another digital resume – it's a journey into the heart of what it means to be a creator in the 21st century.

## The Lightbulb Moment (Or Was It More of a Slow Burn?)

Picture this: It's 2 AM, I'm knee-deep in coffee cups and code snippets, when it hits me. I'm not just a student of General Engineering at NYU Abu Dhabi. I'm not just a tech enthusiast or a wannabe photographer. I'm all of these things and more, wrapped up in a sleep-deprived, caffeinated package.

That's when I realized – I needed a space where all these parts of me could coexist. Not just coexist, but thrive. A digital playground where my love for engineering could high-five my passion for the arts.

## The Great "To AI or Not to AI" Debate

"AI website builders like Wix ADI or Squarespace AI are becoming increasingly sophisticated, offering quick and easy ways to create websites." 
Now, I know what you're thinking. "Why not just use one of those fancy AI website builders? It'd be so much easier!"


Oh, believe me, the temptation was real. The siren call of drag-and-drop interfaces and pre-made templates was seductive. But here's the thing – I'm an engineer. We don't do easy. We do meaningful.

Building this site from scratch wasn't just about having a portfolio. It was about the journey. The late nights debugging. The eureka moments when a particularly tricky bit of code finally worked. The satisfaction of seeing my vision come to life, pixel by painstaking pixel.

Sure, an AI could have whipped up a decent site in minutes. But it wouldn't have been mine. It wouldn't have had the blood, sweat, and tears (mostly tears, if I'm honest) that make this site uniquely me.

## The Tech Stack Tango

So, I rolled up my sleeves and dove in. My weapon of choice? A tech stack that would make any developer drool:

\`\`\`javascript
const techStack = {
  framework: 'Next.js',
  language: 'TypeScript',
  styling: 'Tailwind CSS',
  animations: 'Framer Motion',
  deployment: 'Vercel'
};
\`\`\`

Each piece of this puzzle was chosen with the precision of a surgeon... or maybe more like a kid in a candy store, but with a really good allowance.

- **Next.js**: Because who doesn't love a bit of server-side rendering magic?
- **TypeScript**: For when you want your code to be as strongly-typed as your coffee.
- **Tailwind CSS**: Because life's too short to write custom CSS (but also long enough to spend hours customizing utility classes).
- **Framer Motion**: For those smooth moves that make visitors go "Ooh, ahh!"
- **Vercel**: Deploy early, deploy often, and never worry about your site going down during that big interview.

## The "What Have I Gotten Myself Into" Phase

Let me tell you, there were moments when I questioned my sanity. Like when I spent three hours trying to center a div (spoiler alert: \`flex justify-center items-center\` is your friend). Or when I realized that making a site responsive is like trying to solve a Rubik's cube blindfolded.

But with each challenge came growth. I wasn't just building a website; I was building myself. Cheesy? Maybe. True? Absolutely.

## The Portfolio Philosophy (Yes, That's a Thing Now)

As the site started taking shape, I realized something profound. This wasn't just a collection of my work – it was a statement about the interconnectedness of disciplines in our world.

Think about it. We live in an age where a software engineer might need to understand color theory, where a photographer needs to know their way around neural networks. The lines between disciplines are blurring, and that's beautiful.

This portfolio became my way of embracing that beautiful chaos. Each section is a thread in a tapestry that represents the modern innovator:

\`\`\`typescript
interface PortfolioSection {
  id: string;
  title: string;
  content: React.ReactNode;
  intersections: string[]; // Related disciplines
}

const portfolioSections: PortfolioSection[] = [
  {
    id: 'engineering',
    title: 'Engineering Projects',
    content: /* Where I pretend I know what I'm doing */,
    intersections: ['technology', 'design', 'problem-solving', 'coffee-consumption']
  },
  {
    id: 'photography',
    title: 'Visual Storytelling',
    content: /* Proof that I occasionally go outside */,
    intersections: ['technology', 'art', 'culture', 'Instagram-addiction']
  },
  // ... other sections that prove I'm a well-rounded individual
];
\`\`\`

## The "Oh Wait, This Actually Matters" Realization

Here's the kicker. As I was building this site, pouring my soul into every line of code, I had an epiphany. This wasn't just about me. It was about contributing to something bigger.

In a world where ideas can go viral faster than you can say "TikTok dance challenge," having a strong online presence isn't just nice – it's necessary. It's about joining the global conversation, adding your voice to the cacophony of human knowledge and creativity.

For students, developers, and creatives, a portfolio is more than a digital trophy case. It's:

1. A playground for crazy ideas (like spending way too much time animating a hamburger menu).
2. A soapbox for your thoughts (even if your mom is your only reader at first).
3. A time capsule of your journey (look back and cringe at your old designs – it means you've grown!).
4. Your contribution to the internet's vast ecosystem of knowledge and cat memes.

## The Never-Ending Story

As I put the finishing touches on this site (who am I kidding, is a website ever really finished?), I'm reminded of a quote by the great philosopher Ferris Bueller: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it."

This portfolio is my way of stopping and looking around. It's a living, breathing document of my journey through the wonderland of technology and creativity.

To anyone out there thinking about creating their own portfolio: Do it. Not because it's easy, but because it's hard. Do it because in the process of creating it, you'll create yourself.

Your digital symphony awaits composition. What story will you tell?

P.S. If you've read this far, you're either my mom or really passionate about web development. Either way, thank you. Now go build something awesome!
`;

const post = {
    title: "The Metamorphosis of Bits and Creativity: Crafting My Digital Persona",
    content: blogContent
  };

const BlogPost: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    const wordCount = blogContent.split(/\s+/).length;
    const time = Math.ceil(wordCount / 200); // Assuming 200 words per minute reading speed
    setReadingTime(time);
  }, []);

  return (
    <>
      <Head>
  <title>{`${post.title} | Priyanshu Mishra's Blog`}</title>
</Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          className="fixed top-0 left-0 right-0 h-2 bg-blue-500 transform origin-left"
          style={{ scaleX }}
        />
        <article className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-2xl p-8">
          <header className="mb-8 border-b border-gray-700 pb-4">
            <h1 className="text-5xl font-bold text-blue-400 mb-2">{post.title}</h1>
            <p className="text-gray-400 text-lg">Reading time: {readingTime} minutes</p>
          </header>
          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
              components={{
                code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
                h1: ({children}) => <h1 className="text-4xl font-bold mt-8 mb-4 text-blue-300">{children}</h1>,
                h2: ({children}) => <h2 className="text-3xl font-semibold mt-6 mb-3 text-blue-400">{children}</h2>,
                p: ({children}) => <p className="mb-4 leading-relaxed">{children}</p>,
                ul: ({children}) => <ul className="list-disc list-inside mb-4">{children}</ul>,
                ol: ({children}) => <ol className="list-decimal list-inside mb-4">{children}</ol>,
                blockquote: ({children}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4">{children}</blockquote>,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </motion.div>
    </>
  );
};

export default BlogPost;