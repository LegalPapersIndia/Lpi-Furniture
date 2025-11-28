// src/component/Navbar.jsx
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Add subtle shadow + background blur when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-amber-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Logo with animated entrance */}
          <Link 
            to="/" 
            className="group flex items-center space-x-1 text-4xl font300 font-bold tracking-tight"
          >
            <span className="text-amber-700 transform transition-all duration-500 group-hover:scale-110">
              LPI
            </span>
            <span className="text-amber-600 transform transition-all duration-500 delay-75 group-hover:scale-110">
              Furniture
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link, index) => (
              <li key={link.name} className="relative">
                <Link
                  to={link.href}
                  className={`relative text-lg font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? 'text-amber-700'
                      : 'text-gray-700 hover:text-amber-700'
                  }`}
                >
                  {link.name}
                  
                  {/* Animated Underline */}
                  <span className={`absolute -bottom-2 left-0 h-1 bg-amber-600 rounded-full transition-all duration-500 ${
                    isActive(link.href)
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`} style={{ width: isActive(link.href) ? '100%' : '0%' }} />
                  
                  {/* Floating dot indicator for active */}
                  {isActive(link.href) && (
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-amber-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-600"></span>
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Get in Touch
              <ChevronDown className="rotate-270" size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-3 rounded-full hover:bg-amber-50 transition-all duration-300"
          >
            <Menu 
              size={32} 
              className={`text-amber-700 transition-all duration-500 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} 
            />
            <X 
              size={32} 
              className={`text-amber-700 absolute top-3 left-3 transition-all duration-500 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} 
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide In */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setIsOpen(false)} />

      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-500 ease-in-out lg:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="pt-32 px-10 space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              <span className="text-amber-700">LPI</span>
              <span className="text-amber-600">Furniture</span>
            </h2>
            <p className="text-gray-600 mt-2">Handcrafted for Life</p>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-2xl font-medium transition-all duration-300 py-4 border-b border-gray-100 ${
                isActive(link.href)
                  ? 'text-amber-700 border-amber-700'
                  : 'text-gray-700 hover:text-amber-700 hover:border-amber-300'
              }`}
            >
              {link.name}
              {isActive(link.href) && (
                <span className="ml-4 inline-block animate-pulse">Active</span>
              )}
            </Link>
          ))}

          <div className="pt-10">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-bold text-xl py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get in Touch
            </Link>
          </div>

          <div className="text-center text-sm text-gray-500 mt-12">
            <p>Crafted with love in India</p>
            <p className="mt-2">© 2025 LPI Furniture</p>
          </div>
        </div>
      </div>
    </nav>
  );
}