import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function RoleBasedRedirect() {
  const { user } = useAuth()

  // If no user is logged in, don't redirect - let them access the home page
  if (!user) {
    return null
  }

  // Redirect based on user role and privileges
  switch (user.role) {
    case 'admin':
      // Admin has full access to admin dashboard
      return <Navigate to="/admin" />
      
    case 'employer':
      // Employer has access to company management
      return <Navigate to="/employer" />
      
    case 'jobseeker':
      // Job seeker has access to job search and applications
      return <Navigate to="/dashboard" />
      
    default:
      // If role is not recognized, log them out
      return <Navigate to="/login" />
  }
}
