import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Calendar, Filter } from 'lucide-react';

const WeatherHistoryPage = () => {
  const [historyData] = React.useState([
    { id: 1, date: '2024-02-01', city: 'New York', temperature: 22, condition: 'Sunny', humidity: 60 },
    { id: 2, date: '2024-02-02', city: 'New York', temperature: 20, condition: 'Cloudy', humidity: 70 },
    { id: 3, date: '2024-02-03', city: 'New York', temperature: 18, condition: 'Rainy', humidity: 85 },
    { id: 4, date: '2024-02-04', city: 'New York', temperature: 19, condition: 'Rainy', humidity: 80 },
    { id: 5, date: '2024-02-05', city: 'New York', temperature: 23, condition: 'Sunny', humidity: 55 },
    { id: 6, date: '2024-02-06', city: 'New York', temperature: 25, condition: 'Sunny', humidity: 50 },
    { id: 7, date: '2024-02-07', city: 'New York', temperature: 21, condition: 'Cloudy', humidity: 65 },
    { id: 8, date: '2024-02-08', city: 'New York', temperature: 19, condition: 'Rainy', humidity: 75 },
  ]);

  const [filterDate, setFilterDate] = React.useState('');
  const [filterCity, setFilterCity] = React.useState('');

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
        <h1 className="text-4xl font-bold text-white mb-8">Weather History</h1>

        {/* Filters */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="block text-white mb-2 font-semibold text-sm">Filter by Date</label>
              <div className="flex items-center bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4">
                <Calendar className="w-5 h-5 text-blue-300" />
                <input
                  type="date"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className="flex-1 ml-3 py-2 bg-transparent text-white outline-none"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-white mb-2 font-semibold text-sm">Filter by City</label>
              <input
                type="text"
                placeholder="City name..."
                value={filterCity}
                onChange={(e) => setFilterCity(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Apply Filter
            </button>
          </div>
        </div>

        {/* History Table */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white border-opacity-20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white border-opacity-20 bg-white bg-opacity-5">
                  <th className="px-6 py-4 text-left text-white font-semibold">Date</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">City</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Temperature</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Condition</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Humidity</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {historyData.map((record) => (
                  <tr key={record.id} className="border-b border-white border-opacity-10 hover:bg-white hover:bg-opacity-5 transition">
                    <td className="px-6 py-4 text-blue-200">{record.date}</td>
                    <td className="px-6 py-4 text-white font-semibold">{record.city}</td>
                    <td className="px-6 py-4 text-white">{record.temperature}°C</td>
                    <td className="px-6 py-4 text-blue-200">{record.condition}</td>
                    <td className="px-6 py-4 text-white">{record.humidity}%</td>
                    <td className="px-6 py-4">
                      <button className="text-blue-300 hover:text-blue-200 transition">View</button>
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
          <button className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-lg hover:bg-opacity-20 transition">3</button>
          <button className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-lg hover:bg-opacity-20 transition">Next</button>
        </div>
      </div>
    </div>
  );
};

export default WeatherHistoryPage;
