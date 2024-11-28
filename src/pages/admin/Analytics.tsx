import { mockSystemMetrics } from '../../data/adminMockData';
import { LineChart, BarChart3, PieChart, TrendingUp } from 'lucide-react';

export default function Analytics() {
  const metrics = [
    {
      title: 'Total Users',
      value: mockSystemMetrics.users.total,
      change: mockSystemMetrics.users.growth,
      changeType: mockSystemMetrics.users.growth > 0 ? 'increase' : 'decrease',
    },
    {
      title: 'Active Jobs',
      value: mockSystemMetrics.jobs.active,
      change: mockSystemMetrics.jobs.growth,
      changeType: mockSystemMetrics.jobs.growth > 0 ? 'increase' : 'decrease',
    },
    {
      title: 'Applications',
      value: mockSystemMetrics.applications.thisMonth,
      change: mockSystemMetrics.applications.growth,
      changeType:
        mockSystemMetrics.applications.growth > 0 ? 'increase' : 'decrease',
    },
    {
      title: 'Revenue',
      value: `$${mockSystemMetrics.revenue.thisMonth}`,
      change: mockSystemMetrics.revenue.growth,
      changeType: mockSystemMetrics.revenue.growth > 0 ? 'increase' : 'decrease',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>

      {/* Revenue Chart */}
      <div className="rounded-lg bg-white p-6 shadow">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Revenue Overview</h2>
          <div className="flex items-center space-x-2">
            <select className="rounded-md border border-gray-300 px-3 py-1 text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
        </div>
        <div className="mt-4 h-64 w-full">
          <div className="flex h-full items-end space-x-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-blue-500"
                style={{
                  height: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Usage Statistics */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* User Activity */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-lg font-medium">User Activity</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span>Active Users</span>
                <span className="font-medium">{mockSystemMetrics.users.active}</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-green-500"
                  style={{
                    width: `${(mockSystemMetrics.users.active / mockSystemMetrics.users.total) * 100}%`,
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span>New Users</span>
                <span className="font-medium">{mockSystemMetrics.users.newThisMonth}</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-blue-500"
                  style={{
                    width: `${(mockSystemMetrics.users.newThisMonth / mockSystemMetrics.users.total) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Job Statistics */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-lg font-medium">Job Statistics</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span>Active Jobs</span>
                <span className="font-medium">{mockSystemMetrics.jobs.active}</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-purple-500"
                  style={{
                    width: `${(mockSystemMetrics.jobs.active / mockSystemMetrics.jobs.total) * 100}%`,
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span>Applications</span>
                <span className="font-medium">
                  {mockSystemMetrics.applications.thisMonth}
                </span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-yellow-500"
                  style={{
                    width: `${
                      (mockSystemMetrics.applications.thisMonth / mockSystemMetrics.applications.total) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {metric.title}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {metric.value}
            </dd>
            {metric.change && (
              <div className="mt-2">
                <p
                  className={`text-sm ${
                    metric.changeType === 'increase'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  <span className="font-medium">
                    {metric.change > 0 ? '+' : ''}
                    {(metric.change * 100).toFixed(1)}%
                  </span>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <QuickStat
          title="Revenue Growth"
          value={`${(mockSystemMetrics.revenue.growth * 100).toFixed(1)}%`}
          icon={<TrendingUp />}
        />
        <QuickStat
          title="Success Rate"
          value={`${(mockSystemMetrics.applications.successRate * 100).toFixed(1)}%`}
          icon={<LineChart />}
        />
        <QuickStat
          title="Avg Applications"
          value={mockSystemMetrics.applications.averagePerJob.toString()}
          icon={<BarChart3 />}
        />
        <QuickStat
          title="Category Split"
          value={Object.keys(mockSystemMetrics.jobs.byCategory).length.toString()}
          icon={<PieChart />}
        />
      </div>
    </div>
  );
}

function QuickStat({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="flex items-center">
        <div className="rounded-full bg-blue-100 p-3">{icon}</div>
        <div className="ml-5">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}
