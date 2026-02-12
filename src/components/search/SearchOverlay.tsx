import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: Props) {
  const { t, locale } = useLanguage();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const results = query.length > 1
    ? products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.nameAr.includes(query) ||
        p.category.includes(query.toLowerCase())
      ).slice(0, 6)
    : [];

  const suggestions = ['Jeans', 'Hoodie', 'Sneakers', 'T-shirt'];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-background"
        >
          <div className="container mx-auto px-4 pt-6">
            <div className="flex items-center gap-4 mb-8">
              <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={t('search.placeholder')}
                className="flex-1 text-xl font-light bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
              />
              <button onClick={onClose} className="p-2 hover:opacity-60 transition-opacity">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="border-t border-border pt-6">
              {query.length > 1 ? (
                results.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {results.map(p => (
                      <Link
                        key={p.id}
                        to={`/product/${p.id}`}
                        onClick={onClose}
                        className="flex gap-3 items-center p-3 hover:bg-muted rounded transition-colors"
                      >
                        <img src={p.image} alt="" className="w-16 h-16 object-cover" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{locale === 'ar' ? p.nameAr : p.name}</p>
                          <p className="text-sm text-muted-foreground">${p.price.toFixed(2)}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-12">{t('search.noResults')}</p>
                )
              ) : (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                    {t('search.suggestions')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map(s => (
                      <button
                        key={s}
                        onClick={() => setQuery(s)}
                        className="px-4 py-2 border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
