import { MovieCard } from './MovieCard';
import { MovieSkeleton } from './MovieSkeleton';
import { Film, Search, Filter } from 'lucide-react';

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

interface MovieGridProps {
  movies: Movie[];
  onMovieSelect: (movie: any) => void;
  isLoading: boolean;
}

export const MovieGrid = ({ movies, onMovieSelect, isLoading }: MovieGridProps) => {
  if (isLoading) {
    return (
      <div className="space-y-8 mt-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-plasma-orange animate-pulse" />
            <h2 className="text-xl font-bold text-white">Searching for your next favorite...</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <MovieSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (movies.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8 mt-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">Search Results</h2>
          <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/40 font-medium">
             {movies.length} matches
          </span>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-white/70 hover:text-white transition-all border border-white/5">
           <Filter className="w-4 h-4" />
           <span className="text-sm">Filter</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={() => onMovieSelect(movie)}
          />
        ))}
      </div>
    </div>
  );
};
