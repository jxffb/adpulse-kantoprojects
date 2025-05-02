import React, { useState } from 'react'
import { List, X } from '@phosphor-icons/react'
import { useTheme } from '../context/ThemeContext'

export default function Nav() {
  const { isDark } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img 
            src="/images/logos/logo-on-dark-bg.png" 
            alt="AdPulse logo" 
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">AdPulse</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#data-security"
            className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-200"
          >
            Security
          </a>
          <a
            href="#contact"
            className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu with More Pronounced Blur Effect */}
      <div 
        className={`md:hidden absolute w-full overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen 
            ? 'opacity-100 max-h-[500px]' 
            : 'opacity-0 max-h-0'
        }`}
        style={{
          backdropFilter: isMenuOpen ? 'blur(8px)' : 'blur(0px)',
          WebkitBackdropFilter: isMenuOpen ? 'blur(8px)' : 'blur(0px)',
          transition: 'backdrop-filter 0.3s ease-out, max-height 0.3s ease-out, opacity 0.3s ease-out'
        }}
      >
        <div 
          className={`px-2 pt-3 pb-4 bg-white/80 dark:bg-black/80 border-b border-gray-200/50 dark:border-gray-800/50 transition-transform duration-300 ease-out ${
            isMenuOpen 
              ? 'transform-none' 
              : '-translate-y-5'
          }`}
        >
          <a
            href="#features"
            className={`block px-4 py-3 rounded-lg font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200 ${
              isMenuOpen
                ? 'opacity-100 translate-y-0 delay-100'
                : 'opacity-0 -translate-y-2'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#data-security"
            className={`block px-4 py-3 rounded-lg font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200 ${
              isMenuOpen
                ? 'opacity-100 translate-y-0 delay-150'
                : 'opacity-0 -translate-y-2'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Security
          </a>
          <a
            href="#contact"
            className={`block px-4 py-3 rounded-lg font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200 ${
              isMenuOpen
                ? 'opacity-100 translate-y-0 delay-200'
                : 'opacity-0 -translate-y-2'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}