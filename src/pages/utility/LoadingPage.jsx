import React from 'react';
import { Cloud } from 'lucide-react';

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Cloud */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Cloud className="w-24 h-24 text-blue-300 animate-bounce" />
          </div>
        </div>

        {/* Loading Text */}
        <h1 className="text-3xl font-bold text-white mb-4">Loading Weather Data</h1>
        <p className="text-blue-100 mb-8">Please wait while we fetch the latest information...</p>

        {/* Spinner */}
        <div className="flex justify-center mb-8">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-blue-200 border-opacity-30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-400 rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Loading Progress */}
        <div className="w-64 mx-auto">
          <div className="bg-white bg-opacity-10 rounded-full h-2 overflow-hidden border border-white border-opacity-20">
            <div
              className="bg-blue-400 h-full rounded-full animate-pulse"
              style={{
                animation: 'progress 2s ease-in-out infinite',
                width: '100%',
              }}
            ></div>
          </div>
          <p className="text-blue-200 text-sm mt-4">Fetching weather information...</p>
        </div>

        {/* Animated Styles */}
        <style>{`
          @keyframes progress {
            0% { width: 0%; }
            50% { width: 100%; }
            100% { width: 0%; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default LoadingPage;
