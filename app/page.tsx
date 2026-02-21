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

        <a href="#home" className="flex items-center gap-4 group select-none">
          <div className="relative">
            <img
              src="/logo.png"
              alt="Khatushyam Commerce Intelligence Logo"
              className="h-11 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.15)] transition duration-300 group-hover:scale-105"
            />
          </div>

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

        <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
          Scaling Amazon & Flipkart Brands with Data-Driven Marketplace Growth
        </h2>

        <p className="mt-8 text-gray-400 text-lg max-w-3xl leading-relaxed">
          We partner with ambitious brands and sellers to engineer profitable
          growth across India’s leading marketplaces using data intelligence,
          marketplace expertise, and disciplined execution.
        </p>

        <p className="mt-6 text-gray-500 tracking-widest text-sm">
          Platforms: Amazon | Flipkart | Meesho | Myntra
        </p>

        <div className="mt-12">
          <a
            href="#contact"
            className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Ready to Scale Your Sales
          </a>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="relative z-10 px-8 py-24 bg-black text-center">
        <h3 className="text-3xl font-bold mb-16">
          HOW WE SCALE YOUR MARKETPLACE BUSINESS
        </h3>

        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto text-gray-300">
          {[
            { step: "01", title: "Audit & Analysis", desc: "Deep marketplace audit to identify profit leaks and growth opportunities." },
            { step: "02", title: "Strategy Setup", desc: "Profit-first roadmap covering listings, ads, pricing and positioning." },
            { step: "03", title: "Optimization", desc: "Catalog, keywords and ads optimized for visibility and conversion." },
            { step: "04", title: "Daily Monitoring", desc: "Continuous tracking of performance and campaign metrics." },
            { step: "05", title: "Scale & Expand", desc: "Data-driven scaling to increase revenue while protecting margins." }
          ].map((item, i) => (
            <div key={i} className="p-6 border border-gray-800 rounded-xl hover:border-white transition">
              <p className="text-gray-500 text-sm mb-2">{item.step}</p>
              <h4 className="font-semibold text-white mb-3">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="relative z-10 px-8 py-24 bg-zinc-950 text-center">
        <h3 className="text-3xl font-bold mb-16">REAL GROWTH. REAL RESULTS.</h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            { metric: "+120%", label: "Average Sales Growth", desc: "Achieved within first 90 days of optimization." },
            { metric: "5X", label: "Advertising ROAS Improvement", desc: "Through data-driven ad restructuring." },
            { metric: "Daily", label: "Account Monitoring", desc: "Ensuring stable growth and margin protection." }
          ].map((item, i) => (
            <div key={i} className="p-10 border border-gray-800 rounded-xl hover:border-white transition">
              <h4 className="text-4xl font-bold text-white mb-4">{item.metric}</h4>
              <p className="font-semibold mb-2">{item.label}</p>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY PREMIUM ================= */}
      <section className="relative z-10 px-8 py-24 bg-black text-center">
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
            <p>✖ Weekly checks</p>
            <p>✖ Hidden costs</p>
            <p>✖ Short-term tactics</p>
            <p>✖ Task-based providers</p>
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

      {/* ================= CAREERS ================= */}
      <section id="careers" className="relative z-10 px-8 py-24 bg-zinc-950">
        <h3 className="text-3xl font-bold text-center mb-6">
          Career Opportunities
        </h3>

        <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto">
          🌍 All roles are fully remote and open to Indian citizens only.
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Marketing Intern",
              desc: "Work on client acquisition, outreach campaigns and growth strategy.",
              comp: "10% commission on every successfully converted client project."
            },
            {
              title: "E-Commerce Intern",
              desc: "Assist in marketplace account management, ads optimization and reporting.",
              comp: "10% commission on converted client accounts."
            },
            {
              title: "Marketing Specialist",
              desc: "Lead partnerships, performance marketing and revenue growth initiatives.",
              comp: "Performance-linked structure + high commission model."
            },
            {
              title: "E-Commerce Specialist",
              desc: "Full account ownership, profit optimization and marketplace execution.",
              comp: "Performance-based revenue share with incentives."
            }
          ].map((role, i) => (
            <div key={i} className="p-8 border border-gray-800 rounded-xl hover:border-white transition">
              <h4 className="text-xl font-semibold mb-4">{role.title}</h4>

              <p className="text-gray-400 mb-4">{role.desc}</p>

              <p className="text-white font-semibold mb-2">Compensation:</p>
              <p className="text-gray-400 mb-6 text-sm">{role.comp}</p>

              <a
                href={`mailto:richagalani62@gmail.com?subject=Application for ${role.title}`}
                className="block text-center bg-white text-black px-6 py-2 rounded-lg font-semibold hover:opacity-80 transition"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="relative z-10 px-8 py-24 bg-zinc-950 text-center">
        <h3 className="text-3xl font-bold mb-8">
          READY TO SCALE YOUR SALES?
        </h3>

        <a
          href="mailto:richagalani62@gmail.com"
          className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          ✉️ richagalani62@gmail.com
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 border-t border-gray-800 text-gray-500 text-sm">
        © {new Date().getFullYear()} Khatushyam Commerce Intelligence.
      </footer>

    </div>
  );
}
