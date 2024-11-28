import { useState } from 'react';
import { mockSupportTickets } from '../../data/adminMockData';
import { SupportTicket } from '../../types';
import {
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  Clock,
  UserCog,
} from 'lucide-react';

export default function SupportTickets() {
  const [tickets, setTickets] = useState<SupportTicket[]>(mockSupportTickets);
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);

  const handleAssign = (ticketId: string, agentId: string) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === ticketId
          ? { ...ticket, assignedTo: agentId, status: 'in-progress' }
          : ticket
      )
    );
  };

  const handleStatusChange = (
    ticketId: string,
    status: 'open' | 'in-progress' | 'closed'
  ) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status } : ticket
      )
    );
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <AlertCircle className="text-yellow-500" />;
      case 'in-progress':
        return <Clock className="text-blue-500" />;
      case 'closed':
        return <CheckCircle2 className="text-green-500" />;
      default:
        return null;
    }
  };

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Support Tickets</h1>
        <div className="flex space-x-3">
          <select className="rounded-md border border-gray-300 px-3 py-2 text-sm">
            <option>All Categories</option>
            <option>Technical</option>
            <option>Billing</option>
            <option>Account</option>
          </select>
          <select className="rounded-md border border-gray-300 px-3 py-2 text-sm">
            <option>All Status</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Closed</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Tickets List */}
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className={`cursor-pointer rounded-lg bg-white p-4 shadow transition hover:shadow-md ${
                selectedTicket?.id === ticket.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedTicket(ticket)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                  <div>
                    <h3 className="font-medium text-gray-900">{ticket.subject}</h3>
                    <p className="text-sm text-gray-500">
                      Ticket #{ticket.id} • {ticket.category}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getPriorityClass(
                      ticket.priority
                    )}`}
                  >
                    {ticket.priority}
                  </span>
                  {getStatusIcon(ticket.status)}
                </div>
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                {ticket.description}
              </p>
              <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                <span>
                  {new Date(ticket.createdAt).toLocaleDateString()} •{' '}
                  {new Date(ticket.createdAt).toLocaleTimeString()}
                </span>
                {ticket.assignedTo && (
                  <div className="flex items-center space-x-1">
                    <UserCog className="h-4 w-4" />
                    <span>Agent {ticket.assignedTo}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Ticket Details */}
        <div className="rounded-lg bg-white p-6 shadow">
          {selectedTicket ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">Ticket Details</h2>
                <div className="flex items-center space-x-2">
                  <select
                    value={selectedTicket.status}
                    onChange={(e) =>
                      handleStatusChange(
                        selectedTicket.id,
                        e.target.value as 'open' | 'in-progress' | 'closed'
                      )
                    }
                    className="rounded-md border border-gray-300 px-3 py-1 text-sm"
                  >
                    <option value="open">Open</option>
                    <option value="in-progress">In Progress</option>
                    <option value="closed">Closed</option>
                  </select>
                  <select
                    value={selectedTicket.assignedTo || ''}
                    onChange={(e) =>
                      handleAssign(selectedTicket.id, e.target.value)
                    }
                    className="rounded-md border border-gray-300 px-3 py-1 text-sm"
                  >
                    <option value="">Assign Agent</option>
                    <option value="agent-1">Agent 1</option>
                    <option value="agent-2">Agent 2</option>
                    <option value="agent-3">Agent 3</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <p className="mt-1">{selectedTicket.subject}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <p className="mt-1">{selectedTicket.description}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <p className="mt-1 capitalize">{selectedTicket.category}</p>
                </div>
                {selectedTicket.resolution && (
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Resolution
                    </label>
                    <p className="mt-1">{selectedTicket.resolution}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-gray-500">
              Select a ticket to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
