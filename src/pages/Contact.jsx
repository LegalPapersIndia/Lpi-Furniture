// src/pages/Contact.jsx
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle, 
  Calendar, 
  ArrowRight,
  Facebook,      // ← Fixed: now imported
  Instagram,     // ← Fixed: now imported
  Youtube        // ← Fixed: now imported
} from 'lucide-react';

export default function Contact() {
  const handleWhatsApp = () => {
    const message = "Namaste LPI Family! I'd love to know more about your furniture and possibly book a showroom visit.";
    window.open(`https://wa.me/917505266931?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* Hero – Warm Mumbai Welcome */}
      <section className="relative h-screen bg-cover bg-center" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1567598816725-8e9350b75161?w=2400&q=90')`
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              <span className="text-amber-400">We’ve Been Expecting You</span>
            </h1>
            <p className="text-2xl md:text-4xl text-amber-200 font-light max-w-4xl mx-auto leading-relaxed">
              Our showroom isn’t just a store — it’s where your family’s next heirloom begins.
            </p>
            <button
              onClick={handleWhatsApp}
              className="mt-12 inline-flex items-center gap-4 bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:scale-105 transition-all"
            >
              <MessageCircle size={32} />
              Say Hello on WhatsApp
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Showroom Details + Map */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">

          {/* Contact Cards */}
          <div className="space-y-10">
            <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-10">
              Visit Our Noida Home
            </h2>

            <div className="space-y-8">
              <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-amber-100">
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Flagship Showroom</h3>
                    <p className="text-lg text-gray-700 mt-2 leading-relaxed">
                      LPI Furniture<br />
                      F-2 , Sector - 8 <br />
                      Noida , Uttar Pradesh , 201301<br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-amber-50 rounded-3xl p-8 text-center group hover:bg-amber-100 transition">
                  <Phone size={40} className="mx-auto text-amber-700 mb-4" />
                  <p className="font-bold text-gray-900">Call Us</p>
                  <a href="tel:+917505266931" className="text-xl font-bold text-amber-700 hover:text-amber-800">
                    +91 7505266931
                  </a>
                </div>
                <div className="bg-amber-50 rounded-3xl p-8 text-center group hover:bg-amber-100 transition">
                  <MessageCircle size={40} className="mx-auto text-green-600 mb-4" />
                  <p className="font-bold text-gray-900">WhatsApp</p>
                  <a href="https://wa.me/917505266931" className="text-xl font-bold text-green-600 hover:text-green-700">
                    Instant Chat
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-8 text-white">
                <div className="flex gap-6 items-start">
                  <Clock size={36} className="flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Showroom Hours</h3>
                    <p className="text-lg leading-relaxed">
                      Monday – Saturday: <strong>10:00 AM – 8:00 PM</strong><br />
                      Sunday: <strong>11:00 AM – 7:00 PM</strong><br />
                      <span className="text-amber-200 text-sm">Weekend appointments recommended</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Can’t Visit Today?</h3>
                <div className="space-y-4">
                  <a href="mailto:hello@lpifurniture.com" className="flex items-center gap-4 text-lg hover:text-amber-700 transition">
                    <Mail size={24} className="text-amber-600" />
                    hello@lpifurniture.com
                  </a>
                  <a href="tel:+917505266931" className="flex items-center gap-4 text-lg hover:text-amber-700 transition">
                    <Phone size={24} className="text-amber-600" />
                    +91 7505266931 (10 AM – 8 PM)
                  </a>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-12 text-center">
              <p className="text-2xl font-bold text-gray-800 mb-4">Join 50,000+ Happy Followers</p>
              <div className="flex justify-center gap-6">
                <a href="#" className="w-16 h-16 bg-amber-100 hover:bg-amber-600 rounded-full flex items c-enter justify-center transition-all hover:scale-110 group">
                  <Instagram size={28} className="text-amber-700 group-hover:text-white" />
                </a>
                <a href="#" className="w-16 h-16 bg-amber-100 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all hover:scale-110 group">
                  <Facebook size={28} className="text-amber-700 group-hover:text-white" />
                </a>
                <a href="#" className="w-16 h-16 bg-amber-100 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all hover:scale-110 group">
                  <Youtube size={28} className="text-amber-700 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
           <iframe
           title='LPI Office '
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.3033497832166!2d77.31967657533406!3d28.595428075685028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2290a24adc2aa39f%3A0x6393f050e681d51e!2sLegal%20Papers%20India!5e1!3m2!1sen!2sin!4v1764328887220!5m2!1sen!2sin"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
              <p className="font-bold text-gray-900">Free Parking Available</p>
              <p className="text-amber-700">Valet on Weekends</p>
            </div>
          </div>
        </div>

        {/* Rest of the form & CTA sections remain exactly the same */}
        {/* ... (same as previous version – no changes needed below this point) */}
        {/* Contact Form */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl shadow-2xl p-12 md:p-20 border-4 border-amber-100">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">
                Let’s Start a Conversation
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Whether you’re dreaming of a new dining table, need fabric swatches, or just want to say hello — we read every single message.
              </p>
            </div>

            <form className="grid md:grid-cols-2 gap-8">
              <input type="text" placeholder="Your Name *" required className="px-8 py-6 rounded-2xl border-2 border-amber-200 focus:border-amber-600 focus:outline-none text-lg transition" />
              <input type="email" placeholder="Your Email *" required className="px-8 py-6 rounded-2xl border-2 border-amber-200 focus:border-amber-600 focus:outline-none text-lg transition" />
              <input type="tel" placeholder="Phone / WhatsApp" className="px-8 py-6 rounded-2xl border-2 border-amber-200 focus:border-amber-600 focus:outline-none text-lg transition" />
              <input type="text" placeholder="Subject (e.g., Showroom Visit, Custom Order)" className="px-8 py-6 rounded-2xl border-2 border-amber-200 focus:border-amber-600 focus:outline-none text-lg transition" />
              <textarea rows="6" placeholder="Your Message — tell us everything! *" required className="md:col-span-2 px-8 py-6 rounded-2xl border-2 border-amber-200 focus:border-amber-600 focus:outline-none text-lg resize-none transition" />

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xl px-16 py-7 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
                >
                  <Send size={28} />
                  Send Your Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 bg-gradient-to-r from-amber-900 to-amber-800 rounded-3xl p-16 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Can’t Make It to Delhi Today?
          </h2>
          <p className="text-2xl text-amber-100 mb-12 max-w-4xl mx-auto font-light">
            Book a private video call with our design experts. We’ll show you real wood samples, walk you through the showroom, and help design your space — from the comfort of your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <a
              href="https://calendly.com/lpifurniture/virtual-tour"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white text-amber-900 font-bold text-xl px-12 py-6 rounded-full hover:bg-amber-50 transition-all hover:scale-105 shadow-2xl"
            >
              <Calendar size={28} />
              Book Free Virtual Tour
            </a>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-4 bg-green-600 hover:bg-green-700 font-bold text-xl px-12 py-6 rounded-full transition-all hover:scale-105 shadow-2xl"
            >
              <MessageCircle size={28} />
              WhatsApp Us Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}