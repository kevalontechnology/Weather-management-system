import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Users, Github, Linkedin, Mail } from 'lucide-react';

const AboutPage = () => {
  const team = [
    { name: 'Sarah Johnson', role: 'Lead Designer', avatar: '👩‍💼' },
    { name: 'Mike Chen', role: 'Full Stack Developer', avatar: '👨‍💻' },
    { name: 'Emma Wilson', role: 'Weather Data Specialist', avatar: '👩‍🔬' },
    { name: 'Alex Rodriguez', role: 'DevOps Engineer', avatar: '👨‍🚀' },
  ];

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
            <Link to="/contact" className="text-white hover:text-blue-300">Contact</Link>
            <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Login</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">About WeatherHub</h1>
          <p className="text-xl text-blue-100">Your trusted source for accurate weather information</p>
        </div>

        {/* Mission Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-blue-100 leading-relaxed">
            WeatherHub is dedicated to providing accurate, real-time weather information to help people make informed decisions about their daily activities. We combine cutting-edge technology with reliable weather data sources to deliver the most comprehensive weather service available.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20">
            <h3 className="text-2xl font-bold text-white mb-4">✨ What We Offer</h3>
            <ul className="space-y-3 text-blue-100">
              <li>• Real-time weather data and forecasts</li>
              <li>• 7-day and hourly weather predictions</li>
              <li>• Weather alerts and notifications</li>
              <li>• Historical weather data and trends</li>
              <li>• Favorite locations for quick access</li>
              <li>• Detailed weather analytics</li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20">
            <h3 className="text-2xl font-bold text-white mb-4">🎯 Why Choose Us?</h3>
            <ul className="space-y-3 text-blue-100">
              <li>• Highly accurate weather predictions</li>
              <li>• 24/7 monitoring and updates</li>
              <li>• User-friendly interface</li>
              <li>• Fast and reliable service</li>
              <li>• Secure data protection</li>
              <li>• Dedicated customer support</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 text-center hover:bg-opacity-20 transition"
              >
                <div className="text-5xl mb-3">{member.avatar}</div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-blue-200 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">🛠️ Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-blue-100">
            <div>• React.js</div>
            <div>• Tailwind CSS</div>
            <div>• Node.js / Express</div>
            <div>• MongoDB</div>
            <div>• OpenWeather API</div>
            <div>• JWT Authentication</div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-2xl border border-white border-opacity-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Have Questions?</h2>
          <p className="text-blue-100 mb-6">Get in touch with our team to learn more about WeatherHub</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
