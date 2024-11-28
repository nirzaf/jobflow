import { User, SupportTicket, Transaction, SystemConfig, SystemMetrics } from '../types';

export const mockAdminUser = {
  id: 'admin-1',
  email: 'admin@email.com',
  name: 'System Administrator',
  role: 'admin',
  adminData: {
    permissions: ['all'],
    lastLogin: new Date().toISOString(),
  },
};

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'john.doe@example.com',
    name: 'John Doe',
    role: 'jobseeker',
    status: 'active',
    joinDate: '2023-01-15',
  },
  {
    id: '2',
    email: 'employer@email.com',
    name: 'Jane Smith',
    role: 'employer',
    status: 'active',
    joinDate: '2023-02-01',
    employerData: {
      companyId: 'comp1',
      teamRole: 'Hiring Manager',
      department: 'HR',
    },
  },
  {
    id: '3',
    email: 'admin@email.com',
    name: 'Admin User',
    role: 'admin',
    status: 'active',
    joinDate: '2023-01-01',
    adminData: {
      permissions: ['all'],
      lastLogin: '2023-06-15T10:30:00Z',
    },
  },
];

export const mockSupportTickets: SupportTicket[] = [
  {
    id: 'ticket-1',
    userId: 'user-1',
    subject: 'Cannot access job applications',
    description: 'Getting error when trying to view my submitted applications',
    status: 'open',
    priority: 'high',
    createdAt: '2023-12-01T10:00:00Z',
    assignedTo: 'agent-1',
    category: 'technical',
  },
  {
    id: 'ticket-2',
    userId: 'user-2',
    subject: 'Payment issue',
    description: 'Double charged for premium subscription',
    status: 'in-progress',
    priority: 'urgent',
    createdAt: '2023-12-02T09:30:00Z',
    assignedTo: 'agent-2',
    category: 'billing',
  },
  {
    id: 'ticket-3',
    userId: 'user-3',
    subject: 'Account suspension inquiry',
    description: 'Need information about account suspension',
    status: 'closed',
    priority: 'medium',
    createdAt: '2023-11-28T14:15:00Z',
    assignedTo: 'agent-1',
    category: 'account',
    resolution: 'Account suspended due to terms violation',
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: 't1',
    userId: 'user1',
    type: 'subscription',
    amount: 99.99,
    status: 'completed',
    date: '2023-12-01T10:00:00Z',
    description: 'Monthly Premium Subscription',
  },
  {
    id: 't2',
    userId: 'user2',
    type: 'feature',
    amount: 49.99,
    status: 'completed',
    date: '2023-12-01T11:30:00Z',
    description: 'Featured Job Posting',
  },
  {
    id: 't3',
    userId: 'user3',
    type: 'refund',
    amount: 99.99,
    status: 'refunded',
    date: '2023-12-01T14:15:00Z',
    description: 'Subscription Refund',
    refundReason: 'Customer requested cancellation',
  },
];

export const mockSystemConfig: SystemConfig = {
  email: {
    provider: 'SMTP',
    host: 'smtp.example.com',
    port: 587,
    username: 'notifications@qatarjobs.com',
    encryption: 'TLS',
  },
  payment: {
    providers: [
      {
        name: 'Stripe',
        enabled: true,
        mode: 'live',
        currencies: ['USD', 'QAR'],
      },
      {
        name: 'PayPal',
        enabled: true,
        mode: 'sandbox',
        currencies: ['USD'],
      },
    ],
  },
  security: {
    passwordPolicy: {
      minLength: 8,
      requireNumbers: true,
      requireSpecialChars: true,
      requireUppercase: true,
      maxAge: 90,
    },
    twoFactorAuth: {
      enabled: true,
      required: ['admin'],
      optional: ['employer', 'jobseeker'],
    },
    sessionTimeout: 30, // minutes
  },
};

export const mockSystemMetrics: SystemMetrics = {
  users: {
    total: 1500,
    active: 1200,
    newThisMonth: 150,
    growth: 0.15,
    byRole: {
      jobseeker: 1200,
      employer: 250,
      admin: 50,
    },
  },
  jobs: {
    total: 500,
    active: 350,
    newThisMonth: 75,
    growth: 0.25,
    byCategory: {
      technology: 150,
      healthcare: 100,
      finance: 75,
      other: 175,
    },
  },
  applications: {
    total: 3000,
    thisMonth: 450,
    averagePerJob: 8.5,
    successRate: 0.15,
    growth: 0.20,
  },
  revenue: {
    total: 50000,
    thisMonth: 7500,
    growth: 0.30,
  },
};
