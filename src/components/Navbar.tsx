import { Link } from 'react-router-dom'
import { LogOut, User } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-200">Qatar Jobs Portal</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
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
        </div>
      </div>
    </nav>
  )
}