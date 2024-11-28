import { useState } from 'react';
import { mockInterviews } from '../../data/employerMockData';
import { Calendar, Clock, Video, Users } from 'lucide-react';

export default function Interviews() {
  const interviews = mockInterviews;

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (time: string) => {
    return time;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filterButtons = [
    { label: 'All', value: 'all' },
    { label: 'Scheduled', value: 'Scheduled' },
    { label: 'Completed', value: 'Completed' },
    { label: 'Cancelled', value: 'Cancelled' },
  ];

  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredInterviews = interviews.filter((interview) => {
    if (selectedFilter === 'all') return true;
    return interview.status === selectedFilter;
  });

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Interviews</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage and track all your scheduled interviews
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="mb-6 flex space-x-2">
        {filterButtons.map((button) => (
          <button
            key={button.value}
            onClick={() => setSelectedFilter(button.value)}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              selectedFilter === button.value
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>

      {/* Interviews Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredInterviews.map((interview) => (
          <div
            key={interview.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {interview.position}
                </h3>
                <p className="text-sm text-gray-500">{interview.candidate.name}</p>
              </div>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                  interview.status
                )}`}
              >
                {interview.status}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{formatDate(interview.date)}</span>
              </div>

              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>{formatTime(interview.time)} ({interview.duration} minutes)</span>
              </div>

              <div className="flex items-center text-sm text-gray-500">
                <Video className="w-4 h-4 mr-2" />
                <span>{interview.type}</span>
              </div>

              <div className="flex items-center text-sm text-gray-500">
                <a
                  href={interview.meetingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Join Meeting
                </a>
              </div>

              <div className="flex items-center text-sm text-gray-500">
                <Users className="w-4 h-4 mr-2" />
                <span>
                  {interview.interviewers
                    .map((interviewer) => interviewer.name)
                    .join(', ')}
                </span>
              </div>
            </div>

            {interview.notes && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">{interview.notes}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
