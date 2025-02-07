import NetworkAnimation from "@/components/NetworkAnimation";
import VisionSection from "@/components/VisionSection";
import ComparisonSection from "@/components/ComparisonSection";
import CaseStudiesCarousel from "@/components/CaseStudiesCarousel";
import ProductsSection from "@/components/ProductsSection";
import WhyOnboardSection from "@/components/WhyOnboardSection";
import ThoughtLeadershipSection from "@/components/ThoughtLeadershipSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        <NetworkAnimation />
        
        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
              Finance, Rebuilt for the 21st Century
            </h1>
            
            <p className="mb-12 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
              A seamless, borderless, autonomous financial system that works for
              individuals, businesses, and institutions alike.
            </p>

            <button className="hero-button bg-accent hover:bg-accent-light text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Onboard into Plume
            </button>
          </div>
        </main>
      </div>
      
      <VisionSection />
      <ComparisonSection />
      <CaseStudiesCarousel />
      <ProductsSection />
      <WhyOnboardSection />
      <ThoughtLeadershipSection />
      <Footer />
    </>
  );
}
