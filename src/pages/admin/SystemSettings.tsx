import { useState } from 'react';
import { mockSystemConfig } from '../../data/adminMockData';
import { SystemConfig } from '../../types';
import { Save } from 'lucide-react';

export default function SystemSettings() {
  const [config, setConfig] = useState<SystemConfig>(mockSystemConfig);

  const handleSave = () => {
    // In a real app, this would save to the backend
    alert('Settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">System Settings</h1>
        <button
          onClick={handleSave}
          className="flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          <Save className="mr-2 h-5 w-5" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Email Settings */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-lg font-medium">Email Configuration</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                SMTP Provider
              </label>
              <input
                type="text"
                value={config.email.provider}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    email: { ...config.email, provider: e.target.value },
                  })
                }
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                SMTP Host
              </label>
              <input
                type="text"
                value={config.email.host}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    email: { ...config.email, host: e.target.value },
                  })
                }
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                SMTP Port
              </label>
              <input
                type="number"
                value={config.email.port}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    email: { ...config.email, port: parseInt(e.target.value) },
                  })
                }
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-lg font-medium">Security Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Minimum Password Length
              </label>
              <input
                type="number"
                value={config.security.passwordPolicy.minLength}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    security: {
                      ...config.security,
                      passwordPolicy: {
                        ...config.security.passwordPolicy,
                        minLength: parseInt(e.target.value),
                      },
                    },
                  })
                }
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Session Timeout (minutes)
              </label>
              <input
                type="number"
                value={config.security.sessionTimeout}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    security: {
                      ...config.security,
                      sessionTimeout: parseInt(e.target.value),
                    },
                  })
                }
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={config.security.twoFactorAuth.enabled}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    security: {
                      ...config.security,
                      twoFactorAuth: {
                        ...config.security.twoFactorAuth,
                        enabled: e.target.checked,
                      },
                    },
                  })
                }
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="text-sm font-medium text-gray-700">
                Enable Two-Factor Authentication
              </label>
            </div>
          </div>
        </div>

        {/* Payment Settings */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-lg font-medium">Payment Configuration</h2>
          <div className="space-y-4">
            {config.payment.providers.map((provider, index) => (
              <div key={provider.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    {provider.name}
                  </label>
                  <div className="flex items-center space-x-3">
                    <select
                      value={provider.mode}
                      onChange={(e) => {
                        const newProviders = [...config.payment.providers];
                        newProviders[index] = {
                          ...provider,
                          mode: e.target.value as 'live' | 'sandbox',
                        };
                        setConfig({
                          ...config,
                          payment: { ...config.payment, providers: newProviders },
                        });
                      }}
                      className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                      <option value="live">Live</option>
                      <option value="sandbox">Sandbox</option>
                    </select>
                    <input
                      type="checkbox"
                      checked={provider.enabled}
                      onChange={(e) => {
                        const newProviders = [...config.payment.providers];
                        newProviders[index] = {
                          ...provider,
                          enabled: e.target.checked,
                        };
                        setConfig({
                          ...config,
                          payment: { ...config.payment, providers: newProviders },
                        });
                      }}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
