export default function Home() {
  return (
    <div className="relative bg-black text-white min-h-screen font-sans scroll-smooth overflow-hidden">

      {/* Background Watermark Logo */}
      <div
        className="absolute inset-0 opacity-5 bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/logo.png')" }}
      ></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800 fixed w-full bg-black/90 backdrop-blur-md z-50">
        <h1 className="text-xl font-semibold tracking-widest">
          KHATUSHYAM COMMERCE INTELLIGENCE
        </h1>

        <div className="space-x-8 text-sm text-gray-300">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#careers" className="hover:text-white">Careers</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-44">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
          Luxury E-Commerce Growth & Marketplace Intelligence
        </h2>

        <p className="mt-8 text-gray-400 text-lg max-w-3xl leading-relaxed">
          We partner with ambitious brands and sellers to engineer profitable
          growth across India’s leading marketplaces.
          <br /><br />
          Our work blends data intelligence, marketplace expertise,
          and disciplined execution—so growth is scalable, sustainable,
          and margin-safe.
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

      {/* WHY PREMIUM */}
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

      {/* PRICING */}
      <section id="pricing" className="relative z-10 px-8 py-24 bg-black">
        <h3 className="text-3xl font-bold text-center mb-16">
          MARKETPLACE PRICING (MONTHLY)
        </h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="p-8 border border-gray-800 rounded-xl hover:border-white transition">
            <h4 className="text-xl font-semibold mb-4">STARTER PACKAGE</h4>
            <p className="text-gray-400 mb-6">
              For new sellers & early-stage brands
            </p>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>• Account setup / takeover</li>
              <li>• 10 optimized listings</li>
              <li>• Basic ads setup</li>
              <li>• Weekly performance check</li>
              <li>• Email & WhatsApp support</li>
            </ul>
            <p className="mt-6 font-semibold text-white">
              ₹3,000 – ₹7,000 / month
            </p>
          </div>

          <div className="p-8 border border-gray-800 rounded-xl hover:border-white transition">
            <h4 className="text-xl font-semibold mb-4">GROWTH PACKAGE</h4>
            <p className="text-gray-400 mb-6">
              For scaling sellers focused on velocity
            </p>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>• Full account management</li>
              <li>• Advanced optimization</li>
              <li>• Daily ads management</li>
              <li>• Promotion planning</li>
              <li>• Inventory & pricing guidance</li>
              <li>• Monthly performance report</li>
            </ul>
            <p className="mt-6 font-semibold text-white">
              ₹7,000 – ₹10,000 / month
            </p>
          </div>

          <div className="p-8 border border-gray-800 rounded-xl hover:border-white transition">
            <h4 className="text-xl font-semibold mb-4">
              SCALE PACKAGE (PREMIUM)
            </h4>
            <p className="text-gray-400 mb-6">
              For serious brands & high-revenue sellers
            </p>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>• Dedicated account manager</li>
              <li>• Senior-led strategy</li>
              <li>• Daily ads & catalog control</li>
              <li>• Advanced analytics dashboards</li>
              <li>• SKU & category launch planning</li>
              <li>• Priority support</li>
            </ul>
            <p className="mt-6 font-semibold text-white">
              ₹12,000+ / month
            </p>
          </div>

        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="relative z-10 px-8 py-24 bg-black">
        <h3 className="text-3xl font-bold text-center mb-16">
          Career Opportunities
        </h3>

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
              comp: "10% commission on converted client accounts with measurable contribution."
            },
            {
              title: "Marketing Specialist",
              desc: "Lead partnerships, performance marketing and revenue growth initiatives.",
              comp: "Performance-linked structure + high commission model."
            },
            {
              title: "E-Commerce Specialist",
              desc: "Full account ownership, profit optimization and marketplace execution.",
              comp: "Performance-based revenue share with structured incentives."
            }
          ].map((role, i) => (
            <div key={i} className="p-8 border border-gray-800 rounded-xl hover:border-white transition">
              <h4 className="text-xl font-semibold mb-4">{role.title}</h4>
              <p className="text-gray-400 mb-4">{role.desc}</p>
              <p className="text-white font-semibold mb-2">Compensation:</p>
              <p className="text-gray-400 mb-4 text-sm">{role.comp}</p>
              <a
                href={`mailto:richagalani62@gmail.com?subject=Application for ${role.title}`}
                className="inline-block bg-white text-black px-6 py-2 rounded-lg font-semibold hover:opacity-80 transition"
              >
                Apply Now
              </a>
            </div>
          ))}

        </div>

        <div className="text-center mt-16 text-gray-500 text-sm">
          We believe in performance-driven growth. High performers scale with us.
        </div>
      </section>

      {/* CONTACT */}
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

      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-gray-800 text-gray-500 text-sm">
        © {new Date().getFullYear()} Khatushyam Commerce Intelligence.
      </footer>

    </div>
  );
}
