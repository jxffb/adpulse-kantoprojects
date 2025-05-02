import React from 'react';
import { ScrollReveal } from './animations';

// Import all logos
import reactLogo from '../assets/images/logos/React-icon.svg.png';
import tailwindLogo from '../assets/images/logos/Tailwind_CSS_Logo.svg.png';
import kotlinLogo from '../assets/images/logos/Kotlin_Icon.svg.png';
import swiftLogo from '../assets/images/logos/swift-icon-1024x917-bgp3yjwv.png';
import claudeLogo from '../assets/images/logos/claude-color.png';
import chatgptLogo from '../assets/images/logos/ChatGPT-Logo.svg.png';
import ethereumLogo from '../assets/images/logos/4844522.png';
import firebaseLogo from '../assets/images/logos/google-firebase.png';

// First row of technologies
const topTechnologies = [
  {
    name: 'React',
    logo: reactLogo
  },
  {
    name: 'Tailwind CSS',
    logo: tailwindLogo
  },
  {
    name: 'Kotlin',
    logo: kotlinLogo
  },
  {
    name: 'Swift',
    logo: swiftLogo
  }
];

// Second row of technologies
const bottomTechnologies = [
  {
    name: 'Firebase',
    logo: firebaseLogo
  },
  {
    name: 'Claude',
    logo: claudeLogo
  },
  {
    name: 'ChatGPT',
    logo: chatgptLogo
  },
  {
    name: 'Ethereum',
    logo: ethereumLogo
  }
];

export default function Technologies() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Technologies & Skills
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>
        </ScrollReveal>

        {/* Top row */}
        <div className="flex justify-around mb-10 sm:mb-16">
          {topTechnologies.map((tech, index) => (
            <ScrollReveal key={tech.name} delay={0.05 * index}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center p-4">
                <img 
                  src={tech.logo} 
                  alt={`${tech.name} programming language logo`} 
                  className="w-full h-full object-contain filter grayscale brightness-110 opacity-80 dark:brightness-110 dark:opacity-80 hover:opacity-100 dark:hover:opacity-100 transition-all duration-300"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex justify-around">
          {bottomTechnologies.map((tech, index) => (
            <ScrollReveal key={tech.name} delay={0.05 * (index + 4)}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center p-4">
                <img 
                  src={tech.logo} 
                  alt={`${tech.name} technology logo`} 
                  className="w-full h-full object-contain filter grayscale brightness-110 opacity-80 dark:brightness-110 dark:opacity-80 hover:opacity-100 dark:hover:opacity-100 transition-all duration-300"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
} 