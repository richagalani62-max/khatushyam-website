export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">
            Khatushyam Commerce Intelligence
          </h1>
          <p className="text-xs text-gray-500 tracking-widest">
            DATA • STRATEGY • GROWTH
          </p>
        </div>

        <div className="space-x-8 text-sm text-gray-300">
          <a href="#home" className="hover:text-white transition">Home</a>
<a href="#about" className="hover:text-white transition">About</a>
<a href="#services" className="hover:text-white transition">Services</a>
<a href="#contact" className="hover:text-white transition">Contact</a>

       </div>
      </nav>

      {/* Hero */}
      <section id="home" className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
          Intelligent Commerce Solutions for Modern Businesses
        </h2>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl">
          We empower startups and enterprises with data-driven strategy,
          technology, and scalable digital infrastructure.
        </p>

        <div className="mt-10 flex gap-6">
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            Get Started
          </button>

          <button className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
            Our Services
          </button>
        </div>
           </section>

      {/* About */}
      <section id="about" className="px-8 py-24 bg-black text-center">
        <h3 className="text-3xl font-bold mb-8">About Us</h3>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Khatushyam Commerce Intelligence is focused on transforming businesses
          through data-driven strategy, intelligent commerce systems,
          and scalable technology infrastructure.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="px-8 py-24 bg-zinc-950">

        <h3 className="text-3xl font-bold text-center mb-16">
          Core Capabilities
        </h3>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="p-8 border border-gray-800 rounded-xl hover:border-white transition">
            <h4 className="text-xl font-semibold mb-4">Commerce Strategy</h4>
            <p className="text-gray-400">
              Data-backed planning and revenue optimization models for sustainable growth.
            </p>
          </div>

          <div className="p-8 border border-gray-800 rounded-xl hover:border-white transition">
                   </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-24 bg-black text-center">
        <h3 className="text-3xl font-bold mb-8">Let’s Work Together</h3>
        <p className="text-gray-400 mb-10">
          Ready to scale your e-commerce operations? Connect with us today.
        </p>

        <div className="space-y-4 text-gray-300">
          <p>Email: richagalani62@gmail.com</p>
          <p>Location: Katni, Madhya Pradesh, India</p>
        </div>

        <div className="mt-8">
          <a
            href="mailto:richagalani62@gmail.com"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition"
          >
            Contact Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-gray-800 text-gray-500 text-sm">
        © {new Date().getFullYear()} Khatushyam Commerce Intelligence. All rights reserved.
      </footer>
