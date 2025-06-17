
import { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { MovieGrid } from '@/components/MovieGrid';
import { MovieDetails } from '@/components/MovieDetails';
import { Hero } from '@/components/Hero';
import { Film, Sparkles } from 'lucide-react';

const Index = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-pink-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
        
        {/* Floating Sparkles */}
        <div className="absolute top-1/4 left-1/3 text-pink-400/30 animate-bounce delay-300">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="absolute top-3/4 right-1/4 text-purple-400/30 animate-bounce delay-700">
          <Sparkles className="w-3 h-3" />
        </div>
        <div className="absolute top-1/2 left-1/4 text-pink-300/20 animate-bounce delay-1000">
          <Sparkles className="w-2 h-2" />
        </div>
      </div>

      {/* Header */}
      <header className="relative bg-slate-900/80 backdrop-blur-lg shadow-2xl border-b border-pink-500/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Film className="w-10 h-10 text-pink-400 animate-pulse" />
                <div className="absolute inset-0 w-10 h-10 bg-pink-400/20 rounded-full blur-md animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-300 bg-clip-text text-transparent">
                  CineScope
                </h1>
                <p className="text-xs text-pink-300/70 font-light">Discover Amazing Movies</p>
              </div>
            </div>
            <SearchBar 
              onSearch={setSearchResults} 
              setLoading={setIsLoading}
              onClearSelection={() => setSelectedMovie(null)}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative container mx-auto px-4 py-8">
        {selectedMovie ? (
          <MovieDetails 
            movie={selectedMovie} 
            onBack={() => setSelectedMovie(null)} 
          />
        ) : (
          <>
            {searchResults.length === 0 && !isLoading && <Hero />}
            <MovieGrid 
              movies={searchResults}
              onMovieSelect={setSelectedMovie}
              isLoading={isLoading}
            />
          </>
        )}
      </main>
    </div>
  );
};

export default Index;
