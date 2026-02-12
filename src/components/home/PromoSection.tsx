import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface PromoSectionProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  topImage: string;
  heroImage: string;
  imagePosition?: 'left' | 'right';
  overlayPosition?: 'left' | 'right';
}

const PromoSection = ({
  badge,
  title,
  subtitle,
  description,
  buttonText,
  topImage,
  heroImage,
  imagePosition = 'right',
  overlayPosition = 'left',
}: PromoSectionProps) => {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200">
      {/* Top Decorative Image */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <img
          src={topImage}
          alt="Decorative badge"
          className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg"
        />
      </motion.div>

      <div className="container mx-auto px-4 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: overlayPosition === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`relative z-20 ${
              overlayPosition === 'right' ? 'lg:order-2' : ''
            }`}
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center justify-center mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                <div className="relative px-6 py-2 bg-white border-2 border-primary rounded-full">
                  <span className="text-sm font-bold text-primary tracking-widest uppercase">
                    {badge}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-4 leading-tight uppercase tracking-tight"
              style={{
                fontFamily: 'Impact, "Arial Black", sans-serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              {title}
            </motion.h2>

            {/* Subtitle */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl md:text-3xl font-semibold text-foreground mb-4"
            >
              {subtitle}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base md:text-lg text-muted-foreground mb-8 max-w-md"
            >
              {description}
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                {buttonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`relative ${
              imagePosition === 'left' ? 'lg:order-1' : ''
            }`}
          >
            <div className="relative w-full h-[400px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent z-10"></div>
              
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={heroImage}
                alt={title}
                className="w-full h-full object-cover"
              />
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-tr-full"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default PromoSection;
