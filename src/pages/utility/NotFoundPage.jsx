import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 flex flex-col items-center justify-center">
      <div className="text-center">
        {/* 404 Text */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-white mb-4 drop-shadow-lg">404</h1>
          <p className="text-4xl font-bold text-blue-200 mb-2">Page Not Found</p>
          <p className="text-xl text-blue-100">Sorry, the page you're looking for doesn't exist.</p>
        </div>

        {/* Illustration */}
        <div className="mb-8">
          <Cloud className="w-32 h-32 text-blue-300 mx-auto opacity-50 mb-4" />
          <p className="text-blue-200 text-lg">It seems like you've wandered off the forecast!</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            to="/search"
            className="bg-white bg-opacity-10 text-white px-8 py-3 rounded-lg hover:bg-opacity-20 transition font-semibold border border-white border-opacity-20"
          >
            Search Weather
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto">
          <Link to="/" className="text-blue-300 hover:text-blue-200 transition text-sm">Home</Link>
          <Link to="/dashboard" className="text-blue-300 hover:text-blue-200 transition text-sm">Dashboard</Link>
          <Link to="/about" className="text-blue-300 hover:text-blue-200 transition text-sm">About</Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center py-6 text-blue-200">
        <p>&copy; 2026 WeatherHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NotFoundPage;
