import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function PublicNavbar() {
  const { user } = useAuth()

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Qatar Jobs Portal</span>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/jobs"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300"
              >
                Browse Jobs
              </Link>
              <Link
                to="/companies"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300"
              >
                Companies
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <Link
                to={user.role === 'admin' ? '/admin' : user.role === 'employer' ? '/employer' : '/dashboard'}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Go to Dashboard
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            to="/jobs"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Browse Jobs
          </Link>
          <Link
            to="/companies"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Companies
          </Link>
          <Link
            to="/about"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  )
}
