import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export default function EmployerLayout() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (user?.role !== 'employer') {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="flex">
        {/* Employer Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-sm min-h-screen">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="container mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
