import React from 'react'
import { AppleLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} Kanto Projects | AdPulse
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="#download" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 flex items-center gap-1"
              aria-label="Download"
            >
              <AppleLogo size={16} weight="light" />
              <span className="sm:inline">Download</span>
            </a>
            <Link 
              to="/privacy" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 flex items-center gap-1"
              aria-label="Privacy Policy"
            >
              <span className="sm:inline">Privacy Policy</span>
            </Link>
            <Link 
              to="/terms" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 flex items-center gap-1"
              aria-label="Terms of Service"
            >
              <span className="sm:inline">Terms of Service</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}