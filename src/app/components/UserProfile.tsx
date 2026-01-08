import { X, LogOut, Music, Disc3 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PurchasedAlbum {
  id: string;
  title: string;
  artist: string;
  image: string;
  purchaseDate: string;
}

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  userAvatar: string;
  favoriteGenres: string[];
  purchasedAlbums: PurchasedAlbum[];
  onLogout: () => void;
}

export function UserProfile({
  isOpen,
  onClose,
  userName,
  userAvatar,
  favoriteGenres,
  purchasedAlbums,
  onLogout,
}: UserProfileProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />

          {/* Profile Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-gradient-to-br from-gray-900 to-black border-l border-purple-500/20 z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
              <div>
                <h2 className="text-2xl font-bold text-white">Mi Perfil</h2>
                <p className="text-sm text-gray-400 mt-1">Cuenta personal</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-purple-500/10 rounded-lg transition-colors"
                aria-label="Close profile"
              >
                <X className="w-6 h-6 text-gray-300" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* User Avatar & Name */}
              <div className="flex flex-col items-center mb-8">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500/30 bg-gradient-to-br from-purple-600 to-purple-400">
                    <img
                      src={userAvatar}
                      alt={userName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-white">{userName}</h3>
                <p className="text-sm text-gray-400 mt-1">Miembro desde 2024</p>
              </div>

              {/* Favorite Genres */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Music className="w-5 h-5 text-[#eff6b2]" />
                  <h4 className="font-semibold text-white text-lg">Géneros Favoritos</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {favoriteGenres.length > 0 ? (
                    favoriteGenres.map((genre, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-[#eff6b2]"
                      >
                        {genre}
                      </motion.span>
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm">No has seleccionado géneros favoritos aún</p>
                  )}
                </div>
              </div>

              {/* Purchased Albums */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Disc3 className="w-5 h-5 text-[#eff6b2]" />
                  <h4 className="font-semibold text-white text-lg">Discos Comprados</h4>
                  <span className="ml-auto text-sm text-gray-400">
                    {purchasedAlbums.length} álbumes
                  </span>
                </div>
                
                {purchasedAlbums.length > 0 ? (
                  <div className="space-y-3">
                    {purchasedAlbums.map((album, index) => (
                      <motion.div
                        key={album.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-3 bg-gray-800/50 rounded-lg p-3 border border-purple-500/10 hover:border-purple-500/30 transition-colors"
                      >
                        <img
                          src={album.image}
                          alt={album.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-white text-sm truncate">
                            {album.title}
                          </h5>
                          <p className="text-xs text-[#eff6b2] truncate">{album.artist}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {album.purchaseDate}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-3">
                      <Disc3 className="w-8 h-8 text-gray-500" />
                    </div>
                    <p className="text-gray-400 text-sm">No has comprado álbumes aún</p>
                    <p className="text-gray-500 text-xs mt-1">Explora nuestro catálogo</p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer - Logout Button */}
            <div className="border-t border-purple-500/20 p-6 bg-black/50">
              <button
                onClick={onLogout}
                className="w-full py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white text-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <LogOut className="w-5 h-5" />
                Cerrar Sesión
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
