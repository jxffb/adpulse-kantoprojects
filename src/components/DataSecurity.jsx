import React from 'react'
import { motion } from 'framer-motion'
import { MotionList } from './MotionList'
import ScrollReveal from './ScrollReveal'
import { 
  LockKey, 
  ShieldCheck, 
  Key,
  GoogleLogo 
} from '@phosphor-icons/react'

const securityFeatures = [
  {
    icon: <GoogleLogo size={36} weight="duotone" className="text-blue-500" />,
    title: "Google Sign-In",
    description: "Secure authentication to connect with your AdSense account."
  },
  {
    icon: <Key size={36} weight="duotone" className="text-blue-500" />,
    title: "Read-Only Access",
    description: "We only fetch data to display in the app and never modify your AdSense account."
  },
  {
    icon: <LockKey size={36} weight="duotone" className="text-blue-500" />,
    title: "Local Encryption",
    description: "Credentials stay on your device, encrypted in Apple's Keychain with HTTPS/TLS calls."
  },
  {
    icon: <ShieldCheck size={36} weight="duotone" className="text-blue-500" />,
    title: "No Third-Party Tracking",
    description: "Your data isn't shared with ad networks or analytics vendors. Ever."
  }
]

export default function DataSecurity() {
  return (
    <section className="py-16 md:py-24" id="data-security">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Security & Privacy</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Your data never leaves your device without your explicit permission.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityFeatures.map((feature, index) => (
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