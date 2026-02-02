import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Settings, Save } from 'lucide-react';

const AdminSettingsPage = () => {
  const [settings, setSettings] = React.useState({
    apiKey: '****************************',
    apiEndpoint: 'https://api.weatherhub.com',
    updateInterval: '15',
    maxUsers: '10000',
    maintenanceMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      {/* Header */}
      <div className="bg-black bg-opacity-50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Cloud className="w-8 h-8 text-blue-400" />
            <Link to="/admin/dashboard" className="text-2xl font-bold text-white hover:text-blue-300">
              Admin Panel
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar + Main */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-black bg-opacity-40 backdrop-blur-md border-r border-white border-opacity-10 min-h-screen">
          <nav className="p-6 space-y-4">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 text-white hover:text-blue-300 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition"
            >
              Dashboard
            </Link>
            <Link
              to="/admin/users"
              className="flex items-center gap-3 text-white hover:text-blue-300 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition"
            >
              Manage Users
            </Link>
            <Link
              to="/admin/weather-data"
              className="flex items-center gap-3 text-white hover:text-blue-300 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition"
            >
              Weather Data
            </Link>
            <Link
              to="/admin/reports"
              className="flex items-center gap-3 text-white hover:text-blue-300 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition"
            >
              Reports
            </Link>
            <Link
              to="/admin/settings"
              className="flex items-center gap-3 text-blue-400 bg-blue-500 bg-opacity-20 px-4 py-3 rounded-lg border border-blue-500 border-opacity-30"
            >
              <Settings className="w-5 h-5" />
              Settings
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
            <Settings className="w-10 h-10" />
            System Settings
          </h1>

          {/* API Configuration */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white border-opacity-20 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">API Configuration</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-white mb-2 font-semibold">API Key</label>
                <input
                  type="password"
                  name="apiKey"
                  value={settings.apiKey}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-semibold">API Endpoint</label>
                <input
                  type="url"
                  name="apiEndpoint"
                  value={settings.apiEndpoint}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-semibold">Update Interval (minutes)</label>
                <input
                  type="number"
                  name="updateInterval"
                  value={settings.updateInterval}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
          </div>

          {/* System Configuration */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white border-opacity-20 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">System Configuration</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-white mb-2 font-semibold">Max Active Users</label>
                <input
                  type="number"
                  name="maxUsers"
                  value={settings.maxUsers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <label className="flex items-center text-white cursor-pointer">
                <input
                  type="checkbox"
                  name="maintenanceMode"
                  checked={settings.maintenanceMode}
                  onChange={handleChange}
                  className="w-5 h-5 mr-3"
                />
                <span>Maintenance Mode</span>
              </label>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
          >
            <Save className="w-5 h-5" />
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
