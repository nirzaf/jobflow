export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary: string;
  description: string;
  requirements: string[];
  postedDate: string;
  deadline?: string;
}

export interface Application {
  id: string;
  jobId: string;
  job: Job;
  status: 'Applied' | 'Under Review' | 'Interview' | 'Rejected' | 'Accepted';
  appliedDate: string;
  lastUpdated: string;
  notes?: string;
}

export interface JobAlert {
  id: string;
  keywords: string[];
  location?: string;
  jobType?: string[];
  salary?: {
    min: number;
    max: number;
  };
  frequency: 'Daily' | 'Weekly';
  active: boolean;
  createdAt: string;
}

export interface UserSettings {
  notifications: {
    email: boolean;
    desktop: boolean;
    applicationUpdates: boolean;
    newJobs: boolean;
  };
  privacy: {
    profileVisibility: 'Public' | 'Private';
    resumeVisibility: 'Public' | 'Private';
  };
  preferences: {
    jobTypes: string[];
    locations: string[];
    minSalary: number;
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'jobseeker' | 'employer' | 'admin';
  status: 'active' | 'inactive';
  avatar?: string;
  joinDate: string;
  employerData?: {
    companyId: string;
    teamRole: string;
    department?: string;
  };
  adminData?: {
    permissions: string[];
    lastLogin: string;
  };
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  banner: string;
  industry: string;
  size: string;
  description: string;
  culture: string;
  website: string;
  socialMedia: {
    linkedin: string;
    twitter: string;
    facebook: string;
  };
  locations: CompanyLocation[];
  verificationStatus: 'Pending' | 'Verified' | 'Rejected';
  createdAt: string;
  updatedAt: string;
}

export interface CompanyLocation {
  id: string;
  type: 'Headquarters' | 'Branch' | 'Regional Office' | 'Remote Office';
  address: string;
  city: string;
  country: string;
  postalCode: string;
  isPrimary: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  avatar?: string;
  department?: string;
  joinDate: string;
}

export interface JobPosting {
  id: string;
  companyId: string;
  title: string;
  department: string;
  description: string;
  requirements: string[];
  skills: string[];
  qualifications: string[];
  salaryRange: {
    min: number;
    max: number;
    currency: string;
  };
  benefits: string[];
  location: string;
  workType: string;
  type: string;
  screeningQuestions: {
    question: string;
    required: boolean;
  }[];
  applicationDeadline: string;
  status: string;
  postedDate: string;
  applications: {
    total: number;
    new: number;
  };
  analytics: {
    views: number;
    applications: number;
    shortlisted: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Candidate {
  id: string;
  jobId: string;
  name: string;
  email: string;
  phone: string;
  resume: string;
  coverLetter: string;
  screeningAnswers: {
    question: string;
    answer: string;
  }[];
  status: string;
  stage: 'Screening' | 'Interview' | 'Offer' | 'Hired' | 'Rejected';
  rating: number;
  notes: {
    id: string;
    content: string;
    createdBy: string;
    createdAt: string;
  }[];
  timeline: {
    id: string;
    action: string;
    createdBy: string;
    createdAt: string;
  }[];
  location: string;
  jobTitle: string;
  avatar?: string;
  starred: boolean;
  appliedAt: string;
  updatedAt: string;
}

export interface Interview {
  id: string;
  candidateId: string;
  jobId: string;
  type: 'Video' | 'Phone' | 'In-Person';
  scheduledAt: string;
  date: string;
  time: string;
  duration: number;
  meetingLink: string;
  position: string;
  candidate: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  interviewers: {
    id: string;
    name: string;
    avatar?: string;
  }[];
  notes?: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
}

export interface SupportTicket {
  id: string;
  userId: string;
  subject: string;
  description: string;
  status: 'open' | 'in-progress' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  assignedTo?: string;
  category: 'technical' | 'billing' | 'account' | 'other';
  resolution?: string;
}

export interface Transaction {
  id: string;
  userId: string;
  type: 'subscription' | 'feature' | 'refund';
  amount: number;
  status: 'completed' | 'pending' | 'failed' | 'refunded';
  date: string;
  description: string;
  refundReason?: string;
}

export interface SystemConfig {
  email: {
    provider: string;
    host: string;
    port: number;
    username: string;
    encryption: string;
  };
  payment: {
    providers: {
      name: string;
      enabled: boolean;
      mode: 'live' | 'sandbox';
      currencies: string[];
    }[];
  };
  security: {
    passwordPolicy: {
      minLength: number;
      requireNumbers: boolean;
      requireSpecialChars: boolean;
      requireUppercase: boolean;
      maxAge: number;
    };
    twoFactorAuth: {
      enabled: boolean;
      required: string[];
      optional: string[];
    };
    sessionTimeout: number;
  };
}

export interface SystemMetrics {
  users: {
    total: number;
    active: number;
    newThisMonth: number;
    growth: number;
    byRole: {
      jobseeker: number;
      employer: number;
      admin: number;
    };
  };
  jobs: {
    total: number;
    active: number;
    newThisMonth: number;
    growth: number;
    byCategory: {
      technology: number;
      healthcare: number;
      finance: number;
      other: number;
    };
  };
  applications: {
    total: number;
    thisMonth: number;
    averagePerJob: number;
    successRate: number;
    growth: number;
  };
  revenue: {
    total: number;
    thisMonth: number;
    growth: number;
  };
}

export interface PublicJob {
  id: string;
  title: string;
  company: {
    id: string;
    name: string;
    logo?: string;
    rating?: number;
    reviewCount?: number;
    location: string;
  };
  description: string;
  shortDescription: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Temporary' | 'Internship';
  salary: {
    min: number;
    max: number;
    period: 'hourly' | 'monthly' | 'yearly';
  };
  experience: {
    min: number;
    max: number;
    level: 'Entry' | 'Mid' | 'Senior' | 'Lead' | 'Executive';
  };
  skills: string[];
  benefits: string[];
  postedDate: string;
  category: string;
  industry: string;
  educationLevel: string;
  applicationCount: number;
  isRemote: boolean;
  isFeatured: boolean;
  isUrgent: boolean;
}

export interface JobFilter {
  sortBy?: 'relevance' | 'date' | 'salary';
  sortOrder?: 'asc' | 'desc';
  type?: string[];
  experience?: string[];
  category?: string[];
  industry?: string[];
  educationLevel?: string[];
  isRemote?: boolean;
  salaryMin?: number;
  salaryMax?: number;
  postedWithin?: '24h' | '7d' | '14d' | '30d';
}

export interface JobSeekerProfile {
  id: string;
  userId: string;
  email: string;
  name: string;
  title: string;
  phone: string;
  location: string;
  about: string;
  experience: {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string | null;
    current: boolean;
    description: string;
  }[];
  education: {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    grade?: string;
  }[];
  skills: string[];
  languages: {
    language: string;
    proficiency: string;
  }[];
  certifications: {
    id: string;
    name: string;
    issuer: string;
    issueDate: string;
    expiryDate?: string;
    credentialId?: string;
  }[];
  resume: {
    url: string;
    lastUpdated: string;
  };
  preferences: {
    jobTypes: string[];
    expectedSalary: {
      min: number;
      max: number;
      period: 'hourly' | 'monthly' | 'yearly';
      currency: string;
    };
    locations: string[];
    industries: string[];
    noticePeriod?: string;
  };
}

export interface SavedJob {
  id: string;
  userId: string;
  jobId: string;
  savedDate: string;
  notes?: string;
  job: PublicJob;
}

export interface JobApplication {
  id: string;
  userId: string;
  jobId: string;
  job: PublicJob;
  status: 'Applied' | 'Under Review' | 'Interview Scheduled' | 'Rejected' | 'Accepted';
  appliedDate: string;
  lastUpdated: string;
  coverLetter?: string;
  resume: {
    url: string;
    lastUpdated: string;
  };
  interviews?: {
    id: string;
    type: string;
    date: string;
    location: string;
    notes?: string;
  }[];
  timeline: {
    id: string;
    status: string;
    date: string;
    notes?: string;
  }[];
}

export interface JobAlert {
  id: string;
  userId: string;
  name: string;
  keywords: string[];
  locations?: string[];
  jobTypes?: string[];
  salary?: {
    min: number;
    max: number;
  };
  frequency: 'Daily' | 'Weekly';
  active: boolean;
  createdAt: string;
}
