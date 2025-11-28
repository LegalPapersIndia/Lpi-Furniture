// src/components/WhyChooseUs.jsx
import { Shield, Leaf, Truck, Wrench, HeartHandshake, Trees, Award, Clock } from 'lucide-react';

const reasons = [
  {
    icon: Wrench,
    title: "Master Craftsmanship",
    desc: "Every joint hand-cut. Every finish hand-applied. Built by artisans with 20+ years of experience using centuries-old techniques."
  },
  {
    icon: Trees,
    title: "100% Solid Hardwood",
    desc: "Only premium FSC-certified teak, oak & walnut. No veneers. No MDF. No compromises — ever."
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    desc: "We guarantee our furniture for life. If anything ever fails due to craftsmanship, we repair or replace it — free."
  },
  {
    icon: Truck,
    title: "White-Glove Delivery",
    desc: "Professional delivery team. Unpacking, placement, assembly & debris removal — all included, anywhere in India."
  },
  {
    icon: Leaf,
    title: "Planet Positive",
    desc: "We plant 100 trees for every 10 pieces sold. Carbon-neutral operations. Zero-waste workshop."
  },
  {
    icon: HeartHandshake,
    title: "Family Owned Since 1985",
    desc: "Three generations of the Ivanov family crafting furniture with passion, integrity in Mumbai."
  },
  {
    icon: Award,
    title: "Award-Winning Design",
    desc: "Featured in Architectural Digest India, Elle Decor & GoodHomes. Multiple design excellence awards."
  },
  {
    icon: Clock,
    title: "Built to Last 100+ Years",
    desc: "Traditional joinery (no screws or nails). Designed to be passed down — not thrown away."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-amber-50 via-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 tracking-tight">
            Why Families Choose LPI
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-light max-w-4xl mx-auto leading-relaxed">
            We don’t just make furniture.<br />
            <span className="text-amber-700 font-semibold">We create heirlooms.</span>
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border border-amber-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Icon size={40} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {reason.desc}
                </p>

                {/* Subtle hover glow */}
                <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-amber-400/30 transition-all duration-700 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Trust Bar */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 text-gray-700">
            <div className="flex items-center gap-3">
              <span className="text-4xl">5000+</span>
              <span className="text-lg font-medium">Pieces Delivered</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-4xl">4.9</span>
              <span className="text-lg font-medium">Average Rating</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-4xl">40+</span>
              <span className="text-lg font-medium">Years of Legacy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}