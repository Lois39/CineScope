import { Star, Play, Plus, Clock } from 'lucide-react';

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
    <div 
      className="group relative bg-white/5 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 border border-white/5 hover:border-plasma-orange/30 hover:shadow-2xl hover:shadow-plasma-orange/10"
      onClick={onClick}
    >
      <div className="aspect-[2/3] relative overflow-hidden">
        <img
          src={posterUrl}
          alt={movie.Title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop';
          }}
        />
        
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="p-4 bg-plasma-orange rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-75">
                <Play className="w-6 h-6 text-white fill-current" />
            </button>
        </div>

        <div className="absolute top-4 right-4 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <button className="p-2 bg-white/10 backdrop-blur-md rounded-xl hover:bg-plasma-orange transition-colors">
                <Plus className="w-4 h-4 text-white" />
            </button>
        </div>
      </div>
      
      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
           <span className="text-[10px] font-bold text-plasma-orange uppercase tracking-widest">{movie.Type}</span>
           <div className="flex items-center text-white/50 text-[10px]">
              <Clock className="w-3 h-3 mr-1" />
              <span>2h 15m</span>
           </div>
        </div>

        <h3 className="font-bold text-white text-base line-clamp-1 group-hover:text-plasma-orange transition-colors">
          {movie.Title}
        </h3>
        
        <div className="flex items-center justify-between text-xs text-white/60">
          <div className="flex items-center space-x-1">
             <Star className="w-3 h-3 text-plasma-orange fill-current" />
             <span className="font-bold text-white/90">4.5</span>
          </div>
          <span>{movie.Year}</span>
        </div>
      </div>
    </div>
  );
};
