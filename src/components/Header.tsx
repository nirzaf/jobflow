import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Header() {
  const { user } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800 dark:text-white">Qatar Jobs Portal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/jobs" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Browse Jobs
            </Link>
            <Link to="/companies" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Companies
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              About Us
            </Link>
            
            <ThemeToggle />

            {!user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {user.name}
              </span>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/jobs"
            className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Browse Jobs
          </Link>
          <Link
            to="/companies"
            className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Companies
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            About Us
          </Link>
          {!user && (
            <>
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
