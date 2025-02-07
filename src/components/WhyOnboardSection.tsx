'use client';

import { useEffect, useState } from 'react';
import { User, Building, Landmark, Code, ArrowRight } from 'lucide-react';

interface Category {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const categories: Category[] = [
  {
    icon: <User className="w-8 h-8" />,
    title: "For Individuals",
    description: "Earn, spend, and invest in real-time with zero friction.",
    benefits: [
      "Instant payments and settlements",
      "AI-matched work opportunities",
      "Automated investment strategies",
      "Borderless financial access"
    ]
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "For Businesses",
    description: "Automate treasury, payroll, and fundraising with AI and smart contracts.",
    benefits: [
      "Automated treasury management",
      "Real-time payroll streaming",
      "Instant capital formation",
      "Smart contract automation"
    ]
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "For Institutions",
    description: "Deploy self-governing economic models and real-time taxation.",
    benefits: [
      "Self-governing systems",
      "Real-time tax collection",
      "Automated compliance",
      "Transparent operations"
    ]
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "For Developers",
    description: "Build financial applications on the world's most advanced onchain infrastructure.",
    benefits: [
      "Comprehensive API suite",
      "Multi-chain support",
      "Developer-first tools",
      "Extensive documentation"
    ]
  }
];

const CategoryCard = ({ category, isActive, onClick }: { 
  category: Category; 
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer
        ${isActive ? 'bg-accent/10' : 'bg-accent/5 hover:bg-accent/7'}`}
      onClick={onClick}
    >
      <div className="p-6">
        <div className={`text-accent transition-transform duration-500 ${
          isActive ? 'scale-110' : 'scale-100'
        }`}>
          {category.icon}
        </div>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">{category.title}</h3>
        <p className="text-gray-300 mb-4">{category.description}</p>
        
        <div className={`space-y-3 transition-all duration-500 ${
          isActive ? 'opacity-100 max-h-[200px]' : 'opacity-0 max-h-0'
        } overflow-hidden`}>
          {category.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-accent" />
              <p className="text-sm text-gray-300">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className={`absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent transition-opacity duration-500 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`} />
    </div>
  );
};

const WhyOnboardSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isCtaVisible, setIsCtaVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsCtaVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Why Onboard with Plume?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join the future of finance with solutions tailored for every participant
            in the financial ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              category={category}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Persistent CTA */}
      <div className={`fixed bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/95 to-transparent py-6 transition-transform duration-300 ${
        isCtaVisible ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="container mx-auto px-4 flex justify-center">
          <button className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-accent rounded-full overflow-hidden transition-all duration-300 hover:bg-accent-light">
            <span className="relative z-10">Start Your Journey with Plume</span>
            <div className="absolute inset-0 bg-accent-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyOnboardSection; 