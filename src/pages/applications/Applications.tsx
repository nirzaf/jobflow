import { mockApplications } from '../../data/mockData';
import { Clock, Building, MapPin } from 'lucide-react';

export default function Applications() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Applied':
        return 'bg-blue-100 text-blue-800';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Interview':
        return 'bg-purple-100 text-purple-800';
      case 'Accepted':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Applications</h1>
      
      <div className="grid grid-cols-1 gap-6">
        {mockApplications.map(application => (
          <div key={application.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{application.job.title}</h2>
                <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    {application.job.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {application.job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Applied: {application.appliedDate}
                  </span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)} dark:bg-opacity-15`}>
                {application.status}
              </span>
            </div>
            
            {application.notes && (
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Notes:</h3>
                <p className="text-gray-700 dark:text-gray-300">{application.notes}</p>
              </div>
            )}
            
            <div className="mt-4 flex gap-4">
              <button className="px-4 py-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors">
                View Details
              </button>
              <button className="px-4 py-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors">
                Add Note
              </button>
              <button className="px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                Withdraw
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
