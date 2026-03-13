export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-black via-zinc-900 to-gray-950 text-white min-h-screen font-sans scroll-smooth overflow-hidden pt-24">

      {/* Background Watermark Logo */}
      <div
        className="absolute inset-0 opacity-[0.03] blur-sm bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/logo.png')" }}
      ></div>

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-8 py-6 fixed top-0 w-full bg-black/70 backdrop-blur-xl border-b border-white/10 z-50">

        <a href="#home" className="flex items-center gap-4 select-none">
          <img
            src="/logo.png"
            alt="Khatushyam Commerce Intelligence Logo"
            className="h-11 w-auto object-contain"
          />

          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold tracking-[0.18em] text-gray-200">
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
      <section id="home" className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-44 overflow-hidden">

        <div className="absolute w-[700px] h-[700px] bg-indigo-500/20 blur-[180px] rounded-full -top-40 -left-40"></div>
        <div className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[180px] rounded-full -bottom-40 -right-40"></div>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
          Scaling Marketplace Brands with
          <span className="block bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Data-Driven Growth
          </span>
        </h2>

        <p className="mt-8 text-gray-300 text-lg max-w-3xl leading-relaxed">
          We help ambitious brands grow faster across India's largest
          marketplaces through listing optimization, advertising
          management and data driven scaling.
        </p>

        <p className="mt-6 text-gray-400 tracking-widest text-sm">
          Platforms: Amazon | Flipkart | Meesho | Myntra
        </p>

        <div className="mt-12 flex gap-6">

          <a
            href="#contact"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Get Free Marketplace Audit
          </a>

          <a
            href="#pricing"
            className="border border-gray-600 px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            View Pricing
          </a>

        </div>

      </section>

      {/* ================= TRUSTED BY ================= */}
      <section className="px-8 py-16 text-center">

        <p className="text-gray-500 uppercase tracking-widest mb-10 text-sm">
          Trusted Across Leading Marketplaces
        </p>

        <div className="flex flex-wrap justify-center gap-12 text-gray-400 text-lg font-semibold opacity-80">
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
              title: "Starter Package",
              price: "₹3,000 – ₹7,000 / month",
              items: [
                "Account setup",
                "10 optimized listings",
                "Basic ads setup",
                "Weekly monitoring"
              ]
            },
            {
              title: "Growth Package",
              price: "₹7,000 – ₹10,000 / month",
              items: [
                "Full account management",
                "Advanced listing optimization",
                "Daily ads management",
                "Monthly report"
              ]
            },
            {
              title: "Scale Package",
              price: "₹12,000+ / month",
              items: [
                "Dedicated account manager",
                "Senior strategy",
                "Daily ads & catalog control",
                "Advanced analytics"
              ]
            }
          ].map((pkg, i) => (
            <div key={i} className="p-8 border border-gray-800 rounded-xl hover:border-white hover:scale-[1.03] transition">

              <h4 className="text-xl font-semibold mb-6">{pkg.title}</h4>

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
      <section id="careers" className="px-8 py-24 bg-zinc-950">

        <h3 className="text-3xl font-bold text-center mb-6">
          Career Opportunities
        </h3>

        <p className="text-center text-gray-400 mb-4 max-w-2xl mx-auto">
          All roles are remote and open to Indian citizens.
        </p>

        <p className="text-center text-gray-500 mb-14">
          Applications close once positions are filled.
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {[
            {
              title: "Marketing Intern",
              desc: "Work on outreach campaigns and client acquisition.",
              comp: "10% commission on converted clients"
            },
            {
              title: "E-Commerce Intern",
              desc: "Assist with marketplace account management.",
              comp: "10% commission on converted accounts"
            },
            {
              title: "Marketing Executive (Full-Time)",
              desc: "Manage lead generation, partnerships and digital marketing campaigns.",
              comp: "Fixed salary + performance incentives"
            },
            {
              title: "E-Commerce Executive (Full-Time)",
              desc: "Handle Amazon and Flipkart seller accounts including listings, ads and analytics.",
              comp: "Fixed salary + performance incentives"
            }
          ].map((role, i) => (
            <div key={i} className="p-8 border border-gray-800 rounded-xl hover:border-white hover:scale-[1.03] transition">

              <h4 className="text-xl font-semibold mb-4">
                {role.title}
              </h4>

              <p className="text-gray-400 mb-4">
                {role.desc}
              </p>

              <p className="text-gray-400 text-sm mb-6">
                {role.comp}
              </p>

              <div className="flex gap-3">

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeTwE9DUyrUbVuaoDCihX3uFOP0ApYoLt2zBGTRFlPkDt7R8w/view"
                  target="_blank"
                  className="flex-1 text-center bg-white text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
                >
                  Apply Form
                </a>

                <a
                  href={`mailto:richagalani62@gmail.com?subject=Application for ${role.title}`}
                  className="flex-1 text-center border border-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition"
                >
                  Email
                </a>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="px-8 py-24 text-center">

        <h3 className="text-3xl font-bold mb-8">
          Ready to Scale Your Marketplace Sales?
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
        © {new Date().getFullYear()} Khatushyam Commerce Intelligence
      </footer>

    </div>
  );
}
