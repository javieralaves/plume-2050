'use client';

import { 
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
  MessagesSquare,
  ArrowRight,
  User,
  Building2,
  Code,
  Search
} from 'lucide-react';
import Link from 'next/link';

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Platform",
    links: [
      { title: "Smart Wallet", href: "#" },
      { title: "Plume Pay", href: "#" },
      { title: "Plume Raise", href: "#" },
      { title: "Work Marketplace", href: "#" },
      { title: "AI Governance", href: "#" }
    ]
  },
  {
    title: "Resources",
    links: [
      { title: "Documentation", href: "#" },
      { title: "API Reference", href: "#" },
      { title: "Research Hub", href: "#" },
      { title: "Case Studies", href: "#" },
      { title: "Community", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { title: "About Us", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Press Kit", href: "#" },
      { title: "Contact", href: "#" },
      { title: "Blog", href: "#" }
    ]
  }
];

const CTAButton = ({ 
  icon: Icon, 
  text, 
  primary = false 
}: { 
  icon: React.ElementType;
  text: string;
  primary?: boolean;
}) => (
  <button className={`
    group relative flex items-center gap-2 px-6 py-3 rounded-xl
    transition-all duration-300 
    ${primary 
      ? 'bg-accent hover:bg-accent-light text-white' 
      : 'bg-accent/10 hover:bg-accent/20 text-accent'
    }
  `}>
    <Icon className="w-5 h-5" />
    <span className="font-medium">{text}</span>
    <ArrowRight className={`
      w-4 h-4 transition-transform duration-300
      group-hover:translate-x-1
    `} />
  </button>
);

const SocialLink = ({ 
  icon: Icon, 
  href 
}: { 
  icon: React.ElementType;
  href: string;
}) => (
  <Link 
    href={href}
    className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors duration-300"
  >
    <Icon className="w-5 h-5" />
  </Link>
);

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      {/* Content */}
      <div className="relative container mx-auto px-4">
        {/* CTA Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-12">
            Don't Wait for the Future—Build It With Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <CTAButton icon={User} text="Onboard as Individual" primary />
            <CTAButton icon={Building2} text="Onboard as Business" />
            <CTAButton icon={Code} text="Onboard as Developer" />
            <CTAButton icon={Search} text="Explore Solutions" />
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="text-2xl font-bold mb-6">Plume</div>
            <p className="text-gray-400 mb-6">
              Building the foundation for autonomous finance and self-governing economic systems.
            </p>
            <div className="flex gap-3">
              <SocialLink icon={TwitterIcon} href="#" />
              <SocialLink icon={GithubIcon} href="#" />
              <SocialLink icon={LinkedinIcon} href="#" />
              <SocialLink icon={MessagesSquare} href="#" />
            </div>
          </div>

          {/* Navigation Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-accent transition-colors duration-300"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              © 2024 Plume. All rights reserved.
            </div>
            <div className="flex gap-6 text-gray-400">
              <Link href="#" className="hover:text-accent transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-accent transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 