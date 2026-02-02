import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Heart, Trash2 } from 'lucide-react';

const FavoriteLocationsPage = () => {
  const [favorites, setFavorites] = React.useState([
    { id: 1, city: 'New York', country: 'USA', temperature: 22, condition: 'Partly Cloudy' },
    { id: 2, city: 'London', country: 'UK', temperature: 18, condition: 'Rainy' },
    { id: 3, city: 'Tokyo', country: 'Japan', temperature: 20, condition: 'Cloudy' },
    { id: 4, city: 'Paris', country: 'France', temperature: 19, condition: 'Sunny' },
    { id: 5, city: 'Sydney', country: 'Australia', temperature: 25, condition: 'Sunny' },
  ]);

  const handleRemove = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
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
            <Link to="/search" className="text-white hover:text-blue-300">Search</Link>
            <Link to="/profile" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Profile</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white">Favorite Locations</h1>
            <p className="text-blue-200">Quick access to your saved cities</p>
          </div>
          <Link
            to="/search"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add Location
          </Link>
        </div>

        {/* Favorites Grid */}
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((location) => (
              <div
                key={location.id}
                className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition relative group"
              >
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => handleRemove(location.id)}
                    className="bg-red-500 bg-opacity-0 group-hover:bg-opacity-30 p-2 rounded-lg transition text-red-300"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-4">
                  <Heart className="w-8 h-8 text-red-400 fill-red-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">{location.city}</h3>
                <p className="text-blue-200 text-sm mb-4">{location.country}</p>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-4xl font-bold text-white">{location.temperature}°C</p>
                    <p className="text-blue-200">{location.condition}</p>
                  </div>
                </div>

                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                  View Weather
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-12 rounded-xl border border-white border-opacity-20 text-center">
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold text-white mb-2">No Favorites Yet</h3>
            <p className="text-blue-200 mb-6">Add your favorite cities to get quick access to their weather</p>
            <Link
              to="/search"
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Search & Add Cities
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteLocationsPage;
