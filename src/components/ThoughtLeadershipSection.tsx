'use client';

import { useState } from 'react';
import { Play, ArrowUpRight, BookOpen, Users, Building2 } from 'lucide-react';
import Image from 'next/image';

interface Content {
  type: 'article' | 'video' | 'partnership';
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime?: string;
  videoLength?: string;
}

const contents: Content[] = [
  {
    type: 'article',
    category: 'Research',
    title: 'The Future of Programmable Finance',
    description: 'Exploring how smart contracts and AI are revolutionizing financial infrastructure, enabling new forms of autonomous economic systems.',
    image: '/images/research-1.svg',
    date: 'Mar 15, 2024',
    readTime: '8 min read'
  },
  {
    type: 'video',
    category: 'Summit',
    title: 'Onchain Finance Summit 2024 Highlights',
    description: 'Key insights and announcements from the leading conference in decentralized finance and AI governance.',
    image: '/images/summit-1.svg',
    date: 'Mar 10, 2024',
    videoLength: '4:30'
  },
  {
    type: 'partnership',
    category: 'Enterprise',
    title: 'Central Bank Digital Currency Innovation',
    description: 'How Plume is working with central banks to develop next-generation digital currency infrastructure.',
    image: '/images/partnership-1.svg',
    date: 'Mar 8, 2024'
  },
  {
    type: 'article',
    category: 'Research',
    title: 'AI-Driven Economic Models',
    description: 'Research paper on implementing self-adjusting economic policies through artificial intelligence and smart contracts.',
    image: '/images/research-2.svg',
    date: 'Mar 5, 2024',
    readTime: '12 min read'
  },
  {
    type: 'video',
    category: 'Summit',
    title: 'The Role of AI in Financial Governance',
    description: 'Panel discussion on how artificial intelligence is reshaping institutional governance and decision-making.',
    image: '/images/summit-2.svg',
    date: 'Mar 3, 2024',
    videoLength: '28:45'
  },
  {
    type: 'partnership',
    category: 'Enterprise',
    title: 'Global Bank Consortium Integration',
    description: "Major financial institutions adopt Plume's infrastructure for cross-border settlements and automated compliance.",
    image: '/images/partnership-2.svg',
    date: 'Mar 1, 2024'
  }
];

const ContentCard = ({ content }: { content: Content }) => {
  const [isHovered, setIsHovered] = useState(false);

  const TypeIcon = () => {
    switch (content.type) {
      case 'article':
        return <BookOpen className="w-5 h-5" />;
      case 'video':
        return <Play className="w-5 h-5" />;
      case 'partnership':
        return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-accent/5 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={content.image}
          alt={content.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {content.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center">
              <Play className="w-8 h-8 text-white" />
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 rounded-lg bg-accent/10 text-accent">
            <TypeIcon />
          </div>
          <span className="text-sm text-accent">{content.category}</span>
          <span className="text-sm text-gray-400">• {content.date}</span>
        </div>

        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
          {content.title}
        </h3>

        <div className={`transition-all duration-500 ${
          isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <p className="text-gray-300 mb-4">{content.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">
              {content.readTime || content.videoLength}
            </div>
            <ArrowUpRight className="w-5 h-5 text-accent" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ThoughtLeadershipSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Thought Leadership & Community</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore cutting-edge research, industry insights, and the latest developments
            in onchain finance and AI governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {contents.map((content, index) => (
            <div key={index} className={`${
              index % 3 === 1 ? 'lg:mt-12' : ''
            }`}>
              <ContentCard content={content} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-accent rounded-full overflow-hidden transition-all duration-300 hover:bg-accent-light">
            <span className="relative z-10 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Join the Community
            </span>
            <div className="absolute inset-0 bg-accent-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadershipSection; 