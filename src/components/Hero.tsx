import { Play, Plus, Info, Star } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[450px] rounded-3xl sm:rounded-[2rem] overflow-hidden group mb-10">
      <img 
        src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1600&auto=format&fit=crop&q=80" 
        alt="Stranger Things Featured" 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-core-black via-core-black/60 sm:via-core-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-core-black via-transparent to-transparent" />
      
      <div className="absolute inset-y-0 left-0 p-6 sm:p-12 flex flex-col justify-center max-w-2xl space-y-4 sm:space-y-6">
        <div className="flex items-center space-x-3">
          <span className="px-2 py-1 sm:px-3 sm:py-1 bg-plasma-orange/20 text-plasma-orange text-[10px] sm:text-xs font-bold rounded-lg border border-plasma-orange/30">
            NEW SEASON
          </span>
          <div className="flex items-center text-white/80 text-xs sm:text-sm">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-plasma-orange fill-current mr-1" />
            <span className="font-bold">4.9</span>
            <span className="mx-1 sm:mx-2 opacity-50">|</span>
            <span>2022</span>
            <span className="mx-1 sm:mx-2 opacity-50 hidden sm:inline">|</span>
            <span className="hidden sm:inline">9 Episodes</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tighter leading-none">
          STRANGER <br /> <span className="text-plasma-orange">THINGS</span>
        </h1>
        
        <p className="text-sm sm:text-lg text-white/70 line-clamp-2 sm:line-clamp-3 font-medium max-w-sm sm:max-w-none">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments and terrifying supernatural forces.
        </p>

        <div className="flex items-center space-x-3 sm:space-x-4 pt-2 sm:pt-4">
          <button className="flex items-center space-x-2 px-6 py-3 sm:px-8 sm:py-4 bg-plasma-orange hover:bg-plasma-orange/90 text-white rounded-xl sm:rounded-2xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-plasma-orange/30 text-sm sm:text-base">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            <span>Watch Now</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 sm:px-8 sm:py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl sm:rounded-2xl font-bold transition-all border border-white/10 backdrop-blur-md text-sm sm:text-base">
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>My List</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 right-12 flex space-x-2">
        <div className="w-8 h-1 bg-plasma-orange rounded-full" />
        <div className="w-4 h-1 bg-white/20 rounded-full" />
        <div className="w-4 h-1 bg-white/20 rounded-full" />
      </div>
    </div>
  );
};
