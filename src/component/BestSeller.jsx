// src/components/ProductGrid.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight , Star} from 'lucide-react';

const products = [
  { id: 1, name: "Nordic Oak Sofa", price: 249900, new: true, rating: 4.9, reviews: 89 },
  { id: 2, name: "Velvet Accent Chair", price: 89900, bestseller: true, rating: 4.8, reviews: 156 },
  { id: 3, name: "Marble Dining Table", price: 349900, rating: 5.0, reviews: 203 },
  { id: 4, name: "Leather Recliner", price: 189900, rating: 4.7, reviews: 112 },
  { id: 5, name: "Minimal Walnut Bed", price: 219900, new: true, rating: 4.9, reviews: 74 },
  { id: 6, name: "Teak Coffee Table", price: 119900, rating: 4.8, reviews: 98 },
];

export function ProductGrid({ title = "Our Signature Collection" }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [wishlisted, setWishlisted] = useState({});

  const toggleWishlist = (id) => {
    setWishlisted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-amber-900 mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Handcrafted masterpieces built to become tomorrow’s heirlooms
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group relative block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={`https://images.unsplash.com/photo-1618221195710-dd853673bb68?w=1200&q=90&ixlib=rb-4.0.3&auto=format&fit=crop&crop=center`}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Badges */}
                <div className="absolute top-6 left-6 space-y-3">
                  {product.new && (
                    <span className="block bg-amber-100 text-amber-800 px-5 py-2 rounded-full text-sm font-bold tracking-wider shadow-md">
                      NEW ARRIVAL
                    </span>
                  )}
                  {product.bestseller && (
                    <span className="block bg-amber-600 text-white px-5 py-2 rounded-full text-sm font-bold tracking-wider shadow-md">
                      BESTSELLER
                    </span>
                  )}
                </div>

                {/* Wishlist Heart */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist(product.id);
                  }}
                  className="absolute top-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Heart
                    size={22}
                    className={`transition-all duration-300 ${
                      wishlisted[product.id]
                        ? 'fill-amber-600 text-amber-600'
                        : 'text-gray-600 hover:text-amber-600'
                    }`}
                  />
                </button>

                {/* Rating Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                  <span className="text-amber-600 font-bold">{product.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < Math.floor(product.rating) ? "#f59e0b" : "none"}
                        className="text-amber-500"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">({product.reviews})</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-3xl font-bold text-amber-700 mb-6">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>

                {/* CTA */}
                <div className={`flex items-center justify-center gap-3 text-amber-700 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100`}>
                  <span>View Details</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Subtle hover border glow */}
              <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-amber-500/20 transition-all duration-700 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Link
            to="/shop"
            className="inline-flex items-center gap-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-12 py-5 rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
          >
            Explore All Furniture
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}