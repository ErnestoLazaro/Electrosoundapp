import { X, Home, Disc, Users, Music, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { icon: Home, label: 'Inicio', href: '#home' },
    { icon: Disc, label: 'Discos', href: '#albums' },
    { icon: Users, label: 'Artistas', href: '#artists' },
    { icon: Music, label: 'Géneros', href: '#genres' },
    { icon: Info, label: 'Nosotros', href: '#about' },
  ];

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

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 bottom-0 w-80 bg-gradient-to-br from-gray-900 to-black border-r border-purple-500/20 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
              <a href="#home" onClick={onClose}>
                <h2 className="text-2xl font-bold text-[#eff6b2] hover:text-[#eff6b2]/80 transition-colors cursor-pointer">ELECTROSOUND</h2>
              </a>
              <button
                onClick={onClose}
                className="p-2 hover:bg-purple-500/10 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-gray-300" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6">
              <ul className="space-y-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-purple-500/10 transition-colors group"
                      >
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#eff6b2] transition-colors" />
                        <span className="text-gray-300 group-hover:text-white font-medium transition-colors">
                          {item.label}
                        </span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-purple-500/20">
              <p className="text-sm text-gray-500 text-center">
                © 2026 Electrosound
              </p>
              <div className="flex items-center justify-center gap-4 mt-3">
                <a href="#" className="text-xs text-gray-500 hover:text-gray-400">Privacidad</a>
                <span className="text-gray-700">•</span>
                <a href="#" className="text-xs text-gray-500 hover:text-gray-400">Términos</a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}