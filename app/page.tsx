export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-black via-zinc-900 to-gray-950 text-white min-h-screen font-sans scroll-smooth overflow-hidden pt-24">

      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.03] blur-sm bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/logo.png')" }}
      ></div>

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-8 py-6 fixed top-0 w-full bg-black/70 backdrop-blur-xl border-b border-white/10 z-50">

        <a href="#home" className="flex items-center gap-4">
          <img src="/logo.png" className="h-11" />
          <div>
            <span className="text-lg tracking-widest">KHATUSHYAM</span>
            <span className="block text-xs text-gray-400">Commerce Intelligence</span>
          </div>
        </a>

        <div className="space-x-8 text-sm text-gray-300">
          <a href="#home">Home</a>
          <a href="#pricing">Pricing</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="text-center py-44 px-6 relative">

        <h2 className="text-6xl font-bold max-w-4xl mx-auto">
          Scaling Marketplace Brands with
          <span className="block text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text">
            Data-Driven Growth
          </span>
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          We help brands grow faster across Amazon, Flipkart, Meesho & Myntra using data-driven strategies.
        </p>

        <div className="mt-10 flex justify-center gap-6">

          <a
            href="#contact"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 px-10 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-xl transition"
          >
            Get Free Audit (Worth ₹2,999)
          </a>

          <a
            href="#pricing"
            className="border border-gray-600 px-10 py-4 rounded-full hover:bg-white hover:text-black transition"
          >
            View Pricing
          </a>

        </div>

        <p className="mt-4 text-gray-500 text-sm">
          Limited free audits available this month
        </p>

      </section>

      {/* ================= TRUSTED ================= */}
      <section className="text-center py-16">
        <p className="text-gray-500 mb-8 uppercase tracking-widest text-sm">
          Trusted Across Leading Marketplaces
        </p>

        <div className="flex justify-center gap-10 text-gray-400">
          <span>Amazon</span>
          <span>Flipkart</span>
          <span>Meesho</span>
          <span>Myntra</span>
          <span>Ajio</span>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="py-20 text-center">

        <h3 className="text-3xl font-bold mb-12">Proven Results</h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

          <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
            <h4 className="text-2xl text-indigo-400 font-bold">3X</h4>
            <p className="text-gray-400 text-sm">Sales growth in 90 days</p>
          </div>

          <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
            <h4 className="text-2xl text-purple-400 font-bold">50+</h4>
            <p className="text-gray-400 text-sm">Brands scaled</p>
          </div>

          <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
            <h4 className="text-2xl text-indigo-400 font-bold">₹10L+</h4>
            <p className="text-gray-400 text-sm">Revenue managed</p>
          </div>

        </div>

      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-black text-center">

        <h3 className="text-3xl font-bold mb-16">How We Scale Your Brand</h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div>
            <h4 className="font-semibold mb-2">1. Audit</h4>
            <p className="text-gray-400 text-sm">We analyze listings & ads</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">2. Optimize</h4>
            <p className="text-gray-400 text-sm">Improve listings & creatives</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">3. Scale</h4>
            <p className="text-gray-400 text-sm">Increase revenue fast</p>
          </div>

        </div>

      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="px-8 py-24">

        <h3 className="text-3xl font-bold text-center mb-16">
          Marketplace Pricing (Monthly)
        </h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            {
              title: "Starter Package",
              price: "₹3,000 – ₹7,000 / month",
              items: ["Account setup", "10 listings", "Basic ads", "Weekly tracking"]
            },
            {
              title: "Growth Package",
              price: "₹7,000 – ₹10,000 / month",
              items: ["Full management", "Advanced optimization", "Daily ads", "Reports"]
            },
            {
              title: "Scale Package",
              price: "₹12,000+ / month",
              items: ["Dedicated manager", "Advanced strategy", "Full control", "Analytics"]
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
            </div>
          ))}

        </div>

      </section>

      {/* ================= CAREERS ================= */}
      <section id="careers" className="px-8 py-24 bg-zinc-950 text-center">

        <h3 className="text-3xl font-bold mb-6">Career Opportunities</h3>

        <p className="text-gray-400 mb-4">Remote roles for Indian candidates</p>

        <div className="mb-12 max-w-xl mx-auto">
          <h4 className="font-semibold mb-2">Why Join Us?</h4>
          <p className="text-gray-400 text-sm">
            Work with real clients, earn performance-based income and build practical skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {["Marketing Intern", "E-Commerce Intern"].map((role, i) => (
            <div key={i} className="p-6 border border-gray-800 rounded-xl">

              <h4 className="mb-2">{role}</h4>
              <p className="text-gray-400 text-sm mb-4">10% commission</p>

              <div className="flex gap-3">

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeTwE9DUyrUbVuaoDCihX3uFOP0ApYoLt2zBGTRFlPkDt7R8w/view"
                  target="_blank"
                  className="flex-1 bg-white text-black py-2 rounded text-center"
                >
                  Apply
                </a>

                <a
                  href="mailto:richagalani62@gmail.com"
                  className="flex-1 border border-white py-2 rounded text-center"
                >
                  Email
                </a>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 text-center">

        <h3 className="text-3xl mb-6">
          Ready to Scale Your Marketplace Sales?
        </h3>

        <a
          href="mailto:richagalani62@gmail.com"
          className="bg-white text-black px-8 py-3 rounded-full hover:scale-105 transition"
        >
          Contact Now
        </a>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Khatushyam Commerce Intelligence
      </footer>

    </div>
  );
}
