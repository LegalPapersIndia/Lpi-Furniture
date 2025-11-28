// src/components/HeroCarousel.jsx
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroSlides = [
  {
    id: 1,
    title: "Crafted for Generations",
    subtitle: "Hand-built solid wood furniture that becomes family heirlooms",
    cta: "Explore Collection",
    link: "/shop",
    image: "https://www.getmycouch.com/cdn/shop/files/Untitleddesign_50.png?v=1704181079",
    overlay: "bg-black/50"
  },
  {
    id: 2,
    title: "Where Tradition Meets Design",
    subtitle: "Timeless joinery. Modern silhouettes. Indian craftsmanship.",
    cta: "View New Arrivals",
    link: "/shop",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=2400&q=90",
    overlay: "bg-amber-900/40"
  },
  {
    id: 3,
    title: "Your Home Deserves the Best",
    subtitle: "Only the finest FSC-certified woods. Only the finest hands.",
    cta: "Discover the Difference",
    link: "/about",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=90",
    overlay: "bg-black/60"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play with smooth timing
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides with smooth fade + slide animation */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 translate-x-0'
              : index < currentSlide
              ? 'opacity-0 -translate-x-full'
              : 'opacity-0 translate-x-full'
          }`}
        >
          {/* Parallax Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundAttachment: 'fixed',
            }}
          />

          {/* Gradient Overlay */}
          <div className={`absolute inset-0 ${slide.overlay}`} />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-6">
            <div className="max-w-5xl mx-auto text-center">
              {/* Title Animation */}
              <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight mb-6
                ${index === currentSlide ? 'animate-fade-up' : 'opacity-0'}`}
              >
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className={`text-xl md:text-3xl text-amber-100 font-light mb-10 max-w-4xl mx-auto leading-relaxed
                ${index === currentSlide ? 'animate-fade-up animation-delay-300' : 'opacity-0'}`}
              >
                {slide.subtitle}
              </p>

              {/* CTA Button */}
              <Link
                to={slide.link}
                className={`inline-flex items-center gap-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl
                  ${index === currentSlide ? 'animate-fade-up animation-delay-600' : 'opacity-0'}`}
              >
                {slide.cta}
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Elegant */}
      <button
        onClick={goToPrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 group"
        aria-label="Previous slide"
      >
        <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
          <ChevronLeft size={36} className="text-white group-hover:-translate-x-1 transition-transform" />
        </div>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 group"
        aria-label="Next slide"
      >
        <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
          <ChevronRight size={36} className="text-white group-hover:translate-x-1 transition-transform" />
        </div>
      </button>

      {/* Beautiful Dots Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 ${
              index === currentSlide
                ? 'w-24 h-2 bg-amber-500 rounded-full'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80 rounded-full'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}