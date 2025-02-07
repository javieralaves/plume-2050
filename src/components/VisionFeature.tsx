'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface VisionFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const VisionFeature = ({ title, description, icon }: VisionFeatureProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        inView
          ? 'translate-x-0 opacity-100'
          : 'translate-x-20 opacity-0'
      }`}
    >
      <div className="flex items-start gap-4 mb-8">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-accent/10">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VisionFeature; 