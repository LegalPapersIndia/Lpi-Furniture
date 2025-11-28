// src/components/FeaturedCategories.jsx
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: "Living Room",
    subtitle: "Where conversations begin",
    img: "https://images.unsplash.com/photo-1618221195710-dd853673bb68?w=1600&q=90",
    link: "/shop?category=living"
  },
  {
    name: "Bedroom",
    subtitle: "Rest in timeless comfort",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=90",
    link: "/shop?category=bedroom"
  },
  {
    name: "Dining",
    subtitle: "Gather around heirloom tables",
    img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1600&q=90",
    link: "/shop?category=dining"
  },
  {
    name: "Home Office",
    subtitle: "Work with purpose and style",
    img: "https://images.unsplash.com/photo-1605566698091-b35f4d72e0be?w=1600&q=90",
    link: "/shop?category=office"
  }
];

export function FeaturedCategories() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-amber-900 mb-4 tracking-tight">
            Shop by Room
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
            Handcrafted pieces designed to transform every space into something extraordinary
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <Link
              key={cat.name}
              to={cat.link}
              className="group relative block rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container with Parallax Effect */}
              <div className="relative h-96 md:h-full min-h-96 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-10000 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-all duration-700 group-hover:translate-y-0 translate-y-4">
                  <h3 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
                    {cat.name}
                  </h3>
                  <p className="text-amber-200 text-lg font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {cat.subtitle}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-3 text-amber-400 font-semibold text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    <span>Explore Collection</span>
                    <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform duration-300" />
                  </div>
                </div>

                {/* Subtle Border Glow on Hover */}
                <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-amber-500/30 transition-all duration-700 pointer-events-none" />
              </div>
            </Link>
          ))}
        </div>

        {/* Optional Bottom CTA */}
        <div className="text-center mt-20">
          <Link
            to="/shop"
            className="inline-flex items-center gap-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-12 py-5 rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
          >
            View All Collections
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}