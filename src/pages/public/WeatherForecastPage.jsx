import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Sun, CloudRain, Wind, Droplets } from 'lucide-react';

const WeatherForecastPage = () => {
  const [forecastData] = React.useState([
    { day: 'Monday', high: 25, low: 18, condition: 'Sunny', icon: Sun, humidity: 60 },
    { day: 'Tuesday', high: 23, low: 17, condition: 'Cloudy', icon: Cloud, humidity: 70 },
    { day: 'Wednesday', high: 20, low: 15, condition: 'Rainy', icon: CloudRain, humidity: 85 },
    { day: 'Thursday', high: 22, low: 16, condition: 'Partly Cloudy', icon: Cloud, humidity: 75 },
    { day: 'Friday', high: 26, low: 19, condition: 'Sunny', icon: Sun, humidity: 55 },
    { day: 'Saturday', high: 27, low: 20, condition: 'Sunny', icon: Sun, humidity: 50 },
    { day: 'Sunday', high: 24, low: 18, condition: 'Cloudy', icon: Cloud, humidity: 65 },
  ]);

  const [hourlyData] = React.useState([
    { time: '12:00 AM', temp: 18, condition: 'Clear', wind: 5 },
    { time: '01:00 AM', temp: 17, condition: 'Clear', wind: 4 },
    { time: '02:00 AM', temp: 16, condition: 'Clear', wind: 3 },
    { time: '03:00 AM', temp: 15, condition: 'Clear', wind: 3 },
    { time: '04:00 AM', temp: 14, condition: 'Clear', wind: 2 },
    { time: '05:00 AM', temp: 13, condition: 'Clear', wind: 2 },
    { time: '06:00 AM', temp: 12, condition: 'Rainy', wind: 8 },
    { time: '07:00 AM', temp: 14, condition: 'Rainy', wind: 12 },
    { time: '08:00 AM', temp: 16, condition: 'Rainy', wind: 10 },
    { time: '09:00 AM', temp: 18, condition: 'Cloudy', wind: 8 },
    { time: '10:00 AM', temp: 20, condition: 'Cloudy', wind: 6 },
    { time: '11:00 AM', temp: 22, condition: 'Cloudy', wind: 5 },
  ]);

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
            <Link to="/dashboard" className="text-white hover:text-blue-300">Dashboard</Link>
            <Link to="/search" className="text-white hover:text-blue-300">Search</Link>
            <Link to="/profile" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Profile</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* 7-Day Forecast */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-6">7-Day Forecast</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {forecastData.map((day, index) => {
              const IconComponent = day.icon;
              return (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl border border-white border-opacity-20 text-center"
                >
                  <h3 className="text-white font-semibold mb-3">{day.day}</h3>
                  <IconComponent className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                  <p className="text-blue-200 text-sm mb-2">{day.condition}</p>
                  <div className="flex justify-center gap-2 mb-3">
                    <span className="text-white font-bold">{day.high}°</span>
                    <span className="text-blue-200">{day.low}°</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 text-blue-200 text-xs">
                    <Droplets className="w-3 h-3" />
                    <span>{day.humidity}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hourly Forecast */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Hourly Forecast</h2>
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl border border-white border-opacity-20 overflow-x-auto">
            <div className="flex gap-4 pb-4" style={{ minWidth: 'min-content' }}>
              {hourlyData.map((hour, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white bg-opacity-5 p-4 rounded-lg border border-white border-opacity-10 text-center min-w-[120px]"
                >
                  <p className="text-blue-200 text-sm mb-2">{hour.time}</p>
                  <p className="text-2xl font-bold text-white mb-2">{hour.temp}°</p>
                  <p className="text-blue-200 text-xs mb-2">{hour.condition}</p>
                  <div className="flex items-center justify-center gap-1 text-blue-200 text-xs">
                    <Wind className="w-3 h-3" />
                    <span>{hour.wind} km/h</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Graph Placeholder */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20">
          <h2 className="text-2xl font-bold text-white mb-6">Temperature Graph</h2>
          <div className="h-64 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-10 flex items-center justify-center">
            <p className="text-blue-200">Graph visualization would be displayed here</p>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            📊 A beautiful temperature trend graph showing the next 7 days' forecast
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecastPage;
