import { mockJobAlerts } from '../../data/mockData';
import { Bell, Edit, Trash2, MapPin, Clock } from 'lucide-react';

export default function JobAlerts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Job Alerts</h1>
        <button className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          <Bell className="mr-2 h-5 w-5" />
          Create Alert
        </button>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow">
        <ul className="divide-y divide-gray-200">
          {mockJobAlerts.map((alert) => (
            <li key={alert.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {alert.keywords.join(', ')}
                  </h3>
                  <div className="mt-1">
                    <p className="text-sm text-gray-500">{alert.jobType && alert.jobType.join(', ')}</p>
                  </div>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="mr-1.5 h-4 w-4 flex-shrink-0" />
                      {alert.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1.5 h-4 w-4 flex-shrink-0" />
                      {alert.frequency}
                    </div>
                  </div>
                </div>
                <div className="ml-4 flex items-center space-x-4">
                  <button className="text-gray-400 hover:text-gray-500">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-500">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
