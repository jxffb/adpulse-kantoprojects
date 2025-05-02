import React, { useState, useRef, useEffect } from 'react'
import { AppleLogo, AndroidLogo, CaretLeft, CaretRight } from '@phosphor-icons/react'
import LazyImage from './LazyImage'
import ContentLoader from './ContentLoader'
import SkeletonLoader from './SkeletonLoader'

const projects = [
  {
    title: "Quote Vibes",
    subtitle: "Lifestyle & Wellness",
    description: "Your daily companion for inspiration, delivering thoughtfully curated quotes and affirmations to uplift your day.",
    image: '/images/projects/placeholder-614.webp',
    platforms: [
      { 
        icon: <AppleLogo size={20} weight="light" />, 
        label: "iOS",
        url: "https://apps.apple.com/us/app/quote-vibes-daily/id6744850119"
      }
    ]
  },
  {
    title: "Learn Bicol",
    subtitle: "Language Learning",
    description: "An immersive language learning app that makes mastering Bikol engaging and accessible, featuring interactive lessons and cultural insights.",
    image: '/images/projects/learn-bicol-android-ios.webp',
    platforms: [
      { 
        icon: <AppleLogo size={20} weight="light" />, 
        label: "iOS",
        url: "https://apps.apple.com/us/app/learn-bicol-language/id6737761660"
      },
      { 
        icon: <AndroidLogo size={20} weight="light" />, 
        label: "Android",
        url: "https://play.google.com/store/apps/details?id=co.jxffb.learnbicol"
      }
    ]
  },
  {
    title: "AdPulse for Adsense",
    subtitle: "Analytics & Optimization",
    description: "A powerful tool that helps publishers monitor and optimize their AdSense performance with real-time insights and smart recommendations.",
    image: '/images/projects/adpulse-ios.webp',
    platforms: [
      { 
        icon: <AppleLogo size={20} weight="light" />, 
        label: "iOS",
        url: "https://apps.apple.com/us/app/adpulse-for-adsense/id6744850119"
      }
    ]
  }
]

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)
  const carouselRef = useRef(null)
  const isRTL = useRef(false) // Direction of animation: true for right-to-left, false for left-to-right
  
  // Calculate previous and next indices
  const prevIndex = (activeProject - 1 + projects.length) % projects.length
  const nextIndex = (activeProject + 1) % projects.length

  // Handle navigation
  const nextProject = () => {
    if (isAnimating) return
    
    isRTL.current = true
    setIsAnimating(true)
    
    setTimeout(() => {
      setActiveProject(nextIndex)
      setIsAnimating(false)
    }, 700)  // Slightly longer than animation to ensure completion
  }

  const prevProject = () => {
    if (isAnimating) return
    
    isRTL.current = false
    setIsAnimating(true)
    
    setTimeout(() => {
      setActiveProject(prevIndex)
      setIsAnimating(false)
    }, 700)  // Slightly longer than animation to ensure completion
  }

  // Handle touch/swipe events
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e) => {
      touchEndX.current = e.changedTouches[0].clientX
      handleSwipe()
    }

    const handleSwipe = () => {
      if (!touchStartX.current || !touchEndX.current || isAnimating) return
      
      const diffX = touchStartX.current - touchEndX.current
      const threshold = 50 // minimum distance to be considered a swipe
      
      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          // Swipe left, go to next
          nextProject()
        } else {
          // Swipe right, go to previous
          prevProject()
        }
      }
      
      touchStartX.current = null
      touchEndX.current = null
    }

    const container = carouselRef.current
    if (container) {
      container.addEventListener('touchstart', handleTouchStart)
      container.addEventListener('touchend', handleTouchEnd)
      
      return () => {
        container.removeEventListener('touchstart', handleTouchStart)
        container.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [isAnimating])

  // Custom animation CSS
  const slideAnimations = `
    .carousel-container {
      position: relative;
      overflow: hidden;
      margin: 0 -2rem;
    }

    @media (min-width: 640px) {
      .carousel-container {
        margin: 0 -3rem;
      }
    }

    .carousel-track {
      display: flex;
      width: 300%;
      transform: translateX(-33.333%); /* Start with the middle item visible */
    }

    /* Only apply transition when actually sliding */
    .carousel-track.sliding-next,
    .carousel-track.sliding-prev {
      transition: transform 650ms cubic-bezier(0.33, 1, 0.68, 1);
      will-change: transform;
    }

    .carousel-item {
      flex: 0 0 33.333%;
      max-width: 33.333%;
      padding: 0 2rem;
      box-sizing: border-box;
    }

    @media (min-width: 640px) {
      .carousel-item {
        padding: 0 3rem;
      }
    }

    .carousel-track.sliding-next {
      transform: translateX(-66.666%);
    }

    .carousel-track.sliding-prev {
      transform: translateX(0%);
    }

    .carousel-track.no-transition {
      transition: none;
    }
  `

  // Helper function to render a project
  const renderProject = (index) => {
    const project = projects[index]
    return (
      <div className="carousel-item">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center p-3 lg:p-5">
          {/* Mobile image */}
          <div className="lg:hidden order-1 mb-6">
            <LazyImage 
              src={project.image} 
              alt={`Screenshot of ${project.title} app showcasing the ${project.subtitle} interface`}
              aspectRatio="aspect-[4/3]"
              containerClassName="rounded-xl overflow-hidden group"
              className="transition-transform duration-700 group-hover:scale-105"
              enableGradient={true}
            />
          </div>

          {/* Project details */}
          <div className="space-y-6 sm:space-y-7 order-2 lg:order-1">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                {project.title === "AdPulse for Adsense" && (
                  <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="text-blue-500 dark:text-blue-400">{project.subtitle}</p>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Available on</p>
              <div className="flex gap-3">
                {project.platforms.map((platform, i) => (
                  <a 
                    key={i}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    title={`Download on ${platform.label}`}
                  >
                    {platform.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Project image for large screens */}
          <div className="hidden lg:block order-2">
            <LazyImage 
              src={project.image} 
              alt={`Screenshot of ${project.title} app showcasing the ${project.subtitle} interface`}
              aspectRatio="aspect-[4/3]"
              containerClassName="rounded-xl overflow-hidden group"
              className="transition-transform duration-700 group-hover:scale-105"
              enableGradient={true}
            />
          </div>
        </div>
      </div>
    )
  }

  // Function to handle dot navigation
  const handleDotClick = (index) => {
    if (isAnimating || index === activeProject) return
    
    if (index > activeProject) {
      isRTL.current = true
      setIsAnimating(true)
    } else {
      isRTL.current = false
      setIsAnimating(true)
    }
    
    setTimeout(() => {
      setActiveProject(index)
      setIsAnimating(false)
    }, 700)  // Slightly longer than animation to ensure completion
  }

  // Effect to reset carousel position after animation
  useEffect(() => {
    if (!isAnimating && carouselRef.current) {
      const carousel = carouselRef.current
      
      // Add the no-transition class
      carousel.classList.add('no-transition')
      
      // Force a reflow to make sure the class takes effect
      void carousel.offsetWidth
      
      // Reset position to middle panel
      carousel.style.transform = 'translateX(-33.333%)'
      
      // Force another reflow
      void carousel.offsetWidth
      
      // Remove the no-transition class and classes
      carousel.classList.remove('no-transition', 'sliding-next', 'sliding-prev')
    }
  }, [isAnimating, activeProject])

  // Effect to add the correct sliding class - but only when actually sliding
  // (not on initial load)
  useEffect(() => {
    if (isAnimating && carouselRef.current) {
      const carousel = carouselRef.current
      
      // First remove any existing transform styles
      carousel.style.transform = ''
      
      // Force a reflow for style changes to take effect
      void carousel.offsetWidth
      
      // Add the appropriate class
      if (isRTL.current) {
        carousel.classList.add('sliding-next')
      } else {
        carousel.classList.add('sliding-prev')
      }
    }
  }, [isAnimating])

  // Ensure a clean setup/teardown
  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (carouselRef.current) {
        carouselRef.current.classList.remove('sliding-next', 'sliding-prev')
      }
    }
  }, [])

  return (
    <section className="py-16 sm:py-24">
      <style>{slideAnimations}</style>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header with navigation buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 sm:gap-0 mb-10 sm:mb-16">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">Featured Projects</h2>
              <p className="text-gray-600 dark:text-gray-400">Crafting thoughtful solutions for real-world needs</p>
            </div>
            <div className="flex justify-center sm:justify-end gap-2 z-50 relative">
              <button 
                onClick={prevProject}
                className="p-2 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous project"
                disabled={isAnimating}
              >
                <CaretLeft size={24} weight="bold" />
              </button>
              <button 
                onClick={nextProject}
                className="p-2 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next project"
                disabled={isAnimating}
              >
                <CaretRight size={24} weight="bold" />
              </button>
            </div>
          </div>

          {/* Project Display with true carousel behavior */}
          <div className="carousel-container">
            <div 
              ref={carouselRef}
              className="carousel-track"
            >
              {/* Three projects shown: previous, current, next */}
              {renderProject(prevIndex)}
              {renderProject(activeProject)}
              {renderProject(nextIndex)}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-10 sm:mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === activeProject 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
                aria-label={`Go to project ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 