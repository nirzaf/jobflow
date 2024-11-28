import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import ThemeToggle from './ThemeToggle'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function PublicNavbar() {
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800 dark:text-white">Qatar Jobs Portal</span>
            </Link>
            
            {/* Desktop Navigation Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/jobs"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600"
              >
                Browse Jobs
              </Link>
              <Link
                to="/companies"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600"
              >
                Companies
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Auth Buttons, Theme Toggle, and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <Link
                to={user.role === 'admin' ? '/admin' : user.role === 'employer' ? '/employer' : '/dashboard'}
                className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Go to Dashboard
              </Link>
            )}
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
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
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-200 ease-in-out`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/jobs"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Browse Jobs
          </Link>
          <Link
            to="/companies"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Companies
          </Link>
          <Link
            to="/about"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            About Us
          </Link>
          {!user ? (
            <div className="space-y-1 pt-2 border-t border-gray-200 dark:border-gray-700">
              <Link
                to="/login"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <Link
                to={user.role === 'admin' ? '/admin' : user.role === 'employer' ? '/employer' : '/dashboard'}
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Go to Dashboard
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
