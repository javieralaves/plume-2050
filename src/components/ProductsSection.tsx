'use client';

import { useState } from 'react';
import { Wallet, Zap, Coins, Building2, Shield, Cpu, LineChart, Users, Briefcase } from 'lucide-react';

interface Product {
  icon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    icon: <Wallet className="w-6 h-6" />,
    category: "Frictionless Onboarding",
    title: "Plume Smart Wallet",
    description: "Next-gen wallet with seamless authentication and zero-fee transactions",
    features: [
      "Seedless authentication",
      "Gasless transactions",
      "Real-time money streaming",
      "Multi-chain support"
    ]
  },
  {
    icon: <Shield className="w-6 h-6" />,
    category: "Frictionless Onboarding",
    title: "Onchain Reputation",
    description: "Dynamic financial reputation system for the web3 era",
    features: [
      "Real-time credit scoring",
      "Cross-chain reputation tracking",
      "Fraud prevention",
      "Identity verification"
    ]
  },
  {
    icon: <Zap className="w-6 h-6" />,
    category: "Real-Time Finance",
    title: "Plume Pay",
    description: "Instant, programmable payments for modern businesses",
    features: [
      "Instant settlements",
      "Programmable payments",
      "Automated payroll",
      "Invoice management"
    ]
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    category: "Real-Time Finance",
    title: "Invisible Transactions API",
    description: "Seamless payment infrastructure for developers",
    features: [
      "Simple integration",
      "Gasless transactions",
      "Multi-chain support",
      "Real-time webhooks"
    ]
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    category: "Capital & Investment",
    title: "Plume Raise",
    description: "Instant business financing through tokenized revenue sharing",
    features: [
      "Revenue-sharing tokens",
      "Instant liquidity",
      "Automated distributions",
      "Investor dashboard"
    ]
  },
  {
    icon: <Coins className="w-6 h-6" />,
    category: "Capital & Investment",
    title: "Plume Yield Vaults",
    description: "AI-powered DeFi investment strategies",
    features: [
      "Optimized yields",
      "Risk management",
      "Auto-compounding",
      "Portfolio rebalancing"
    ]
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    category: "Onchain Work & Governance",
    title: "Plume Work Marketplace",
    description: "AI-matched jobs with instant payments",
    features: [
      "Skill matching",
      "Real-time payments",
      "Reputation tracking",
      "Dispute resolution"
    ]
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    category: "Onchain Work & Governance",
    title: "AI-Governed DAOs",
    description: "Self-regulating economic systems for modern organizations",
    features: [
      "Automated governance",
      "Treasury management",
      "Proposal automation",
      "Risk monitoring"
    ]
  }
];

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group bg-accent/5 rounded-2xl p-6 h-full transition-all duration-300 hover:bg-accent/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <p className="text-accent text-sm mb-2">{product.category}</p>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-accent/10 rounded-lg text-accent">
            {product.icon}
          </div>
          <h3 className="text-xl font-semibold">{product.title}</h3>
        </div>
        
        <p className="text-gray-300 mb-4">{product.description}</p>
        
        <div className={`space-y-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
        } overflow-hidden`}>
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-accent" />
              <p className="text-sm text-gray-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-accent/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute w-[500px] h-[500px] -bottom-48 -right-48 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Products & Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our comprehensive suite of financial tools and services designed
            to power the future of finance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection; 