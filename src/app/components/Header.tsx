import { Menu, ShoppingCart, User, Search } from 'lucide-react';
import { useState } from 'react';
import imgLogoPrincipal from "figma:asset/2bf557ab640857322a6181cca9c5c40ad1edc3c4.png";

interface HeaderProps {
  onMenuClick: () => void;
  cartItemCount: number;
  onCartClick: () => void;
  onUserClick: () => void;
}

export function Header({ onMenuClick, cartItemCount, onCartClick, onUserClick }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 hover:bg-purple-500/10 rounded-lg transition-colors"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6 text-[#eff6b2]" />
            </button>
            <a href="#home" className="flex items-center gap-2">
              <img src={imgLogoPrincipal} alt="Electrosound" className="h-10 w-auto" />
            </a>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#catalogo-premium" className="text-gray-300 hover:text-[#eff6b2] transition-colors font-medium">
              Discos
            </a>
            <a href="#artists" className="text-gray-300 hover:text-[#eff6b2] transition-colors font-medium">
              Artistas
            </a>
            <a href="#catalogo-premium" className="text-gray-300 hover:text-[#eff6b2] transition-colors font-medium">
              Géneros
            </a>
            <a href="#about" className="text-gray-300 hover:text-[#eff6b2] transition-colors font-medium">
              Nosotros
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-purple-500/10 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-300" />
            </button>
            <button
              className="p-2 hover:bg-purple-500/10 rounded-lg transition-colors hidden sm:flex"
              aria-label="User account"
              onClick={onUserClick}
            >
              <User className="w-5 h-5 text-gray-300" />
            </button>
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-purple-500/10 rounded-lg transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5 text-gray-300" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="pb-4">
            <input
              type="text"
              placeholder="Buscar música, artistas..."
              className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg px-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              autoFocus
            />
          </div>
        )}
      </div>
    </header>
  );
}