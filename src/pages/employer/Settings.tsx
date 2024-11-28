import React, { useState } from 'react';
import { Bell, Lock, User, Globe, Mail } from 'lucide-react';

interface FormField {
  label: string;
  type: string;
  options?: string[];
}

interface SettingsSection {
  id: string;
  title: string;
  icon: any;
  description: string;
  items: FormField[];
}

export default function Settings() {
  const [loading, setLoading] = useState(false);

  const settingsSections: SettingsSection[] = [
    {
      id: 'profile',
      title: 'Profile Settings',
      icon: User,
      description: 'Update your personal information and profile settings',
      items: [
        { label: 'Profile Picture', type: 'file' },
        { label: 'Full Name', type: 'text' },
        { label: 'Job Title', type: 'text' },
        { label: 'Bio', type: 'textarea' },
      ],
    },
    {
      id: 'account',
      title: 'Account Settings',
      icon: Lock,
      description: 'Manage your account security and preferences',
      items: [
        { label: 'Email', type: 'email' },
        { label: 'Password', type: 'password' },
        { label: 'Two-Factor Authentication', type: 'toggle' },
      ],
    },
    {
      id: 'notifications',
      title: 'Notification Settings',
      icon: Bell,
      description: 'Configure how you receive notifications',
      items: [
        { label: 'Email Notifications', type: 'toggle' },
        { label: 'Push Notifications', type: 'toggle' },
        { label: 'SMS Notifications', type: 'toggle' },
      ],
    },
    {
      id: 'communication',
      title: 'Communication Preferences',
      icon: Mail,
      description: 'Set your communication preferences',
      items: [
        { label: 'Marketing Emails', type: 'toggle' },
        { label: 'Job Alert Emails', type: 'toggle' },
        { label: 'Newsletter', type: 'toggle' },
      ],
    },
    {
      id: 'language',
      title: 'Language & Region',
      icon: Globe,
      description: 'Set your preferred language and regional settings',
      items: [
        { label: 'Language', type: 'select', options: ['English', 'Arabic'] },
        { label: 'Time Zone', type: 'select', options: ['UTC+3 (Qatar)'] },
        { label: 'Date Format', type: 'select', options: ['DD/MM/YYYY', 'MM/DD/YYYY'] },
      ],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Handle success
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="space-y-6">
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <div
              key={section.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center mb-4">
                <Icon className="w-5 h-5 text-gray-400 mr-2" />
                <h2 className="text-lg font-medium text-gray-900">
                  {section.title}
                </h2>
              </div>
              <p className="text-sm text-gray-500 mb-4">{section.description}</p>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <label className="block text-sm font-medium text-gray-700">
                        {item.label}
                      </label>
                      {item.type === 'toggle' ? (
                        <button
                          type="button"
                          className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none"
                          role="switch"
                        >
                          <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
                        </button>
                      ) : item.type === 'select' ? (
                        <select className="mt-1 block w-48 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                          {item.options?.map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={item.type}
                          className="mt-1 block w-48 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-end space-x-4">
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          );
        })}
      </div>
    </div>
  );
}
