import { useState } from 'react';
import { mockSystemMetrics } from '../../data/adminMockData';
import { FileText, Download, Filter } from 'lucide-react';

type ReportType = 'user' | 'job' | 'financial' | 'activity';
type TimeFrame = 'daily' | 'weekly' | 'monthly' | 'yearly';

interface Report {
  id: string;
  name: string;
  type: ReportType;
  description: string;
  lastGenerated?: string;
  frequency: string;
}

const mockReports: Report[] = [
  {
    id: 'r1',
    name: 'User Registration Report',
    type: 'user',
    description: 'Detailed report of new user registrations and user demographics',
    lastGenerated: '2023-12-02T10:00:00Z',
    frequency: 'Daily',
  },
  {
    id: 'r2',
    name: 'Job Posting Analytics',
    type: 'job',
    description: 'Analysis of job postings, applications, and success rates',
    lastGenerated: '2023-12-01T15:30:00Z',
    frequency: 'Weekly',
  },
  {
    id: 'r3',
    name: 'Revenue Report',
    type: 'financial',
    description: 'Comprehensive financial report including revenue and transactions',
    lastGenerated: '2023-12-01T00:00:00Z',
    frequency: 'Monthly',
  },
  {
    id: 'r4',
    name: 'System Activity Log',
    type: 'activity',
    description: 'Detailed log of system activities and user interactions',
    lastGenerated: '2023-12-02T11:00:00Z',
    frequency: 'Daily',
  },
];

export default function Reports() {
  const [selectedType, setSelectedType] = useState<ReportType | 'all'>('all');
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('monthly');
  const [reports] = useState<Report[]>(mockReports);

  const filteredReports = reports.filter(
    (report) => selectedType === 'all' || report.type === selectedType
  );

  const handleGenerateReport = (reportId: string) => {
    // In a real app, this would trigger report generation
    alert(`Generating report ${reportId}`);
  };

  const handleDownloadReport = (reportId: string) => {
    // In a real app, this would download the report
    alert(`Downloading report ${reportId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
        <div className="flex items-center space-x-4">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as ReportType | 'all')}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
          >
            <option value="all">All Reports</option>
            <option value="user">User Reports</option>
            <option value="job">Job Reports</option>
            <option value="financial">Financial Reports</option>
            <option value="activity">Activity Reports</option>
          </select>
          <select
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value as TimeFrame)}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="rounded-lg bg-white p-6 shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 p-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {report.name}
                  </h3>
                  <p className="text-sm text-gray-500">{report.frequency}</p>
                </div>
              </div>
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <p className="mt-4 text-sm text-gray-600">{report.description}</p>
            {report.lastGenerated && (
              <p className="mt-2 text-sm text-gray-500">
                Last generated:{' '}
                {new Date(report.lastGenerated).toLocaleDateString()}
              </p>
            )}
            <div className="mt-6 flex space-x-3">
              <button
                onClick={() => handleGenerateReport(report.id)}
                className="flex flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Generate
              </button>
              <button
                onClick={() => handleDownloadReport(report.id)}
                className="flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <QuickStat
          title="Total Users"
          value={mockSystemMetrics.users.total.toLocaleString()}
          change={`+${mockSystemMetrics.users.newThisMonth} this month`}
        />
        <QuickStat
          title="Active Jobs"
          value={mockSystemMetrics.jobs.active.toLocaleString()}
          change={`${mockSystemMetrics.jobs.newThisMonth} new postings`}
        />
        <QuickStat
          title="Applications"
          value={mockSystemMetrics.applications.thisMonth.toLocaleString()}
          change={`${Math.round(
            mockSystemMetrics.applications.successRate * 100
          )}% success rate`}
        />
        <QuickStat
          title="Revenue"
          value={`$${mockSystemMetrics.revenue.thisMonth.toLocaleString()}`}
          change={`${Math.round(
            mockSystemMetrics.revenue.growth * 100
          )}% vs last month`}
        />
      </div>
    </div>
  );
}

function QuickStat({
  title,
  value,
  change,
}: {
  title: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-lg bg-white px-5 py-4 shadow">
      <div className="flex items-center justify-between">
        <div className="truncate text-sm font-medium text-gray-500">{title}</div>
      </div>
      <div className="mt-1 flex items-baseline justify-between md:block lg:flex">
        <div className="flex items-baseline text-2xl font-semibold text-gray-900">
          {value}
        </div>
        <div className="inline-flex items-baseline rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 md:mt-2 lg:mt-0">
          {change}
        </div>
      </div>
    </div>
  );
}
