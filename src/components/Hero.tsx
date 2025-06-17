
import { Film, Search, Star, Play, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative text-center py-20 bg-gradient-to-br from-slate-800/80 via-purple-900/30 to-pink-900/30 rounded-3xl mb-8 overflow-hidden backdrop-blur-sm border border-pink-500/20 shadow-2xl shadow-pink-500/10">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-24 h-24 border-2 border-pink-400 rounded-full animate-spin slow"></div>
        <div className="absolute bottom-16 right-16 w-20 h-20 border-2 border-purple-400 rounded-full animate-spin slow reverse"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-3/4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-700"></div>
        
        {/* Flowing Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400/50 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex justify-center mb-8">
          <div className="relative p-6 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full backdrop-blur-sm border border-pink-400/30 shadow-lg shadow-pink-500/25">
            <Film className="w-16 h-16 text-pink-400 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-300 bg-clip-text text-transparent animate-fade-in">
          Discover Amazing Movies
        </h2>
        
        <p className="text-xl text-pink-200/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Search through millions of movies, get detailed information, ratings, and cast details. 
          Your next favorite movie is just a search away.
        </p>
        
        <div className="flex items-center justify-center space-x-12 text-pink-300/80">
          <div className="flex flex-col items-center space-y-3 group cursor-pointer transition-all duration-300 hover:scale-110">
            <div className="p-3 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-all duration-300">
              <Search className="w-6 h-6 text-pink-400 group-hover:text-pink-300" />
            </div>
            <span className="text-sm font-medium">Search Movies</span>
          </div>
          
          <div className="flex flex-col items-center space-y-3 group cursor-pointer transition-all duration-300 hover:scale-110">
            <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
              <Star className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
            </div>
            <span className="text-sm font-medium">View Ratings</span>
          </div>
          
          <div className="flex flex-col items-center space-y-3 group cursor-pointer transition-all duration-300 hover:scale-110">
            <div className="p-3 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-all duration-300">
              <Play className="w-6 h-6 text-pink-400 group-hover:text-pink-300" />
            </div>
            <span className="text-sm font-medium">Movie Details</span>
          </div>
          
          <div className="flex flex-col items-center space-y-3 group cursor-pointer transition-all duration-300 hover:scale-110">
            <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
              <Zap className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
            </div>
            <span className="text-sm font-medium">Fast & Modern</span>
          </div>
        </div>
      </div>
    </div>
  );
};
