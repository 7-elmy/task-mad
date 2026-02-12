import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

export default function CartDrawer() {
  const { t, locale } = useLanguage();
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground z-[80]"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-[90] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-bold uppercase tracking-wider text-foreground">{t('cart.title')}</h2>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:opacity-60 transition-opacity">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <p className="text-lg mb-4">{t('cart.empty')}</p>
                  <button onClick={() => setIsOpen(false)} className="btn-ae-outline text-sm">
                    {t('cart.continueShopping')}
                  </button>
                </div>
              ) : (
                <AnimatePresence>
                  {items.map(item => (
                    <motion.div
                      key={`${item.product.id}-${item.size}-${item.color}`}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20, height: 0 }}
                      className="flex gap-4 py-4 border-b border-border"
                    >
                      <img src={item.product.image} alt="" className="w-20 h-24 object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-foreground line-clamp-1">
                          {locale === 'ar' ? item.product.nameAr : item.product.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {item.size} / {item.color}
                        </p>
                        <p className="text-sm font-bold text-foreground mt-1">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                            className="p-1 border border-border hover:bg-muted transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <motion.span
                            key={item.quantity}
                            initial={{ scale: 1.3 }}
                            animate={{ scale: 1 }}
                            className="text-sm font-bold w-6 text-center"
                          >
                            {item.quantity}
                          </motion.span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                            className="p-1 border border-border hover:bg-muted transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => removeItem(item.product.id, item.size, item.color)}
                            className="p-1 text-muted-foreground hover:text-sale transition-colors ml-auto"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-4 border-t border-border">
                <div className="flex justify-between mb-4">
                  <span className="text-sm font-medium text-foreground">{t('cart.subtotal')}</span>
                  <motion.span
                    key={subtotal}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-lg font-bold text-foreground"
                  >
                    ${subtotal.toFixed(2)}
                  </motion.span>
                </div>
                <button className="btn-ae w-full text-center">
                  {t('cart.checkout')}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
