// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-950 to-black text-white overflow-hidden">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-1">
              <h2 className="text-4xl font-bold tracking-tight">
                <span className="text-amber-500">LPI</span>
                <span className="text-amber-300">Furniture</span>
              </h2>
            </Link>
            <p className="text-amber-200 leading-relaxed max-w-xs">
              Crafting heirloom-quality solid wood furniture with passion and precision since 1985.
            </p>
            
            {/* Trust Badges */}
            <div className="flex gap-4 pt-4">
              <div className="text-xs bg-amber-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-700">
                100% Solid Wood
              </div>
              <div className="text-xs bg-amber-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-700">
                Lifetime Warranty
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">Explore</h3>
            <ul className="space-y-4">
              {[
                { name: "Shop All", path: "/shop" },
                { name: "New Arrivals", path: "/shop?filter=new" },
                { name: "Best Sellers", path: "/shop?filter=bestseller" },
                { name: "About Us", path: "/about" },
                { name: "Our Journal", path: "/blog" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-amber-200 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">Support</h3>
            <ul className="space-y-4 text-amber-200">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-amber-500" />
                <div>
                  <p className="font-medium"> <a href="tel:+917505266931">+91 75052 66931</a></p>
                  <p className="text-sm text-amber-300">Mon–Sat, 10AM–7PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-amber-500" />
                <a href="mailto:hello@lpifurniture.com" className="hover:text-white transition">
                  hello@lpifurniture.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-amber-500" />
                <p className="text-sm">F-2 , Sector 8 , Noida <br />Uttar Pradesh, India</p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">Stay Inspired</h3>
            <p className="text-amber-200 mb-6">
              Get exclusive offers, new collection alerts, and craftsmanship stories.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-amber-700 placeholder-amber-300 focus:outline-none focus:border-amber-400 transition-all"
              />
              <button className="px-8 py-4 bg-amber-600 hover:bg-amber-500 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/50 flex items-center justify-center gap-2">
                <Send size={18} />
                Subscribe
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-12 h-12 bg-amber-900/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-600 transition-all hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-amber-900/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-600 transition-all hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-amber-900/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-600 transition-all hover:scale-110">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/40 py-8 border-t border-amber-900/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-amber-300">
          <p>© 2025 <a href="https://www.legalpapersindia.com/"></a> LPI Furniture. Handcrafted with love in India.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}