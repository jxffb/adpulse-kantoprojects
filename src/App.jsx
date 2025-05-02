import './index.css'
import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { HelmetProvider } from 'react-helmet-async'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SEO from './components/SEO'
import Hero from './components/Hero'
import Features from './components/Features'
import DataSecurity from './components/DataSecurity'
import Download from './components/Download'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import LegalSheets from './components/LegalSheets'

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="relative min-h-screen">
          {/* Fixed gradient background */}
          <div className="fixed inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900/50 dark:to-gray-800/30" />
          
          {/* Scrollable content */}
          <div className="relative z-10">
            <SEO title="AdPulse | Your Mobile Dashboard for Google AdSense" />
            <Nav />
            <main>
              <Hero />
              <Features />
              <DataSecurity />
              <Download />
              <FAQ />
              <Contact />
            </main>
            <Footer />
            <LegalSheets />
          </div>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  )
}