import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface DynamicImageGridProps {
  title: string;
  imagesGlob: Record<string, () => Promise<any>>;
  limit?: number;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}

const DynamicImageGrid = ({ 
  title, 
  imagesGlob, 
  limit = 8,
  columns = { mobile: 2, tablet: 3, desktop: 4 }
}: DynamicImageGridProps) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const paths = Object.values(imagesGlob);
      const loadedModules = await Promise.all(
        paths.slice(0, limit).map((importFn) => importFn())
      );
      setImages(loadedModules.map((module: any) => module.default));
    };

    loadImages();
  }, [imagesGlob, limit]);

  if (images.length === 0) return null;

  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wide text-foreground"
        >
          {title}
        </motion.h2>

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6`}>
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl shadow-md cursor-pointer bg-white"
            >
              <img
                src={src}
                alt={`${title} item ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
                <button className="w-full py-2 bg-white/90 backdrop-blur-sm text-black text-sm font-semibold rounded shadow-sm hover:bg-white transition-colors">
                  Quick View
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicImageGrid;
