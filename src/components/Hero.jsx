import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from '@phosphor-icons/react'
import LazyImage from './LazyImage'
import { MotionList } from './MotionList'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section className="relative py-14 sm:py-16 md:py-20 overflow-hidden" id="home">
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <MotionList className="space-y-4 sm:space-y-6 text-center lg:text-left" delay={0.2}>
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-blue-600 dark:text-blue-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 1, 0.5, 1] 
              }}
            >
              AdPulse for AdSense
            </motion.h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0">
              Your mobile dashboard for Google AdSense—delivering real-time insights on your ad earnings, wherever you are.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <span 
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-500 text-white rounded-lg transition-colors duration-200"
              >
                Coming Soon
              </span>
            </div>
          </MotionList>
          
          <ScrollReveal 
            className="relative order-first lg:order-last mt-4 mb-8 lg:my-0"
            delay={0.3}
          >
            <LazyImage 
              src="/images/projects/adpulse-for-adsense.webp" 
              alt="AdPulse app mockup showing the dashboard with AdSense earnings data"
              aspectRatio="aspect-[4/3]"
              containerClassName="rounded-2xl overflow-hidden group"
              className="transition-transform duration-700 group-hover:scale-105"
              enableGradient={true}
              priority={true}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}