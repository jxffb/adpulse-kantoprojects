import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MotionList } from './MotionList'
import ScrollReveal from './ScrollReveal'
import { 
  ChartLineUp, 
  ChartBar,
  Pulse, 
  Bell
} from '@phosphor-icons/react'

const features = [
  {
    icon: <ChartLineUp size={36} weight="duotone" className="text-blue-500" />,
    title: "Home Dashboard",
    description: "Coming soon: View daily & monthly earnings with key metrics at a glance."
  },
  {
    icon: <ChartBar size={36} weight="duotone" className="text-blue-500" />,
    title: "Trends Analysis",
    description: "Coming soon: Interactive charts for comparing performance across time periods."
  },
  {
    icon: <Pulse size={36} weight="duotone" className="text-blue-500" />,
    title: "Pulse View",
    description: "Coming soon: Break down earnings by country, domain, or ad unit with filters."
  },
  {
    icon: <Bell size={36} weight="duotone" className="text-blue-500" />,
    title: "Smart Notifications",
    description: "Coming soon: Get alerts about policy issues and payout milestones."
  }
]

export default function Features() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Parallax effect transformations
  const yPos = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.8], [0.15, 0.1, 0.05, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  
  // Handle SSR
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="features">
      {/* Floating Logo Background with Parallax */}
      {isMounted && (
        <motion.div 
          className="absolute left-0 right-0 top-0 bottom-0 m-auto flex items-center justify-center z-0 opacity-10 hidden md:block pointer-events-none"
          style={{ 
            y: yPos,
            opacity,
            scale,
            rotate,
          }}
        >
          <img 
            src="/images/logos/logo-on-dark-bg.png" 
            alt="AdPulse Background Logo" 
            className="w-[600px] h-auto"
          />
        </motion.div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What AdPulse Will Do</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We're building these powerful features to help you track your AdSense performance:
            </p>
          </ScrollReveal>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <MotionList key={index} delay={0.1 * (index + 1)}>
              <motion.div 
                className="flex flex-row items-start gap-4 h-full p-6 bg-white dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            </MotionList>
          ))}
        </div>
      </div>
    </section>
  )
} 