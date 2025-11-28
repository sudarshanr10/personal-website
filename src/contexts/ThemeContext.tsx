import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Try to get theme from localStorage first
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark' || saved === 'light') {
        return saved as Theme
      }
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }
    return 'dark' // Default to dark mode
  })

  // Initialize theme on mount
  useEffect(() => {
    const html = document.documentElement
    
    if (theme === 'dark') {
      html.classList.add('dark')
      html.classList.remove('light')
    } else {
      html.classList.remove('dark')
      html.classList.add('light')
    }

    html.setAttribute('data-theme', theme)
    html.style.colorScheme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
