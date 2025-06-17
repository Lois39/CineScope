
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Star, Calendar, Clock, Users, Award, Globe, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MovieDetailsProps {
  movie: any;
  onBack: () => void;
}

export const MovieDetails = ({ movie, onBack }: MovieDetailsProps) => {
  const [details, setDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
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
      <div className="animate-pulse">
        <Button variant="ghost" className="text-pink-400 hover:text-pink-300 hover:bg-pink-500/10 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Results
        </Button>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="aspect-[2/3] bg-gradient-to-br from-slate-700 via-purple-800/30 to-pink-800/30 rounded-lg" />
          </div>
          <div className="md:col-span-2 space-y-4">
            <div className="h-8 bg-gradient-to-r from-slate-700 via-pink-700/30 to-slate-700 rounded" />
            <div className="h-4 bg-gradient-to-r from-slate-700 to-purple-700/30 rounded w-1/2" />
            <div className="space-y-2">
              <div className="h-4 bg-slate-700 rounded" />
              <div className="h-4 bg-slate-700 rounded" />
              <div className="h-4 bg-slate-700 rounded w-3/4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!details) {
    return (
      <div className="text-center py-8">
        <Button variant="ghost" onClick={onBack} className="text-pink-400 hover:text-pink-300 hover:bg-pink-500/10 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Results
        </Button>
        <p className="text-pink-300/70">Failed to load movie details</p>
      </div>
    );
  }

  const posterUrl = details.Poster !== 'N/A' 
    ? details.Poster 
    : 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop';

  return (
    <div className="animate-fade-in">
      <Button 
        variant="ghost" 
        onClick={onBack} 
        className="text-pink-400 hover:text-pink-300 hover:bg-pink-500/10 mb-8 transition-all duration-300 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
        Back to Results
      </Button>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Movie Poster */}
        <div className="md:col-span-1">
          <Card className="bg-slate-800/80 border-pink-500/20 overflow-hidden backdrop-blur-sm shadow-2xl shadow-pink-500/10 group hover:shadow-pink-500/20 transition-all duration-500">
            <div className="relative overflow-hidden">
              <img
                src={posterUrl}
                alt={details.Title}
                className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </Card>
        </div>

        {/* Movie Information */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-300 bg-clip-text text-transparent mb-3">
              {details.Title}
            </h1>
            <p className="text-2xl text-pink-300/80">{details.Year}</p>
          </div>

          {/* Ratings and Info */}
          <div className="flex flex-wrap gap-4">
            {details.imdbRating && details.imdbRating !== 'N/A' && (
              <div className="flex items-center space-x-2 bg-gradient-to-r from-slate-800/80 to-purple-900/30 px-4 py-3 rounded-xl border border-pink-500/20 backdrop-blur-sm">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-yellow-400 font-bold text-lg">{details.imdbRating}</span>
                <span className="text-pink-300/70">/10</span>
              </div>
            )}
            
            {details.Runtime && details.Runtime !== 'N/A' && (
              <div className="flex items-center space-x-2 bg-gradient-to-r from-slate-800/80 to-pink-900/30 px-4 py-3 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                <Clock className="w-5 h-5 text-pink-400" />
                <span className="text-pink-200">{details.Runtime}</span>
              </div>
            )}

            {details.Released && details.Released !== 'N/A' && (
              <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-800/80 to-slate-900/30 px-4 py-3 rounded-xl border border-pink-500/20 backdrop-blur-sm">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span className="text-purple-200">{details.Released}</span>
              </div>
            )}
          </div>

          {/* Genres */}
          {details.Genre && details.Genre !== 'N/A' && (
            <div>
              <h3 className="text-sm font-semibold text-pink-400 mb-3 tracking-wider">GENRES</h3>
              <div className="flex flex-wrap gap-2">
                {details.Genre.split(', ').map((genre: string) => (
                  <Badge 
                    key={genre} 
                    variant="outline" 
                    className="border-pink-400/50 text-pink-300 bg-pink-500/10 hover:bg-pink-500/20 transition-all duration-300 px-3 py-1"
                  >
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Plot */}
          {details.Plot && details.Plot !== 'N/A' && (
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 p-6 rounded-xl border border-pink-500/20 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-pink-400 mb-3 tracking-wider">PLOT</h3>
              <p className="text-pink-100/90 leading-relaxed text-lg">{details.Plot}</p>
            </div>
          )}

          {/* Cast and Crew */}
          <div className="grid md:grid-cols-2 gap-6">
            {details.Director && details.Director !== 'N/A' && (
              <div className="bg-gradient-to-br from-slate-800/50 to-pink-900/20 p-5 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-purple-400 mb-2 tracking-wider flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  DIRECTOR
                </h3>
                <p className="text-purple-200">{details.Director}</p>
              </div>
            )}

            {details.Writer && details.Writer !== 'N/A' && (
              <div className="bg-gradient-to-br from-purple-800/50 to-slate-900/20 p-5 rounded-xl border border-pink-500/20 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-pink-400 mb-2 tracking-wider">WRITER</h3>
                <p className="text-pink-200">{details.Writer}</p>
              </div>
            )}
          </div>

          {details.Actors && details.Actors !== 'N/A' && (
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 p-6 rounded-xl border border-pink-500/20 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-pink-400 mb-3 tracking-wider flex items-center">
                <Users className="w-4 h-4 mr-1" />
                CAST
              </h3>
              <p className="text-pink-100/90 leading-relaxed">{details.Actors}</p>
            </div>
          )}

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-pink-500/20">
            {details.Country && details.Country !== 'N/A' && (
              <div>
                <h3 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                  <Globe className="w-4 h-4 mr-1" />
                  COUNTRY
                </h3>
                <p className="text-purple-200">{details.Country}</p>
              </div>
            )}

            {details.Language && details.Language !== 'N/A' && (
              <div>
                <h3 className="text-sm font-semibold text-pink-400 mb-2">LANGUAGE</h3>
                <p className="text-pink-200">{details.Language}</p>
              </div>
            )}

            {details.Rated && details.Rated !== 'N/A' && (
              <div>
                <h3 className="text-sm font-semibold text-purple-400 mb-2">RATED</h3>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-200 border border-purple-400/30">
                  {details.Rated}
                </Badge>
              </div>
            )}

            {details.BoxOffice && details.BoxOffice !== 'N/A' && (
              <div>
                <h3 className="text-sm font-semibold text-pink-400 mb-2 flex items-center">
                  <DollarSign className="w-4 h-4 mr-1" />
                  BOX OFFICE
                </h3>
                <p className="text-pink-200 font-semibold">{details.BoxOffice}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
