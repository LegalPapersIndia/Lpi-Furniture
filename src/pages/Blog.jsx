// src/pages/Blog.jsx
import { Link } from 'react-router-dom';
import { Clock, Calendar, ChevronRight, Mail, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Why We Still Build Furniture Like It’s 1925",
    excerpt: "No screws. No plywood. No shortcuts. A deep dive into the ancient joinery techniques that make LPI pieces last 100+ years.",
    author: "Priyesh Jain",
    date: "15 March 2025",
    readTime: "7 min",
    category: "Craftsmanship",
    featured: true,
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=90"
  },
  {
    id: 2,
    title: "The Perfect Dining Table for Indian Joint Families",
    excerpt: "12-seater, 14-seater, or extendable? How to choose a table that grows with your family — just like ours did.",
    author: "Aarohi Jain",
    date: "10 March 2025",
    readTime: "9 min",
    category: "Buying Guide",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a8?w=1600&q=90"
  },
  {
    id: 3,
    title: "Teak vs Sheesham vs Mango Wood: The Truth After 40 Years",
    excerpt: "We’ve worked with all three for decades. Here’s what actually ages beautifully in Indian homes.",
    author: "Master Rajesh (28 yrs at LPI)",
    date: "5 March 2025",
    readTime: "8 min",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1600&q=90"
  },
  {
    id: 4,
    title: "A Day in the Life of Our Oldest Karigar",
    excerpt: "Meet 68-year-old Ramchandra ji — who still hand-cuts dovetails faster than a machine.",
    author: "LPI Family",
    date: "28 February 2025",
    readTime: "6 min",
    category: "Behind the Scenes",
    image: "https://images.unsplash.com/photo-1581093458791-9d6e9e68e857?w=1600&q=90"
  },
  {
    id: 5,
    title: "5 Sofa Styles That Will Still Look Perfect in 2050",
    excerpt: "Timeless doesn’t mean boring. These silhouettes have survived trends for over a century.",
    author: "Aarohi Jain",
    date: "20 February 2025",
    readTime: "7 min",
    category: "Design Inspiration",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=90"
  },
  {
    id: 6,
    title: "How We Turned 1 Lakh Kg of Wood Scrap into Homes for Birds",
    excerpt: "Our zero-waste journey: birdhouses, kids’ toys, and planting 12,000+ trees since 2018.",
    author: "LPI Sustainability Team",
    date: "14 February 2025",
    readTime: "10 min",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=90"
  }
];

const categories = ["All Stories", "Craftsmanship", "Buying Guide", "Materials", "Design Inspiration", "Behind the Scenes", "Sustainability"];

export default function Blog() {
  const featured = blogPosts.find(p => p.featured);
  const regular = blogPosts.filter(p => !p.featured);

  return (
    <>
      {/* Hero – Warm, Indian, Emotional */}
      <section className="relative h-screen bg-cover bg-center" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600210492493-0946911123ea?w=2400&q=90')`
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              The LPI Journal
            </h1>
            <p className="text-2xl md:text-4xl text-amber-300 font-light max-w-5xl mx-auto leading-relaxed">
              Where wood whispers stories of family, craft, and the quiet joy of coming home
            </p>
            <div className="mt-12 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 text-amber-200 text-lg">
                40+ years • 8,000+ homes • 150+ karigars • 1 family
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Featured Story – Full Bleed Luxury */}
        {featured && (
          <article className="mb-32 -mx-6 md:mx-0">
            <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-96 lg:h-full">
                <img 
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-8 left-8 bg-amber-600 text-white px-6 py-3 rounded-full font-bold text-sm tracking-wider">
                  Featured Story
                </span>
              </div>

              <div className="p-12 lg:p-20 flex flex-col justify-center">
                <span className="text-amber-700 font-bold text-sm uppercase tracking-widest">
                  {featured.category}
                </span>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-8 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
                  {featured.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-10">
                  <div className="flex items-center gap-2">
                    <Calendar size={20} />
                    <span>{featured.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={20} />
                    <span>{featured.readTime} read</span>
                  </div>
                </div>

                <Link
                  to={`/blog/${featured.id}`}
                  className="inline-flex items-center gap-3 text-amber-700 font-bold text-xl hover:gap-5 transition-all duration-300 group"
                >
                  Read the full story
                  <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </article>
        )}

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all ${
                cat === "All Stories"
                  ? "bg-amber-600 text-white shadow-lg hover:bg-amber-700"
                  : "bg-amber-50 text-amber-900 hover:bg-amber-100 hover:shadow-md"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid – Luxury Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {regular.map((post, index) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-amber-800 px-5 py-2 rounded-full text-sm font-bold">
                  {post.category}
                </span>
              </div>

              <div className="p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 group-hover:text-amber-700 transition-colors line-clamp-3">
                  {post.title}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 space-y-1">
                    <p className="font-medium text-gray-700">{post.author}</p>
                    <p>{post.date} • {post.readTime}</p>
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="text-amber-700 font-bold flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    Read
                    <ChevronRight size={22} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mb-24">
          <button className="px-16 py-6 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
            Load More Stories
          </button>
        </div>

        {/* Newsletter – Warm & Personal */}
        <div className="bg-gradient-to-r from-amber-900 to-amber-800 rounded-3xl p-16 text-center text-white">
          <Mail size={64} className="mx-auto mb-8 text-amber-300" />
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Stories Delivered to Your Doorstep
          </h2>
          <p className="text-xl md:text-2xl text-amber-100 mb-12 max-w-3xl mx-auto font-light">
            Once a month, we share the most beautiful stories from our workshop — straight from the artisans who built your furniture.
          </p>
          <form className="flex flex-col sm:flex-row gap-6 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-8 py-6 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-amber-400/50"
            />
            <button className="px-12 py-6 bg-white text-amber-900 font-bold text-xl rounded-full hover:bg-amber-50 transition-all hover:scale-105 shadow-xl">
              Join the Family
            </button>
          </form>
          <p className="mt-6 text-amber-200">
            12,000+ readers • No spam ever • Unsubscribe anytime
          </p>
        </div>
      </div>
    </>
  );
}