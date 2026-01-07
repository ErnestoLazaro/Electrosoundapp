import { ShoppingCart, Play } from 'lucide-react';
import { motion } from 'motion/react';

interface AlbumCardProps {
  title: string;
  artist: string;
  description: string;
  price: number;
  image: string;
  onBuyClick: () => void;
  onPlayClick?: () => void;
}

export function AlbumCard({
  title,
  artist,
  description,
  price,
  image,
  onBuyClick,
  onPlayClick,
}: AlbumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play Button - appears on hover */}
        {onPlayClick && (
          <button
            onClick={onPlayClick}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-purple-600 hover:scale-110 shadow-lg"
          >
            <Play className="w-7 h-7 text-white ml-1" fill="white" />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
          {title}
        </h3>
        <p className="text-[#eff6b2] text-sm mb-2 font-medium">
          {artist}
        </p>
        <p className="text-gray-400 text-xs mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">
              ${price}
            </span>
            <span className="text-xs text-gray-500">USD</span>
          </div>
          
          <button
            onClick={onBuyClick}
            className="group/btn relative px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg font-bold text-white text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              COMPRAR
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Neon glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-2xl" />
      </div>
    </motion.div>
  );
}
