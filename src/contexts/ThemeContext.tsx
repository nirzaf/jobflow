import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import Cookies from 'js-cookie'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Get initial theme from cookie or default to light
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = Cookies.get('theme') as Theme
    return savedTheme || 'light'
  })

  // Update body class and cookie when theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    Cookies.set('theme', theme, { expires: 365 }) // Save for 1 year
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
