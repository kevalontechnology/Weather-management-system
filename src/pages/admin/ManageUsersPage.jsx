import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Users, Filter, Trash2, Ban, Search } from 'lucide-react';

const ManageUsersPage = () => {
  const [users, setUsers] = React.useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', joinDate: '2024-01-15', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', joinDate: '2024-01-20', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', joinDate: '2024-02-01', status: 'Blocked' },
    { id: 4, name: 'Alice Johnson', email: 'alice@example.com', joinDate: '2024-02-02', status: 'Active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', joinDate: '2024-02-03', status: 'Active' },
  ]);

  const handleBlock = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, status: 'Blocked' } : user
    ));
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
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
              className="flex items-center gap-3 text-blue-400 bg-blue-500 bg-opacity-20 px-4 py-3 rounded-lg border border-blue-500 border-opacity-30"
            >
              <Users className="w-5 h-5" />
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
              className="flex items-center gap-3 text-white hover:text-blue-300 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition"
            >
              Settings
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-white">Manage Users</h1>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              Add New User
            </button>
          </div>

          {/* Search & Filter */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white border-opacity-20 p-6 mb-8">
            <div className="flex gap-4">
              <div className="flex-1 flex items-center bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4">
                <Search className="w-5 h-5 text-blue-300" />
                <input
                  type="text"
                  placeholder="Search users..."
                  className="flex-1 ml-3 py-2 bg-transparent text-white outline-none placeholder-blue-200"
                />
              </div>
              <button className="flex items-center gap-2 bg-white bg-opacity-10 text-white px-4 py-2 rounded-lg hover:bg-opacity-20 transition border border-white border-opacity-20">
                <Filter className="w-5 h-5" />
                Filter
              </button>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white border-opacity-20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white border-opacity-20 bg-white bg-opacity-5">
                    <th className="px-6 py-4 text-left text-white font-semibold">Name</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Email</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Join Date</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Status</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-white border-opacity-10 hover:bg-white hover:bg-opacity-5 transition">
                      <td className="px-6 py-4 text-white font-semibold">{user.name}</td>
                      <td className="px-6 py-4 text-blue-200">{user.email}</td>
                      <td className="px-6 py-4 text-blue-200">{user.joinDate}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          user.status === 'Active'
                            ? 'bg-green-500 bg-opacity-20 text-green-300'
                            : 'bg-red-500 bg-opacity-20 text-red-300'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex gap-2">
                        <button
                          onClick={() => handleBlock(user.id)}
                          className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 transition"
                        >
                          <Ban className="w-4 h-4" />
                          {user.status === 'Blocked' ? 'Unblock' : 'Block'}
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="flex items-center gap-1 text-red-400 hover:text-red-300 transition"
                        >
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

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            <button className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-lg hover:bg-opacity-20 transition">Previous</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">1</button>
            <button className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-lg hover:bg-opacity-20 transition">2</button>
            <button className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-lg hover:bg-opacity-20 transition">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsersPage;
