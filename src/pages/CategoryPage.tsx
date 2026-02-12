import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

type SortKey = 'newest' | 'priceLow' | 'priceHigh';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, locale } = useLanguage();
  const [sort, setSort] = useState<SortKey>('newest');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const category = categories.find(c => c.slug === slug);
  const categoryName = category
    ? (locale === 'ar' ? category.nameAr : category.name)
    : slug?.toUpperCase() || '';

  const filteredProducts = useMemo(() => {
    let result = slug === 'sale'
      ? products.filter(p => p.originalPrice)
      : products.filter(p => p.category === slug || slug === 'jeans');

    if (selectedSizes.length > 0) {
      result = result.filter(p => p.sizes.some(s => selectedSizes.includes(s)));
    }

    switch (sort) {
      case 'priceLow': return [...result].sort((a, b) => a.price - b.price);
      case 'priceHigh': return [...result].sort((a, b) => b.price - a.price);
      default: return result;
    }
  }, [slug, sort, selectedSizes]);

  const allSizes = [...new Set(products.flatMap(p => p.sizes))].slice(0, 8);

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="bg-secondary py-8 px-4">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-3 transition-colors">
            <ChevronLeft className="h-4 w-4" />
            {t('common.back')}
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground"
          >
            {categoryName}
          </motion.h1>
          <p className="text-sm text-muted-foreground mt-1">
            {filteredProducts.length} {t('common.results')}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            {/* Sort */}
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">{t('filter.sort')}</h3>
              <select
                value={sort}
                onChange={e => setSort(e.target.value as SortKey)}
                className="w-full border border-border bg-background text-foreground text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-ring"
              >
                <option value="newest">{t('filter.sort.newest')}</option>
                <option value="priceLow">{t('filter.sort.priceLow')}</option>
                <option value="priceHigh">{t('filter.sort.priceHigh')}</option>
              </select>
            </div>

            {/* Size Filter */}
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">{t('filter.size')}</h3>
              <div className="flex flex-wrap gap-2">
                {allSizes.map(size => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`px-3 py-1.5 text-xs font-medium border transition-colors ${
                      selectedSizes.includes(size)
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border text-foreground hover:bg-muted'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {selectedSizes.length > 0 && (
                <button
                  onClick={() => setSelectedSizes([])}
                  className="text-xs text-muted-foreground hover:text-foreground mt-2 underline"
                >
                  {t('filter.clear')}
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-lg">No products found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
