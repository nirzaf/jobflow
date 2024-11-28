import React, { useState } from 'react';
import { mockJobs } from '../../data/mockData';
import { Job } from '../../types';
import { Search, MapPin, Briefcase, DollarSign } from 'lucide-react';

export default function JobSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState<Job[]>(mockJobs);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = mockJobs.filter(job => 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setJobs(filtered);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Job Search</h1>
      
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      <div className="space-y-6">
        {jobs.map(job => (
          <div key={job.id} className="border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{job.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{job.company}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {job.salary}
                  </span>
                </div>
              </div>
              <button className="w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors">
                Apply
              </button>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">Requirements:</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                {job.requirements.map((req, index) => (
                  <li key={index} className="break-words">{req}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Posted: {job.postedDate}
              {job.deadline && ` • Deadline: ${job.deadline}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
