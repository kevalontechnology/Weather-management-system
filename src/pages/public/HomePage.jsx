import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Wind, Droplets, Search } from 'lucide-react';

const HomePage = () => {
  const [city, setCity] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      window.location.href = `/search?city=${city}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
      {/* Navigation */}
      <nav className="bg-black bg-opacity-50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Cloud className="w-8 h-8 text-blue-400" />
            <h1 className="text-2xl font-bold text-white">WeatherHub</h1>
          </div>
          <div className="flex gap-4">
            <Link to="/login" className="text-white hover:text-blue-300 transition">Login</Link>
            <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Register</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-white mb-4">Check Weather Instantly</h2>
        <p className="text-xl text-blue-100 mb-8">Get accurate weather forecasts, alerts, and historical data for any location</p>

        {/* Search Box */}
        <form onSubmit={handleSearch} className="max-w-lg mx-auto mb-12">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter city name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 px-6 py-3 rounded-lg bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </form>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20">
            <Cloud className="w-12 h-12 text-blue-300 mx-auto mb-3" />
            <h3 className="text-white text-lg font-semibold mb-2">Real-time Weather</h3>
            <p className="text-blue-100">Get current temperature, humidity, and wind speed</p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20">
            <Wind className="w-12 h-12 text-blue-300 mx-auto mb-3" />
            <h3 className="text-white text-lg font-semibold mb-2">7-Day Forecast</h3>
            <p className="text-blue-100">Plan ahead with our accurate weather predictions</p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20">
            <Droplets className="w-12 h-12 text-blue-300 mx-auto mb-3" />
            <h3 className="text-white text-lg font-semibold mb-2">Weather Alerts</h3>
            <p className="text-blue-100">Stay informed about storms and extreme weather</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mt-12">
          <Link
            to="/register"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition text-lg font-semibold"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="bg-white bg-opacity-20 text-white px-8 py-3 rounded-lg hover:bg-opacity-30 transition text-lg font-semibold border border-white border-opacity-30"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black bg-opacity-50 py-16 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Why Choose WeatherHub?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-white">
              <h4 className="text-xl font-semibold mb-3">✓ Accurate Data</h4>
              <p className="text-blue-100">Real-time weather data from multiple sources</p>
            </div>
            <div className="text-white">
              <h4 className="text-xl font-semibold mb-3">✓ Save Favorites</h4>
              <p className="text-blue-100">Bookmark your favorite cities for quick access</p>
            </div>
            <div className="text-white">
              <h4 className="text-xl font-semibold mb-3">✓ Weather History</h4>
              <p className="text-blue-100">Track past weather data and trends</p>
            </div>
            <div className="text-white">
              <h4 className="text-xl font-semibold mb-3">✓ Smart Alerts</h4>
              <p className="text-blue-100">Get notified about extreme weather conditions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black bg-opacity-70 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2026 WeatherHub. All rights reserved.</p>
          <div className="mt-4 flex gap-6 justify-center">
            <Link to="/about" className="hover:text-blue-400">About</Link>
            <Link to="/contact" className="hover:text-blue-400">Contact</Link>
            <a href="#" className="hover:text-blue-400">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
