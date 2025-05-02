import React, { useState, useEffect } from 'react'
import PrivacyPolicySheet from './PrivacyPolicySheet'
import TermsSheet from './TermsSheet'

export default function LegalSheets() {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)
  
  // Handle keyboard events (Escape key)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setPrivacyOpen(false)
        setTermsOpen(false)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (privacyOpen || termsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [privacyOpen, termsOpen])
  
  // Expose global handlers for opening sheets from anywhere in the app
  useEffect(() => {
    window.openPrivacyPolicy = () => setPrivacyOpen(true)
    window.openTermsOfService = () => setTermsOpen(true)
    
    return () => {
      delete window.openPrivacyPolicy
      delete window.openTermsOfService
    }
  }, [])
  
  return (
    <>
      <PrivacyPolicySheet 
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
      
      <TermsSheet 
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
      />
    </>
  )
} 