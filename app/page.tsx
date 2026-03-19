export default function Home() {

  const roles = [
    "Business Development Intern",
    "Lead Generation Intern",
    "Business Development Executive",
    "E-Commerce Specialist"
  ];

  return (
    <div className="relative bg-gradient-to-b from-black via-zinc-900 to-gray-950 text-white min-h-screen font-sans scroll-smooth overflow-hidden pt-24">

      {/* Background */}
      <div
      <div
  className="absolute inset-0 opacity-[0.03] blur-sm bg-center bg-no-repeat bg-contain pointer-events-none"
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
      <section id="home" className="text-center py-44 px-6">

        <h2 className="text-6xl font-bold max-w-4xl mx-auto">
          Scaling Marketplace Brands with
          <span className="block text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text">
            Data-Driven Growth
          </span>
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Grow faster across Amazon, Flipkart, Meesho & Myntra using data-driven strategies.
        </p>

        <div className="mt-10 flex justify-center gap-6">

          <a
            href="#contact"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
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

      </section>

      {/* ================= TRUSTED ================= */}
      <section className="text-center py-16">
        <p className="text-gray-500 mb-8 uppercase tracking-widest text-sm">
          Trusted Across Marketplaces
        </p>

        <div className="flex justify-center gap-10 text-gray-400">
          <span>Amazon</span>
          <span>Flipkart</span>
          <span>Meesho</span>
          <span>Myntra</span>
          <span>Ajio</span>
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
              title: "Starter",
              price: "₹3K – ₹7K",
              items: ["Setup", "10 Listings", "Basic Ads", "Weekly Tracking"]
            },
            {
              title: "Growth",
              price: "₹7K – ₹10K",
              items: ["Full Management", "Optimization", "Daily Ads", "Reports"]
            },
            {
              title: "Scale",
              price: "₹12K+",
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
            </div>
          ))}

        </div>

      </section>

      {/* ================= CAREERS ================= */}
     <section id="careers" className="px-8 py-24 bg-zinc-950 text-center">

  <h3 className="text-3xl font-bold mb-6">Career Opportunities</h3>

  <p className="text-gray-400 mb-10">
    Remote roles for Indian candidates
  </p>

  <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

    {roles.map((role, i) => (
      <div key={i} className="p-6 border border-gray-800 rounded-xl">

        <h4 className="text-lg font-semibold mb-4">{role}</h4>

       <div className="flex gap-3 justify-center">

  {/* APPLY FORM */}
  <button
    onClick={() =>
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSeTwE9DUyrUbVuaoDCihX3uFOP0ApYoLt2zBGTRFlPkDt7R8w/viewform",
        "_blank"
      )
    }
    className="bg-white text-black px-4 py-2 rounded-lg"
  >
    Apply Form
  </button>

  {/* EMAIL */}
  <button
    onClick={() =>
      (window.location.href = `mailto:richagalani62@gmail.com?subject=Application for ${role}`)
    }
    className="border border-white px-4 py-2 rounded-lg"
  >
    Email
  </button>

</div>
      </div>
    ))}

  </div>

  {/* EXTRA NOTE */}
  <p className="text-gray-500 text-sm mt-10">
    You can also send your resume directly to <span className="text-white">richagalani62@gmail.com</span>
  </p>

</section>
    <section id="contact" className="py-24 text-center">

  <h3 className="text-3xl mb-6">
    Ready to Scale Your Marketplace Sales?
  </h3>

  <div className="flex flex-col items-center gap-4">

    <button
      onClick={() =>
        (window.location.href =
          "mailto:richagalani62@gmail.com?subject=Business Inquiry - KCI")
      }
      className="bg-white text-black px-8 py-3 rounded-full hover:scale-105 transition"
    >
      Contact Now
    </button>

    <p className="text-gray-400 text-sm">
      or email us at <span className="text-white">richagalani62@gmail.com</span>
    </p>

  </div>

</section>
      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Khatushyam Commerce Intelligence
      </footer>

    </div>
  );
}
