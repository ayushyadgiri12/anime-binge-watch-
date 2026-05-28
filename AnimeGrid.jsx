import { useState, useEffect } from 'react';
import { AnimeCard } from './AnimeCard';
import { Loader } from 'lucide-react';

const ANIME_DATA = [
  {
    id: 1,
    title: 'Naruto',
    description: 'Follow Naruto Uzumaki as he becomes the strongest ninja',
    genres: ['Action', 'Adventure'],
    episodes: 220,
    status: 'Completed',
    rating: 8.3,
    image: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
    bgColor: 'bg-orange-600',
  },
  {
    id: 2,
    title: 'Attack on Titan',
    description: 'Humanity fights for survival against giant humanoid creatures',
    genres: ['Dark Fantasy', 'Action'],
    episodes: 87,
    status: 'Completed',
    rating: 9.1,
    image: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
    bgColor: 'bg-red-900',
  },
  {
    id: 3,
    title: 'Demon Slayer',
    description: 'A young man seeks revenge against demons with exceptional swordsmanship',
    genres: ['Action', 'Fantasy'],
    episodes: 55,
    status: 'Ongoing',
    rating: 8.7,
    image: 'https://cdn.myanimelist.net/images/anime/6/84291.jpg',
    bgColor: 'bg-red-600',
  },
  {
    id: 4,
    title: 'One Piece',
    description: 'A pirate captain embarks on an epic journey to find the legendary treasure',
    genres: ['Adventure', 'Comedy'],
    episodes: 1100,
    status: 'Ongoing',
    rating: 8.9,
    image: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
    bgColor: 'bg-yellow-500',
  },
  {
    id: 5,
    title: 'Death Note',
    description: 'A notebook that can kill anyone begins to change the world',
    genres: ['Thriller', 'Supernatural'],
    episodes: 37,
    status: 'Completed',
    rating: 8.6,
    image: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
    bgColor: 'bg-black',
  },
  {
    id: 6,
    title: 'Steins;Gate',
    description: 'Time travel experiments lead to a dangerous conspiracy',
    genres: ['Sci-Fi', 'Thriller'],
    episodes: 24,
    status: 'Completed',
    rating: 8.8,
    image: 'https://cdn.myanimelist.net/images/anime/5/31664.jpg',
    bgColor: 'bg-blue-600',
  },
  {
    id: 7,
    title: 'Fullmetal Alchemist',
    description: 'Two brothers seek the Philosopher\'s Stone to restore their bodies',
    genres: ['Action', 'Fantasy'],
    episodes: 64,
    status: 'Completed',
    rating: 9.0,
    image: 'https://cdn.myanimelist.net/images/anime/1/14125.jpg',
    bgColor: 'bg-yellow-600',
  },
  {
    id: 8,
    title: 'My Hero Academia',
    description: 'A powerless boy dreams of becoming the greatest superhero',
    genres: ['Action', 'School'],
    episodes: 130,
    status: 'Ongoing',
    rating: 8.4,
    image: 'https://cdn.myanimelist.net/images/anime/3/69613.jpg',
    bgColor: 'bg-pink-600',
  },
  {
    id: 9,
    title: 'Evangelion',
    description: 'Teenagers pilot giant robots to save humanity',
    genres: ['Mecha', 'Drama'],
    episodes: 26,
    status: 'Completed',
    rating: 7.9,
    image: 'https://cdn.myanimelist.net/images/anime/4/38576.jpg',
    bgColor: 'bg-purple-900',
  },
  {
    id: 10,
    title: 'Cowboy Bebop',
    description: 'A ragtag crew of bounty hunters traverse the galaxy',
    genres: ['Sci-Fi', 'Action'],
    episodes: 26,
    status: 'Completed',
    rating: 8.8,
    image: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
    bgColor: 'bg-indigo-900',
  },
  {
    id: 11,
    title: 'Code Geass',
    description: 'A high school student gains the power to command anyone',
    genres: ['Mecha', 'School'],
    episodes: 50,
    status: 'Completed',
    rating: 8.3,
    image: 'https://cdn.myanimelist.net/images/anime/1/45949.jpg',
    bgColor: 'bg-teal-600',
  },
  {
    id: 12,
    title: 'Mob Psycho 100',
    description: 'A psychic middle schooler just wants a normal life',
    genres: ['Comedy', 'Supernatural'],
    episodes: 50,
    status: 'Completed',
    rating: 8.6,
    image: 'https://cdn.myanimelist.net/images/anime/4/84160.jpg',
    bgColor: 'bg-cyan-500',
  },
];

export function AnimeGrid() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    // Simulate API call with delay
    const timer = setTimeout(() => {
      setAnimeList(ANIME_DATA);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const allGenres = ['All', ...new Set(ANIME_DATA.flatMap((a) => a.genres))];

  const filteredAnime = animeList.filter((anime) => {
    const matchesSearch = anime.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      anime.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || anime.genres.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Search anime..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <div className="flex gap-2 overflow-x-auto pb-2">
          {allGenres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedGenre === genre
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <Loader className="w-8 h-8 text-red-600 animate-spin" />
        </div>
      ) : (
        <>
          {/* Results Count */}
          <p className="text-slate-400 mb-4">
            Found {filteredAnime.length} anime
          </p>

          {/* Anime Grid */}
          {filteredAnime.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">No anime found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAnime.map((anime) => (
                <AnimeCard key={anime.id} anime={anime} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
