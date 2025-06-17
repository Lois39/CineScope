
import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface SearchBarProps {
  onSearch: (movies: any[]) => void;
  setLoading: (loading: boolean) => void;
  onClearSelection: () => void;
}

export const SearchBar = ({ onSearch, setLoading, onClearSelection }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const { toast } = useToast();

  const searchMovies = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=aac3b378&s=${encodeURIComponent(searchQuery)}&type=movie`
      );
      const data = await response.json();

      if (data.Response === 'True') {
        onSearch(data.Search || []);
      } else {
        onSearch([]);
        toast({
          title: "No movies found",
          description: data.Error || "Try a different search term",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Search error:', error);
      toast({
        title: "Search failed",
        description: "Please try again later",
        variant: "destructive",
      });
      onSearch([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClearSelection();
    searchMovies(query);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch([]);
    onClearSelection();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 max-w-md">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10 bg-slate-800/80 border-pink-500/30 text-white placeholder-pink-300/70 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/50 backdrop-blur-sm"
        />
        {query && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-pink-400 hover:text-pink-300 hover:bg-pink-500/20"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
      <Button 
        type="submit" 
        className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-pink-500/25 transition-all duration-300 hover:shadow-pink-500/40 hover:scale-105"
        disabled={!query.trim()}
      >
        Search
      </Button>
    </form>
  );
};
