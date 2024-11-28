import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../contexts/AuthContext'

type FormData = {
  email: string;
  password: string;
}

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      // Trim whitespace from email and password
      const trimmedEmail = data.email.trim()
      const trimmedPassword = data.password.trim()
      await login(trimmedEmail, trimmedPassword)
      navigate('/')
    } catch (err) {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Sign in to Qatar Jobs Portal
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  },
                  validate: {
                    notEmpty: (value) => value.trim() !== '' || 'Email cannot be empty'
                  }
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message as string}</span>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register('password', { 
                  required: 'Password is required',
                  validate: {
                    notEmpty: (value) => value.trim() !== '' || 'Password cannot be empty'
                  }
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message as string}</span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <Link
              to="/forgot-password"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Sign in
          </button>

          <div className="text-center">
            <Link
              to="/register"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}