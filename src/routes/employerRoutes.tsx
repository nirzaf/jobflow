import { RouteObject } from 'react-router-dom';
import CompanyProfile from '../pages/employer/CompanyProfile';
import JobPostings from '../pages/employer/JobPostings';
import Candidates from '../pages/employer/Candidates';
import Interviews from '../pages/employer/Interviews';
import Analytics from '../pages/employer/Analytics';
import TeamMembers from '../pages/employer/TeamMembers';
import Settings from '../pages/employer/Settings';
import EmployerLayout from '../layouts/EmployerLayout';

export const employerRoutes: RouteObject[] = [
  {
    path: '/employer',
    element: <EmployerLayout />,
    children: [
      {
        path: '',
        element: <Analytics />,
      },
      {
        path: 'company-profile',
        element: <CompanyProfile />,
      },
      {
        path: 'job-postings',
        element: <JobPostings />,
      },
      {
        path: 'candidates',
        element: <Candidates />,
      },
      {
        path: 'interviews',
        element: <Interviews />,
      },
      {
        path: 'team',
        element: <TeamMembers />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
];
