# WeatherHub - Weather Management System

A modern, full-featured weather management application built with **React**, **Tailwind CSS**, and **Vite**.

## 🌐 Features

### ✅ Public Pages (User Side)

1. **Home Page** (`/`)
   - Website introduction
   - Search weather option
   - Quick weather overview
   - Feature highlights

2. **Login Page** (`/login`)
   - User login form
   - JWT authentication ready
   - Social login options

3. **Register Page** (`/register`)
   - New user signup
   - Email + password registration
   - Form validation

4. **Weather Dashboard Page** (`/dashboard`)
   - Main weather display
   - Current temperature, humidity, wind speed
   - Quick action buttons

5. **City Weather Search Page** (`/search`)
   - Search weather by city name
   - Display results in cards
   - Query parameter support

6. **Weather Forecast Page** (`/forecast`)
   - 7-day forecast
   - Hourly forecast
   - Graph view placeholder

7. **Weather History Page** (`/history`)
   - Past weather data stored in database
   - Table format view
   - Filter by date and city

8. **Weather Alerts Page** (`/alerts`)
   - Storm alerts
   - Heatwave warnings
   - Rain notifications
   - Alert settings

9. **Favorite Locations Page** (`/favorites`)
   - Saved cities list
   - Quick access weather
   - Add/remove favorites

10. **Profile Page** (`/profile`)
    - User details
    - Update password
    - Manage account settings

11. **About Page** (`/about`)
    - Project information
    - Team details
    - Technology stack

12. **Contact Page** (`/contact`)
    - Contact form
    - Support email
    - FAQ section

### 🛠️ Admin Pages (Admin Panel)

13. **Admin Dashboard** (`/admin/dashboard`)
    - Total users overview
    - Weather logs
    - Reports overview

14. **Manage Users Page** (`/admin/users`)
    - View all users
    - Block/delete users
    - Search and filter

15. **Manage Weather Data Page** (`/admin/weather-data`)
    - Add/update/delete weather records
    - View all records
    - Filter options

16. **Reports & Analytics Page** (`/admin/reports`)
    - Monthly weather report
    - Graph analytics
    - Key metrics

17. **Settings Page** (`/admin/settings`)
    - API key settings
    - System configurations

### ❌ Utility Pages

18. **404 Not Found Page** (`*`)
    - Invalid route handling
    - Back to home link

19. **Loading/Spinner Page** (`/loading`)
    - Loading state indicator
    - Animated spinner

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd weather-app
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── pages/
│   │   ├── public/
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   ├── WeatherDashboardPage.jsx
│   │   │   ├── CityWeatherSearchPage.jsx
│   │   │   ├── WeatherForecastPage.jsx
│   │   │   ├── WeatherHistoryPage.jsx
│   │   │   ├── WeatherAlertsPage.jsx
│   │   │   ├── FavoriteLocationsPage.jsx
│   │   │   ├── ProfilePage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   └── ContactPage.jsx
│   │   ├── admin/
│   │   │   ├── AdminDashboardPage.jsx
│   │   │   ├── ManageUsersPage.jsx
│   │   │   ├── ManageWeatherDataPage.jsx
│   │   │   ├── ReportsAnalyticsPage.jsx
│   │   │   └── AdminSettingsPage.jsx
│   │   └── utility/
│   │       ├── NotFoundPage.jsx
│   │       └── LoadingPage.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎨 Styling

The project uses **Tailwind CSS** for styling with custom color configuration:

- **Primary**: `#0f172a` (Dark Blue)
- **Secondary**: `#1e293b` (Slate)
- **Accent**: `#3b82f6` (Blue)
- **Success**: `#10b981` (Green)
- **Warning**: `#f59e0b` (Amber)
- **Danger**: `#ef4444` (Red)

## 📦 Dependencies

### Main Dependencies
- **react**: ^19.2.0
- **react-dom**: ^19.2.0
- **react-router-dom**: ^7.0.1
- **axios**: ^1.6.0 (API calls)
- **lucide-react**: ^0.378.0 (Icons)

### Dev Dependencies
- **tailwindcss**: ^3.4.0
- **postcss**: ^8.4.32
- **autoprefixer**: ^10.4.16
- **vite**: Latest
- **eslint**: ^9.39.1

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🌐 Routes Summary

### Public Routes
| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page |
| `/login` | Login | User login |
| `/register` | Register | User registration |
| `/dashboard` | Dashboard | Main weather dashboard |
| `/search` | Search | Search weather by city |
| `/forecast` | Forecast | 7-day forecast |
| `/history` | History | Weather history |
| `/alerts` | Alerts | Weather alerts |
| `/favorites` | Favorites | Saved locations |
| `/profile` | Profile | User profile |
| `/about` | About | About page |
| `/contact` | Contact | Contact form |

### Admin Routes
| Route | Page | Description |
|-------|------|-------------|
| `/admin/dashboard` | Admin Dashboard | Admin overview |
| `/admin/users` | Manage Users | User management |
| `/admin/weather-data` | Weather Data | Weather records management |
| `/admin/reports` | Reports | Analytics & reports |
| `/admin/settings` | Settings | System settings |

### Utility Routes
| Route | Page | Description |
|-------|------|-------------|
| `/loading` | Loading | Loading page |
| `*` | 404 | Not found |

## 🎯 UI Components

All components use a consistent design system with:
- Glass-morphism effects (backdrop blur)
- Gradient backgrounds
- Responsive grid layouts
- Smooth transitions and hover effects
- Icons from lucide-react

## 🔐 Authentication (Ready to Implement)

- JWT token storage in localStorage
- Login/Register forms with validation
- Protected routes (to be implemented)
- Social login buttons (UI ready)

## 📊 Data Management (Ready to Implement)

- API calls prepared with axios
- Sample data arrays for tables
- Form handling and state management
- Filter and search functionality

## 🌍 API Integration Points (TODO)

The following pages have API integration points ready:
- Login page - Authentication endpoint
- Register page - User creation endpoint
- Search page - Weather API calls
- Forecast page - Forecast API
- History page - Historical data API
- Dashboard - Current weather API

## 📱 Responsive Design

All pages are fully responsive and tested on:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🎓 Learning Resources

### Technology Stack
- **React Router v7**: Advanced routing
- **Tailwind CSS v3**: Utility-first styling
- **Vite**: Fast build tool
- **Lucide Icons**: Beautiful icon library

## 📝 Future Enhancements

- [ ] Real weather API integration
- [ ] Database integration (MongoDB)
- [ ] JWT authentication implementation
- [ ] Chart.js for analytics
- [ ] Email notifications
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] PWA capabilities

## 🤝 Contributing

This is a demonstration project. Feel free to fork and extend it.

## 📄 License

MIT License - Feel free to use this project for learning and development.

## 👨‍💻 Author

**WeatherHub Development Team**

---

## 🚀 Quick Start Commands

```bash
# Install & Start
npm install --legacy-peer-deps
npm run dev

# Build for production
npm run build

# Open in browser
http://localhost:5173
```

---

**Last Updated**: February 2, 2026
**Version**: 1.0.0
**Status**: ✅ Development Ready

---

## 📞 Support

For questions or issues, please refer to the Contact page or check the About page for team information.

Happy Weather Tracking! 🌤️
