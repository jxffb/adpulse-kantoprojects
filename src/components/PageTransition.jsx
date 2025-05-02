import React from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

// Single, subtle page transition animation
const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
}

// Subtle transition settings
const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.3
}

export default function PageTransition({ children, className = '' }) {
  const { pathname } = useLocation()
  
  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  )
} 