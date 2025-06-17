
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar } from 'lucide-react';

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  const posterUrl = movie.Poster !== 'N/A' 
    ? movie.Poster 
    : 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop';

  return (
    <Card 
      className="bg-slate-800/80 backdrop-blur-sm border-pink-500/20 hover:border-pink-400/60 transition-all duration-500 cursor-pointer group hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 relative overflow-hidden"
      onClick={onClick}
    >
      {/* Glowing effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-pink-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/10 transition-all duration-500 rounded-lg"></div>
      
      <div className="aspect-[2/3] relative overflow-hidden rounded-t-lg">
        <img
          src={posterUrl}
          alt={movie.Title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Hover overlay with play icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-16 h-16 bg-pink-500/80 rounded-full flex items-center justify-center backdrop-blur-sm border border-pink-400/50 shadow-lg shadow-pink-500/50">
            <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
          </div>
        </div>
      </div>
      
      <div className="p-4 relative">
        <h3 className="font-semibold text-white text-sm mb-3 line-clamp-2 group-hover:text-pink-300 transition-colors duration-300">
          {movie.Title}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3 text-pink-400" />
            <Badge variant="secondary" className="bg-slate-700/80 text-pink-200 text-xs border border-pink-500/20">
              {movie.Year}
            </Badge>
          </div>
          
          <Badge 
            variant="outline" 
            className="border-purple-400/50 text-purple-300 text-xs bg-purple-500/10 hover:bg-purple-500/20 transition-colors duration-300"
          >
            {movie.Type}
          </Badge>
        </div>
        
        {/* Animated bottom border */}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
      </div>
    </Card>
  );
};
