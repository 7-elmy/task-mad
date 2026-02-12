export interface Product {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  description: string;
  descriptionAr: string;
  trending?: boolean;
}

export interface Category {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  image: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Women', nameAr: 'نساء', slug: 'women', image: '/images/cat-women.jpg' },
  // { id: '1', name: 'Women', nameAr: 'نساء', slug: 'women', image: '/images/cat-women.jpg' },
  { id: '2', name: 'Men', nameAr: 'رجال', slug: 'men', image: '/images/cat-men.jpg' },
  { id: '3', name: 'Jeans', nameAr: 'جينز', slug: 'jeans', image: '/images/product-jeans.jpg' },
  { id: '4', name: 'Accessories', nameAr: 'إكسسوارات', slug: 'accessories', image: '/images/product-sneakers.jpg' },
  { id: '5', name: 'Activewear', nameAr: 'ملابس رياضية', slug: 'activewear', image: '/images/cat-women.jpg' },
  { id: '6', name: 'Shoes', nameAr: 'أحذية', slug: 'shoes', image: '/images/product-sneakers.jpg' },
];

export const products: Product[] = [
  {
    id: '1', name: 'AE Stretch Mom Jean', nameAr: 'جينز أمي قابل للتمدد',
    price: 49.95, originalPrice: 59.95, image: '/images/product-jeans.jpg',
    category: 'women', colors: [{ name: 'Medium Wash', hex: '#6B8CC7' }, { name: 'Dark Wash', hex: '#2C3E6B' }, { name: 'Light Wash', hex: '#A8C4E0' }],
    sizes: ['00', '0', '2', '4', '6', '8', '10', '12'],
    description: 'Our signature Mom Jean with all-day stretch comfort. High-rise fit with a relaxed leg.',
    descriptionAr: 'جينز أمي المميز لدينا مع راحة التمدد طوال اليوم. قصة عالية الخصر مع ساق مريحة.',
    trending: true,
  },
  {
    id: '2', name: 'AE Slim Straight Jean', nameAr: 'جينز سليم مستقيم',
    price: 54.95, image: '/images/product-jeans.jpg',
    category: 'men', colors: [{ name: 'Indigo', hex: '#3F51B5' }, { name: 'Black', hex: '#212121' }],
    sizes: ['28', '30', '32', '34', '36', '38'],
    description: 'Classic slim straight fit with medium stretch for everyday comfort.',
    descriptionAr: 'قصة كلاسيكية سليم مستقيمة مع تمدد متوسط للراحة اليومية.',
    trending: true,
  },
  {
    id: '3', name: 'Oversized Graphic Tee', nameAr: 'تيشيرت بطبعة أوفرسايز',
    price: 29.95, originalPrice: 34.95, image: '/images/product-tee.jpg',
    category: 'women', colors: [{ name: 'White', hex: '#FAFAFA' }, { name: 'Black', hex: '#212121' }, { name: 'Sage', hex: '#9CAF88' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Relaxed oversized fit with vintage-inspired graphic. 100% cotton.',
    descriptionAr: 'قصة أوفرسايز مريحة بطبعة مستوحاة من الفينتج. قطن 100%.',
    trending: true,
  },
  {
    id: '4', name: 'Heritage Fleece Hoodie', nameAr: 'هودي فليس هيريتج',
    price: 44.95, image: '/images/product-hoodie.jpg',
    category: 'men', colors: [{ name: 'Grey', hex: '#9E9E9E' }, { name: 'Navy', hex: '#1B2A4A' }, { name: 'Forest', hex: '#2E7D32' }],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Super soft heritage fleece hoodie with kangaroo pocket and adjustable drawstring.',
    descriptionAr: 'هودي فليس هيريتج فائق النعومة مع جيب كنغر ورباط قابل للتعديل.',
    trending: true,
  },
  {
    id: '5', name: 'High-Rise Flare Jean', nameAr: 'جينز عالي الخصر واسع',
    price: 59.95, image: '/images/product-jeans.jpg',
    category: 'women', colors: [{ name: 'Medium Wash', hex: '#6B8CC7' }, { name: 'Dark Wash', hex: '#2C3E6B' }],
    sizes: ['00', '0', '2', '4', '6', '8', '10'],
    description: 'Retro-inspired high-rise flare with super stretch denim.',
    descriptionAr: 'جينز واسع عالي الخصر بأسلوب ريترو مع دنيم فائق التمدد.',
  },
  {
    id: '6', name: 'Classic Crew Neck Tee', nameAr: 'تيشيرت كلاسيكي برقبة دائرية',
    price: 19.95, originalPrice: 24.95, image: '/images/product-tee.jpg',
    category: 'men', colors: [{ name: 'White', hex: '#FAFAFA' }, { name: 'Black', hex: '#212121' }, { name: 'Navy', hex: '#1B2A4A' }, { name: 'Red', hex: '#E53935' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Everyday essential crew neck tee. Soft cotton jersey.',
    descriptionAr: 'تيشيرت أساسي يومي برقبة دائرية. جيرسي قطن ناعم.',
    trending: true,
  },
  {
    id: '7', name: 'Canvas Low-Top Sneaker', nameAr: 'حذاء رياضي كانفاس',
    price: 39.95, image: '/images/product-sneakers.jpg',
    category: 'shoes', colors: [{ name: 'White', hex: '#FAFAFA' }, { name: 'Black', hex: '#212121' }],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Classic canvas sneaker with cushioned insole and rubber outsole.',
    descriptionAr: 'حذاء رياضي كانفاس كلاسيكي مع نعل داخلي مبطن ونعل خارجي مطاطي.',
    trending: true,
  },
  {
    id: '8', name: 'Cropped Polo Top', nameAr: 'بولو قصير',
    price: 34.95, image: '/images/product-tee.jpg',
    category: 'women', colors: [{ name: 'White', hex: '#FAFAFA' }, { name: 'Pink', hex: '#F48FB1' }],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Cropped polo with ribbed collar and button placket.',
    descriptionAr: 'بولو قصير بياقة مضلعة وأزرار أمامية.',
  },
  {
    id: '9', name: 'Athletic Jogger', nameAr: 'بنطلون رياضي',
    price: 44.95, originalPrice: 54.95, image: '/images/product-hoodie.jpg',
    category: 'men', colors: [{ name: 'Grey', hex: '#9E9E9E' }, { name: 'Black', hex: '#212121' }],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Comfortable athletic jogger with tapered leg and elastic waistband.',
    descriptionAr: 'بنطلون رياضي مريح بساق مدببة وخصر مطاطي.',
  },
  {
    id: '10', name: 'Relaxed Flannel Shirt', nameAr: 'قميص فلانل فضفاض',
    price: 44.95, image: '/images/product-hoodie.jpg',
    category: 'men', colors: [{ name: 'Red Plaid', hex: '#C62828' }, { name: 'Green Plaid', hex: '#2E7D32' }],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Oversized flannel shirt in classic plaid. Soft brushed cotton.',
    descriptionAr: 'قميص فلانل فضفاض بنقشة كاروه كلاسيكية. قطن ناعم.',
  },
  {
    id: '11', name: 'High-Rise Bike Short', nameAr: 'شورت رياضي عالي الخصر',
    price: 24.95, image: '/images/cat-women.jpg',
    category: 'women', colors: [{ name: 'Black', hex: '#212121' }, { name: 'Navy', hex: '#1B2A4A' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'High-rise bike short in soft, stretchy fabric. Perfect for workouts.',
    descriptionAr: 'شورت رياضي عالي الخصر من قماش ناعم ومطاط. مثالي للتمارين.',
    trending: true,
  },
  {
    id: '12', name: 'Baggy Wide-Leg Jean', nameAr: 'جينز واسع فضفاض',
    price: 64.95, image: '/images/product-jeans.jpg',
    category: 'jeans', colors: [{ name: 'Light Wash', hex: '#A8C4E0' }, { name: 'Medium Wash', hex: '#6B8CC7' }],
    sizes: ['24', '25', '26', '27', '28', '29', '30', '31', '32'],
    description: 'Ultra-baggy wide-leg jean with a low rise. The must-have silhouette.',
    descriptionAr: 'جينز واسع فضفاض بخصر منخفض. القصة الأكثر رواجاً.',
    trending: true,
  },
];
