import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  LayoutDashboard,
  Building2,
  Briefcase,
  Users,
  Calendar,
  Settings,
  Bell,
  Search,
  ClipboardList,
  Shield,
  MessageSquare,
  BarChart2,
  DollarSign,
  FileBarChart,
  LogOut,
} from 'lucide-react';

const jobSeekerNavItems = [
  { name: 'Dashboard', to: '/', icon: LayoutDashboard },
  { name: 'Job Search', to: '/jobs', icon: Search },
  { name: 'Applications', to: '/applications', icon: ClipboardList },
  { name: 'Job Alerts', to: '/alerts', icon: Bell },
  { name: 'Settings', to: '/settings', icon: Settings },
];

const employerNavItems = [
  { name: 'Dashboard', to: '/employer', icon: LayoutDashboard },
  { name: 'Company Profile', to: '/employer/company-profile', icon: Building2 },
  { name: 'Job Postings', to: '/employer/job-postings', icon: Briefcase },
  { name: 'Candidates', to: '/employer/candidates', icon: Users },
  { name: 'Interviews', to: '/employer/interviews', icon: Calendar },
  { name: 'Settings', to: '/employer/settings', icon: Settings },
];

const adminNavItems = [
  { name: 'Dashboard', to: '/admin', icon: LayoutDashboard },
  { name: 'Analytics', to: '/admin/analytics', icon: BarChart2 },
  { name: 'User Management', to: '/admin/users', icon: Users },
  { name: 'Content Moderation', to: '/admin/content', icon: Shield },
  { name: 'Support Tickets', to: '/admin/support', icon: MessageSquare },
  { name: 'Payments', to: '/admin/payments', icon: DollarSign },
  { name: 'Reports', to: '/admin/reports', icon: FileBarChart },
  { name: 'System Settings', to: '/admin/settings', icon: Settings },
];

export default function Sidebar() {
  const { user, logout } = useAuth();

  const getNavItems = () => {
    switch (user?.role) {
      case 'employer':
        return employerNavItems;
      case 'admin':
        return adminNavItems;
      default:
        return jobSeekerNavItems;
    }
  };

  return (
    <div className="flex h-full flex-col bg-white px-3 py-4 shadow">
      <div className="mb-8 flex items-center px-3">
        <h1 className="text-xl font-bold text-gray-800">Qatar Jobs Portal</h1>
      </div>

      <nav className="flex-1 space-y-1">
        {getNavItems().map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center rounded-lg px-3 py-2 text-sm font-medium ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-900 hover:bg-gray-50'
                }`
              }
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-auto border-t pt-4">
        <button
          onClick={logout}
          className="flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
}