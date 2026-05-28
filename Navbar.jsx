import { useWatchlist } from '../context/WatchlistContext';
import { Bookmark, Zap } from 'lucide-react';

export function Navbar({ onWatchlistClick }) {
  const { watchlistCount, totalEpisodes } = useWatchlist();

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-red-600" />
            <h1 className="text-2xl font-bold text-white">Anime Binge</h1>
          </div>

          <button
            onClick={onWatchlistClick}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            <Bookmark className="w-5 h-5" />
            <span>Watchlist</span>
            <span className="bg-red-900 text-white text-xs font-bold px-2 py-0.5 rounded-full ml-2">
              {watchlistCount}
            </span>
          </button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="bg-slate-800 rounded-lg p-3">
            <p className="text-slate-400 text-sm">Total Anime</p>
            <p className="text-2xl font-bold text-white">{watchlistCount}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-3">
            <p className="text-slate-400 text-sm">Total Episodes</p>
            <p className="text-2xl font-bold text-red-600">{totalEpisodes}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-3 hidden md:block">
            <p className="text-slate-400 text-sm">Avg Per Anime</p>
            <p className="text-2xl font-bold text-blue-400">
              {watchlistCount > 0 ? (totalEpisodes / watchlistCount).toFixed(1) : 0}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-3 hidden md:block">
            <p className="text-slate-400 text-sm">Est. Hours</p>
            <p className="text-2xl font-bold text-green-400">
              {Math.round(totalEpisodes * 0.4)}h
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
