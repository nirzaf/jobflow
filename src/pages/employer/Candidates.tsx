import { mockCandidates } from '../../data/employerMockData';
import { Mail, Phone, FileText, Star, Clock } from 'lucide-react';

export default function Candidates() {
  const candidates = mockCandidates;

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'screening':
        return 'bg-yellow-100 text-yellow-800';
      case 'interview':
        return 'bg-purple-100 text-purple-800';
      case 'offer':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Candidates</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage and track candidates for your job postings
        </p>
      </div>

      <div className="grid gap-6">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {candidate.name}
                </h3>
                <p className="text-sm text-gray-500">{candidate.jobTitle}</p>
              </div>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                  candidate.status
                )}`}
              >
                {candidate.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <Mail className="w-4 h-4 mr-2" />
                  <a
                    href={`mailto:${candidate.email}`}
                    className="hover:text-blue-600"
                  >
                    {candidate.email}
                  </a>
                </div>

                <div className="flex items-center text-sm text-gray-500">
                  <Phone className="w-4 h-4 mr-2" />
                  <a
                    href={`tel:${candidate.phone}`}
                    className="hover:text-blue-600"
                  >
                    {candidate.phone}
                  </a>
                </div>

                <div className="flex items-center text-sm text-gray-500">
                  <FileText className="w-4 h-4 mr-2" />
                  <a
                    href={candidate.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View Resume
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <Star
                    className={`w-4 h-4 mr-2 ${
                      candidate.starred ? 'fill-yellow-400' : ''
                    }`}
                  />
                  <span>{candidate.rating} / 5</span>
                </div>

                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Applied {new Date(candidate.appliedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {candidate.notes && candidate.notes.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Notes</h4>
                <div className="space-y-2">
                  {candidate.notes.map((note) => (
                    <p key={note.id} className="text-sm text-gray-600">
                      {note.content}
                    </p>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-end gap-2">
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                Add Note
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Schedule Interview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
