import { NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import {
  HiHome,
  HiUserCircle,
  HiDocumentText,
  HiBell,
  HiOfficeBuilding,
  HiUsers,
  HiCalendar,
  HiUserGroup,
  HiCog,
  HiChartBar,
  HiSupport,
  HiCash,
  HiDocumentReport,
  HiX
} from 'react-icons/hi'

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const { user, logout } = useAuth()
  const location = useLocation()

  const jobSeekerLinks = [
    { name: 'Dashboard', to: '/dashboard', icon: HiHome },
    { name: 'Applications', to: '/applications', icon: HiDocumentText },
    { name: 'Job Alerts', to: '/alerts', icon: HiBell },
    { name: 'Settings', to: '/settings', icon: HiCog }
  ]

  const employerLinks = [
    { name: 'Dashboard', to: '/employer', icon: HiHome },
    { name: 'Company Profile', to: '/employer/company-profile', icon: HiOfficeBuilding },
    { name: 'Job Postings', to: '/employer/job-postings', icon: HiDocumentText },
    { name: 'Candidates', to: '/employer/candidates', icon: HiUsers },
    { name: 'Interviews', to: '/employer/interviews', icon: HiCalendar },
    { name: 'Team', to: '/employer/team', icon: HiUserGroup },
    { name: 'Settings', to: '/employer/settings', icon: HiCog }
  ]

  const adminLinks = [
    { name: 'Dashboard', to: '/admin', icon: HiHome },
    { name: 'Analytics', to: '/admin/analytics', icon: HiChartBar },
    { name: 'User Management', to: '/admin/users', icon: HiUsers },
    { name: 'Content', to: '/admin/content', icon: HiDocumentText },
    { name: 'Support', to: '/admin/support', icon: HiSupport },
    { name: 'Payments', to: '/admin/payments', icon: HiCash },
    { name: 'Reports', to: '/admin/reports', icon: HiDocumentReport },
    { name: 'Settings', to: '/admin/settings', icon: HiCog }
  ]

  const getLinks = () => {
    switch (user?.role) {
      case 'jobseeker':
        return jobSeekerLinks
      case 'employer':
        return employerLinks
      case 'admin':
        return adminLinks
      default:
        return []
    }
  }

  const links = getLinks()

  const handleNavClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="w-72 lg:w-64 bg-white dark:bg-gray-800 h-full border-r border-gray-200 dark:border-gray-700 transition-colors duration-200 overflow-hidden">
      <div className="flex flex-col h-full">
        {/* Close button for mobile */}
        <div className="lg:hidden flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <HiX className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 flex flex-col pt-2 lg:pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 space-y-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                  }`
                }
              >
                <link.icon className={`mr-3 h-5 w-5 transition-colors duration-200 ${
                  location.pathname === link.to
                    ? 'text-blue-700 dark:text-blue-200'
                    : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                }`} />
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
          <button
            onClick={() => {
              if (onClose) onClose();
              logout();
            }}
            className="flex w-full items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <HiUserCircle className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}