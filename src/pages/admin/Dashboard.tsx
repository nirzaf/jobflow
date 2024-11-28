import { mockSystemMetrics } from '../../data/adminMockData';
import { BarChart, Users, Briefcase, DollarSign } from 'lucide-react';

export default function AdminDashboard() {
  const metrics = mockSystemMetrics;

  const revenueData = [
    {
      name: 'Total Revenue',
      amount: metrics.revenue.total,
    },
    {
      name: 'This Month',
      amount: metrics.revenue.thisMonth,
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value={metrics.users.total.toLocaleString()}
          change={`+${metrics.users.newThisMonth} this month`}
          icon={<Users className="h-6 w-6" />}
        />
        <StatCard
          title="Active Jobs"
          value={metrics.jobs.active.toLocaleString()}
          change={`${metrics.jobs.newThisMonth} new postings`}
          icon={<Briefcase className="h-6 w-6" />}
        />
        <StatCard
          title="Applications"
          value={metrics.applications.thisMonth.toLocaleString()}
          change={`${Math.round(metrics.applications.successRate * 100)}% success rate`}
          icon={<BarChart className="h-6 w-6" />}
        />
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <DollarSign className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">
                    Revenue
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      ${metrics.revenue.total.toLocaleString()}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <div className="font-medium text-blue-700">
                {metrics.revenue.growth > 0 ? '+' : ''}
                {(metrics.revenue.growth * 100).toFixed(1)}% from last month
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-lg font-medium">User Distribution</h2>
          <div className="space-y-4">
            {Object.entries(metrics.users.byRole).map(([role, count]) => (
              <div key={role} className="flex items-center justify-between">
                <span className="capitalize">{role}</span>
                <div className="flex items-center">
                  <div className="h-2 w-32 rounded bg-gray-200">
                    <div
                      className="h-2 rounded bg-blue-600"
                      style={{
                        width: `${(count / metrics.users.total) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="ml-4 text-sm text-gray-600">
                    {count.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-lg font-medium">Revenue Breakdown</h2>
          <div className="space-y-4">
            {revenueData.map((data) => (
              <div key={data.name} className="flex items-center justify-between">
                <span className="capitalize">{data.name}</span>
                <div className="flex items-center">
                  <div className="h-2 w-32 rounded bg-gray-200">
                    <div
                      className="h-2 rounded bg-green-600"
                      style={{
                        width: `${(data.amount / metrics.revenue.total) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="ml-4 text-sm text-gray-600">
                    ${data.amount.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, icon }: {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="flex items-center">
        <div className="rounded-full bg-blue-100 p-3">
          {icon}
        </div>
        <div className="ml-5">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <div className="flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
          </div>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600">{change}</p>
    </div>
  );
}
