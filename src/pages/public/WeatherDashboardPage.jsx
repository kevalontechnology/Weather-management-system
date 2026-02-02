import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Wind, Droplets, Eye, Gauge, Sun } from 'lucide-react';

const WeatherDashboardPage = () => {
  const [weatherData, setWeatherData] = React.useState({
    city: 'New York',
    temperature: 22,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    visibility: 10,
    pressure: 1013,
    feelsLike: 20,
  });

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
          <div className="flex gap-4">
            <Link to="/search" className="text-white hover:text-blue-300">Search</Link>
            <Link to="/favorites" className="text-white hover:text-blue-300">Favorites</Link>
            <Link to="/alerts" className="text-white hover:text-blue-300">Alerts</Link>
            <Link to="/profile" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Profile</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Current Weather */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">{weatherData.city}</h2>
              <p className="text-blue-200 text-lg mb-4">Today</p>
              
              <div className="flex items-center mb-6">
                <Sun className="w-24 h-24 text-yellow-300" />
                <div className="ml-6">
                  <div className="text-6xl font-bold text-white">{weatherData.temperature}°C</div>
                  <p className="text-xl text-blue-200">{weatherData.condition}</p>
                  <p className="text-blue-200">Feels like {weatherData.feelsLike}°C</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link to="/forecast" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
                  7-Day Forecast
                </Link>
                <Link to="/history" className="bg-white bg-opacity-10 text-white px-6 py-2 rounded-lg hover:bg-opacity-20 transition border border-white border-opacity-20">
                  Weather History
                </Link>
              </div>
            </div>

            {/* Right Side - Details */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Weather Details</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Humidity */}
                <div className="bg-white bg-opacity-5 p-4 rounded-lg border border-white border-opacity-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets className="w-5 h-5 text-blue-300" />
                    <span className="text-blue-200">Humidity</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{weatherData.humidity}%</p>
                </div>

                {/* Wind Speed */}
                <div className="bg-white bg-opacity-5 p-4 rounded-lg border border-white border-opacity-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Wind className="w-5 h-5 text-blue-300" />
                    <span className="text-blue-200">Wind Speed</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{weatherData.windSpeed} km/h</p>
                </div>

                {/* Visibility */}
                <div className="bg-white bg-opacity-5 p-4 rounded-lg border border-white border-opacity-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-5 h-5 text-blue-300" />
                    <span className="text-blue-200">Visibility</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{weatherData.visibility} km</p>
                </div>

                {/* Pressure */}
                <div className="bg-white bg-opacity-5 p-4 rounded-lg border border-white border-opacity-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Gauge className="w-5 h-5 text-blue-300" />
                    <span className="text-blue-200">Pressure</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{weatherData.pressure} mb</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link
            to="/search"
            className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition"
          >
            <Cloud className="w-8 h-8 text-blue-300 mb-3" />
            <h4 className="text-white font-semibold">Search Weather</h4>
            <p className="text-blue-200 text-sm">Check another city</p>
          </Link>

          <Link
            to="/forecast"
            className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition"
          >
            <Wind className="w-8 h-8 text-blue-300 mb-3" />
            <h4 className="text-white font-semibold">Forecast</h4>
            <p className="text-blue-200 text-sm">7-day prediction</p>
          </Link>

          <Link
            to="/alerts"
            className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition"
          >
            <Droplets className="w-8 h-8 text-blue-300 mb-3" />
            <h4 className="text-white font-semibold">Weather Alerts</h4>
            <p className="text-blue-200 text-sm">Stay informed</p>
          </Link>

          <Link
            to="/favorites"
            className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition"
          >
            <Eye className="w-8 h-8 text-blue-300 mb-3" />
            <h4 className="text-white font-semibold">Favorites</h4>
            <p className="text-blue-200 text-sm">Your saved cities</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboardPage;
