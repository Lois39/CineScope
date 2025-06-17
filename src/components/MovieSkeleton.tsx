
import { Card } from '@/components/ui/card';

export const MovieSkeleton = () => {
  return (
    <Card className="bg-slate-800/80 border-pink-500/20 animate-pulse backdrop-blur-sm">
      <div className="aspect-[2/3] bg-gradient-to-br from-slate-700 via-purple-800/30 to-pink-800/30 rounded-t-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/10 to-transparent animate-pulse"></div>
      </div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gradient-to-r from-slate-700 via-purple-700/50 to-slate-700 rounded animate-pulse" />
        <div className="flex justify-between">
          <div className="h-6 bg-gradient-to-r from-pink-700/50 to-purple-700/50 rounded w-16 animate-pulse" />
          <div className="h-6 bg-gradient-to-r from-purple-700/50 to-pink-700/50 rounded w-20 animate-pulse" />
        </div>
      </div>
    </Card>
  );
};
