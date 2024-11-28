import { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface ContentItem {
  id: string;
  type: 'job' | 'resume';
  title: string;
  submittedBy: string;
  submittedAt: string;
  status: 'pending' | 'approved' | 'rejected';
  content: string;
}

const mockContent: ContentItem[] = [
  {
    id: '1',
    type: 'job',
    title: 'Senior Software Engineer',
    submittedBy: 'Tech Corp',
    submittedAt: '2023-12-02T10:00:00Z',
    status: 'pending',
    content: 'Looking for a senior software engineer with 5+ years of experience...',
  },
  {
    id: '2',
    type: 'resume',
    title: 'Software Developer Resume',
    submittedBy: 'John Doe',
    submittedAt: '2023-12-02T09:30:00Z',
    status: 'pending',
    content: 'Experienced software developer with expertise in React and Node.js...',
  },
  {
    id: '3',
    type: 'job',
    title: 'Marketing Manager',
    submittedBy: 'Marketing Pro Ltd',
    submittedAt: '2023-12-02T08:45:00Z',
    status: 'pending',
    content: 'Seeking a creative marketing manager to lead our digital campaigns...',
  },
];

export default function ContentModeration() {
  const [content, setContent] = useState<ContentItem[]>(mockContent);
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  const handleApprove = (id: string) => {
    setContent(content.map(item =>
      item.id === id ? { ...item, status: 'approved' } : item
    ));
  };

  const handleReject = (id: string) => {
    setContent(content.map(item =>
      item.id === id ? { ...item, status: 'rejected' } : item
    ));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Content Moderation</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Content List */}
        <div className="space-y-4">
          {content.map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer rounded-lg bg-white p-4 shadow transition hover:shadow-md ${
                selectedItem?.id === item.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedItem(item)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      item.type === 'job'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {item.type}
                  </span>
                  <h3 className="mt-1 text-sm font-medium text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    by {item.submittedBy} •{' '}
                    {new Date(item.submittedAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleApprove(item.id);
                    }}
                    className="text-green-600 hover:text-green-900"
                    title="Approve"
                  >
                    <CheckCircle className="h-5 w-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReject(item.id);
                    }}
                    className="text-red-600 hover:text-red-900"
                    title="Reject"
                  >
                    <XCircle className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <p className="line-clamp-2 text-sm text-gray-600">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Content Preview */}
        <div className="rounded-lg bg-white p-6 shadow">
          {selectedItem ? (
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-medium">Content Preview</h2>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium ${
                    selectedItem.status === 'approved'
                      ? 'bg-green-100 text-green-800'
                      : selectedItem.status === 'rejected'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {selectedItem.status === 'approved' ? (
                    <CheckCircle className="mr-1 h-4 w-4" />
                  ) : selectedItem.status === 'rejected' ? (
                    <XCircle className="mr-1 h-4 w-4" />
                  ) : (
                    <AlertCircle className="mr-1 h-4 w-4" />
                  )}
                  {selectedItem.status}
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedItem.title}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Submitted By
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedItem.submittedBy}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Content
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedItem.content}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-gray-500">
              Select an item to preview
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
