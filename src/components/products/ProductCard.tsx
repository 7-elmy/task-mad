import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Product } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { locale, t } = useLanguage();
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addItem(product, product.sizes[0], product.colors[0].name);
    setTimeout(() => setIsAdding(false), 1200);
  };

  const name = locale === 'ar' ? product.nameAr : product.name;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden mb-3 bg-secondary">
          <motion.img
            src={product.image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          {product.originalPrice && (
            <span className="absolute top-3 left-3 bg-sale text-sale-foreground text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
              Sale
            </span>
          )}
          <motion.button
            onClick={handleQuickAdd}
            className="absolute bottom-3 right-3 bg-background text-foreground p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            whileTap={{ scale: 0.9 }}
            aria-label="Quick add"
          >
            {isAdding ? (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-xs font-bold block w-5 h-5 flex items-center justify-center"
              >
                ✓
              </motion.span>
            ) : (
              <ShoppingBag className="h-5 w-5" />
            )}
          </motion.button>
        </div>

        <div className="space-y-1">
          <h3 className="text-sm font-medium text-foreground group-hover:underline line-clamp-1">{name}</h3>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-bold ${product.originalPrice ? 'text-sale' : 'text-foreground'}`}>
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex gap-1 pt-1">
            {product.colors.map(c => (
              <span
                key={c.hex}
                className="w-3.5 h-3.5 rounded-full border border-border"
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
