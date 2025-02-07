import TransactionVisualization from './TransactionVisualization';
import VisionFeature from './VisionFeature';
import { Zap, Globe, Bot } from 'lucide-react';

const VisionSection = () => {
  return (
    <section className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] bg-gradient-to-br from-accent/5 to-transparent rounded-2xl overflow-hidden">
            <TransactionVisualization />
          </div>

          <div className="space-y-8">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Reimagining Financial Infrastructure
              </h2>
              <p className="text-gray-300 text-lg">
                Plume is building the foundation for a more efficient, transparent,
                and inclusive financial system. Our vision extends beyond
                traditional boundaries, creating a future where financial services
                are truly accessible to all.
              </p>
            </div>

            <VisionFeature
              title="Real-Time Transactions"
              description="Experience instant settlements and transfers across the globe, powered by our advanced blockchain infrastructure."
              icon={<Zap className="w-6 h-6 text-accent" />}
            />

            <VisionFeature
              title="Borderless & Inclusive"
              description="Access financial services regardless of location, breaking down geographical barriers and promoting financial inclusion."
              icon={<Globe className="w-6 h-6 text-accent" />}
            />

            <VisionFeature
              title="Autonomous Finance"
              description="Smart contracts and AI-driven systems automate complex financial operations, reducing costs and eliminating human error."
              icon={<Bot className="w-6 h-6 text-accent" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection; 