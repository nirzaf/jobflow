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
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import JobSeekerSettings from './pages/settings/Settings';
import Applications from './pages/applications/Applications';
import JobAlerts from './pages/alerts/JobAlerts';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={
                <>
                  <JobSearch />
                  <RoleBasedRedirect />
                </>
              } />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/jobs" element={<JobSearch />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/about" element={<About />} />
            </Route>

            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              {/* Home route with role-based redirect */}
              <Route path="/" element={<RoleBasedRedirect />} />

              {/* Job seeker routes */}
              <Route element={<RoleBasedRoute allowedRoles={['jobseeker']} />}>
                <Route element={<Layout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/settings" element={<JobSeekerSettings />} />
                  <Route path="/applications" element={<Applications />} />
                  <Route path="/alerts" element={<JobAlerts />} />
                </Route>
              </Route>

              {/* Employer Routes */}
              <Route element={<RoleBasedRoute allowedRoles={['employer']} />}>
                <Route element={<EmployerLayout />}>
                  <Route path="/employer" element={<EmployerDashboard />} />
                  <Route path="/employer/company-profile" element={<CompanyProfile />} />
                  <Route path="/employer/job-postings" element={<JobPostings />} />
                  <Route path="/employer/candidates" element={<Candidates />} />
                  <Route path="/employer/interviews" element={<Interviews />} />
                  <Route path="/employer/team" element={<TeamMembers />} />
                  <Route path="/employer/settings" element={<EmployerSettings />} />
                </Route>
              </Route>

              {/* Admin Routes */}
              <Route element={<RoleBasedRoute allowedRoles={['admin']} />}>
                <Route element={<AdminLayout />}>
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/admin/analytics" element={<Analytics />} />
                  <Route path="/admin/users" element={<UserManagement />} />
                  <Route path="/admin/content" element={<ContentModeration />} />
                  <Route path="/admin/settings" element={<SystemSettings />} />
                  <Route path="/admin/support" element={<SupportTickets />} />
                  <Route path="/admin/payments" element={<PaymentManagement />} />
                  <Route path="/admin/reports" element={<Reports />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;