import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FaSun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <FaMoon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  )
}
