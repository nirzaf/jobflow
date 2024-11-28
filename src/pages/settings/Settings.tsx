import { useState } from 'react';
import { mockUserSettings } from '../../data/mockData';
import { Bell, Lock, Sliders } from 'lucide-react';

export default function Settings() {
  const [settings, setSettings] = useState(mockUserSettings);

  const handleNotificationChange = (key: keyof typeof settings.notifications) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key]
      }
    }));
  };

  const handlePrivacyChange = (key: keyof typeof settings.privacy, value: 'Public' | 'Private') => {
    setSettings(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [key]: value
      }
    }));
  };

  const handlePreferenceChange = (key: keyof typeof settings.preferences, value: any) => {
    setSettings(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: value
      }
    }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="space-y-8">
        {/* Notifications Section */}
        <section className="border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl font-semibold">Notifications</h2>
          </div>
          
          <div className="space-y-4">
            {Object.entries(settings.notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer">
                  <span className="text-gray-700 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={value}
                    onChange={() => handleNotificationChange(key as keyof typeof settings.notifications)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy Section */}
        <section className="border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Lock className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl font-semibold">Privacy</h2>
          </div>
          
          <div className="space-y-4">
            {Object.entries(settings.privacy).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-gray-700 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                <div className="flex gap-2">
                  <button
                    className={`px-3 py-1 rounded-lg text-sm ${
                      value === 'Public'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                    onClick={() => handlePrivacyChange(key as keyof typeof settings.privacy, 'Public')}
                  >
                    Public
                  </button>
                  <button
                    className={`px-3 py-1 rounded-lg text-sm ${
                      value === 'Private'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                    onClick={() => handlePrivacyChange(key as keyof typeof settings.privacy, 'Private')}
                  >
                    Private
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Preferences Section */}
        <section className="border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sliders className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl font-semibold">Job Preferences</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Types
              </label>
              <select
                multiple
                className="w-full p-2 border rounded-lg"
                value={settings.preferences.jobTypes}
                onChange={(e) => handlePreferenceChange('jobTypes', 
                  Array.from(e.target.selectedOptions, option => option.value)
                )}
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Locations
              </label>
              <select
                multiple
                className="w-full p-2 border rounded-lg"
                value={settings.preferences.locations}
                onChange={(e) => handlePreferenceChange('locations',
                  Array.from(e.target.selectedOptions, option => option.value)
                )}
              >
                <option value="San Francisco">San Francisco</option>
                <option value="New York">New York</option>
                <option value="Remote">Remote</option>
                <option value="London">London</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Minimum Salary (USD)
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded-lg"
                value={settings.preferences.minSalary}
                onChange={(e) => handlePreferenceChange('minSalary', parseInt(e.target.value))}
              />
            </div>
          </div>
        </section>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          Cancel
        </button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}
