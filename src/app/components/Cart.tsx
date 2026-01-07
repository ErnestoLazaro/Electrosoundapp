import { X, Trash2, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CartItem {
  id: string;
  title: string;
  artist: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

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

          {/* Cart Panel */}
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
                <h2 className="text-2xl font-bold text-white">Carrito</h2>
                <p className="text-sm text-gray-400 mt-1">{items.length} artículos</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-purple-500/10 rounded-lg transition-colors"
                aria-label="Close cart"
              >
                <X className="w-6 h-6 text-gray-300" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-24 h-24 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🛒
                    </motion.div>
                  </div>
                  <p className="text-gray-400 text-lg">Tu carrito está vacío</p>
                  <p className="text-gray-500 text-sm mt-2">Agrega algunos álbumes para comenzar</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-4 bg-gray-800/50 rounded-lg p-4 border border-purple-500/10"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white truncate">{item.title}</h3>
                        <p className="text-sm text-[#eff6b2] truncate">{item.artist}</p>
                        <p className="text-lg font-bold text-white mt-1">${item.price}</p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1 hover:bg-red-500/10 rounded transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </button>
                        <div className="flex items-center gap-2 bg-gray-900/50 rounded-lg p-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-purple-500/10 rounded transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3 text-gray-400" />
                          </button>
                          <span className="text-white font-medium w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-purple-500/10 rounded transition-colors"
                          >
                            <Plus className="w-3 h-3 text-gray-400" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-purple-500/20 p-6 bg-black/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-bold text-white">Total</span>
                  <span className="text-2xl font-bold text-[#eff6b2]">${total.toFixed(2)}</span>
                </div>
                <button
                  onClick={onCheckout}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg font-bold text-white text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 active:scale-95"
                >
                  Proceder al Pago
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
