import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cloud, User, Mail, Lock, LogOut } from 'lucide-react';

const ProfilePage = () => {
  const [formData, setFormData] = React.useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
  });
  const [passwordData, setPasswordData] = React.useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [isEditing, setIsEditing] = React.useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Profile updated:', formData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
      {/* Header */}
      <div className="bg-black bg-opacity-50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Cloud className="w-8 h-8 text-blue-400" />
            <Link to="/" className="text-2xl font-bold text-white hover:text-blue-300">
              WeatherHub
            </Link>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-white hover:text-red-300 transition"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20 mb-8">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">{formData.name}</h1>
              <p className="text-blue-200">{formData.email}</p>
              <p className="text-blue-300 text-sm mt-2">Member since January 2024</p>
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Profile Information</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-white mb-2 font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60"
              />
            </div>

            <div>
              <label className="block text-white mb-2 font-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60"
              />
            </div>

            <div>
              <label className="block text-white mb-2 font-semibold">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60"
              />
            </div>

            <div>
              <label className="block text-white mb-2 font-semibold">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60"
              />
            </div>

            {isEditing && (
              <button
                onClick={handleSave}
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
              >
                Save Changes
              </button>
            )}
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Lock className="w-6 h-6" />
            Change Password
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-white mb-2 font-semibold">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-400 placeholder-blue-200"
              />
            </div>

            <div>
              <label className="block text-white mb-2 font-semibold">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-400 placeholder-blue-200"
              />
            </div>

            <div>
              <label className="block text-white mb-2 font-semibold">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-400 placeholder-blue-200"
              />
            </div>

            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold">
              Update Password
            </button>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20">
          <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>

          <div className="space-y-4">
            <label className="flex items-center text-white cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5 mr-3" />
              <span>Email notifications enabled</span>
            </label>
            <label className="flex items-center text-white cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5 mr-3" />
              <span>Public profile</span>
            </label>
            <label className="flex items-center text-white cursor-pointer">
              <input type="checkbox" className="w-5 h-5 mr-3" />
              <span>Two-factor authentication</span>
            </label>
          </div>

          <button className="mt-6 w-full bg-red-500 bg-opacity-20 text-red-300 border border-red-500 py-3 rounded-lg hover:bg-opacity-30 transition font-semibold">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
