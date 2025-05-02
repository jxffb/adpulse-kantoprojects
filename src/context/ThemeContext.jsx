import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  // Always set to light mode
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Always ensure light mode is active
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }, [])

  // Keep the toggleTheme function to avoid breaking code that might use it,
  // but make it a no-op
  const toggleTheme = () => {
    // No operation - theme toggle is disabled
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 