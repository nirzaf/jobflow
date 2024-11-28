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
    <div className="p-4 sm:p-6">
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">My Applications</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Track and manage your job applications</p>
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {mockApplications.map(application => (
          <div key={application.id} className="border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white truncate">
                  {application.job.title}
                </h2>
                <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Building className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{application.job.company}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{application.job.location}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">Applied: {application.appliedDate}</span>
                  </span>
                </div>
              </div>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(application.status)} dark:bg-opacity-15`}>
                {application.status}
              </span>
            </div>
            
            {application.notes && (
              <div className="mt-4 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <h3 className="text-sm font-medium mb-2 text-gray-900 dark:text-white">Notes:</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{application.notes}</p>
              </div>
            )}
            
            <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button className="w-full sm:w-auto px-4 py-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors flex items-center justify-center">
                View Details
              </button>
              <button className="w-full sm:w-auto px-4 py-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors flex items-center justify-center">
                Add Note
              </button>
              <button className="w-full sm:w-auto px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors flex items-center justify-center">
                Withdraw
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
