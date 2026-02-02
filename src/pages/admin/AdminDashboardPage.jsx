import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Users, Database, BarChart3, Settings, LogOut } from 'lucide-react';

const AdminDashboardPage = () => {
  const stats = [
    { label: 'Total Users', value: '2,547', icon: Users, color: 'from-blue-600 to-blue-800' },
    { label: 'Weather Records', value: '45,892', icon: Database, color: 'from-green-600 to-green-800' },
    { label: 'API Calls Today', value: '128,456', icon: BarChart3, color: 'from-orange-600 to-orange-800' },
    { label: 'System Health', value: '99.8%', icon: Cloud, color: 'from-purple-600 to-purple-800' },
  ];

  const recentLogs = [
    { id: 1, user: 'user@example.com', action: 'Login', timestamp: '2 minutes ago' },
    { id: 2, user: 'admin@example.com', action: 'Updated settings', timestamp: '15 minutes ago' },
    { id: 3, user: 'user2@example.com', action: 'Search weather', timestamp: '32 minutes ago' },
    { id: 4, user: 'user3@example.com', action: 'Added favorite', timestamp: '1 hour ago' },
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
          <button className="flex items-center gap-2 text-white hover:text-red-300 transition">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className="flex">
        <div className="w-64 bg-black bg-opacity-40 backdrop-blur-md border-r border-white border-opacity-10 min-h-screen">
          <nav className="p-6 space-y-4">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 text-blue-400 bg-blue-500 bg-opacity-20 px-4 py-3 rounded-lg border border-blue-500 border-opacity-30"
            >
              <BarChart3 className="w-5 h-5" />
              Dashboard
            </Link>
            <Link
              to="/admin/users"
              className="flex items-center gap-3 text-white hover:text-blue-300 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition"
            >
              <Users className="w-5 h-5" />
              Manage Users
            </Link>
            <Link
              to="/admin/weather-data"
              className="flex items-center gap-3 text-white hover:text-blue-300 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition"
            >
              <Database className="w-5 h-5" />
              Weather Data
            </Link>
            <Link
              to="/admin/reports"
              className="flex items-center gap-3 text-white hover:text-blue-300 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition"
            >
              <BarChart3 className="w-5 h-5" />
              Reports
            </Link>
            <Link
              to="/admin/settings"
              className="flex items-center gap-3 text-white hover:text-blue-300 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition"
            >
              <Settings className="w-5 h-5" />
              Settings
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-4xl font-bold text-white mb-8">Dashboard Overview</h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${stat.color} p-6 rounded-xl border border-white border-opacity-20 text-white`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <p className="text-gray-100 text-sm mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              );
            })}
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white border-opacity-20 p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentLogs.map((log) => (
                  <div
                    key={log.id}
                    className="flex items-center justify-between p-4 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-10 hover:bg-opacity-10 transition"
                  >
                    <div>
                      <p className="text-white font-semibold">{log.user}</p>
                      <p className="text-blue-200 text-sm">{log.action}</p>
                    </div>
                    <span className="text-gray-400 text-sm">{log.timestamp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white border-opacity-20 p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Stats</h2>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-5 p-4 rounded-lg">
                  <p className="text-blue-200 text-sm mb-1">Active Users</p>
                  <p className="text-2xl font-bold text-white">1,203</p>
                </div>
                <div className="bg-white bg-opacity-5 p-4 rounded-lg">
                  <p className="text-blue-200 text-sm mb-1">New Users Today</p>
                  <p className="text-2xl font-bold text-white">45</p>
                </div>
                <div className="bg-white bg-opacity-5 p-4 rounded-lg">
                  <p className="text-blue-200 text-sm mb-1">Server Uptime</p>
                  <p className="text-2xl font-bold text-green-400">99.8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
