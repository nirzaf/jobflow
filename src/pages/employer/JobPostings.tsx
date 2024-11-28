import { mockJobPostings } from '../../data/employerMockData';
import { Building, MapPin, Clock, Users } from 'lucide-react';

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
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Job Postings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your active and past job postings
        </p>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create New Job
          </button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            Import Jobs
          </button>
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="closed">Closed</option>
            <option value="paused">Paused</option>
          </select>
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all">All Departments</option>
            <option value="engineering">Engineering</option>
            <option value="design">Design</option>
            <option value="product">Product</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6">
        {jobPostings.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {job.title}
                </h3>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-1" />
                    {job.department}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {job.workType}
                  </div>
                </div>
              </div>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                  job.status
                )}`}
              >
                {job.status}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-500">
                  Total Views
                </div>
                <div className="mt-1 text-2xl font-semibold text-gray-900">
                  {job.analytics.views}
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-500">
                  Applications
                </div>
                <div className="mt-1 text-2xl font-semibold text-gray-900">
                  {job.analytics.applications}
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-500">
                  Shortlisted
                </div>
                <div className="mt-1 text-2xl font-semibold text-gray-900">
                  {job.analytics.shortlisted}
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-500">
                  Time Posted
                </div>
                <div className="mt-1 text-2xl font-semibold text-gray-900">
                  {new Date(job.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center text-sm text-gray-500">
                <Users className="w-4 h-4 mr-1" />
                {job.applications.total} total applications
                {job.applications.new > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs">
                    {job.applications.new} new
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  Edit
                </button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  View Candidates
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  View Job
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
