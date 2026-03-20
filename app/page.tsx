"use client";

import { useCallback } from "react";

export default function Home() {

  const roles = [
    "Business Development Intern",
    "Lead Generation Intern",
    "Business Development Executive",
    "E-Commerce Specialist"
  ];

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const openForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeTwE9DUyrUbVuaoDCihX3uFOP0ApYoLt2zBGTRFlPkDt7R8w/viewform",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const sendEmail = (subject) => {
    window.location.href = `mailto:richagalani62@gmail.com?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <div className="relative bg-gradient-to-b from-black via-zinc-900 to-gray-950 text-white min-h-screen font-sans overflow-hidden pt-24">

      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.03] blur-sm bg-center bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: "url('/logo.png')" }}
      />

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 fixed top-0 w-full bg-black/70 backdrop-blur-xl border-b border-white/10 z-50">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-4">
          <img src="/logo.png" className="h-11" alt="logo" />
          <div>
            <span className="text-lg tracking-widest">KHATUSHYAM</span>
            <span className="block text-xs text-gray-400">Commerce Intelligence</span>
          </div>
        </button>

        <div className="space-x-6 text-sm text-gray-300">
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("pricing")}>Pricing</button>
          <button onClick={() => scrollTo("careers")}>Careers</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="text-center py-44 px-6">

        <h2 className="text-5xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight">
          Helping Brands Scale to ₹1L+ Monthly Sales with
          <span className="block text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text">
            Data-Driven Growth
          </span>
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Grow faster across Amazon, Flipkart, Meesho & Myntra using proven strategies.
        </p>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">

          <button
            onClick={() => scrollTo("contact")}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 px-10 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition"
          >
            Get Free Audit (₹2,999 Value)
          </button>

          <button
            onClick={() => scrollTo("pricing")}
            className="border border-gray-600 px-10 py-4 rounded-full hover:bg-white hover:text-black transition"
          >
            View Pricing
          </button>

        </div>

      </section>

      {/* TRUSTED */}
      <section className="text-center py-16">
        <p className="text-gray-500 mb-8 uppercase tracking-widest text-sm">
          Trusted Across Marketplaces
        </p>

        <div className="flex justify-center gap-10 text-gray-400 flex-wrap">
          <span>Amazon</span>
          <span>Flipkart</span>
          <span>Meesho</span>
          <span>Myntra</span>
          <span>Ajio</span>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-8 py-24 text-center">
        <h3 className="text-3xl font-bold mb-12">Why Choose KCI?</h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-gray-300">
          <div>
            <h4 className="text-lg font-semibold mb-2">Data-Driven Strategy</h4>
            <p className="text-sm">We use analytics, not guesswork.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Marketplace Experts</h4>
            <p className="text-sm">Specialized in Amazon & Flipkart growth.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Performance Focused</h4>
            <p className="text-sm">We grow only when you grow.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-8 py-24">
        <h3 className="text-3xl font-bold text-center mb-16">
          Marketplace Pricing (Monthly)
        </h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Starter",
              price: "₹3000 – ₹7000",
              items: ["Setup", "10 Listings", "Basic Ads", "Weekly Tracking"]
            },
            {
              title: "Growth",
              price: "₹7000 – ₹10000",
              items: ["Full Management", "Optimization", "Daily Ads", "Reports"]
            },
            {
              title: "Scale",
              price: "₹12000+",
              items: ["Dedicated Manager", "Advanced Strategy", "Full Control", "Analytics"]
            }
          ].map((pkg, i) => (
            <div key={i} className="p-8 border border-gray-800 rounded-xl hover:scale-105 transition">
              <h4 className="text-xl mb-4">{pkg.title}</h4>

              <ul className="text-gray-400 text-sm space-y-2">
                {pkg.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>

              <p className="mt-6 font-semibold">{pkg.price}</p>

              <button
                onClick={() => scrollTo("contact")}
                className="mt-6 w-full bg-white text-black py-2 rounded-lg hover:opacity-90"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="px-8 py-24 bg-zinc-950 text-center">

        <h3 className="text-3xl font-bold mb-4">Career Opportunities</h3>

        <p className="text-gray-400 mb-4">
          Remote roles for Indian candidates
        </p>

        <p className="text-gray-500 text-sm mb-6">
          ✔ Remote Work • ✔ Incentives • ✔ Startup Experience
        </p>

        <p className="text-red-400 text-sm mb-10">
          Limited Openings – Apply Fast
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {roles.map((role, i) => (
            <div key={i} className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">

              <h4 className="text-lg font-semibold mb-4">{role}</h4>

              <div className="flex gap-3 justify-center flex-wrap">

                <button
                  onClick={openForm}
                  className="bg-white text-black px-4 py-2 rounded-lg"
                >
                  Apply Form
                </button>

                <button
                  onClick={() => sendEmail(`Application for ${role}`)}
                  className="border border-white px-4 py-2 rounded-lg"
                >
                  Email
                </button>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-center">

        <h3 className="text-3xl mb-6">
          Ready to Scale Your Marketplace Sales?
        </h3>

        <button
          onClick={() => sendEmail("Business Inquiry - KCI")}
          className="bg-white text-black px-8 py-3 rounded-full hover:scale-105 transition"
        >
          Contact Now
        </button>

      </section>

      {/* FLOATING CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => scrollTo("contact")}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 rounded-full shadow-lg hover:scale-105"
        >
          Free Audit 🚀
        </button>
      </div>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Khatushyam Commerce Intelligence
      </footer>

    </div>
  );
}
