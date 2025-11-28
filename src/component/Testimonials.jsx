// src/components/Testimonials.jsx
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Priya & Arjun Malhotra",
    location: "Bandra West, Mumbai",
    text: "Our Nordic Oak dining table has become the soul of our home. Every meal feels special. The craftsmanship is generational — we know our children will inherit this piece.",
    rating: 5,
    highlight: true
  },
  {
    name: "Rohan Kapoor",
    location: "South Delhi",
    text: "From the first visit to the showroom to white-glove delivery — everything was flawless. The team even adjusted the legs on-site for perfect leveling. True luxury service.",
    rating: 5
  },
  {
    name: "Dr. Ananya Sharma",
    location: "Pune",
    text: "I’ve never seen such attention to detail. The hand-carved joints, the oil finish that brings out the wood grain… it’s art you live with. Worth every rupee.",
    rating: 5
  },
  {
    name: "The Singh Family",
    location: "Bengaluru",
    text: "We bought the entire living room collection. Three years later, it looks brand new. Our friends still ask where we got it. LPI is now a family tradition.",
    rating: 5
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-advance every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => setIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const goNext = () => setIndex(prev => (prev + 1) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-amber-50 via-white to-amber-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 tracking-tight">
            Stories from Happy Homes
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
            Real families. Real heirlooms. Real love.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-8 items-center">

            {/* Previous Testimonial (Desktop Only - Faded) */}
            <div className="hidden lg:block opacity-30 scale-90 transition-all duration-700">
              <TestimonialCard data={testimonials[(index - 1 + testimonials.length) % testimonials.length]} />
            </div>

            {/* Active Testimonial */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 text-amber-200 opacity-30">
                <Quote size={120} strokeWidth={1} />
              </div>

              <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 relative overflow-hidden border border-amber-100">
                {/* Amber accent line */}
                <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-amber-600 to-amber-400" />

                <Quote className="text-amber-100 absolute top-8 right-8" size={80} strokeWidth={1} />

                <p className="text-2xl md:text-3xl italic text-gray-800 leading-relaxed mb-10 relative z-10">
                  "{current.text}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-2xl font-bold text-amber-800">{current.name}</h4>
                    <p className="text-amber-600 font-medium">{current.location}</p>
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={28}
                        fill="#f59e0b"
                        className="text-amber-500 drop-shadow-md"
                      />
                    ))}
                  </div>
                </div>

                {current.highlight && (
                  <div className="mt-6 text-amber-700 font-bold text-sm tracking-wider">
                    ★ Featured Story ★
                  </div>
                )}
              </div>
            </div>

            {/* Next Testimonial (Desktop Only - Faded) */}
            <div className="hidden lg:block opacity-30 scale-90 transition-all duration-700">
              <TestimonialCard data={testimonials[(index + 1) % testimonials.length]} />
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md shadow-xl p-4 rounded-full hover:bg-amber-50 hover:scale-110 transition-all duration-300 group"
          >
            <ChevronLeft size={32} className="text-amber-700 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md shadow-xl p-4 rounded-full hover:bg-amber-50 hover:scale-110 transition-all duration-300 group"
          >
            <ChevronRight size={32} className="text-amber-700 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-500 ${
                  i === index
                    ? 'w-16 h-3 bg-amber-600 rounded-full'
                    : 'w-3 h-3 bg-amber-300 rounded-full hover:bg-amber-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Counter */}
        <div className="text-center mt-20">
          <p className="text-5xl font-bold text-amber-800">500+</p>
          <p className="text-xl text-gray-600 mt-2">Happy families across India</p>
        </div>
      </div>
    </section>
  );
}

// Mini card for side testimonials (desktop)
function TestimonialCard({ data }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-amber-100 h-full">
      <p className="text-lg italic text-gray-700 line-clamp-4">"{data.text}"</p>
      <p className="mt-6 font-bold text-amber-800">{data.name}</p>
      <p className="text-sm text-amber-600">{data.location}</p>
    </div>
  );
}