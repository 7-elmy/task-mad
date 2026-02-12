import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories } from '@/data/products';

export default function FeaturedCategories() {
  const { t, locale } = useLanguage();

  let categoriess= [
    {title: "women's new arrival", image: "" , id:"1"},
    {title: "women's bottom ", image: "" , id:"2"},
    {title: "men's Top ", image: "" , id:"3"},
    {title: "men's new arrivals ", image: "" , id:"3"},
    {title: "men's Bottoms ", image: "" , id:"3"},
    {title: "women's top  ", image: "" , id:"3"},
    {title: "Men's AE 24/7 ", image: "" , id:"3"},
    {title: "Accessories", image: "" , id:"3"},
    {title: "New Arrivals", image: "" , id:"4"},
  
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* <h2 className="section-title text-center mb-10">{t('section.categories')}</h2> */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link to={`/category/${cat.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden mb-3">
                  <img
                    src={cat.image}
                    alt={locale === 'ar' ? cat.nameAr : cat.name}
                    className="w-full  h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-center text-foreground">
                  {locale === 'ar' ? cat.nameAr : cat.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
