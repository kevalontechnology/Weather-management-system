import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cloud, Mail, Lock, User } from 'lucide-react';

const RegisterPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
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
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      // TODO: Add API call for registration
      console.log('Register attempt:', formData);
      // Simulated successful registration
      localStorage.setItem('token', 'dummy-token');
      navigate('/dashboard');
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Registration failed:', error);
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

      {/* Registration Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20 w-full max-w-md">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Create Account</h2>

          {error && (
            <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-200 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-white mb-2 font-semibold">Full Name</label>
              <div className="flex items-center bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4">
                <User className="w-5 h-5 text-blue-300" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="flex-1 ml-3 py-3 bg-transparent text-white outline-none placeholder-blue-200"
                />
              </div>
            </div>

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

            {/* Confirm Password Field */}
            <div>
              <label className="block text-white mb-2 font-semibold">Confirm Password</label>
              <div className="flex items-center bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4">
                <Lock className="w-5 h-5 text-blue-300" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="flex-1 ml-3 py-3 bg-transparent text-white outline-none placeholder-blue-200"
                />
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start text-blue-100 cursor-pointer">
              <input type="checkbox" className="mr-3 mt-1" required />
              <span>I agree to the Terms of Service and Privacy Policy</span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition disabled:opacity-50"
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-white bg-opacity-20"></div>
            <span className="text-blue-200 text-sm">OR</span>
            <div className="flex-1 h-px bg-white bg-opacity-20"></div>
          </div>

          {/* Social Signup */}
          <div className="flex gap-4">
            <button className="flex-1 bg-white bg-opacity-10 text-white py-2 rounded-lg hover:bg-opacity-20 transition border border-white border-opacity-20">
              Google
            </button>
            <button className="flex-1 bg-white bg-opacity-10 text-white py-2 rounded-lg hover:bg-opacity-20 transition border border-white border-opacity-20">
              GitHub
            </button>
          </div>

          {/* Login Link */}
          <p className="text-white text-center mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-300 hover:text-blue-200 font-semibold">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
