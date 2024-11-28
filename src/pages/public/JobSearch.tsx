import React, { useState, useEffect } from 'react';
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaBriefcase, 
  FaStar, 
  FaClock, 
  FaBuilding, 
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
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="City or location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <FaSlidersH className="mr-2 h-5 w-5" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          {/* Filters Sidebar */}
          <div
            className={`${
              showFilters ? 'block' : 'hidden'
            } lg:block lg:w-64 space-y-6`}
          >
            <div className="rounded-lg bg-white p-6 shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-600">
                  <FaSlidersH className="h-5 w-5" />
                  <span className="font-medium">Filters</span>
                </div>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Clear all
                </button>
              </div>

              {/* Job Type */}
              <div className="mt-6">
                <div className="flex items-center space-x-2 text-gray-600">
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
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div className="mt-6">
                <div className="flex items-center space-x-2 text-gray-600">
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
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Salary Range */}
              <div className="mt-6">
                <div className="flex items-center space-x-2 text-gray-600">
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
                      className="w-1/2 rounded-md border-gray-300 text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.salaryMax || ''}
                      onChange={(e) => handleFilterChange('salaryMax', e.target.value ? Number(e.target.value) : undefined)}
                      className="w-1/2 rounded-md border-gray-300 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Posted Within */}
              <div className="mt-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <FaRegCalendarAlt className="h-5 w-5" />
                  <span className="font-medium">Posted Within</span>
                </div>
                <select
                  value={filters.postedWithin || ''}
                  onChange={(e) => handleFilterChange('postedWithin', e.target.value)}
                  className="mt-2 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm"
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
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Remote Only
                  </span>
                </label>
              </div>

              {/* Sort By */}
              <div className="mt-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <FaSlidersH className="h-5 w-5" />
                  <span className="font-medium">Sort By</span>
                </div>
                <select
                  value={filters.sortBy}
                  onChange={(e) =>
                    handleFilterChange('sortBy', e.target.value)
                  }
                  className="mt-2 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm"
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
              <p className="text-sm text-gray-600">
                {jobs.length} jobs found
              </p>
              <select
                value={filters.sortOrder}
                onChange={(e) =>
                  handleFilterChange('sortOrder', e.target.value)
                }
                className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm"
              >
                <option value="desc">Highest First</option>
                <option value="asc">Lowest First</option>
              </select>
            </div>

            <div className="space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="relative rounded-lg bg-white p-6 shadow hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-end gap-2 mb-4">
                    {job.isFeatured && (
                      <div className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800 flex items-center">
                        <FaStar className="mr-1 h-3 w-3" />
                        Featured
                      </div>
                    )}
                    {job.isUrgent && (
                      <div className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800 flex items-center">
                        <FaClock className="mr-1 h-3 w-3" />
                        Urgent
                      </div>
                    )}
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold text-lg">
                      {job.title.split(' ')[0][0]}
                      {job.title.split(' ')[1] ? job.title.split(' ')[1][0] : ''}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">
                          {job.title}
                        </h3>
                        {React.createElement(getJobIcon(job.category), {
                          className: "h-4 w-4 text-gray-400"
                        })}
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                        <span className="flex items-center">
                          <FaBuilding className="mr-1.5 h-4 w-4 text-gray-500" />
                          {job.company.name}
                        </span>
                        <span className="flex items-center">
                          <FaMapMarkerAlt className="mr-1.5 h-4 w-4 text-gray-500" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <FaBriefcase className="mr-1.5 h-4 w-4 text-gray-500" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <FaDollarSign className="mr-1.5 h-4 w-4 text-gray-500" />
                          {job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()} {job.salary.period}
                        </span>
                        <span className="flex items-center">
                          <FaUserGraduate className="mr-1.5 h-4 w-4 text-gray-500" />
                          {job.experience.level}
                        </span>
                        {job.company.rating && (
                          <span className="flex items-center">
                            <FaStar className="mr-1.5 h-4 w-4 text-yellow-400" />
                            {job.company.rating} ({job.company.reviewCount} reviews)
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                        {job.shortDescription}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.skills.slice(0, 5).map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 flex items-center"
                          >
                            <FaCode className="mr-1 h-3 w-3" />
                            {skill}
                          </span>
                        ))}
                        {job.skills.length > 5 && (
                          <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
                            +{job.skills.length - 5} more
                          </span>
                        )}
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <FaRegCalendarAlt className="mr-1.5 h-4 w-4" />
                          Posted {new Date(job.postedDate).toLocaleDateString()}
                        </div>
                        <div className="flex gap-2">
                          <button className="rounded-lg border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors flex items-center">
                            <FaRegBookmark className="mr-1.5 h-4 w-4" />
                            Save
                          </button>
                          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center">
                            <FaPaperPlane className="mr-1.5 h-4 w-4" />
                            Apply Now
                          </button>
                        </div>
                      </div>
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
