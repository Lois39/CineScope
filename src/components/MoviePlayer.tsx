import { X, Play, RotateCcw, Volume2, Maximize, SkipForward, SkipBack } from 'lucide-react';

interface MoviePlayerProps {
  movieTitle: string;
  onClose: () => void;
}

export const MoviePlayer = ({ movieTitle, onClose }: MoviePlayerProps) => {
  // Mapping for popular trailers to ensure they work reliably
  const trailermap: Record<string, string> = {
    'Stranger Things': 'b9EkMc79ZSU',
    'Oppenheimer': 'uYPbbksJxIg',
    'The Dark Knight': 'EXeTwQWrcwY',
    'Batman': 'mqqft2x_Aa4',
    'Inception': 'YoHD9XEInc0',
    'Interstellar': 'zSWdZVtXT7E',
    'Barbie': 'pBk4NYhWNMM',
    'The Whale': 'D30r0CwtIKc',
  };

  const videoId = trailermap[movieTitle] || '6ZfuNTqbHE8'; // Sintel as the cinematic fallback
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&showinfo=0&origin=${window.location.origin}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl animate-fade-in shadow-[inset_0_0_100px_rgba(255,94,0,0.5)]">
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 p-3 bg-white/5 hover:bg-plasma-orange text-white rounded-full transition-all group border border-white/5 z-[110]"
      >
        <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
      </button>

      <div className="relative w-full max-w-6xl aspect-video rounded-[2.5rem] overflow-hidden bg-core-black border border-white/10 shadow-2xl shadow-plasma-orange/20 group">
        {/* Actual Video Player Iframe */}
        <div className="absolute inset-0 bg-black">
          <iframe
            src={videoUrl}
            title={movieTitle}
            className="w-full h-full border-none pointer-events-auto"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Overlay Info (Fade out after load) */}
        <div className="absolute top-0 inset-x-0 p-12 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="space-y-1">
              <h2 className="text-sm font-black text-plasma-orange uppercase tracking-[0.3em]">Now Streaming</h2>
              <p className="text-4xl font-black text-white italic tracking-tighter uppercase">{movieTitle}</p>
           </div>
        </div>

        {/* Video Controls Stylized Overlay */}
        <div className="absolute bottom-0 inset-x-0 p-8 pt-20 bg-gradient-to-t from-black via-black/90 to-transparent flex flex-col space-y-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="flex items-center space-x-4">
              <div className="flex-1 h-1.5 bg-white/10 rounded-full relative group/progress cursor-pointer">
                 <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover/progress:scale-x-100 transition-transform origin-left" />
                 <div className="absolute inset-y-0 left-0 w-[45%] bg-plasma-orange rounded-full relative">
                    <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-plasma-orange shadow-lg scale-0 group-hover/progress:scale-100 transition-transform" />
                 </div>
              </div>
              <span className="text-xs font-bold text-white/60 tracking-widest">24:12 / 02:45:00</span>
           </div>

           <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                 <button className="text-white/60 hover:text-white transition-colors"><RotateCcw className="w-5 h-5" /></button>
                 <button className="text-white/60 hover:text-white transition-colors"><SkipBack className="w-6 h-6" /></button>
                 <button className="w-14 h-14 bg-white text-core-black rounded-2xl flex items-center justify-center transform hover:scale-110 active:scale-95 transition-all shadow-xl">
                    <Play className="w-6 h-6 fill-current ml-1" />
                 </button>
                 <button className="text-white/60 hover:text-white transition-colors"><SkipForward className="w-6 h-6" /></button>
                 <button className="text-white/60 hover:text-white transition-colors"><Volume2 className="w-5 h-5" /></button>
              </div>
              <div className="flex items-center space-x-6">
                 <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl text-[10px] font-black tracking-widest text-white transition-all uppercase">
                    Subtitles: English
                 </button>
                 <button className="text-white/60 hover:text-white transition-colors"><Maximize className="w-5 h-5" /></button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
