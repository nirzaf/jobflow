import { Outlet } from 'react-router-dom'
import PublicNavbar from '../components/PublicNavbar'

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
