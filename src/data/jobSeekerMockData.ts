import { JobSeekerProfile, SavedJob, JobApplication, JobAlert } from '../types';
import { mockPublicJobs } from './publicMockData';

export const mockJobSeekerProfile: JobSeekerProfile = {
  id: '1',
  userId: '1',
  email: 'jobseeker@email.com',
  name: 'John Smith',
  title: 'Senior Software Engineer',
  phone: '+974 5555 1234',
  location: 'Doha, Qatar',
  about: 'Experienced software engineer with 8+ years of experience in full-stack development. Passionate about creating efficient and scalable web applications.',
  experience: [
    {
      id: '1',
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Qatar',
      location: 'Doha, Qatar',
      startDate: '2020-03',
      endDate: null,
      current: true,
      description: 'Leading a team of developers in building enterprise-scale applications using React and Node.js.',
    },
    {
      id: '2',
      title: 'Software Engineer',
      company: 'Digital Innovations LLC',
      location: 'Dubai, UAE',
      startDate: '2017-06',
      endDate: '2020-02',
      current: false,
      description: 'Developed and maintained multiple web applications using modern JavaScript frameworks.',
    }
  ],
  education: [
    {
      id: '1',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Qatar University',
      location: 'Doha, Qatar',
      startDate: '2013',
      endDate: '2017',
      grade: '3.8 GPA',
    }
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'AWS',
    'Docker',
    'MongoDB',
    'PostgreSQL',
    'Git'
  ],
  languages: [
    {
      language: 'English',
      proficiency: 'Native'
    },
    {
      language: 'Arabic',
      proficiency: 'Professional'
    }
  ],
  certifications: [
    {
      id: '1',
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      issueDate: '2023',
      expiryDate: '2026',
      credentialId: 'AWS-123456'
    },
    {
      id: '2',
      name: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      issueDate: '2022',
      credentialId: 'PSM-789012'
    }
  ],
  resume: {
    url: '/resumes/john-smith-resume.pdf',
    lastUpdated: '2024-11-15'
  },
  preferences: {
    jobTypes: ['Full-time', 'Remote'],
    expectedSalary: {
      min: 25000,
      max: 35000,
      period: 'monthly',
      currency: 'QAR'
    },
    locations: ['Doha', 'Remote'],
    industries: ['Technology', 'Finance', 'Consulting'],
    noticePeriod: '2 months'
  }
};

export const mockSavedJobs: SavedJob[] = [
  {
    id: '1',
    userId: '1',
    jobId: mockPublicJobs[0].id, // Senior Software Engineer
    savedDate: '2024-11-28',
    notes: 'Perfect match for my skills, should apply soon',
    job: mockPublicJobs[0]
  },
  {
    id: '2',
    userId: '1',
    jobId: mockPublicJobs[3].id, // Junior Web Developer
    savedDate: '2024-11-27',
    notes: 'Good company culture, consider for future',
    job: mockPublicJobs[3]
  },
  {
    id: '3',
    userId: '1',
    jobId: mockPublicJobs[6].id, // Executive Director
    savedDate: '2024-11-26',
    notes: 'Interesting leadership opportunity',
    job: mockPublicJobs[6]
  }
];

export const mockApplications: JobApplication[] = [
  {
    id: '1',
    userId: '1',
    jobId: mockPublicJobs[0].id, // Senior Software Engineer
    job: mockPublicJobs[0],
    status: 'Interview Scheduled',
    appliedDate: '2024-11-28',
    lastUpdated: '2024-11-28',
    coverLetter: 'I am writing to express my strong interest in the Senior Software Engineer position...',
    resume: {
      url: '/resumes/john-smith-resume.pdf',
      lastUpdated: '2024-11-15'
    },
    interviews: [
      {
        id: '1',
        type: 'Technical Interview',
        date: '2024-12-05T10:00:00Z',
        location: 'Video Call',
        notes: 'Technical discussion about system design and coding practices'
      }
    ],
    timeline: [
      {
        id: '1',
        status: 'Applied',
        date: '2024-11-28T09:00:00Z',
        notes: 'Application submitted'
      },
      {
        id: '2',
        status: 'Under Review',
        date: '2024-11-28T11:30:00Z',
        notes: 'Application under review by hiring team'
      },
      {
        id: '3',
        status: 'Interview Scheduled',
        date: '2024-11-28T15:00:00Z',
        notes: 'Technical interview scheduled for Dec 5'
      }
    ]
  },
  {
    id: '2',
    userId: '1',
    jobId: mockPublicJobs[1].id, // Marketing Manager
    job: mockPublicJobs[1],
    status: 'Applied',
    appliedDate: '2024-11-27',
    lastUpdated: '2024-11-27',
    coverLetter: 'Although my background is in software engineering, I am interested in transitioning to a marketing role...',
    resume: {
      url: '/resumes/john-smith-resume.pdf',
      lastUpdated: '2024-11-15'
    },
    timeline: [
      {
        id: '1',
        status: 'Applied',
        date: '2024-11-27T14:00:00Z',
        notes: 'Application submitted'
      }
    ]
  }
];

export const mockJobAlerts: JobAlert[] = [
  {
    id: '1',
    userId: '1',
    name: 'Senior Tech Positions',
    keywords: ['Senior', 'Software', 'Engineer', 'Developer', 'Tech Lead'],
    locations: ['Doha', 'Remote'],
    jobTypes: ['Full-time', 'Remote'],
    salary: {
      min: 20000,
      max: 40000
    },
    frequency: 'Daily',
    active: true,
    createdAt: '2024-11-01'
  },
  {
    id: '2',
    userId: '1',
    name: 'Remote Developer Jobs',
    keywords: ['Developer', 'Software', 'Remote'],
    locations: ['Remote'],
    jobTypes: ['Full-time', 'Contract'],
    frequency: 'Weekly',
    active: true,
    createdAt: '2024-11-15'
  }
];
