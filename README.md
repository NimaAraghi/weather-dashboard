
# Weather Dashboard

A responsive weather dashboard built with **React, TypeScript, Vite, and Material UI**.  
This project was developed as part of an internship task at **Nadin Soft**.


## Features

- Login / Logout flow (name-based authentication with localStorage)
- Light / Dark mode (Material UI theme switcher)
- Bilingual support (English / Persian) with i18n and RTL support
- Weather API integration (OpenWeather API using Axios)
- Interactive temperature chart (Recharts)
- Weather forecast carousel (Swiper.js)
- Responsive design (mobile, tablet, desktop)
## Tech Stack

- **Frontend:** React 19, TypeScript, Vite
- **UI Library:** Material UI
- **Data Fetching:** Axios
- **Internationalization:** i18next, react-i18next
- **Charts:** Recharts
- **Carousel:** Swiper.js
- **Routing:** React Router


## Folder Structure

```
src/
├── components/ # Reusable UI components (Weather, Chart, Carousel, Header, Footer)
├── pages/ # Page components (Login, Dashboard)
├── services/ # API service functions (weather.ts)
├── theme/ # MUI theme configuration (light/dark mode)
├── i18n/ # Translation files (en.json, fa.json, config.ts)
├── App.tsx # Routes & app wrapper
└── main.tsx # App entry point
```
## Getting Started

### 1. Clone the repository

```bash
  git clone https://github.com/NimaAraghi/weather-dashboard
```

### 2. Go to the project directory

```bash
  cd weather-dashboard
```

### 3. Install dependencies

```bash
  npm install
```

### 4. Set up environment variables

Create a .env file in the project root:

```bash
  VITE_OPENWEATHER_KEY=your_api_key_here
```

### 5. Run the app in development mode

```bash
  npm run dev
```