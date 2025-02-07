'use client';

import { useEffect, useState } from 'react';
import { Clock, Coins, Shield, Users, Workflow, Scale } from 'lucide-react';

interface ComparisonItem {
  icon: React.ReactNode;
  feature: string;
  traditional: string;
  plume: string;
  additionalInfo: string;
}

const comparisonData: ComparisonItem[] = [
  {
    icon: <Clock className="w-6 h-6" />,
    feature: 'Transaction Speed',
    traditional: '2-3 Business Days',
    plume: 'Instant Settlement',
    additionalInfo: 'Plume leverages blockchain technology for real-time settlement, eliminating traditional waiting periods.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    feature: 'Security',
    traditional: 'Centralized Systems',
    plume: 'Cryptographic Security',
    additionalInfo: 'Military-grade encryption and decentralized architecture protect against single points of failure.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    feature: 'Governance',
    traditional: 'Board Controlled',
    plume: 'Community Driven',
    additionalInfo: 'Token holders participate directly in key decisions through transparent on-chain voting.'
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    feature: 'Automation',
    traditional: 'Manual Processing',
    plume: 'Smart Contracts',
    additionalInfo: 'Automated smart contracts execute transactions without human intervention, reducing errors and costs.'
  },
  {
    icon: <Coins className="w-6 h-6" />,
    feature: 'Capital Formation',
    traditional: 'Limited Access',
    plume: 'Permissionless',
    additionalInfo: 'Anyone can participate in financial markets without traditional barriers to entry.'
  },
  {
    icon: <Scale className="w-6 h-6" />,
    feature: 'Compliance',
    traditional: 'Manual Reporting',
    plume: 'Real-time Compliance',
    additionalInfo: 'Automated compliance and reporting through immutable transaction records.'
  }
];

const ComparisonSection = () => {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Why Choose Plume?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See how Plume's innovative approach transforms traditional financial services
            into a seamless, efficient experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-accent/5 rounded-2xl p-6 mb-12">
            <div className="grid grid-cols-12 gap-4 font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4 px-4">
              <div className="col-span-4">Feature</div>
              <div className="col-span-4">Traditional Finance</div>
              <div className="col-span-4">Plume</div>
            </div>

            <div className="space-y-2">
              {comparisonData.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setActiveRow(index)}
                  onMouseLeave={() => setActiveRow(null)}
                >
                  <div className={`grid grid-cols-12 gap-4 p-4 rounded-xl transition-all duration-300 ${
                    activeRow === index ? 'bg-accent/10' : 'hover:bg-accent/5'
                  }`}>
                    <div className="col-span-4 flex items-center gap-3">
                      <div className="text-accent">{item.icon}</div>
                      <span className="font-medium">{item.feature}</span>
                    </div>
                    <div className="col-span-4 flex items-center text-gray-400">
                      {item.traditional}
                    </div>
                    <div className="col-span-4 flex items-center text-accent">
                      {item.plume}
                    </div>
                  </div>
                  
                  {activeRow === index && (
                    <div className="absolute left-0 right-0 mt-2 p-4 bg-accent/10 rounded-xl text-sm text-gray-300 transform transition-all duration-300 z-10">
                      {item.additionalInfo}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-accent rounded-full overflow-hidden transition-all duration-300 hover:bg-accent-light">
              <span className="relative z-10">Join the Onchain Revolution</span>
              <div className="absolute inset-0 bg-accent-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection; 