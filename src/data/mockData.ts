import { Job, Application, JobAlert, UserSettings } from '../types';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $160,000',
    description: 'We are looking for an experienced Frontend Developer to join our team...',
    requirements: [
      '5+ years of experience with React',
      'Strong TypeScript skills',
      'Experience with modern CSS frameworks',
    ],
    postedDate: '2023-12-01',
    deadline: '2024-01-15',
  },
  {
    id: '2',
    title: 'Backend Engineer',
    company: 'DataFlow Systems',
    location: 'Remote',
    type: 'Remote',
    salary: '$100,000 - $140,000',
    description: 'Join our backend team to build scalable microservices...',
    requirements: [
      '3+ years of experience with Node.js',
      'Experience with AWS',
      'Knowledge of SQL and NoSQL databases',
    ],
    postedDate: '2023-12-05',
  },
  {
    id: '3',
    title: 'DevOps Engineer',
    company: 'CloudScale',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$130,000 - $170,000',
    description: 'Looking for a DevOps engineer to improve our CI/CD pipeline...',
    requirements: [
      'Experience with Docker and Kubernetes',
      'Strong Linux administration skills',
      'Knowledge of infrastructure as code',
    ],
    postedDate: '2023-12-03',
  },
];

export const mockApplications: Application[] = [
  {
    id: '1',
    jobId: '1',
    job: mockJobs[0],
    status: 'Interview',
    appliedDate: '2023-12-02',
    lastUpdated: '2023-12-10',
    notes: 'Technical interview scheduled for next week',
  },
  {
    id: '2',
    jobId: '2',
    job: mockJobs[1],
    status: 'Applied',
    appliedDate: '2023-12-06',
    lastUpdated: '2023-12-06',
  },
  {
    id: '3',
    jobId: '3',
    job: mockJobs[2],
    status: 'Under Review',
    appliedDate: '2023-12-04',
    lastUpdated: '2023-12-08',
    notes: 'Recruiter viewed application',
  },
];

export const mockJobAlerts: JobAlert[] = [
  {
    id: '1',
    userId: '1',
    name: 'Tech Jobs Alert',
    keywords: ['React', 'Frontend', 'TypeScript'],
    location: 'San Francisco',
    jobTypes: ['Full-time', 'Remote'],
    salary: {
      min: 100000,
      max: 180000
    },
    frequency: 'Daily',
    active: true,
    createdAt: '2023-11-15'
  },
  {
    id: '2',
    userId: '1',
    name: 'Backend Jobs Alert',
    keywords: ['Node.js', 'Backend', 'AWS'],
    location: 'Remote',
    jobTypes: ['Full-time', 'Contract'],
    frequency: 'Weekly',
    active: true,
    createdAt: '2023-11-15'
  }
];

export const mockUserSettings: UserSettings = {
  notifications: {
    email: true,
    desktop: true,
    applicationUpdates: true,
    newJobs: true,
  },
  privacy: {
    profileVisibility: 'Public',
    resumeVisibility: 'Private',
  },
  preferences: {
    jobTypes: ['Full-time', 'Remote'],
    locations: ['San Francisco', 'Remote'],
    minSalary: 100000,
  },
};
