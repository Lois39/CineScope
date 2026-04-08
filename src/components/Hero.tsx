import { Play, Plus, Info, Star } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative w-full h-[450px] rounded-[2rem] overflow-hidden group mb-10">
      <img 
        src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1600&auto=format&fit=crop&q=80" 
        alt="Stranger Things Featured" 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-core-black via-core-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-core-black via-transparent to-transparent" />
      
      <div className="absolute inset-y-0 left-0 p-12 flex flex-col justify-center max-w-2xl space-y-6">
        <div className="flex items-center space-x-3">
          <span className="px-3 py-1 bg-plasma-orange/20 text-plasma-orange text-xs font-bold rounded-lg border border-plasma-orange/30">
            NEW SEASON
          </span>
          <div className="flex items-center text-white/80 text-sm">
            <Star className="w-4 h-4 text-plasma-orange fill-current mr-1" />
            <span className="font-bold">4.9</span>
            <span className="mx-2 opacity-50">|</span>
            <span>2022</span>
            <span className="mx-2 opacity-50">|</span>
            <span>9 Episodes</span>
          </div>
        </div>

        <h1 className="text-7xl font-black text-white tracking-tighter leading-none">
          STRANGER <br /> <span className="text-plasma-orange">THINGS</span>
        </h1>
        
        <p className="text-lg text-white/70 line-clamp-3 font-medium">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
        </p>

        <div className="flex items-center space-x-4 pt-4">
          <button className="flex items-center space-x-2 px-8 py-4 bg-plasma-orange hover:bg-plasma-orange/90 text-white rounded-2xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-plasma-orange/30">
            <Play className="w-5 h-5 fill-current" />
            <span>Watch Now</span>
          </button>
          <button className="flex items-center space-x-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold transition-all border border-white/10 backdrop-blur-md">
            <Plus className="w-5 h-5" />
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
