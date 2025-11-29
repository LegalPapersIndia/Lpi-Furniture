// src/pages/Shop.jsx - CLEAN LUXURY EDITION
import { useState, useEffect } from 'react';
import { Search, Filter, X, Heart, Star, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  { id: 1, name: "Nordic Teak Sofa", price: 249900, category: "sofas", material: "wood", new: true, rating: 4.9, reviews: 89, image: "https://timbercraft.in/cdn/shop/files/modern-teak-nordic-sofa-set-152718.jpg?v=1745254218" },
  { id: 2, name: "Velvet Emerald Chair", price: 89900, category: "chairs", material: "fabric", bestseller: true, rating: 4.8, reviews: 156, image: "https://beaumont-furniture.co.uk/16749-large_default/emerald-green-velvet-duchess-wingback-armchair.jpg" },
  { id: 3, name: "Imperial Marble Table", price: 349900, category: "tables", material: "stone", new: true, rating: 5.0, reviews: 203, image: "https://5.imimg.com/data5/SELLER/Default/2024/11/467426277/HG/XW/SP/184407383/designer-metal-dinig-table-4-500x500.jpg" },
  { id: 4, name: "Heritage Leather Recliner", price: 189900, category: "chairs", material: "leather", rating: 4.7, reviews: 112, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHG987k69o2uvcSzG8XEtKHLieU5gFyJcMw&s" },
  { id: 5, name: "Minimal Walnut Bed", price: 219900, category: "beds", material: "wood", new: true, rating: 4.9, reviews: 74, image: "https://image.made-in-china.com/365f3j00TkuWOSLKEdgH/Black-Walnut-Minimalist-Double-Bed.webp" },
  { id: 6, name: "Linen Cloud Sectional", price: 379900, category: "sofas", material: "fabric", bestseller: true, rating: 4.9, reviews: 167, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChqEfD-_PeBoYWKfqLixDGLktYwvHHVOC-Q&s" },
  { id: 7, name: "Sheesham Coffee Table", price: 119900, category: "tables", material: "wood", new: true, rating: 4.8, reviews: 134, image: "https://ebansal.com/cdn/shop/files/Sofia_Solid_Sheesham_Wood_Coffee_Table_Natural_Finish.jpg?v=1745832706" },
  { id: 8, name: "Royal Oak Dresser", price: 179900, category: "storage", material: "wood", rating: 4.9, reviews: 89, image: "https://www.royaloakindia.com/media/catalog/product/d/r/dr122202_12.jpg" },
];

export default function ShopPage() {
  const [filtered, setFiltered] = useState(products);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [material, setMaterial] = useState('all');
  const [sort, setSort] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [wishlist, setWishlist] = useState({});

  useEffect(() => {
    let result = [...products];

    if (search) result = result.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    if (category !== 'all') result = result.filter(p => p.category === category);
    if (material !== 'all') result = result.filter(p => p.material === material);

    if (sort === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sort === 'newest') result = result.filter(p => p.new);

    setFiltered(result);
  }, [search, category, material, sort]);

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const whatsapp = (p) => {
    const text = `Namaste! I'm interested in ${p.name} (₹${p.price.toLocaleString('en-IN')}). Please share details.`;
    window.open(`https://wa.me/917505266931?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      {/* Clean Hero */}
      <section className="relative h-screen bg-black">
        <img src="https://www.urbanwood.in/image/catalog/blogs/1260h-teak-wood-living-room-furniture-1051780.jpg" className="w-full h-full object-cover opacity-60" alt="LPI Showroom" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12 text-white text-center">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-8xl font-light tracking-tight"
          >
            The Collection
          </motion.h1>
          <p className="mt-6 text-xl md:text-2xl font-light text-gray-300">
            Timeless furniture, handcrafted in India
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <p className="text-gray-600 text-lg">
            {filtered.length} pieces available
          </p>

          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <select 
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-6 py-3 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-amber-600 transition"
            >
              <option value="featured">Featured</option>
              <option value="newest">New Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            <button
              onClick={() => setFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full"
            >
              <Filter size={18} /> Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Filters - Desktop */}
          <aside className="hidden lg:block space-y-10">
            <div>
              <h3 className="font-medium text-gray-900 mb-6">Category</h3>
              <div className="space-y-3">
                {['all', 'sofas', 'chairs', 'tables', 'beds', 'storage'].map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="cat" checked={category === cat} onChange={() => setCategory(cat)} className="w-5 h-5 text-5 text-amber-600" />
                    <span className="capitalize">{cat === 'all' ? 'All Furniture' : cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-6">Material</h3>
              <div className="space-y-3">
                {['all', 'wood', 'fabric', 'leather', 'stone'].map(mat => (
                  <label key={mat} className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="mat" checked={material === mat} onChange={() => setMaterial(mat)} className="w-5 h-5 text-amber-600" />
                    <span className="capitalize">{mat === 'all' ? 'All Materials' : mat}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence>
                {filtered.map((product, i) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    className="group cursor-pointer"
                  >
                    <Link to={`/product/${product.id}`}>
                      <div className="relative overflow-hidden rounded-2xl bg-gray-50 aspect-square">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Subtle Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          {product.new && (
                            <span className="px-4 py-1.5 bg-white/90 backdrop-blur text-xs font-medium rounded-full">NEW</span>
                          )}
                          {product.bestseller && (
                            <span className="px-4 py-1.5 bg-amber-600 text-white text-xs font-medium rounded-full">BESTSELLER</span>
                          )}
                        </div>

                        {/* Wishlist */}
                        <button
                          onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
                          className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Heart size={20} fill={wishlist[product.id] ? "#b45309" : "none"} className="text-amber-700" />
                        </button>
                      </div>

                      <div className="mt-6">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-amber-700 transition">
                          {product.name}
                        </h3>
                        <div className="mt-2 flex items-center gap-2">
                          <Star size={16} fill="#f59e0b" className="text-amber-500" />
                          <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                        </div>
                        <p className="mt-4 text-2xl font-light text-gray-900">
                          ₹{product.price.toLocaleString('en-IN')}
                        </p>

                        <button
                          onClick={(e) => { e.preventDefault(); whatsapp(product); }}
                          className="mt-6 w-full py-4 bg-black text-white rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-3 text-sm font-medium"
                        >
                          <MessageCircle size={18} />
                          Inquire on WhatsApp
                        </button>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {filtersOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFiltersOpen(false)}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              onClick={(e) => e.stopPropagation()}
              className="w-80 h-full bg-white p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-medium">Filters</h3>
                <button onClick={() => setFiltersOpen(false)}><X size={28} /></button>
              </div>
              {/* Same filters as desktop */}
              <div className="space-y-10">
                <div>
                  <h4 className="font-medium mb-4">Category</h4>
                  {['all', 'sofas', 'chairs', 'tables', 'beds', 'storage'].map(cat => (
                    <label key={cat} className="flex items-center gap-3 mb-3">
                      <input type="radio" name="mcat" checked={category === cat} onChange={() => setCategory(cat)} className="text-amber-600" />
                      <span className="capitalize">{cat === 'all' ? 'All Furniture' : cat}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <h4 className="font-medium mb-4">Material</h4>
                  {['all', 'wood', 'fabric', 'leather', 'stone'].map(mat => (
                    <label key={mat} className="flex items-center gap-3 mb-3">
                      <input type="radio" name="mmat" checked={material === mat} onChange={() => setMaterial(mat)} className="text-amber-600" />
                      <span className="capitalize">{mat === 'all' ? 'All Materials' : mat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}