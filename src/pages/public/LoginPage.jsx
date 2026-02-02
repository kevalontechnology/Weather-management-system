import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cloud, Mail, Lock, User } from 'lucide-react';

const LoginPage = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: Add API call for login
      console.log('Login attempt:', formData);
      // Simulated successful login
      localStorage.setItem('token', 'dummy-token');
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 flex flex-col">
      {/* Header */}
      <div className="bg-black bg-opacity-50 backdrop-blur-md py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-2">
          <Cloud className="w-8 h-8 text-blue-400" />
          <Link to="/" className="text-2xl font-bold text-white hover:text-blue-300">
            WeatherHub
          </Link>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20 w-full max-w-md">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Welcome Back</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-white mb-2 font-semibold">Email Address</label>
              <div className="flex items-center bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4">
                <Mail className="w-5 h-5 text-blue-300" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="flex-1 ml-3 py-3 bg-transparent text-white outline-none placeholder-blue-200"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-white mb-2 font-semibold">Password</label>
              <div className="flex items-center bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4">
                <Lock className="w-5 h-5 text-blue-300" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="flex-1 ml-3 py-3 bg-transparent text-white outline-none placeholder-blue-200"
                />
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center text-blue-100 cursor-pointer">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-blue-300 hover:text-blue-200">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-white bg-opacity-20"></div>
            <span className="text-blue-200 text-sm">OR</span>
            <div className="flex-1 h-px bg-white bg-opacity-20"></div>
          </div>

          {/* Social Login */}
          <div className="flex gap-4">
            <button className="flex-1 bg-white bg-opacity-10 text-white py-2 rounded-lg hover:bg-opacity-20 transition border border-white border-opacity-20">
              Google
            </button>
            <button className="flex-1 bg-white bg-opacity-10 text-white py-2 rounded-lg hover:bg-opacity-20 transition border border-white border-opacity-20">
              GitHub
            </button>
          </div>

          {/* Signup Link */}
          <p className="text-white text-center mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-300 hover:text-blue-200 font-semibold">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
