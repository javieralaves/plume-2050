'use client';

import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
  imagePath: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "AI-Powered Freelance Payments",
    category: "Individual Case Study",
    description: "Sarah, a digital nomad designer, uses Plume's AI-matched payment system to automatically receive payments in real-time as she completes work. Smart contracts ensure instant settlement while AI optimizes her income streams.",
    stats: [
      { label: "Payment Speed", value: "< 1 second" },
      { label: "Fee Reduction", value: "92%" },
      { label: "Monthly Revenue", value: "$12.5K" }
    ],
    imagePath: "/images/case-study-1.svg"
  },
  {
    title: "Autonomous DAO Operations",
    category: "Business Case Study",
    description: "TechFlow, a software development company, transformed into a DAO using Plume's governance framework. AI systems manage resource allocation, while smart contracts handle payments and project deliverables.",
    stats: [
      { label: "Operational Costs", value: "-65%" },
      { label: "Decision Speed", value: "8x faster" },
      { label: "Team Growth", value: "+300%" }
    ],
    imagePath: "/images/case-study-2.svg"
  },
  {
    title: "Onchain Tax Innovation",
    category: "Institution Case Study",
    description: "The City of Digital Innovation implemented Plume's taxation framework, enabling real-time tax collection and transparent fund allocation through smart contracts, reducing administrative overhead by 90%.",
    stats: [
      { label: "Collection Rate", value: "99.9%" },
      { label: "Processing Time", value: "Real-time" },
      { label: "Cost Savings", value: "$2.8M" }
    ],
    imagePath: "/images/case-study-3.svg"
  }
];

const CaseStudiesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover how individuals, businesses, and institutions are transforming
            their financial operations with Plume.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {caseStudies.map((study, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 pl-8">
                  <div className="bg-accent/5 rounded-2xl p-8 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <p className="text-accent mb-2">{study.category}</p>
                          <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                          <p className="text-gray-300">{study.description}</p>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          {study.stats.map((stat, statIndex) => (
                            <div
                              key={statIndex}
                              className="bg-accent/10 rounded-lg p-4 transform hover:scale-105 transition-transform duration-300"
                            >
                              <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                              <p className="text-xl font-semibold text-accent">{stat.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="relative h-[300px] md:h-auto rounded-xl overflow-hidden bg-accent/10">
                        <Image
                          src={study.imagePath}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 hover:bg-accent/20 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-accent" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 hover:bg-accent/20 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6 text-accent" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesCarousel; 