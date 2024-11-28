import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

interface RoleBasedRouteProps {
  allowedRoles: string[]
}

export default function RoleBasedRoute({ allowedRoles }: RoleBasedRouteProps) {
  const { user, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  // Check if user has permission to access this route
  if (!allowedRoles.includes(user.role)) {
    // Redirect to appropriate dashboard based on role
    switch (user.role) {
      case 'admin':
        return <Navigate to="/admin" replace />
      case 'employer':
        return <Navigate to="/employer" replace />
      case 'jobseeker':
        return <Navigate to="/dashboard" replace />
      default:
        // If role is not recognized, send to login
        return <Navigate to="/login" replace />
    }
  }

  // User has permission, render the route
  return <Outlet />
}
