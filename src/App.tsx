import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import EmployerLayout from './layouts/EmployerLayout';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import JobSearch from './pages/public/JobSearch';
import RoleBasedRedirect from './components/RoleBasedRedirect';
import RoleBasedRoute from './components/RoleBasedRoute';
import PublicLayout from './layouts/PublicLayout';
import Companies from './pages/public/Companies';
import About from './pages/public/About';

// Employer Pages
import EmployerDashboard from './pages/employer/Dashboard';
import CompanyProfile from './pages/employer/CompanyProfile';
import JobPostings from './pages/employer/JobPostings';
import Candidates from './pages/employer/Candidates';
import Interviews from './pages/employer/Interviews';
import TeamMembers from './pages/employer/TeamMembers';
import EmployerSettings from './pages/employer/Settings';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import Analytics from './pages/admin/Analytics';
import UserManagement from './pages/admin/UserManagement';
import ContentModeration from './pages/admin/ContentModeration';
import SystemSettings from './pages/admin/SystemSettings';
import SupportTickets from './pages/admin/SupportTickets';
import PaymentManagement from './pages/admin/PaymentManagement';
import Reports from './pages/admin/Reports';

// Job seeker pages
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
import JobSeekerSettings from './pages/settings/Settings';
import Applications from './pages/applications/Applications';
import JobAlerts from './pages/alerts/JobAlerts';

import './styles/global.css'

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Routes>
              {/* Public Routes */}
              <Route element={<PublicLayout />}>
                <Route path="/" element={
                  <div className="animate-fade-in">
                    <JobSearch />
                    <RoleBasedRedirect />
                  </div>
                } />
                <Route path="/login" element={<div className="animate-slide-up"><Login /></div>} />
                <Route path="/register" element={<div className="animate-slide-up"><Register /></div>} />
                <Route path="/forgot-password" element={<div className="animate-slide-up"><ForgotPassword /></div>} />
                <Route path="/jobs" element={<div className="animate-fade-in"><JobSearch /></div>} />
                <Route path="/companies" element={<div className="animate-fade-in"><Companies /></div>} />
                <Route path="/about" element={<div className="animate-fade-in"><About /></div>} />
              </Route>

              {/* Protected routes */}
              <Route element={<ProtectedRoute />}>
                {/* Home route with role-based redirect */}
                <Route path="/" element={<RoleBasedRedirect />} />

                {/* Job seeker routes */}
                <Route element={<RoleBasedRoute allowedRoles={['jobseeker']} />}>
                  <Route element={<Layout />}>
                    <Route path="/dashboard" element={<div className="animate-fade-in"><Dashboard /></div>} />
                    <Route path="/settings" element={<div className="animate-fade-in"><JobSeekerSettings /></div>} />
                    <Route path="/applications" element={<div className="animate-fade-in"><Applications /></div>} />
                    <Route path="/alerts" element={<div className="animate-fade-in"><JobAlerts /></div>} />
                  </Route>
                </Route>

                {/* Employer Routes */}
                <Route element={<RoleBasedRoute allowedRoles={['employer']} />}>
                  <Route element={<EmployerLayout />}>
                    <Route path="/employer" element={<div className="animate-fade-in"><EmployerDashboard /></div>} />
                    <Route path="/employer/company-profile" element={<div className="animate-fade-in"><CompanyProfile /></div>} />
                    <Route path="/employer/job-postings" element={<div className="animate-fade-in"><JobPostings /></div>} />
                    <Route path="/employer/candidates" element={<div className="animate-fade-in"><Candidates /></div>} />
                    <Route path="/employer/interviews" element={<div className="animate-fade-in"><Interviews /></div>} />
                    <Route path="/employer/team" element={<div className="animate-fade-in"><TeamMembers /></div>} />
                    <Route path="/employer/settings" element={<div className="animate-fade-in"><EmployerSettings /></div>} />
                  </Route>
                </Route>

                {/* Admin Routes */}
                <Route element={<RoleBasedRoute allowedRoles={['admin']} />}>
                  <Route element={<AdminLayout />}>
                    <Route path="/admin" element={<div className="animate-fade-in"><AdminDashboard /></div>} />
                    <Route path="/admin/analytics" element={<div className="animate-fade-in"><Analytics /></div>} />
                    <Route path="/admin/users" element={<div className="animate-fade-in"><UserManagement /></div>} />
                    <Route path="/admin/content" element={<div className="animate-fade-in"><ContentModeration /></div>} />
                    <Route path="/admin/settings" element={<div className="animate-fade-in"><SystemSettings /></div>} />
                    <Route path="/admin/support" element={<div className="animate-fade-in"><SupportTickets /></div>} />
                    <Route path="/admin/payments" element={<div className="animate-fade-in"><PaymentManagement /></div>} />
                    <Route path="/admin/reports" element={<div className="animate-fade-in"><Reports /></div>} />
                  </Route>
                </Route>
              </Route>
            </Routes>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;