import { createContext, useContext, useState, useEffect } from 'react';

const WatchlistContext = createContext();

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('watchlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (anime) => {
    setWatchlist((prev) => {
      const exists = prev.find((a) => a.id === anime.id);
      if (exists) return prev;
      return [...prev, { ...anime, addedAt: new Date().toISOString() }];
    });
  };

  const removeFromWatchlist = (animeId) => {
    setWatchlist((prev) => prev.filter((a) => a.id !== animeId));
  };

  const isInWatchlist = (animeId) => {
    return watchlist.some((a) => a.id === animeId);
  };

  const totalEpisodes = watchlist.reduce((sum, anime) => sum + anime.episodes, 0);
  const watchlistCount = watchlist.length;

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
        isInWatchlist,
        totalEpisodes,
        watchlistCount,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error('useWatchlist must be used within WatchlistProvider');
  }
  return context;
}
