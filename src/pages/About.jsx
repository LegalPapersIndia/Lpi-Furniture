// src/pages/About.jsx
import { Link } from 'react-router-dom';
import { ChevronRight, Leaf, Award, Truck, Shield, Trees, HeartHandshake, Users, MapPin } from 'lucide-react';

export default function About() {
  return (
    <>
      {/* Hero – Indian Heritage */}
      <section className="relative h-screen bg-cover bg-center" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1597074867119-7d48d4e8d4c9?w=2400&q=90')`
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
              Crafted in India,<br />
              <span className="text-amber-500">Loved for Generations</span>
            </h1>
            <p className="text-2xl md:text-4xl text-amber-200 font-light max-w-4xl mx-auto leading-relaxed">
              Since 1985, three generations of master artisans have been hand-building solid wood furniture in Noida — where tradition meets timeless design.
            </p>
          </div>
        </div>
      </section>

      {/* Our Legacy – The Real Indian Story */}
      <section className="py-24 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=90" 
              alt="Master artisan at work in Noida workshop" 
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold text-amber-900 leading-tight">
              Born in a Small Noida Workshop,<br />
              Built for Indian Homes
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                In 1985, <strong>Shri Laxmichand P. Jain</strong> left his corporate job with a dream: to bring back the lost art of <em>solid wood furniture</em> that Indian families once proudly passed down.
              </p>
              <p>
                Starting with just three artisans in a 400 sq ft garage in Andheri, he began crafting dining tables using only teak and traditional <em>khaat joinery</em> — no plywood, no shortcuts.
              </p>
              <p>
                Today, <strong>LPI Furniture</strong> is run by his son <strong>Priyesh Jain</strong> and granddaughter <strong>Aarohi Jain</strong> — still in Noida, still 100% handcrafted, now serving over 8,000 happy families across India.
              </p>
              <p className="text-xl font-semibold text-amber-800">
                Every piece carries our family name. Every joint carries our promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values – Indian Pride */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6">
              Our Sacred Commitments
            </h2>
            <p className="text-2xl text-gray-600 font-light max-w-4xl mx-auto">
              These are not marketing words. These are our family values — lived every day in our workshop.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: Trees, title: "Only Indian Hardwoods", desc: "Teak from Madhya Pradesh, Sheesham from Rajasthan, Mango wood from Uttar Pradesh — all FSC-certified & legally sourced" },
              { icon: HeartHandshake, title: "Karigar-First", desc: "150+ master craftsmen paid fair wages, with health insurance, children’s education support & profit sharing" },
              { icon: Award, title: "Traditional Joinery Only", desc: "Mortise & tenon, dovetail, tongue & groove — no nails, no MDF, no veneers. Ever." },
              { icon: Shield, title: "Lifetime Guarantee", desc: "If anything fails due to craftsmanship in your lifetime — we repair or replace it free. No questions." },
            ].map((value, i) => (
              <div
                key={i}
                className="group text-center bg-gradient-to-br from-amber-50 to-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-amber-100"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-amber-600 rounded-full mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  <value.icon size={48} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-amber-800 font-medium leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Journey */}
      <section className="py-24 px-6 bg-amber-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6">
            From Forest to Forever Home
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Every LPI piece goes through 21 hands and 40+ days of loving craftsmanship
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            { step: "01", title: "Hand-Selected Timber", desc: "Our buyers travel to forests to pick only the finest heartwood", img: "https://images.unsplash.com/photo-1600563438938-a9a27216b4dc?w=800&q=90" },
            { step: "02", title: "90-Day Air Drying", desc: "Wood rests naturally — no kilns, no cracking, no compromise", img: "https://images.unsplash.com/photo-1581093458791-9d6e9e68e857?w=800&q=90" },
            { step: "03", title: "Handcrafted in Noida", desc: "47 artisans build your piece using techniques passed down since 1985", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=90" },
          ].map((item) => (
            <div key={item.step} className="group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img src={item.img} alt={item.title} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <span className="text-6xl font-bold opacity-30">{item.step}</span>
                  <h3 className="text-3xl font-bold mt-2">{item.title}</h3>
                  <p className="text-amber-200 mt-2 max-w-xs">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Family */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-amber-900 mb-16">
            One Family.<br />Three Generations.<br />Same Promise.
          </h2>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              { name: "Shri Laxmichand P. Jain", role: "Founder & Visionary", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" },
              { name: "Priyesh Jain", role: "CEO & Second Generation", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80" },
              { name: "Aarohi Jain", role: "Creative Director & Third Generation", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80" },
            ].map((person) => (
              <div key={person.name} className="group">
                <div className="relative">
                  <img 
                    src={person.img} 
                    alt={person.name}
                    className="w-80 h-80 rounded-full mx-auto object-cover border-8 border-amber-100 shadow-2xl group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-amber-900/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <h3 className="text-3xl font-bold mt-8 text-gray-900">{person.name}</h3>
                <p className="text-xl text-amber-700 font-medium">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Your Home Deserves<br />
            Furniture That Tells a Story
          </h2>
          <p className="text-2xl text-amber-200 mb-12 max-w-4xl mx-auto font-light">
            Join 8,000+ Indian families who’ve made LPI part of their legacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-white text-amber-900 font-bold text-xl rounded-full hover:bg-amber-50 transition-all hover:scale-105 shadow-2xl"
            >
              Start Your Story
              <ChevronRight size={28} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-4 px-12 py-6 border-4 border-white text-white font-bold text-xl rounded-full hover:bg-white hover:text-amber-900 transition-all"
            >
              <MapPin size={28} />
              Visit Our Noida Showroom
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}