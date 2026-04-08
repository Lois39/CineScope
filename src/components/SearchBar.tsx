import { useState } from 'react';
import { Search, X } from 'lucide-react';
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
    <form onSubmit={handleSubmit} className="relative group w-full max-w-xl">
      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-white/30 group-focus-within:text-plasma-orange transition-colors" />
      </div>
      <input
        type="text"
        placeholder="Search for movies, actors, directors..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="block w-full pl-12 pr-12 py-4 bg-white/5 border border-white/5 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-plasma-orange/50 focus:bg-white/10 focus:border-plasma-orange/30 transition-all text-sm font-medium backdrop-blur-md"
      />
      {query && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute inset-y-0 right-16 px-4 flex items-center text-white/30 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      )}
      <button
        type="submit"
        disabled={!query.trim()}
        className="absolute right-2 top-2 bottom-2 px-6 bg-plasma-orange hover:bg-plasma-orange/90 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold text-xs transition-all tracking-wider"
      >
        SEARCH
      </button>
    </form>
  );
};
