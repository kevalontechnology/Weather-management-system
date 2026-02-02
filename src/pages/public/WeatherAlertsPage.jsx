import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, AlertTriangle, Zap, Wind } from 'lucide-react';

const WeatherAlertsPage = () => {
  const [alerts] = React.useState([
    {
      id: 1,
      type: 'Storm Alert',
      severity: 'High',
      city: 'New York',
      message: 'Severe thunderstorm warning in effect',
      time: '2 hours ago',
      icon: Zap,
    },
    {
      id: 2,
      type: 'Heatwave',
      severity: 'Medium',
      city: 'Los Angeles',
      message: 'Extreme heat warning - Temperature above 40°C',
      time: '5 hours ago',
      icon: AlertTriangle,
    },
    {
      id: 3,
      type: 'Wind Alert',
      severity: 'High',
      city: 'Chicago',
      message: 'High wind warning with gusts up to 80 km/h',
      time: '1 hour ago',
      icon: Wind,
    },
    {
      id: 4,
      type: 'Rain Notification',
      severity: 'Low',
      city: 'Seattle',
      message: 'Heavy rainfall expected in the next 12 hours',
      time: '30 minutes ago',
      icon: Cloud,
    },
    {
      id: 5,
      type: 'Storm Alert',
      severity: 'High',
      city: 'Miami',
      message: 'Hurricane warning issued for the region',
      time: '45 minutes ago',
      icon: Zap,
    },
  ]);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'High':
        return 'bg-red-500 bg-opacity-20 border-red-500 text-red-200';
      case 'Medium':
        return 'bg-yellow-500 bg-opacity-20 border-yellow-500 text-yellow-200';
      case 'Low':
        return 'bg-blue-500 bg-opacity-20 border-blue-500 text-blue-200';
      default:
        return 'bg-white bg-opacity-10';
    }
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
          <div className="flex gap-4">
            <Link to="/dashboard" className="text-white hover:text-blue-300">Dashboard</Link>
            <Link to="/profile" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Profile</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-2">Weather Alerts</h1>
        <p className="text-blue-200 mb-8">Stay informed about extreme weather conditions</p>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition whitespace-nowrap">
            All Alerts
          </button>
          <button className="bg-white bg-opacity-10 text-white px-6 py-2 rounded-full hover:bg-opacity-20 transition whitespace-nowrap border border-white border-opacity-20">
            Storm
          </button>
          <button className="bg-white bg-opacity-10 text-white px-6 py-2 rounded-full hover:bg-opacity-20 transition whitespace-nowrap border border-white border-opacity-20">
            Heatwave
          </button>
          <button className="bg-white bg-opacity-10 text-white px-6 py-2 rounded-full hover:bg-opacity-20 transition whitespace-nowrap border border-white border-opacity-20">
            Rain
          </button>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {alerts.map((alert) => {
            const IconComponent = alert.icon;
            return (
              <div
                key={alert.id}
                className={`backdrop-blur-md p-6 rounded-xl border ${getSeverityColor(alert.severity)}`}
              >
                <div className="flex items-start gap-4">
                  <IconComponent className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{alert.type}</h3>
                        <p className="text-sm opacity-80">{alert.city}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSeverityColor(alert.severity)}`}>
                        {alert.severity} Severity
                      </span>
                    </div>
                    <p className="text-base mb-3">{alert.message}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs opacity-75">{alert.time}</span>
                      <button className="text-sm hover:underline">Dismiss</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Settings */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 mt-8">
          <h2 className="text-2xl font-bold text-white mb-4">Alert Settings</h2>
          <div className="space-y-4">
            <label className="flex items-center text-white cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5 mr-3" />
              <span>Enable email notifications</span>
            </label>
            <label className="flex items-center text-white cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5 mr-3" />
              <span>Enable push notifications</span>
            </label>
            <label className="flex items-center text-white cursor-pointer">
              <input type="checkbox" className="w-5 h-5 mr-3" />
              <span>Enable SMS alerts</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherAlertsPage;
