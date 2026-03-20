"use client";

export default function Home() {

  const roles = [
    "Business Development Intern",
    "Lead Generation Intern",
    "Business Development Executive",
    "E-Commerce Specialist"
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // fix navbar overlap
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-black via-zinc-900 to-gray-950 text-white min-h-screen font-sans pt-24">

      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-center bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: "url('/logo.png')" }}
      />

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-4 fixed top-0 w-full bg-black/70 backdrop-blur-xl border-b border-white/10 z-50">

        <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
          <img src="/logo.png" className="h-10" alt="Khatushyam Logo" />
          <div className="text-left leading-tight">
            <span className="text-sm md:text-lg tracking-widest block">KHATUSHYAM</span>
            <span className="text-[10px] md:text-xs text-gray-400">Commerce Intelligence</span>
          </div>
        </button>

        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          {["home", "pricing", "careers", "contact"].map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="hover:text-white transition">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

      </nav>

      {/* HERO */}
      <section id="home" className="text-center py-32 px-6">

        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight">
          Helping Brands Scale to ₹1L+ Monthly Sales with
          <span className="block text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text">
            Data-Driven Growth
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Grow faster across Amazon, Flipkart, Meesho & Myntra using proven strategies.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <button
            onClick={() => scrollTo("contact")}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Get Free Audit
          </button>

          <button
            onClick={() => scrollTo("pricing")}
            className="border border-gray-600 px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            View Pricing
          </button>

        </div>

      </section>

      {/* TRUSTED */}
      <section className="text-center py-12">
        <p className="text-gray-500 mb-6 uppercase tracking-widest text-xs">
          Trusted Across Marketplaces
        </p>

        <div className="flex justify-center gap-8 text-gray-400 flex-wrap text-sm">
          {["Amazon", "Flipkart", "Meesho", "Myntra", "Ajio"].map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Why Choose KCI?</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-gray-300">
          {[
            ["Data-Driven Strategy", "We use analytics, not guesswork."],
            ["Marketplace Experts", "Amazon & Flipkart specialists."],
            ["Performance Focused", "We grow only when you grow."]
          ].map(([title, desc]) => (
            <div key={title}>
              <h4 className="font-semibold mb-2">{title}</h4>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Marketplace Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Starter", price: "₹3000 – ₹7000", items: ["Setup", "10 Listings", "Basic Ads"] },
            { title: "Growth", price: "₹7000 – ₹10000", items: ["Full Management", "Optimization", "Daily Ads"] },
            { title: "Scale", price: "₹12000+", items: ["Dedicated Manager", "Advanced Strategy", "Analytics"] }
          ].map((pkg) => (
            <div key={pkg.title} className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
              <h4 className="text-lg mb-3">{pkg.title}</h4>

              <ul className="text-gray-400 text-sm space-y-1">
                {pkg.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              <p className="mt-4 font-semibold">{pkg.price}</p>

              <button
                onClick={() => scrollTo("contact")}
                className="mt-4 w-full bg-white text-black py-2 rounded-lg"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="px-6 py-20 bg-zinc-950 text-center">

        <h2 className="text-2xl md:text-3xl font-bold mb-3">Career Opportunities</h2>

        <p className="text-gray-400 mb-6 text-sm">
          Remote • Incentives • Startup Experience
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {roles.map((role) => (
            <div key={role} className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">

              <h4 className="mb-4">{role}</h4>

              <div className="flex gap-3 justify-center flex-wrap">

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeTwE9DUyrUbVuaoDCihX3uFOP0ApYoLt2zBGTRFlPkDt7R8w/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 rounded-lg"
                >
                  Apply
                </a>

                <a
                  href={`mailto:richagalani62@gmail.com?subject=${encodeURIComponent(`Application for ${role}`)}`}
                  className="border border-white px-4 py-2 rounded-lg"
                >
                  Email
                </a>

              </div>

            </div>
          ))}
        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center">

        <h2 className="text-2xl mb-4">Ready to Scale?</h2>

        <a
          href="mailto:richagalani62@gmail.com?subject=Business Inquiry - KCI"
          className="bg-white text-black px-6 py-3 rounded-full inline-block hover:scale-105 transition"
        >
          Contact Now
        </a>

      </section>

      {/* FLOATING BUTTON */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => scrollTo("contact")}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2 rounded-full shadow-lg hover:scale-105 transition"
        >
          Free Audit 🚀
        </button>
      </div>

      {/* FOOTER */}
      <footer className="text-center py-8 text-gray-500 text-xs border-t border-gray-800">
        © {new Date().getFullYear()} Khatushyam Commerce Intelligence
      </footer>

    </div>
  );
}
