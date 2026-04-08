import { useState, useEffect } from 'react';
import { ArrowLeft, Star, Calendar, Clock, Users, Award, Globe, DollarSign, Play, Plus, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { MoviePlayer } from './MoviePlayer';

interface MovieDetailsProps {
  movie: any;
  onBack: () => void;
}

export const MovieDetails = ({ movie, onBack }: MovieDetailsProps) => {
  const [details, setDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showPlayer, setShowPlayer] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=aac3b378&i=${movie.imdbID}&plot=full`
        );
        const data = await response.json();
        
        if (data.Response === 'True') {
          setDetails(data);
        } else {
          toast({
            title: "Failed to load movie details",
            description: data.Error || "Please try again",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
        toast({
          title: "Failed to load movie details",
          description: "Please try again later",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movie.imdbID, toast]);

  if (loading) {
    return (
      <div className="animate-pulse space-y-8">
        <div className="h-10 w-32 bg-white/5 rounded-xl ml-4" />
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="aspect-[2/3] bg-white/5 rounded-3xl" />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="h-12 bg-white/5 rounded-2xl w-3/4" />
            <div className="h-6 bg-white/5 rounded-xl w-1/4" />
            <div className="space-y-4">
              <div className="h-4 bg-white/5 rounded" />
              <div className="h-4 bg-white/5 rounded" />
              <div className="h-4 bg-white/5 rounded w-2/3" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!details) {
      return (
        <div className="text-center py-12 flex flex-col items-center">
          <button onClick={onBack} className="flex items-center space-x-2 text-plasma-orange hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-5 h-5" />
            <span>Go back</span>
          </button>
          <p className="text-white/40">Movie details not found.</p>
        </div>
      );
  }

  const posterUrl = details.Poster !== 'N/A' 
    ? details.Poster 
    : 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop';

  return (
    <div className="animate-fade-in space-y-12 pb-20">
      {showPlayer && (
        <MoviePlayer 
          movieTitle={details.Title} 
          onClose={() => setShowPlayer(false)} 
        />
      )}

      <button 
        onClick={onBack} 
        className="group flex items-center space-x-3 px-6 py-3 bg-white/5 hover:bg-plasma-orange text-white rounded-2xl transition-all border border-white/5"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-bold">Back to Results</span>
      </button>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Movie Poster */}
        <div className="lg:col-span-1">
          <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl shadow-plasma-orange/10 border border-white/5">
            <img
              src={posterUrl}
              alt={details.Title}
              className="w-full aspect-[2/3] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-0 right-0 p-8 flex justify-center space-x-4">
                <button 
                  onClick={() => setShowPlayer(true)}
                  className="flex-1 py-4 bg-plasma-orange hover:bg-plasma-orange/90 text-white rounded-2xl font-bold transition-all shadow-lg shadow-plasma-orange/20"
                >
                    WATCH NOW
                </button>
                <button className="p-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-2xl transition-all">
                    <Plus className="w-6 h-6" />
                </button>
            </div>
          </div>
        </div>

        {/* Movie Information */}
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
               <span className="px-3 py-1 bg-plasma-orange/20 text-plasma-orange text-[10px] font-black uppercase tracking-widest rounded-lg border border-plasma-orange/30">
                  {details.Rated}
               </span>
               <div className="flex items-center text-white/40 text-sm font-medium">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{details.Runtime}</span>
               </div>
            </div>

            <h1 className="text-6xl font-black text-white leading-tight tracking-tighter">
              {details.Title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6">
               <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-plasma-orange fill-current" />
                  <span className="text-xl font-black text-white">{details.imdbRating}</span>
                  <span className="text-white/30 text-sm font-medium">/ 10</span>
               </div>
               <div className="h-6 w-px bg-white/10" />
               <div className="flex items-center space-x-2 text-white/60">
                  <Calendar className="w-5 h-5" />
                  <span className="font-bold">{details.Year}</span>
               </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {details.Genre.split(', ').map((genre: string) => (
              <span 
                key={genre} 
                className="px-6 py-2 bg-white/5 border border-white/5 text-white/70 hover:text-white hover:border-plasma-orange/30 rounded-2xl text-xs font-bold transition-all cursor-default"
              >
                {genre}
              </span>
            ))}
          </div>

          <div className="space-y-4 p-8 bg-white/5 border border-white/5 rounded-[2rem] backdrop-blur-sm">
            <h3 className="text-xs font-black text-plasma-orange uppercase tracking-[0.2em]">Storyline</h3>
            <p className="text-white/70 leading-relaxed text-lg font-medium italic">
              "{details.Plot}"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] flex items-center">
                  <Users className="w-4 h-4 mr-2 text-plasma-orange" />
                  Cast
                </h3>
                <p className="text-white/80 font-bold leading-relaxed">{details.Actors}</p>
            </div>
            <div className="space-y-4">
                <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] flex items-center">
                   <Award className="w-4 h-4 mr-2 text-plasma-orange" />
                   Director
                </h3>
                <p className="text-white/80 font-bold">{details.Director}</p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-white/5">
             <div className="flex space-x-8">
                <div>
                   <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Writer</p>
                   <p className="text-sm font-bold text-white">{details.Writer.split(',')[0]}</p>
                </div>
                <div>
                   <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Production</p>
                   <p className="text-sm font-bold text-white">{details.Production || 'N/A'}</p>
                </div>
             </div>
             <button className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all group">
                <Share2 className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
