import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Database, Plus, Edit2, Trash2, Search } from 'lucide-react';

const ManageWeatherDataPage = () => {
  const [weatherRecords, setWeatherRecords] = React.useState([
    { id: 1, city: 'New York', temperature: 22, humidity: 65, lastUpdated: '2 minutes ago' },
    { id: 2, city: 'Los Angeles', temperature: 25, humidity: 55, lastUpdated: '5 minutes ago' },
    { id: 3, city: 'London', temperature: 18, humidity: 75, lastUpdated: '1 minute ago' },
    { id: 4, city: 'Tokyo', temperature: 20, humidity: 70, lastUpdated: '3 minutes ago' },
  ]);

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
              className="flex items-center gap-3 text-blue-400 bg-blue-500 bg-opacity-20 px-4 py-3 rounded-lg border border-blue-500 border-opacity-30"
            >
              <Database className="w-5 h-5" />
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
              className="flex items-center gap-3 text-white hover:text-blue-300 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition"
            >
              Settings
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-white">Manage Weather Data</h1>
            <button className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              <Plus className="w-5 h-5" />
              Add Record
            </button>
          </div>

          {/* Search */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white border-opacity-20 p-6 mb-8">
            <div className="flex items-center bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4">
              <Search className="w-5 h-5 text-blue-300" />
              <input
                type="text"
                placeholder="Search weather records..."
                className="flex-1 ml-3 py-2 bg-transparent text-white outline-none placeholder-blue-200"
              />
            </div>
          </div>

          {/* Records Table */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white border-opacity-20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white border-opacity-20 bg-white bg-opacity-5">
                    <th className="px-6 py-4 text-left text-white font-semibold">City</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Temperature</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Humidity</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Last Updated</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {weatherRecords.map((record) => (
                    <tr key={record.id} className="border-b border-white border-opacity-10 hover:bg-white hover:bg-opacity-5 transition">
                      <td className="px-6 py-4 text-white font-semibold">{record.city}</td>
                      <td className="px-6 py-4 text-blue-200">{record.temperature}°C</td>
                      <td className="px-6 py-4 text-blue-200">{record.humidity}%</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">{record.lastUpdated}</td>
                      <td className="px-6 py-4 flex gap-2">
                        <button className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition">
                          <Edit2 className="w-4 h-4" />
                          Edit
                        </button>
                        <button className="flex items-center gap-1 text-red-400 hover:text-red-300 transition">
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageWeatherDataPage;
