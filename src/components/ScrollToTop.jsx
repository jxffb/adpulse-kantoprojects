import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// This component will handle scroll restoration on page changes
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Smooth scrolling
    })
  }, [pathname])

  return null
} 