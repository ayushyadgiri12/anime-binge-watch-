# Anime Binge Watchlist

A beautiful React application for managing your anime watchlist with real anime poster images and detailed information.

## Features

- 🎬 Browse anime with official poster images
- ⭐ View ratings and episode counts
- 📚 Filter by genres and search
- 💾 Add anime to your personal watchlist
- 🎨 Modern dark theme UI with Tailwind CSS
- ⚡ Fast performance with Vite

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Context API** - State management
- **Lucide React** - Icons

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/anime-binge-watchlist.git
cd anime-binge-watchlist
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── AnimeCard.jsx      # Individual anime card component
│   ├── AnimeGrid.jsx      # Grid display of anime
│   ├── Navbar.jsx         # Navigation bar
│   └── Watchlist.jsx      # Watchlist modal
├── context/
│   └── WatchlistContext.jsx # Global state management
├── App.jsx                # Main app component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

Contributions are welcome! Feel free to submit a pull request.

## License

MIT License - feel free to use this project for personal or commercial purposes.
