import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string;
  email: string;
  name: string;
  role: 'jobseeker' | 'employer' | 'admin';
  employerData?: {
    companyId: string;
    teamRole: string;
    department?: string;
  };
  adminData?: {
    permissions: string[];
    lastLogin: string;
  };
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, role: string) => Promise<void>
  logout: () => void
  loading: boolean
  resetPassword: (email: string) => Promise<void>
  signup: (email: string, password: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const mockAdminUser: User = {
  id: 'admin-1',
  email: 'admin@email.com',
  name: 'Admin User',
  role: 'admin',
  adminData: {
    permissions: ['all'],
    lastLogin: new Date().toISOString(),
  },
};

const mockEmployerUser: User = {
  id: 'employer-1',
  email: 'employer@email.com',
  name: 'Employer User',
  role: 'employer',
  employerData: {
    companyId: '1',
    teamRole: 'manager',
    department: 'HR',
  },
};

const mockJobSeekerUser: User = {
  id: 'jobseeker-1',
  email: 'jobseeker@email.com',
  name: 'Job Seeker',
  role: 'jobseeker',
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const isAuthenticated = !!user

  useEffect(() => {
    // Check localStorage for existing session
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Validate credentials for each user type
    switch (email.toLowerCase()) {
      case 'admin@email.com':
        if (password === 'AdminPassword@123') {
          setUser(mockAdminUser)
          localStorage.setItem('user', JSON.stringify(mockAdminUser))
          return
        }
        break

      case 'employer@email.com':
        if (password === 'EmployerPassword@123') {
          setUser(mockEmployerUser)
          localStorage.setItem('user', JSON.stringify(mockEmployerUser))
          return
        }
        break

      case 'jobseeker@email.com':
        if (password === 'JobSeeker@123') {
          setUser(mockJobSeekerUser)
          localStorage.setItem('user', JSON.stringify(mockJobSeekerUser))
          return
        }
        break
    }

    throw new Error('Invalid email or password')
  }

  const register = async (email: string, password: string, role: string) => {
    if (!password || password.length < 6) {
      throw new Error('Password must be at least 6 characters')
    }
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      role: role as 'jobseeker' | 'employer' | 'admin'
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  const signup = async (email: string, password: string) => {
    await register(email, password, 'jobseeker')
  }

  const resetPassword = async (email: string) => {
    console.log(`Password reset email sent to: ${email}`)
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout, loading, resetPassword, signup }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}