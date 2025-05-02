import React from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { AppleLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export default function Download() {
  return (
    <section className="py-10 md:py-16 bg-gray-50 dark:bg-gray-900" id="download">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="order-2 md:order-1">
              <ScrollReveal>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Coming Soon to the App Store</h2>
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                    AdPulse is currently in development. Sign up to be notified when we launch.
                  </p>
                  
                  <motion.div 
                    className="inline-block opacity-75"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src="/images/logos/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
                      alt="Download on the App Store"
                      className="h-10 w-auto"
                    />
                  </motion.div>
                  
                  <div className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex justify-center md:justify-start gap-6">
                      <Link to="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>
                      <Link to="/terms" className="text-blue-500 hover:underline">Terms of Use</Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="order-1 md:order-2">
              <ScrollReveal delay={0.2}>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/images/projects/adpulse-home.webp"
                    alt="AdPulse app home screen showing AdSense metrics dashboard"
                    className="w-full h-auto"
                    loading="eager"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 