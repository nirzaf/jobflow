import { useAuth } from '../contexts/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Welcome back, {user?.name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">Job Applications</h3>
          <p className="mt-2 text-3xl font-bold text-blue-600">0</p>
          <p className="text-gray-500">Total applications</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">Saved Jobs</h3>
          <p className="mt-2 text-3xl font-bold text-blue-600">0</p>
          <p className="text-gray-500">Jobs saved for later</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">Job Alerts</h3>
          <p className="mt-2 text-3xl font-bold text-blue-600">0</p>
          <p className="text-gray-500">Active job alerts</p>
        </div>
      </div>
    </div>
  )
}