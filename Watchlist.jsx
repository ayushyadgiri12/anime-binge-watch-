import { useWatchlist } from '../context/WatchlistContext';
import { Clock, Trash2 } from 'lucide-react';

export function Watchlist({ isOpen, onClose }) {
  const { watchlist, removeFromWatchlist, totalEpisodes } = useWatchlist();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
      <div className="bg-slate-900 w-full md:w-96 h-96 md:h-screen md:rounded-l-lg shadow-2xl overflow-y-auto border-l border-slate-700">
        <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-4">
          <h2 className="text-xl font-bold text-white">My Watchlist</h2>
          <p className="text-sm text-slate-400">{watchlist.length} anime</p>
        </div>

        {watchlist.length === 0 ? (
          <div className="p-6 text-center">
            <p className="text-slate-400">Your watchlist is empty</p>
          </div>
        ) : (
          <div className="p-4 space-y-3">
            {watchlist.map((anime) => (
              <div
                key={anime.id}
                className="bg-slate-800 p-3 rounded-lg border border-slate-700 flex justify-between items-center"
              >
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-white">{anime.title}</h4>
                  <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                    <Clock className="w-3 h-3" />
                    {anime.episodes} episodes
                  </div>
                </div>
                <button
                  onClick={() => removeFromWatchlist(anime.id)}
                  className="ml-2 p-2 hover:bg-red-600 rounded-lg transition-colors text-slate-400 hover:text-white"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}

            <div className="bg-red-600 bg-opacity-20 border border-red-500 rounded-lg p-4 mt-4">
              <p className="text-sm text-slate-300">
                <span className="font-semibold">Total Episodes:</span> {totalEpisodes}
              </p>
            </div>
          </div>
        )}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:hidden text-slate-400 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
