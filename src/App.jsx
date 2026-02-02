import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Public Pages
import HomePage from './pages/public/HomePage';
import LoginPage from './pages/public/LoginPage';
import RegisterPage from './pages/public/RegisterPage';
import WeatherDashboardPage from './pages/public/WeatherDashboardPage';
import CityWeatherSearchPage from './pages/public/CityWeatherSearchPage';
import WeatherForecastPage from './pages/public/WeatherForecastPage';
import WeatherHistoryPage from './pages/public/WeatherHistoryPage';
import WeatherAlertsPage from './pages/public/WeatherAlertsPage';
import FavoriteLocationsPage from './pages/public/FavoriteLocationsPage';
import ProfilePage from './pages/public/ProfilePage';
import AboutPage from './pages/public/AboutPage';
import ContactPage from './pages/public/ContactPage';

// Admin Pages
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import ManageUsersPage from './pages/admin/ManageUsersPage';
import ManageWeatherDataPage from './pages/admin/ManageWeatherDataPage';
import ReportsAnalyticsPage from './pages/admin/ReportsAnalyticsPage';
import AdminSettingsPage from './pages/admin/AdminSettingsPage';

// Utility Pages
import NotFoundPage from './pages/utility/NotFoundPage';
import LoadingPage from './pages/utility/LoadingPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<WeatherDashboardPage />} />
        <Route path="/search" element={<CityWeatherSearchPage />} />
        <Route path="/forecast" element={<WeatherForecastPage />} />
        <Route path="/history" element={<WeatherHistoryPage />} />
        <Route path="/alerts" element={<WeatherAlertsPage />} />
        <Route path="/favorites" element={<FavoriteLocationsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/users" element={<ManageUsersPage />} />
        <Route path="/admin/weather-data" element={<ManageWeatherDataPage />} />
        <Route path="/admin/reports" element={<ReportsAnalyticsPage />} />
        <Route path="/admin/settings" element={<AdminSettingsPage />} />

        {/* Utility Routes */}
        <Route path="/loading" element={<LoadingPage />} />

        {/* 404 - Must be last */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
