import React from 'react'
import { motion } from 'framer-motion'

// ScrollReveal component that animates when element comes into view
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  threshold = 0.1, // When element is 10% visible
  margin = '0px', // Margin around the element for triggering
}) {
  // Simple fade in animation
  const revealVariant = {
    hidden: { 
      opacity: 0,
      y: 15
    },
    visible: { 
      opacity: 1,
      y: 0
    }
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold, margin }}
      variants={revealVariant}
      transition={{ 
        duration, 
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  )
} 