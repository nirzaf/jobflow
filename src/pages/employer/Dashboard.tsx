import { BarChart2, Users, Briefcase, Calendar } from 'lucide-react';

export default function EmployerDashboard() {
  const stats = [
    {
      name: 'Active Jobs',
      value: '12',
      icon: Briefcase,
      change: '+2 this week',
      changeType: 'increase',
    },
    {
      name: 'Total Applications',
      value: '147',
      icon: Users,
      change: '+23% vs last month',
      changeType: 'increase',
    },
    {
      name: 'Interviews Scheduled',
      value: '8',
      icon: Calendar,
      change: '4 this week',
      changeType: 'neutral',
    },
    {
      name: 'Conversion Rate',
      value: '24%',
      icon: BarChart2,
      change: '+4% vs last month',
      changeType: 'increase',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Icon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-gray-500">
                      {stat.name}
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        {stat.value}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="mt-4">
                <div
                  className={`text-sm ${
                    stat.changeType === 'increase'
                      ? 'text-green-600'
                      : stat.changeType === 'decrease'
                      ? 'text-red-600'
                      : 'text-gray-500'
                  }`}
                >
                  {stat.change}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
        <div className="mt-4 overflow-hidden rounded-lg bg-white shadow">
          <ul role="list" className="divide-y divide-gray-200">
            {[
              {
                title: 'New application received',
                description: 'John Doe applied for Senior Developer position',
                time: '2 hours ago',
              },
              {
                title: 'Interview scheduled',
                description: 'Interview with Jane Smith for UI Designer role',
                time: '4 hours ago',
              },
              {
                title: 'Job posting updated',
                description: 'Modified requirements for Full Stack Developer position',
                time: 'Yesterday',
              },
            ].map((activity, idx) => (
              <li
                key={idx}
                className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="truncate">
                    <div className="flex text-sm">
                      <p className="font-medium text-blue-600 truncate">
                        {activity.title}
                      </p>
                    </div>
                    <div className="mt-1">
                      <p className="text-sm text-gray-600 truncate">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                  <div className="ml-2 flex-shrink-0">
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
