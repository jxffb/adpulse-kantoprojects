import React from 'react'
import { motion } from 'framer-motion'

// Container variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // Delay between each child animation
    }
  }
}

// Child item variants
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24
    }
  }
}

// Component for animated lists
export function MotionList({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }} // Optional delay before starting
    >
      {React.Children.map(children, child => (
        <motion.div variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

// Component for a single animated item
export function MotionItem({ 
  children, 
  className = '', 
  delay = 0,
  y = 20, // Default y offset
  x = 0   // Default x offset (0 = no horizontal movement)
}) {
  const singleItemVariants = {
    hidden: { y, x, opacity: 0 },
    visible: {
      y: 0, 
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
        delay
      }
    }
  }

  return (
    <motion.div
      className={className}
      variants={singleItemVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  )
} 