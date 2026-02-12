import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const slides = [
  { image: hero1, titleKey: 'hero.1.title', subtitleKey: 'hero.1.subtitle', ctaKey: 'hero.1.cta', link: '/category/women' },
  { image: hero2, titleKey: 'hero.2.title', subtitleKey: 'hero.2.subtitle', ctaKey: 'hero.2.cta', link: '/category/jeans' },
  { image: hero3, titleKey: 'hero.3.title', subtitleKey: 'hero.3.subtitle', ctaKey: 'hero.3.cta', link: '/category/sale' },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();

  const next = useCallback(() => setCurrent(i => (i + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent(i => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-muted">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img src={slides[current].image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/25" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-background mb-4 uppercase"
            >
              {t(slides[current].titleKey)}
            </motion.h1>
            <motion.p
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-background/90 mb-8 font-light"
            >
              {t(slides[current].subtitleKey)}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link
                to={slides[current].link}
                className="btn-ae bg-background text-foreground hover:bg-background/90"
              >
                {t(slides[current].ctaKey)}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background rounded-full transition-colors z-10" aria-label="Previous">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background rounded-full transition-colors z-10" aria-label="Next">
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-background w-6' : 'bg-background/50'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
