import { Home, Compass, Tv, Heart, Clock, Settings, LogOut, Film } from 'lucide-react';

export const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Compass, label: 'Browse' },
    { icon: Tv, label: 'TV Shows' },
    { icon: Film, label: 'Movies' },
    { icon: Heart, label: 'Watchlist' },
    { icon: Clock, label: 'Recent' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center py-8 bg-core-black border-r border-white/5 z-50">
      <div className="mb-12">
        <div className="w-10 h-10 bg-plasma-orange rounded-xl flex items-center justify-center shadow-plasma">
          <Film className="w-6 h-6 text-white" />
        </div>
      </div>

      <nav className="flex-1 flex flex-col space-y-8">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`p-3 rounded-xl transition-all duration-300 group relative ${
              item.active 
                ? 'text-plasma-orange bg-plasma-orange/10' 
                : 'text-muted-foreground hover:text-white hover:bg-white/5'
            }`}
          >
            <item.icon className="w-6 h-6" />
            {item.active && (
              <div className="absolute left-0 top-1/4 w-1 h-1/2 bg-plasma-orange rounded-r-full" />
            )}
            <span className="absolute left-20 bg-core-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 ml-2">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      <div className="mt-auto flex flex-col space-y-8">
        <button className="p-3 text-muted-foreground hover:text-white transition-colors">
          <Settings className="w-6 h-6" />
        </button>
        <button className="p-3 text-muted-foreground hover:text-plasma-orange transition-colors">
          <LogOut className="w-6 h-6" />
        </button>
      </div>
    </aside>
  );
};
