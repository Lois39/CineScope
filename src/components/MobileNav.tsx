import { Home, Compass, Tv, Heart, Film } from 'lucide-react';

export const MobileNav = () => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Compass, label: 'Browse' },
    { icon: Tv, label: 'TV' },
    { icon: Film, label: 'Movies' },
    { icon: Heart, label: 'Saved' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 lg:hidden bg-core-black/80 backdrop-blur-xl border-t border-white/5 px-6 py-4 z-50 flex justify-between items-center">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className={`flex flex-col items-center space-y-1 transition-all duration-300 ${
            item.active ? 'text-plasma-orange' : 'text-white/40 hover:text-white'
          }`}
        >
          <item.icon className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
          {item.active && (
            <div className="w-1 h-1 bg-plasma-orange rounded-full" />
          )}
        </button>
      ))}
    </nav>
  );
};