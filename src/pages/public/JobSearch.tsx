import React, { useState, useEffect } from 'react';
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaBriefcase, 
  FaStar, 
  FaClock, 
  FaSlidersH,
  FaDollarSign,
  FaRegCalendarAlt,
  FaUserGraduate,
  FaRegBookmark,
  FaPaperPlane,
  FaCode,
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaDesktop,
  FaWrench,
  FaCogs,
  FaPaintBrush,
  FaCalculator,
  FaTruck,
  FaHardHat,
  FaHeartbeat,
  FaGraduationCap
} from 'react-icons/fa';
import { JobFilter, PublicJob } from '../../types';
import {
  mockPublicJobs,
  experienceLevels,
  jobTypes,
} from '../../data/publicMockData';

export default function JobSearch() {
  const [filters, setFilters] = useState<JobFilter>({
    sortBy: 'relevance',
    sortOrder: 'desc',
  });
  const [showFilters, setShowFilters] = useState(false);
  const [jobs, setJobs] = useState<PublicJob[]>(mockPublicJobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    // In a real app, this would be an API call with filters
    let filtered = [...mockPublicJobs];

    if (searchTerm) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (location) {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (filters.type?.length) {
      filtered = filtered.filter((job) => filters.type?.includes(job.type));
    }

    if (filters.experience?.length) {
      filtered = filtered.filter((job) =>
        filters.experience?.includes(job.experience.level)
      );
    }

    if (filters.category?.length) {
      filtered = filtered.filter((job) =>
        filters.category?.includes(job.category)
      );
    }

    if (filters.industry?.length) {
      filtered = filtered.filter((job) =>
        filters.industry?.includes(job.industry)
      );
    }

    if (filters.educationLevel?.length) {
      filtered = filtered.filter((job) =>
        filters.educationLevel?.includes(job.educationLevel)
      );
    }

    if (filters.isRemote !== undefined) {
      filtered = filtered.filter((job) => job.isRemote === filters.isRemote);
    }

    if (filters.salaryMin !== undefined && filters.salaryMin > 0) {
      filtered = filtered.filter((job) => job.salary.min >= (filters.salaryMin || 0));
    }

    if (filters.salaryMax !== undefined && filters.salaryMax > 0) {
      filtered = filtered.filter((job) => job.salary.max <= (filters.salaryMax || 0));
    }

    if (filters.postedWithin) {
      const date = new Date();
      switch (filters.postedWithin) {
        case '24h':
          date.setDate(date.getDate() - 1);
          break;
        case '7d':
          date.setDate(date.getDate() - 7);
          break;
        case '14d':
          date.setDate(date.getDate() - 14);
          break;
        case '30d':
          date.setDate(date.getDate() - 30);
          break;
        default:
          break;
      }
      filtered = filtered.filter((job) => new Date(job.postedDate) >= date);
    }

    // Sort jobs
    if (filters.sortBy === 'date') {
      filtered.sort((a, b) => {
        const dateA = new Date(a.postedDate).getTime();
        const dateB = new Date(b.postedDate).getTime();
        return filters.sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
      });
    } else if (filters.sortBy === 'salary') {
      filtered.sort((a, b) => {
        const salaryA = (a.salary.min + a.salary.max) / 2;
        const salaryB = (b.salary.min + b.salary.max) / 2;
        return filters.sortOrder === 'desc' ? salaryB - salaryA : salaryA - salaryB;
      });
    }

    setJobs(filtered);
  }, [searchTerm, location, filters]);

  const handleFilterChange = (key: keyof JobFilter, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      sortBy: 'relevance',
      sortOrder: 'desc',
    });
    setSearchTerm('');
    setLocation('');
  };

  const getJobIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'software development':
        return FaCode;
      case 'marketing':
        return FaBullhorn;
      case 'construction':
        return FaHardHat;
      case 'project management':
        return FaChartLine;
      case 'human resources':
        return FaUsers;
      case 'it & networking':
        return FaDesktop;
      case 'engineering':
        return FaWrench;
      case 'operations':
        return FaCogs;
      case 'design':
        return FaPaintBrush;
      case 'finance':
        return FaCalculator;
      case 'logistics':
        return FaTruck;
      case 'healthcare':
        return FaHeartbeat;
      case 'education':
        return FaGraduationCap;
      default:
        return FaBriefcase;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Search Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 pl-10 pr-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="City or location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 pl-10 pr-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200"
                />
              </div>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <FaSlidersH className="mr-2 h-5 w-5" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          {/* Filters Sidebar */}
          <div
            className={`${
              showFilters ? 'block' : 'hidden'
            } lg:block lg:w-64 space-y-4 sm:space-y-6 mb-4 lg:mb-0`}
          >
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow dark:shadow-gray-700 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <FaSlidersH className="h-5 w-5" />
                  <span className="font-medium">Filters</span>
                </div>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  Clear all
                </button>
              </div>

              {/* Job Type */}
              <div className="mt-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <FaBriefcase className="h-5 w-5" />
                  <span className="font-medium">Job Type</span>
                </div>
                <div className="mt-2 space-y-2">
                  {jobTypes.map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.type?.includes(type)}
                        onChange={(e) => {
                          const types = filters.type || [];
                          handleFilterChange(
                            'type',
                            e.target.checked
                              ? [...types, type]
                              : types.filter((t) => t !== type)
                          );
                        }}
                        className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 transition-colors duration-200"
                      />
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div className="mt-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <FaUserGraduate className="h-5 w-5" />
                  <span className="font-medium">Experience Level</span>
                </div>
                <div className="mt-2 space-y-2">
                  {experienceLevels.map((level) => (
                    <label key={level} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.experience?.includes(level)}
                        onChange={(e) => {
                          const levels = filters.experience || [];
                          handleFilterChange(
                            'experience',
                            e.target.checked
                              ? [...levels, level]
                              : levels.filter((l) => l !== level)
                          );
                        }}
                        className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 transition-colors duration-200"
                      />
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Salary Range */}
              <div className="mt-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <FaDollarSign className="h-5 w-5" />
                  <span className="font-medium">Salary Range</span>
                </div>
                <div className="mt-2 space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.salaryMin || ''}
                      onChange={(e) => handleFilterChange('salaryMin', e.target.value ? Number(e.target.value) : undefined)}
                      className="w-1/2 rounded-md border-gray-300 dark:border-gray-600 text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.salaryMax || ''}
                      onChange={(e) => handleFilterChange('salaryMax', e.target.value ? Number(e.target.value) : undefined)}
                      className="w-1/2 rounded-md border-gray-300 dark:border-gray-600 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Posted Within */}
              <div className="mt-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <FaRegCalendarAlt className="h-5 w-5" />
                  <span className="font-medium">Posted Within</span>
                </div>
                <select
                  value={filters.postedWithin || ''}
                  onChange={(e) => handleFilterChange('postedWithin', e.target.value)}
                  className="mt-2 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-2 pl-3 pr-10 text-sm transition-colors duration-200"
                >
                  <option value="">Any time</option>
                  <option value="24h">Last 24 hours</option>
                  <option value="7d">Last 7 days</option>
                  <option value="14d">Last 14 days</option>
                  <option value="30d">Last 30 days</option>
                </select>
              </div>

              {/* Remote Only */}
              <div className="mt-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.isRemote}
                    onChange={(e) =>
                      handleFilterChange('isRemote', e.target.checked)
                    }
                    className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 transition-colors duration-200"
                  />
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                    Remote Only
                  </span>
                </label>
              </div>

              {/* Sort By */}
              <div className="mt-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <FaSlidersH className="h-5 w-5" />
                  <span className="font-medium">Sort By</span>
                </div>
                <select
                  value={filters.sortBy}
                  onChange={(e) =>
                    handleFilterChange('sortBy', e.target.value)
                  }
                  className="mt-2 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-2 pl-3 pr-10 text-sm transition-colors duration-200"
                >
                  <option value="relevance">Relevance</option>
                  <option value="date">Date</option>
                  <option value="salary">Salary</option>
                </select>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">
                {jobs.length} jobs found
              </p>
              <select
                value={filters.sortOrder}
                onChange={(e) =>
                  handleFilterChange('sortOrder', e.target.value)
                }
                className="rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white py-2 pl-3 pr-10 text-sm transition-colors duration-200"
              >
                <option value="desc">Highest First</option>
                <option value="asc">Lowest First</option>
              </select>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="relative rounded-lg bg-white dark:bg-gray-800 p-4 sm:p-6 shadow dark:shadow-gray-700 hover:shadow-md dark:hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex flex-wrap justify-between gap-2 mb-3 sm:mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white font-semibold text-base sm:text-lg shrink-0 transition-colors duration-200">
                        {job.title.split(' ')[0][0]}
                        {job.title.split(' ')[1] ? job.title.split(' ')[1][0] : ''}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                            {job.title}
                          </h3>
                          {React.createElement(getJobIcon(job.category), {
                            className: "h-4 w-4 text-gray-400 dark:text-gray-500"
                          })}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {job.company.name}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.isFeatured && (
                        <div className="rounded-full bg-yellow-100 dark:bg-yellow-900/50 px-2 sm:px-3 py-1 text-xs font-medium text-yellow-800 dark:text-yellow-200 flex items-center whitespace-nowrap transition-colors duration-200">
                          <FaStar className="mr-1 h-3 w-3" />
                          Featured
                        </div>
                      )}
                      {job.isUrgent && (
                        <div className="rounded-full bg-red-100 dark:bg-red-900/50 px-2 sm:px-3 py-1 text-xs font-medium text-red-800 dark:text-red-200 flex items-center whitespace-nowrap transition-colors duration-200">
                          <FaClock className="mr-1 h-3 w-3" />
                          Urgent
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center">
                      <FaMapMarkerAlt className="mr-1.5 h-3 sm:h-4 w-3 sm:w-4 text-gray-500 dark:text-gray-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <FaBriefcase className="mr-1.5 h-3 sm:h-4 w-3 sm:w-4 text-gray-500 dark:text-gray-400" />
                      {job.type}
                    </span>
                    <span className="flex items-center">
                      <FaDollarSign className="mr-1.5 h-3 sm:h-4 w-3 sm:w-4 text-gray-500 dark:text-gray-400" />
                      {job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()} {job.salary.period}
                    </span>
                    <span className="flex items-center">
                      <FaUserGraduate className="mr-1.5 h-3 sm:h-4 w-3 sm:w-4 text-gray-500 dark:text-gray-400" />
                      {job.experience.level}
                    </span>
                    {job.company.rating && (
                      <span className="flex items-center">
                        <FaStar className="mr-1.5 h-3 sm:h-4 w-3 sm:w-4 text-yellow-400 dark:text-yellow-300" />
                        {job.company.rating} ({job.company.reviewCount})
                      </span>
                    )}
                  </div>
                  
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2 transition-colors duration-200">
                    {job.shortDescription}
                  </p>
                  
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {job.skills.slice(0, 5).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-blue-50 dark:bg-blue-900/50 px-2 sm:px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-300 flex items-center transition-colors duration-200"
                      >
                        <FaCode className="mr-1 h-3 w-3" />
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 5 && (
                      <span className="rounded-full bg-gray-50 dark:bg-gray-700 px-2 sm:px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 transition-colors duration-200">
                        +{job.skills.length - 5} more
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <FaRegCalendarAlt className="mr-1.5 h-4 w-4" />
                      Posted {new Date(job.postedDate).toLocaleDateString()}
                    </div>
                    <div className="flex gap-2">
                      <button className="rounded-lg border border-blue-600 dark:border-blue-400 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors duration-200 flex items-center">
                        <FaRegBookmark className="mr-1.5 h-4 w-4" />
                        Save
                      </button>
                      <button className="rounded-lg bg-blue-600 dark:bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 flex items-center">
                        <FaPaperPlane className="mr-1.5 h-4 w-4" />
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
