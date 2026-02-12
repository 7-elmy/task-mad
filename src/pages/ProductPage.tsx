import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Minus, Plus, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { t, locale } = useLanguage();
  const { addItem } = useCart();

  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground text-lg">Product not found</p>
      </div>
    );
  }

  const name = locale === 'ar' ? product.nameAr : product.name;
  const description = locale === 'ar' ? product.descriptionAr : product.description;
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;
    addItem(product, selectedSize, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ChevronLeft className="h-4 w-4" />
          {t('common.back')}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="aspect-[3/4] bg-secondary overflow-hidden"
          >
            <img src={product.image} alt={name} className="w-full h-full object-cover" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="py-4"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{name}</h1>
            <div className="flex items-center gap-3 mb-6">
              <span className={`text-xl font-bold ${product.originalPrice ? 'text-sale' : 'text-foreground'}`}>
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Color Selector */}
            <div className="mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">
                {t('product.color')}: <span className="font-normal normal-case text-muted-foreground">{selectedColor}</span>
              </h3>
              <div className="flex gap-2">
                {product.colors.map(c => (
                  <button
                    key={c.hex}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === c.name ? 'border-foreground scale-110' : 'border-border'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">{t('product.size')}</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[3rem] px-3 py-2 text-sm font-medium border transition-colors ${
                      selectedSize === size
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border text-foreground hover:bg-muted'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">{t('product.quantity')}</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-2 border border-border hover:bg-muted transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-lg font-bold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-2 border border-border hover:bg-muted transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <motion.button
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor}
              className={`w-full py-4 text-sm font-bold uppercase tracking-widest transition-all ${
                added
                  ? 'bg-green-600 text-background'
                  : !selectedSize || !selectedColor
                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                    : 'btn-ae'
              }`}
              whileTap={{ scale: 0.98 }}
            >
              {added ? (
                <span className="flex items-center justify-center gap-2">
                  <Check className="h-4 w-4" /> {t('product.added')}
                </span>
              ) : (
                t('product.addToCart')
              )}
            </motion.button>

            {/* Description */}
            <div className="mt-8 border-t border-border pt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">{t('product.details')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 mb-12">
            <h2 className="section-title mb-8">{t('product.related')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
