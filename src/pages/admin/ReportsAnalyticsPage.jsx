import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, BarChart3, Download } from 'lucide-react';

const ReportsAnalyticsPage = () => {
  const monthlyData = [
    { month: 'January', users: 1200, requests: 45000, avgTemp: 8 },
    { month: 'February', users: 1450, requests: 52000, avgTemp: 12 },
  ];

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
              className="flex items-center gap-3 text-blue-400 bg-blue-500 bg-opacity-20 px-4 py-3 rounded-lg border border-blue-500 border-opacity-30"
            >
              <BarChart3 className="w-5 h-5" />
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
            <h1 className="text-4xl font-bold text-white">Reports & Analytics</h1>
            <button className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              <Download className="w-5 h-5" />
              Export Report
            </button>
          </div>

          {/* Monthly Report */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white border-opacity-20 p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Monthly Report</h2>
              <div className="space-y-6">
                {monthlyData.map((data, index) => (
                  <div key={index} className="bg-white bg-opacity-5 p-4 rounded-lg">
                    <h3 className="text-white font-semibold mb-3">{data.month}</h3>
                    <div className="space-y-2 text-blue-200 text-sm">
                      <p>👥 Users: <span className="text-white font-semibold">{data.users.toLocaleString()}</span></p>
                      <p>📊 API Requests: <span className="text-white font-semibold">{data.requests.toLocaleString()}</span></p>
                      <p>🌡️ Avg Temperature: <span className="text-white font-semibold">{data.avgTemp}°C</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics Summary */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white border-opacity-20 p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Key Metrics</h2>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-5 p-4 rounded-lg">
                  <p className="text-blue-200 text-sm mb-1">User Growth Rate</p>
                  <p className="text-3xl font-bold text-green-400">↑ 20.8%</p>
                </div>
                <div className="bg-white bg-opacity-5 p-4 rounded-lg">
                  <p className="text-blue-200 text-sm mb-1">API Call Volume</p>
                  <p className="text-3xl font-bold text-blue-400">↑ 15.4%</p>
                </div>
                <div className="bg-white bg-opacity-5 p-4 rounded-lg">
                  <p className="text-blue-200 text-sm mb-1">Average Response Time</p>
                  <p className="text-3xl font-bold text-purple-400">↓ 240ms</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white border-opacity-20 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Analytics Chart</h2>
            <div className="h-96 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-10 flex items-center justify-center">
              <p className="text-blue-200">Chart visualization would be displayed here using Chart.js or similar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalyticsPage;
