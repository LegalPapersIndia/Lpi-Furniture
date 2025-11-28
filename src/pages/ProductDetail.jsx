// src/pages/ProductDetail.jsx
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Truck, Shield, ChevronRight, Heart, Check, ArrowRight, Phone, MessageCircle } from 'lucide-react';

const allProducts = [
  { id: 1, name: "Nordic Oak Sofa", price: 249900, category: "sofas", material: "wood", new: true, bestseller: false, rating: 4.9, reviews: 89 },
  { id: 2, name: "Velvet Accent Chair", price: 89900, category: "chairs", material: "fabric", new: false, bestseller: true, rating: 4.8, reviews: 156 },
  { id: 3, name: "Marble Dining Table", price: 349900, category: "tables", material: "stone", new: true, bestseller: false, rating: 5.0, reviews: 203 },
  { id: 4, name: "Leather Recliner", price: 189900, category: "chairs", material: "leather", new: false, bestseller: true, rating: 4.7, reviews: 112 },
  { id: 5, name: "Minimal Walnut Bed", price: 219900, category: "beds", material: "wood", new: true, bestseller: false, rating: 4.9, reviews: 74 },
  { id: 6, name: "Industrial Bookshelf", price: 129900, category: "storage", material: "metal", new: false, bestseller: false, rating: 4.6, reviews: 98 },
  { id: 7, name: "Linen Sectional", price: 379900, category: "sofas", material: "fabric", new: false, bestseller: true, rating: 4.9, reviews: 167 },
  { id: 8, name: "Teak Coffee Table", price: 119900, category: "tables", material: "wood", new: true, bestseller: false, rating: 4.8, reviews: 134 },
  { id: 9, name: "Modern Oak Dresser", price: 179900, category: "storage", material: "wood", new: true, bestseller: false, rating: 4.9, reviews: 89 },
];

const productDetails = {
  1: {
    description: "Handcrafted from premium solid white oak using traditional mortise & tenon joinery — no screws, no nails. The Nordic Oak Sofa is built to be passed down through generations, just like family heirlooms.",
    features: ["100% Solid White Oak", "8-way hand-tied springs", "Down & feather blend cushions", "Natural oil finish", "Lifetime frame warranty", "Hand-carved details"],
    dimensions: "220 × 96 × 86 cm (W×D×H)",
    weight: "98 kg",
    images: [
      "https://images.unsplash.com/photo-1586023427174-81d3c1e2c20e?w=1600&q=90",
      "https://images.unsplash.com/photo-1618221195710-dd853673bb68?w=1600&q=90",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=90",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=90",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=90"
    ],
    variants: {
      fabric: ["Ivory Linen", "Charcoal Wool", "Forest Green", "Sand Beige", "Navy Blue"],
      legs: ["Natural Oak", "Walnut Stain", "Ebony Black"]
    },
    rating: 4.9,
    reviews: 89
  },
  // Add more when needed...
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === Number(id)) || allProducts[0];
  const details = productDetails[id] || productDetails[1];

  const [mainImage, setMainImage] = useState(details.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedFabric, setSelectedFabric] = useState(details.variants.fabric?.[0]);
  const [selectedLeg, setSelectedLeg] = useState(details.variants.legs?.[0]);

  const handleWhatsAppOrder = () => {
    const message = `Namaste LPI Furniture!\n\nI'm interested in:\n\n` +
      `Product: ${product.name}\n` +
      `Price: ₹${product.price.toLocaleString('en-IN')}\n` +
      (selectedFabric ? `Fabric: ${selectedFabric}\n` : '') +
      (selectedLeg ? `Leg Finish: ${selectedLeg}\n` : '') +
      `Quantity: ${quantity}\n\n` +
      `Total: ₹${(product.price * quantity).toLocaleString('en-IN')}\n\n` +
      `Please share availability, delivery timeline, and fabric swatches!`;

    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
    <div className='mt-10'>
    </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="grid grid-cols-5 gap-4">
              {details.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(img)}
                  className={`aspect-square rounded-2xl overflow-hidden border-4 transition-all duration-300 ${
                    mainImage === img 
                      ? 'border-amber-600 shadow-xl scale-105' 
                      : 'border-gray-200 hover:border-amber-400'
                  }`}
                >
                  <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-10">

            {/* Header */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={24} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-lg font600 text-gray-700">
                    {details.rating} ({details.reviews} reviews)
                  </span>
                </div>

                {product.new && (
                  <span className="bg-amber-100 text-amber-800 px-6 py-2 rounded-full font-bold text-sm tracking-wider">
                    NEW ARRIVAL
                  </span>
                )}
                {product.bestseller && (
                  <span className="bg-amber-600 text-white px-6 py-2 rounded-full font-bold text-sm tracking-wider">
                    BESTSELLER
                  </span>
                )}
              </div>

              <div className="text-5xl font-bold text-amber-700 mb-8">
                ₹{product.price.toLocaleString('en-IN')}
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                {details.description}
              </p>
            </div>

            {/* Variants */}
            {details.variants.fabric && (
              <div>
                <h3 className="text-xl font-bold mb-5 text-gray-900">Choose Fabric</h3>
                <div className="grid grid-cols-3 gap-4">
                  {details.variants.fabric.map((fabric) => (
                    <button
                      key={fabric}
                      onClick={() => setSelectedFabric(fabric)}
                      className={`px-6 py-4 rounded-2xl border-2 font-medium transition-all ${
                        selectedFabric === fabric
                          ? 'border-amber-600 bg-amber-600 text-white shadow-lg'
                          : 'border-gray-300 hover:border-amber-500 hover:shadow-md'
                      }`}
                    >
                      {fabric}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {details.variants.legs && (
              <div>
                <h3 className="text-xl font-bold mb-5 text-gray-900">Leg Finish</h3>
                <div className="flex flex-wrap gap-4">
                  {details.variants.legs.map((leg) => (
                    <button
                      key={leg}
                      onClick={() => setSelectedLeg(leg)}
                      className={`px-8 py-4 rounded-2xl border-2 font-medium transition-all ${
                        selectedLeg === leg
                          ? 'border-amber-600 bg-amber-600 text-white'
                          : 'border-gray-300 hover:border-amber-500'
                      }`}
                    >
                      {leg}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Actions */}
            <div className="flex flex-col sm:flex-row gap-6 items-stretch">
              <div className="flex items-center border-2 border-gray-300 rounded-2xl overflow-hidden">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-8 py-5 hover:bg-gray-100 text-xl">−</button>
                <span className="px-12 py-5 font-bold text-xl border-x-2 border-gray-300">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-8 py-5 hover:bg-gray-100 text-xl">+</button>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold text-xl py-6 rounded-2xl transition-all hover:shadow-2xl flex items-center justify-center gap-3"
              >
                <MessageCircle size={28} />
                Order Now on WhatsApp
              </button>

              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-6 rounded-2xl border-2 transition-all hover:shadow-xl ${
                  isWishlisted 
                    ? 'bg-amber-600 border-amber-600 text-white' 
                    : 'border-gray-300 hover:border-amber-600'
                }`}
              >
                <Heart size={32} fill={isWishlisted ? "white" : "none"} strokeWidth={2} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-8 py-10 border-t-2 border-dashed border-amber-200">
              <div className="text-center">
                <Truck size={48} className="mx-auto text-amber-700 mb-3" />
                <p className="font-bold text-gray-800">Free White-Glove Delivery</p>
                <p className="text-sm text-gray-600">Assembly Included</p>
              </div>
              <div className="text-center">
                <Shield size={48} className="mx-auto text-amber-700 mb-3" />
                <p className="font-bold text-gray-800">Lifetime Warranty</p>
                <p className="text-sm text-gray-600">On Frame & Joinery</p>
              </div>
              <div className="text-center">
                <Phone size={48} className="mx-auto text-amber-700 mb-3" />
                <p className="font-bold text-gray-800">30-Day Returns</p>
                <p className="text-sm text-gray-600">Hassle-Free</p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Crafted with Care</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {details.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-700">
                    <Check className="text-amber-600" size={24} />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="bg-amber-50 rounded-3xl p-8 space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Dimensions</span>
                <span className="text-gray-900">{details.dimensions}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Weight</span>
                <span className="text-gray-900">{details.weight || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Material</span>
                <span className="text-gray-900">100% Solid {product.material.charAt(0).toUpperCase() + product.material.slice(1)}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8">
              <p className="text-lg text-gray-600 mb-6">
                Need help choosing? Our design experts are just a call away
              </p>
              <a href="tel:+919876543210" className="inline-flex items-center gap-3 text-amber-700 font-bold text-xl hover:text-amber-800">
                <Phone size={28} />
                Call +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}