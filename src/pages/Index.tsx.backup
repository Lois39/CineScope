import { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { MovieGrid } from '@/components/MovieGrid';
import { MovieDetails } from '@/components/MovieDetails';
import { Hero } from '@/components/Hero';
import { Sidebar } from '@/components/Sidebar';
import { RightPanel } from '@/components/RightPanel';
import { Bell, Search, User } from 'lucide-react';

const Index = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-core-black text-white flex overflow-hidden">
      <Sidebar />

      <main className="flex-1 ml-24 mr-0 xl:mr-80 p-8 transition-all duration-300">
        <header className="flex items-center justify-between mb-12">
           <div className="flex-1 max-w-xl">
             <SearchBar 
                onSearch={setSearchResults} 
                setLoading={setIsLoading}
                onClearSelection={() => setSelectedMovie(null)}
              />
           </div>
           
           <div className="flex items-center space-x-6 ml-8">
              <button className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors relative">
                 <Bell className="w-5 h-5 text-white/70" />
                 <div className="absolute top-3 right-3 w-2 h-2 bg-plasma-orange rounded-full border-2 border-core-black" />
              </button>
              <div className="flex items-center space-x-3 p-1 pr-4 bg-white/5 rounded-2xl border border-white/5">
                 <div className="w-10 h-10 rounded-xl bg-plasma-orange/20 flex items-center justify-center border border-plasma-orange/30">
                    <User className="w-6 h-6 text-plasma-orange" />
                 </div>
                 <div className="hidden sm:block">
                    <p className="text-xs font-bold">Lois Lane</p>
                    <p className="text-[10px] text-white/40">Premium Member</p>
                 </div>
              </div>
           </div>
        </header>

        <div className="relative">
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
        </div>
      </main>

      <RightPanel />
    </div>
  );
};

export default Index;
