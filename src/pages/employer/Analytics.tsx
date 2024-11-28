import { 
  Users, 
  UserCheck, 
  Clock, 
  Calendar,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity
} from 'lucide-react';

export default function Analytics() {
  // Mock data for analytics
  const stats = [
    {
      id: 1,
      name: 'Total Applications',
      value: '2,847',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
    },
    {
      id: 2,
      name: 'Hired Candidates',
      value: '42',
      change: '+18.2%',
      trend: 'up',
      icon: UserCheck,
    },
    {
      id: 3,
      name: 'Time to Hire',
      value: '24 days',
      change: '-5.8%',
      trend: 'down',
      icon: Clock,
    },
    {
      id: 4,
      name: 'Active Jobs',
      value: '156',
      change: '+8.3%',
      trend: 'up',
      icon: Calendar,
    },
  ];

  const jobStats = [
    { name: 'Software Engineer', applications: 450, hired: 8, inProgress: 25 },
    { name: 'Product Manager', applications: 280, hired: 4, inProgress: 15 },
    { name: 'UI/UX Designer', applications: 320, hired: 6, inProgress: 18 },
    { name: 'Data Scientist', applications: 180, hired: 3, inProgress: 12 },
    { name: 'DevOps Engineer', applications: 220, hired: 5, inProgress: 20 },
  ];

  const sourceStats = [
    { name: 'Company Website', value: 35 },
    { name: 'LinkedIn', value: 25 },
    { name: 'Job Boards', value: 20 },
    { name: 'Referrals', value: 15 },
    { name: 'Others', value: 5 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Analytics Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-lg shadow p-4 sm:p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
              </div>
              <span className={`flex items-center gap-1 text-xs sm:text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? (
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                ) : (
                  <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />
                )}
                {stat.change}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-xs sm:text-sm text-gray-500">{stat.name}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Job Performance */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
            <h2 className="text-base sm:text-lg font-semibold">Job Performance</h2>
            <select className="w-full sm:w-auto px-3 py-1 border rounded-lg text-sm">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last 12 months</option>
            </select>
          </div>
          <div className="space-y-4">
            {jobStats.map((job) => (
              <div key={job.name} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="font-medium text-sm sm:text-base">{job.name}</span>
                  <span className="text-xs sm:text-sm text-gray-500">{job.applications} applications</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${(job.hired / job.applications) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs sm:text-sm text-gray-500">
                  <span>{job.hired} hired</span>
                  <span>{job.inProgress} in progress</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Sources */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
            <h2 className="text-base sm:text-lg font-semibold">Application Sources</h2>
            <select className="w-full sm:w-auto px-3 py-1 border rounded-lg text-sm">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last 12 months</option>
            </select>
          </div>
          <div className="space-y-4">
            {sourceStats.map((source) => (
              <div key={source.name} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="font-medium text-sm sm:text-base">{source.name}</span>
                  <span className="text-xs sm:text-sm text-gray-500">{source.value}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${source.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost per Hire */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Cost per Hire</h2>
            <select className="px-3 py-1 border rounded-lg text-sm">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last 12 months</option>
            </select>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-indigo-100 rounded-lg">
              <DollarSign className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">$4,250</h3>
              <p className="text-sm text-gray-500">Average cost per hire</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Job Advertising</span>
              <span>$1,500</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Agency Fees</span>
              <span>$2,000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Employee Referrals</span>
              <span>$500</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Other Costs</span>
              <span>$250</span>
            </div>
          </div>
        </div>

        {/* Hiring Pipeline */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Hiring Pipeline</h2>
            <select className="px-3 py-1 border rounded-lg text-sm">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last 12 months</option>
            </select>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-indigo-100 rounded-lg">
              <Activity className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">68%</h3>
              <p className="text-sm text-gray-500">Conversion rate</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Applications</span>
                <span>2,847</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Screening</span>
                <span>1,425</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: '50%' }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Interview</span>
                <span>568</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: '20%' }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Offer</span>
                <span>142</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: '5%' }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Hired</span>
                <span>42</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-full bg-green-600 rounded-full" style={{ width: '1.5%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
