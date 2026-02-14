export default function Home() {
  return (
    <div className="relative bg-black text-white min-h-screen font-sans scroll-smooth overflow-hidden pt-24">

      {/* Background Watermark Logo */}
      <div
        className="absolute inset-0 opacity-[0.03] blur-sm bg-center bg-no-repeat bg-contain animate-float"
        style={{ backgroundImage: "url('/logo.png')" }}
      ></div>

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-8 py-6 fixed top-0 w-full bg-black/70 backdrop-blur-xl border-b border-white/10 z-50">

        {/* Logo + Brand */}
        <a href="#home" className="flex items-center gap-4 group select-none">

          <div className="relative">
            <img
              src="/logo.png"
              alt="Khatushyam Commerce Intelligence Logo"
              className="
                h-11 w-auto object-contain
                drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]
                transition duration-300
                group-hover:scale-105
              "
            />

            {/* glow */}
            <div className="
              absolute inset-0 rounded-full
              bg-white/10 blur-xl opacity-0
              group-hover:opacity-100
              transition duration-500
            "></div>
          </div>

          {/* ===== BRAND NAME FIXED HERE ===== */}
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold tracking-[0.18em] text-gray-200 group-hover:text-white transition">
              KHATUSHYAM
            </span>

            <span className="text-xs tracking-[0.35em] text-gray-400 uppercase">
              Commerce Intelligence
            </span>
          </div>

        </a>

        <div className="space-x-8 text-sm text-gray-300">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#careers" className="hover:text-white">Careers</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-44">

        <div className="absolute w-[650px] h-[650px] bg-blue-500/10 blur-[160px] rounded-full -z-10"></div>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl animate-fadeUp">
          Luxury E-Commerce Growth & Marketplace Intelligence
        </h2>

        <p className="mt-8 text-gray-400 text-lg max-w-3xl leading-relaxed animate-fadeUp delay-200">
          We partner with ambitious brands and sellers to engineer profitable
          growth across India’s leading marketplaces.
          <br /><br />
          Our work blends data intelligence, marketplace expertise,
          and disciplined execution—so growth is scalable, sustainable,
          and margin-safe.
        </p>

        <p className="mt-6 text-gray-500 tracking-widest text-sm animate-fadeUp delay-400">
          Platforms: Amazon | Flipkart | Meesho | Myntra
        </p>

        <div className="mt-12 animate-fadeUp delay-600">
          <a
            href="#contact"
            className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Ready to Scale Your Sales
          </a>
        </div>
      </section>

      {/* ================= WHY PREMIUM ================= */}
      <section className="relative z-10 px-8 py-24 bg-zinc-950 text-center">
        <h3 className="text-3xl font-bold mb-16">
          WHY PREMIUM BRANDS CHOOSE US
        </h3>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left text-gray-300">
          <div className="space-y-4">
            <p>✔ Senior-led execution</p>
            <p>✔ Profit-first strategy</p>
            <p>✔ Daily account monitoring</p>
            <p>✔ Transparent pricing & reports</p>
            <p>✔ Brand protection mindset</p>
            <p>✔ Strategic growth partner</p>
          </div>

          <div className="space-y-4 text-gray-500">
            <p>✖ Junior account handlers</p>
            <p>✖ Sales-first obsession</p>
            <p>✖ Weekly or reactive checks</p>
            <p>✖ Hidden costs & vague metrics</p>
            <p>✖ Short-term tactics</p>
            <p>✖ Task-based service provider</p>
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="relative z-10 px-8 py-24 bg-black">
        <h3 className="text-3xl font-bold text-center mb-16">
          MARKETPLACE PRICING (MONTHLY)
        </h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            {
              title: "STARTER PACKAGE",
              desc: "For new sellers & early-stage brands",
              price: "₹3,000 – ₹7,000 / month",
              items: [
                "Account setup / takeover",
                "10 optimized listings",
                "Basic ads setup",
                "Weekly performance check",
                "Email & WhatsApp support"
              ]
            },
            {
              title: "GROWTH PACKAGE",
              desc: "For scaling sellers focused on velocity",
              price: "₹7,000 – ₹10,000 / month",
              items: [
                "Full account management",
                "Advanced optimization",
                "Daily ads management",
                "Promotion planning",
                "Inventory & pricing guidance",
                "Monthly performance report"
              ]
            },
            {
              title: "SCALE PACKAGE (PREMIUM)",
              desc: "For serious brands & high-revenue sellers",
              price: "₹12,000+ / month",
              items: [
                "Dedicated account manager",
                "Senior-led strategy",
                "Daily ads & catalog control",
                "Advanced analytics dashboards",
                "SKU & category launch planning",
                "Priority support"
              ]
            }
          ].map((pkg, i) => (
            <div key={i} className="p-8 border border-gray-800 rounded-xl hover:border-white transition">
              <h4 className="text-xl font-semibold mb-4">{pkg.title}</h4>
              <p className="text-gray-400 mb-6">{pkg.desc}</p>

              <ul className="text-gray-400 space-y-2 text-sm">
                {pkg.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>

              <p className="mt-6 font-semibold text-white">{pkg.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="relative z-10 px-8 py-24 bg-zinc-950 text-center">
        <h3 className="text-3xl font-bold mb-8">
          READY TO SCALE YOUR SALES?
        </h3>

        <p className="text-gray-400 mb-8">
          Boost visibility. Increase conversions. Grow profits.
        </p>

        <a
          href="mailto:richagalani62@gmail.com"
          className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          ✉️ richagalani62@gmail.com
        </a>

        <p className="mt-6 text-gray-500 text-sm">
          Custom packages available for multi-platform sellers.
        </p>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 border-t border-gray-800 text-gray-500 text-sm">
        © {new Date().getFullYear()} Khatushyam Commerce Intelligence.
      </footer>

    </div>
  );
}
