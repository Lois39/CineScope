
import { MovieCard } from './MovieCard';
import { MovieSkeleton } from './MovieSkeleton';
import { Film } from 'lucide-react';

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
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <Film className="w-6 h-6 text-pink-400 animate-pulse" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Searching Movies...
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, index) => (
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
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Film className="w-7 h-7 text-pink-400" />
          <div className="absolute inset-0 w-7 h-7 bg-pink-400/20 rounded-full blur-md animate-pulse"></div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-300 bg-clip-text text-transparent">
          Search Results
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-pink-400/50 via-purple-400/30 to-transparent"></div>
        <span className="text-pink-300/70 text-sm bg-slate-800/50 px-3 py-1 rounded-full border border-pink-500/20">
          {movies.length} movies found
        </span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
