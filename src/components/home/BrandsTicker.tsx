import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface BrandsTickerProps {
  imagesGlob: Record<string, () => Promise<any>>;
}

const BrandsTicker = ({ imagesGlob }: BrandsTickerProps) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const paths = Object.values(imagesGlob);
      const loadedModules = await Promise.all(
        paths.map((importFn) => importFn())
      );
      setImages(loadedModules.map((module: any) => module.default));
    };

    loadImages();
  }, [imagesGlob]);

  if (images.length === 0) return null;

  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-center text-lg font-medium text-gray-500 uppercase tracking-widest">
          Our Top Brands
        </h3>
      </div>
      
      <div className="flex relative w-full overflow-hidden">
        <motion.div
          className="flex gap-12 md:gap-24 items-center px-4 min-w-full"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // Adjust speed here
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {/* Double the images to create seamless loop */}
          {[...images, ...images].map((src, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={src}
                alt="Brand logo"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsTicker;
