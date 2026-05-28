import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { AnimeGrid } from './components/AnimeGrid';
import { Watchlist } from './components/Watchlist';
import './index.css';

function App() {
  const [watchlistOpen, setWatchlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar onWatchlistClick={() => setWatchlistOpen(true)} />
      <AnimeGrid />
      <Watchlist isOpen={watchlistOpen} onClose={() => setWatchlistOpen(false)} />
    </div>
  );
}

export default App;
