import { Link, useLocation } from 'react-router-dom'
import { LogOut, User, Menu, X } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-200">Qatar Jobs Portal</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-600 dark:text-gray-300 transition-colors duration-200" />
              <span className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">{user?.email}</span>
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm">Logout</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-200 ease-in-out border-t border-gray-200 dark:border-gray-700`}>
        <div className="px-4 py-3 space-y-3">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-gray-600 dark:text-gray-300 transition-colors duration-200" />
            <span className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">{user?.email}</span>
          </div>
          <button
            onClick={logout}
            className="flex w-full items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  )
}