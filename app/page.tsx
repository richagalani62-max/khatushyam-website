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
      <section id="home" className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-44">

        <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
          Scaling Amazon & Flipkart Brands with Data-Driven Marketplace Growth
        </h2>

        <p className="mt-8 text-gray-400 text-lg max-w-3xl leading-relaxed">
          We partner with ambitious brands and sellers to engineer profitable
          growth across India's leading marketplaces using data intelligence,
          marketplace expertise and disciplined execution.
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

      {/* ================= PROBLEM ================= */}
      <section className="px-8 py-24 bg-zinc-950 text-center">
        <h3 className="text-3xl font-bold mb-14">
          Why Most Marketplace Sellers Struggle
        </h3>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-gray-300">
          {[
            { title: "Poor Listing SEO", desc: "Products fail to rank due to weak keyword optimization." },
            { title: "Ad Budget Waste", desc: "Unstructured ads lead to high spend with low conversions." },
            { title: "Low Conversion Rate", desc: "Weak images and content reduce buyer confidence." },
            { title: "No Data Strategy", desc: "Decisions made without analyzing marketplace data." }
          ].map((item, i) => (
            <div key={i} className="p-6 border border-gray-800 rounded-xl">
              <h4 className="font-semibold text-white mb-3">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section className="px-8 py-24 bg-black text-center">
        <h3 className="text-3xl font-bold mb-14">
          Our Marketplace Growth Solutions
        </h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-gray-300">
          {[
            { title: "Listing Optimization", desc: "SEO-driven product titles, keywords and images." },
            { title: "Advertising Strategy", desc: "Structured ads campaigns designed for ROAS." },
            { title: "Data Driven Growth", desc: "Analytics based scaling for revenue and profitability." }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-gray-800 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="px-8 py-24 bg-black text-center">

        <h3 className="text-3xl font-bold mb-16">
          HOW WE SCALE YOUR MARKETPLACE BUSINESS
        </h3>

        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto text-gray-300">
          {[
            { step: "01", title: "Audit & Analysis", desc: "Identify profit leaks and growth opportunities." },
            { step: "02", title: "Strategy Setup", desc: "Create a profit-focused roadmap." },
            { step: "03", title: "Optimization", desc: "Improve catalog, keywords and ads." },
            { step: "04", title: "Daily Monitoring", desc: "Continuous tracking of metrics." },
            { step: "05", title: "Scale & Expand", desc: "Data-driven scaling while protecting margins." }
          ].map((item, i) => (
            <div key={i} className="p-6 border border-gray-800 rounded-xl">
              <p className="text-gray-500 text-sm mb-2">{item.step}</p>
              <h4 className="font-semibold text-white mb-3">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ================= RESULTS ================= */}
      <section className="px-8 py-24 bg-zinc-950 text-center">

        <h3 className="text-3xl font-bold mb-16">REAL GROWTH. REAL RESULTS.</h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            { metric: "+120%", label: "Average Sales Growth", desc: "Within first 90 days." },
            { metric: "5X", label: "Advertising ROAS", desc: "Through ad restructuring." },
            { metric: "Daily", label: "Monitoring", desc: "Ensuring stable growth." }
          ].map((item, i) => (
            <div key={i} className="p-10 border border-gray-800 rounded-xl">
              <h4 className="text-4xl font-bold text-white mb-4">{item.metric}</h4>
              <p className="font-semibold mb-2">{item.label}</p>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="px-8 py-24 bg-black text-center">

        <h3 className="text-3xl font-bold mb-16">
          Marketplace Growth Case Examples
        </h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Beauty Brand", result: "2.3X Sales Growth", desc: "Listing optimization increased conversions." },
            { title: "Apparel Seller", result: "5X Ad ROAS", desc: "Ad structure improved profitability." },
            { title: "Electronics Seller", result: "+120% Traffic", desc: "Keyword strategy improved visibility." }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-gray-800 rounded-xl">
              <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
              <p className="text-2xl font-bold text-white mb-4">{item.result}</p>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="px-8 py-24 bg-black">

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
            <div key={i} className="p-8 border border-gray-800 rounded-xl">

              <h4 className="text-xl font-semibold mb-6">
                {pkg.title}
              </h4>

              <ul className="text-gray-400 space-y-2 text-sm">
                {pkg.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>

              <p className="mt-6 font-semibold text-white">
                {pkg.price}
              </p>

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
      <div key={i} className="p-8 border border-gray-800 rounded-xl hover:border-white hover:scale-[1.03] transition duration-300">

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
      <section id="contact" className="px-8 py-24 bg-zinc-950 text-center">

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
