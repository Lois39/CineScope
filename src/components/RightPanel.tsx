import { useState, useEffect } from 'react';
import { Play, ChevronRight, Heart, Share2, Plus, Clock, Star } from 'lucide-react';
import { MoviePlayer } from './MoviePlayer';

export const RightPanel = () => {
  const [genreMovies, setGenreMovies] = useState<any[]>([]);
  const [nowPlaying, setNowPlaying] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showPlayer, setShowPlayer] = useState(false);

  const GENRES = [
    { name: 'Action', query: 'Batman', count: '28 items' },
    { name: 'Drama', query: 'Whale', count: '45 items' },
    { name: 'Thriller', query: 'Inception', count: '52 items', active: true },
    { name: 'Comedy', query: 'Barbie', count: '31 items' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch specific movie for each genre to represent it
        const genrePromises = GENRES.map(async (genre) => {
          const res = await fetch(`https://www.omdbapi.com/?apikey=aac3b378&t=${genre.query}`);
          const data = await res.json();
          return { ...genre, image: data.Poster !== 'N/A' ? data.Poster : 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&auto=format&fit=crop&q=60' };
        });

        const genreResults = await Promise.all(genrePromises);
        setGenreMovies(genreResults);

        // Fetch "Now Playing" (recent hit)
        const nowPlayingRes = await fetch(`https://www.omdbapi.com/?apikey=aac3b378&t=Oppenheimer`);
        const nowPlayingData = await nowPlayingRes.json();
        setNowPlaying(nowPlayingData);

      } catch (error) {
        console.error('Error fetching RightPanel data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <aside className="fixed right-0 top-0 h-screen w-80 py-8 px-6 bg-core-black border-l border-white/5 space-y-12 overflow-y-auto no-scrollbar hidden xl:flex flex-col">
      {showPlayer && nowPlaying && (
        <MoviePlayer 
          movieTitle={nowPlaying.Title} 
          onClose={() => setShowPlayer(false)} 
        />
      )}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-white">Browse</h3>
          <button className="text-xs text-plasma-orange font-medium hover:underline">See all</button>
        </div>

        <div className="space-y-4">
          {loading ? (
             Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-16 w-full bg-white/5 rounded-2xl animate-pulse" />
             ))
          ) : (
            genreMovies.map((genre, index) => (
              <div 
                key={index}
                className={`group flex items-center p-3 rounded-2xl transition-all duration-300 cursor-pointer ${
                  genre.active ? 'bg-white/10' : 'hover:bg-white/5'
                }`}
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden mr-4">
                  <img src={genre.image} alt={genre.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">{genre.name}</p>
                  <p className="text-xs text-muted-foreground">{genre.count}</p>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform ${
                  genre.active ? 'text-plasma-orange transform rotate-0' : 'text-muted-foreground group-hover:translate-x-1'
                }`} />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Now Playing</h3>
        
        {loading || !nowPlaying ? (
          <div className="aspect-[3/4] w-full bg-white/5 rounded-3xl animate-pulse" />
        ) : (
          <div className="relative group rounded-3xl overflow-hidden aspect-[3/4] glass-dark border border-white/5">
            <img 
              src={nowPlaying.Poster !== 'N/A' ? nowPlaying.Poster : 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800'} 
              alt={nowPlaying.Title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            <div className="absolute inset-x-0 bottom-0 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white line-clamp-1">{nowPlaying.Title}</h4>
                  <p className="text-xs text-muted-foreground">{nowPlaying.Genre.split(',')[0]}, {nowPlaying.Year}</p>
                </div>
                <button className="p-2 bg-white/10 hover:bg-plasma-orange/20 rounded-full transition-colors group/btn">
                  <Heart className="w-4 h-4 text-white group-hover/btn:text-plasma-orange fill-transparent hover:fill-plasma-orange" />
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-[65%] h-full bg-plasma-orange" />
                </div>
                <span className="text-[10px] text-muted-foreground font-medium">{nowPlaying.Runtime}</span>
              </div>

              <div className="flex items-center justify-around translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                 <button className="p-2 text-white/60 hover:text-white"><Share2 className="w-5 h-5" /></button>
                 <button 
                   onClick={() => setShowPlayer(true)}
                   className="p-3 bg-plasma-orange rounded-full shadow-lg shadow-plasma-orange/30 transform hover:scale-110 active:scale-95 transition-all"
                 >
                    <Play className="w-6 h-6 text-white fill-current" />
                 </button>
                 <button className="p-2 text-white/60 hover:text-white"><Plus className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="pt-4">
        <button className="w-full py-4 bg-white/5 hover:bg-white/10 rounded-2xl font-bold text-white tracking-widest transition-all border border-white/5">
          EXPLORE MORE
        </button>
      </div>
    </aside>
  );
};
