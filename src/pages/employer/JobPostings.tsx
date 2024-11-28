import { mockJobPostings } from '../../data/employerMockData';
import { Building, MapPin, Clock, Users, PlusCircle, Upload, ChevronDown, Edit, Share2, Trash2 } from 'lucide-react';

export default function JobPostings() {
  const jobPostings = mockJobPostings;

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-gray-100 text-gray-600';
      case 'closed':
        return 'bg-red-100 text-red-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Job Postings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your active and past job postings
        </p>
      </div>

      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row gap-2">
          <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center">
            <PlusCircle className="w-4 h-4 mr-2" />
            Create New Job
          </button>
          <button className="w-full sm:w-auto px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg flex items-center justify-center">
            <Upload className="w-4 h-4 mr-2" />
            Import Jobs
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative">
            <select className="w-full sm:w-auto appearance-none px-4 py-2 pr-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="closed">Closed</option>
              <option value="paused">Paused</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
          <div className="relative">
            <select className="w-full sm:w-auto appearance-none px-4 py-2 pr-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option value="all">All Departments</option>
              <option value="engineering">Engineering</option>
              <option value="design">Design</option>
              <option value="product">Product</option>
              <option value="marketing">Marketing</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6">
        {jobPostings.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 truncate">
                    {job.title}
                  </h3>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      job.status
                    )}`}
                  >
                    {job.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-1.5 flex-shrink-0" />
                    <span className="truncate">{job.department}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0" />
                    <span className="truncate">{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1.5 flex-shrink-0" />
                    <span className="truncate">{job.workType}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-500">
                  Total Views
                </div>
                <div className="mt-1 text-lg sm:text-xl font-semibold text-gray-900">
                  {job.analytics.views}
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-500">
                  Applications
                </div>
                <div className="mt-1 text-lg sm:text-xl font-semibold text-gray-900">
                  {job.analytics.applications}
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-500">
                  Shortlisted
                </div>
                <div className="mt-1 text-lg sm:text-xl font-semibold text-gray-900">
                  {job.analytics.shortlisted}
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-500">
                  Time Posted
                </div>
                <div className="mt-1 text-lg sm:text-xl font-semibold text-gray-900">
                  {new Date(job.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-2">
              <button className="w-full sm:w-auto px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg flex items-center justify-center">
                <Edit className="w-4 h-4 mr-2" />
                Edit Job
              </button>
              <button className="w-full sm:w-auto px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 mr-2" />
                View Applicants
              </button>
              <button className="w-full sm:w-auto px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg flex items-center justify-center">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
              <div className="flex-grow" />
              <button className="w-full sm:w-auto px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg flex items-center justify-center">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
