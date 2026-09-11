# Modern Dashboard

A modern, responsive dashboard built with React, Tailwind CSS, and Recharts. Features real-time data visualization, analytics, and interactive charts.

## Features

- 📊 Interactive data visualizations with Recharts
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🌙 Dark theme
- ⚡ Fast performance with Vite
- 🎯 Clean component architecture
- 📈 Real-time analytics
- 🔍 Search functionality
- 📋 Data tables with sorting

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Lucide Icons** - Icon library

## Installation

```bash
# Clone the repository
git clone https://github.com/manager282/modern-dashboard.git

# Install dependencies
cd modern-dashboard
npm install
```

## Development

```bash
# Start dev server
npm run dev

# Open http://localhost:3000 in your browser
```

## Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx      # Navigation sidebar
│   ├── Header.jsx       # Top header bar
│   ├── StatCard.jsx     # Statistics card component
│   ├── ChartCard.jsx    # Chart container
│   └── Table.jsx        # Data table component
├── pages/
│   └── Dashboard.jsx    # Main dashboard page
├── utils/
│   └── formatters.js    # Utility functions
├── App.jsx              # Root component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## Components

### Sidebar
Navigational sidebar with collapsible menu items.

### Header
Top navigation with search, notifications, and user menu.

### StatCard
Displays key metrics with trend indicators.

### ChartCard
Reusable container for charts and visualizations.

### Table
Responsive data table component.

## Customization

### Colors
Edit the color scheme in `tailwind.config.js`:

```js
colors: {
  primary: '#3b82f6',
  secondary: '#1e293b',
  accent: '#06b6d4'
}
```

### Data
Replace mock data in `src/pages/Dashboard.jsx` with real API calls.

## License

MIT License - feel free to use this project for personal and commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit pull requests.

---

Built with ❤️ by manager282