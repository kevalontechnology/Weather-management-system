import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Cloud, Search as SearchIcon, CloudDrizzle, CloudRain, Sun } from 'lucide-react';

const CityWeatherSearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = React.useState(searchParams.get('city') || '');
  const [searchResults, setSearchResults] = React.useState([
    {
      id: 1,
      city: 'New York',
      country: 'USA',
      temperature: 22,
      condition: 'Partly Cloudy',
      icon: CloudDrizzle,
    },
    {
      id: 2,
      city: 'Los Angeles',
      country: 'USA',
      temperature: 25,
      condition: 'Sunny',
      icon: Sun,
    },
    {
      id: 3,
      city: 'London',
      country: 'UK',
      temperature: 18,
      condition: 'Rainy',
      icon: CloudRain,
    },
    {
      id: 4,
      city: 'Tokyo',
      country: 'Japan',
      temperature: 20,
      condition: 'Cloudy',
      icon: Cloud,
    },
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Add actual search API call
    console.log('Searching for:', searchQuery);
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
            <Link to="/favorites" className="text-white hover:text-blue-300">Favorites</Link>
            <Link to="/profile" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Profile</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search Form */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-6">Search Weather by City</h1>
          <form onSubmit={handleSearch} className="flex gap-2 max-w-2xl">
            <input
              type="text"
              placeholder="Enter city name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-6 py-3 rounded-lg bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition flex items-center gap-2"
            >
              <SearchIcon className="w-5 h-5" />
              Search
            </button>
          </form>
        </div>

        {/* Results Grid */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchResults.map(result => {
              const IconComponent = result.icon;
              return (
                <div
                  key={result.id}
                  className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition cursor-pointer"
                >
                  <div className="text-center">
                    <IconComponent className="w-12 h-12 text-blue-300 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-white">{result.city}</h3>
                    <p className="text-blue-200 text-sm mb-3">{result.country}</p>
                    <div className="text-3xl font-bold text-white mb-1">{result.temperature}°C</div>
                    <p className="text-blue-200 mb-4">{result.condition}</p>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityWeatherSearchPage;
