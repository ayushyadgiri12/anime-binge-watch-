import React from 'react';
import ReactDOM from 'react-dom/client';
import { WatchlistProvider } from './context/WatchlistContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WatchlistProvider>
      <App />
    </WatchlistProvider>
  </React.StrictMode>,
);
