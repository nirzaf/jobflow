import { Company, TeamMember, JobPosting, Candidate, Interview } from '../types';

export const mockCompany: Company = {
  id: '1',
  name: 'TechCorp Solutions',
  logo: '',
  banner: '',
  industry: 'Technology',
  size: '500-1000',
  description: 'TechCorp Solutions is a leading technology company specializing in innovative software solutions for businesses worldwide.',
  culture: 'We foster a culture of innovation, collaboration, and continuous learning. Our team members are encouraged to think creatively and take ownership of their work.',
  website: 'https://techcorp.example.com',
  socialMedia: {
    linkedin: 'https://linkedin.com/company/techcorp',
    twitter: 'https://twitter.com/techcorp',
    facebook: 'https://facebook.com/techcorp'
  },
  locations: [
    {
      id: '1',
      type: 'Headquarters',
      address: '123 Tech Street',
      city: 'San Francisco',
      country: 'USA',
      postalCode: '94105',
      isPrimary: true
    },
    {
      id: '2',
      type: 'Branch',
      address: '456 Innovation Avenue',
      city: 'New York',
      country: 'USA',
      postalCode: '10001',
      isPrimary: false
    }
  ],
  verificationStatus: 'Verified',
  createdAt: '2023-01-01',
  updatedAt: '2023-12-01'
};

export const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
    department: 'Engineering',
    joinDate: '2023-01-15',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Hiring Manager',
    status: 'active',
    department: 'HR',
    joinDate: '2023-02-20',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'Recruiter',
    status: 'active',
    department: 'HR',
    joinDate: '2023-03-10',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
];

export const mockJobPostings: JobPosting[] = [
  {
    id: '1',
    companyId: '1',
    title: 'Senior Software Engineer',
    department: 'Engineering',
    description: 'We are looking for an experienced software engineer...',
    requirements: [
      '5+ years of experience in software development',
      'Strong knowledge of React and TypeScript',
      'Experience with cloud platforms (AWS/Azure)'
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
    qualifications: [
      'Bachelor\'s degree in Computer Science or related field',
      'Previous experience leading technical teams'
    ],
    salaryRange: {
      min: 15000,
      max: 25000,
      currency: 'QAR'
    },
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Annual bonus',
      'Professional development'
    ],
    location: 'San Francisco, CA',
    workType: 'Full-time',
    type: 'Full-time',
    screeningQuestions: [
      {
        question: 'How many years of React experience do you have?',
        required: true
      }
    ],
    applicationDeadline: '2024-01-31',
    status: 'Published',
    postedDate: '2023-12-01',
    applications: {
      total: 45,
      new: 12
    },
    analytics: {
      views: 245,
      applications: 12,
      shortlisted: 4
    },
    createdAt: '2023-12-01',
    updatedAt: '2023-12-01'
  },
  {
    id: '2',
    companyId: '1',
    title: 'Product Manager',
    department: 'Product',
    description: 'We are seeking a product manager to lead our core products...',
    requirements: [
      '3+ years of product management experience',
      'Experience with agile methodologies',
      'Strong analytical skills'
    ],
    skills: ['Product Management', 'Agile', 'Data Analysis'],
    qualifications: [
      'Bachelor\'s degree in Business or related field',
      'Product management certification is a plus'
    ],
    salaryRange: {
      min: 18000,
      max: 28000,
      currency: 'QAR'
    },
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Annual bonus',
      'Remote work options'
    ],
    location: 'New York, NY',
    workType: 'Full-time',
    type: 'Full-time',
    screeningQuestions: [
      {
        question: 'Describe your experience with product launches',
        required: true
      }
    ],
    applicationDeadline: '2024-02-15',
    status: 'Published',
    postedDate: '2023-12-05',
    applications: {
      total: 32,
      new: 8
    },
    analytics: {
      views: 180,
      applications: 8,
      shortlisted: 3
    },
    createdAt: '2023-12-05',
    updatedAt: '2023-12-05'
  },
  {
    id: '3',
    companyId: '1',
    title: 'UI/UX Designer',
    department: 'Design',
    description: 'Looking for a talented UI/UX designer...',
    requirements: [
      '3+ years of UI/UX design experience',
      'Proficiency in Figma and Adobe Creative Suite',
      'Strong portfolio'
    ],
    skills: ['UI Design', 'UX Design', 'Figma', 'Adobe XD'],
    qualifications: [
      'Bachelor\'s degree in Design or related field',
      'Previous experience in SaaS products'
    ],
    salaryRange: {
      min: 12000,
      max: 20000,
      currency: 'QAR'
    },
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Annual bonus',
      'Design tools subscription'
    ],
    location: 'Remote',
    workType: 'Full-time',
    type: 'Full-time',
    screeningQuestions: [
      {
        question: 'Share your portfolio link',
        required: true
      }
    ],
    applicationDeadline: '2024-02-28',
    status: 'Draft',
    postedDate: '2023-12-10',
    applications: {
      total: 0,
      new: 0
    },
    analytics: {
      views: 0,
      applications: 0,
      shortlisted: 0
    },
    createdAt: '2023-12-10',
    updatedAt: '2023-12-10'
  }
];

export const mockCandidates: Candidate[] = [
  {
    id: '1',
    jobId: '1',
    name: 'Emily Wilson',
    email: 'emily.wilson@example.com',
    phone: '+1 (555) 123-4567',
    resume: 'https://example.com/resume/emily-wilson',
    coverLetter: 'I am excited to apply for the Senior Software Engineer position...',
    screeningAnswers: [
      {
        question: 'How many years of React experience do you have?',
        answer: '6 years'
      }
    ],
    status: 'Interview',
    stage: 'Interview',
    rating: 4.5,
    notes: [
      {
        id: '1',
        content: 'Strong technical background, good cultural fit',
        createdBy: '1',
        createdAt: '2023-12-10'
      }
    ],
    timeline: [
      {
        id: '1',
        action: 'Application received',
        createdBy: 'System',
        createdAt: '2023-12-05'
      }
    ],
    location: 'San Francisco, CA',
    jobTitle: 'Senior Software Engineer',
    avatar: '',
    starred: true,
    appliedAt: '2023-12-05',
    updatedAt: '2023-12-10'
  },
  {
    id: '2',
    jobId: '2',
    name: 'David Chen',
    email: 'david.chen@example.com',
    phone: '+1 (555) 234-5678',
    resume: 'https://example.com/resume/david-chen',
    coverLetter: 'I am excited to apply for the Product Manager position...',
    screeningAnswers: [
      {
        question: 'Describe your experience with product launches',
        answer: 'Led 5 successful product launches...'
      }
    ],
    status: 'Screening',
    stage: 'Screening',
    rating: 4.0,
    notes: [],
    timeline: [
      {
        id: '1',
        action: 'Application received',
        createdBy: 'System',
        createdAt: '2023-12-07'
      }
    ],
    location: 'New York, NY',
    jobTitle: 'Product Manager',
    avatar: '',
    starred: false,
    appliedAt: '2023-12-07',
    updatedAt: '2023-12-07'
  },
  {
    id: '3',
    jobId: '1',
    name: 'Jessica Taylor',
    email: 'jessica.taylor@example.com',
    phone: '+1 (555) 345-6789',
    resume: 'https://example.com/resume/jessica-taylor',
    coverLetter: 'I am excited to apply for the UI/UX Designer position...',
    screeningAnswers: [],
    status: 'Offer',
    stage: 'Offer',
    rating: 4.8,
    notes: [],
    timeline: [
      {
        id: '1',
        action: 'Application received',
        createdBy: 'System',
        createdAt: '2023-12-01'
      }
    ],
    location: 'Los Angeles, CA',
    jobTitle: 'UI/UX Designer',
    avatar: '',
    starred: true,
    appliedAt: '2023-12-01',
    updatedAt: '2023-12-10'
  }
];

export const mockInterviews: Interview[] = [
  {
    id: '1',
    candidateId: '1',
    jobId: '1',
    type: 'Video',
    scheduledAt: '2023-12-15T10:00:00Z',
    date: '2023-12-15',
    time: '10:00 AM PST',
    duration: 60,
    meetingLink: 'https://meet.google.com/abc-defg-hij',
    position: 'Senior Software Engineer',
    candidate: {
      id: '1',
      name: 'Emily Wilson',
      email: 'emily.wilson@example.com',
      avatar: ''
    },
    interviewers: [
      {
        id: '2',
        name: 'Sarah Johnson',
        avatar: ''
      },
      {
        id: '3',
        name: 'Michael Brown',
        avatar: ''
      }
    ],
    notes: 'Technical interview focusing on system design and coding skills.',
    status: 'Scheduled'
  },
  {
    id: '2',
    candidateId: '2',
    jobId: '2',
    type: 'Video',
    scheduledAt: '2023-12-16T14:00:00Z',
    date: '2023-12-16',
    time: '2:00 PM EST',
    duration: 30,
    meetingLink: 'https://meet.google.com/xyz-uvwx-yz',
    position: 'Product Manager',
    candidate: {
      id: '2',
      name: 'David Chen',
      email: 'david.chen@example.com',
      avatar: ''
    },
    interviewers: [
      {
        id: '1',
        name: 'John Smith',
        avatar: ''
      }
    ],
    notes: 'Product case study and leadership discussion.',
    status: 'Scheduled'
  }
];
