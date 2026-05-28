import { useWatchlist } from '../context/WatchlistContext';
import { Bookmark, BookmarkCheck, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

export function AnimeCard({ anime }) {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const inWatchlist = isInWatchlist(anime.id);
  const [imageError, setImageError] = useState(false);

  const handleToggleWatchlist = () => {
    if (inWatchlist) {
      removeFromWatchlist(anime.id);
    } else {
      addToWatchlist(anime);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-red-500 group">
      <div className={`relative overflow-hidden ${anime.bgColor || 'bg-slate-700'} h-72 flex items-center justify-center`}>
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
            <div className="text-center">
              <ImageIcon className="w-16 h-16 text-slate-500 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">{anime.title}</p>
            </div>
          </div>
        ) : (
          <>
            <img
              src={anime.image}
              alt={anime.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
              onError={handleImageError}
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          </>
        )}
        <div className="absolute top-3 right-3 bg-black bg-opacity-80 px-3 py-1.5 rounded-full text-sm font-semibold text-yellow-400 shadow-lg">
          {anime.episodes} eps
        </div>
        <div className="absolute top-3 left-3 bg-red-600 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
          ⭐ {anime.rating}/10
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-white mb-1 line-clamp-2 group-hover:text-red-400 transition-colors">
            {anime.title}
          </h3>
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">{anime.status}</p>
        </div>

        <p className="text-sm text-slate-300 mb-3 line-clamp-2 leading-relaxed">
          {anime.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          {anime.genres.map((genre) => (
            <span
              key={genre}
              className="bg-red-600 text-white text-xs px-2.5 py-1 rounded-full font-medium hover:bg-red-700 transition-colors"
            >
              {genre}
            </span>
          ))}
        </div>

        <button
          onClick={handleToggleWatchlist}
          className={`w-full py-2.5 px-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
            inWatchlist
              ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/50'
              : 'bg-slate-700 hover:bg-slate-600 text-slate-200 border border-slate-600'
          }`}
        >
          {inWatchlist ? (
            <>
              <BookmarkCheck className="w-4 h-4" />
              In Watchlist
            </>
          ) : (
            <>
              <Bookmark className="w-4 h-4" />
              Add to Watchlist
            </>
          )}
        </button>
      </div>
    </div>
  );
}
