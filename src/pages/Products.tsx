import pageBg from '../assets/images/page-bg.png'

function Products() {
  const product = {
    title: "Budgetfy (Stealth Mode)",
    description: "Budgetfy redefines how you plan travel. Powered by AI, it creates personalized, budget-conscious trip experiences—crafted exactly the way you like to explore.",
    highlights: [
      "AI-powered trip recommendations",
      "Personalized plans that match your vibe & budget",
      "Smart suggestions for destinations and activities"
    ]
  }

  return (
    <section id="products" className="relative min-h-screen md:h-screen md:snap-start md:snap-always py-44 md:py-0">
      {/* Background layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${pageBg})` }}
        />
      </div>

      {/* Content */}
      <div className="main-container h-full flex flex-col items-center justify-center p-6">
        <h2 className="text-white text-4xl font-instrument font-bold mb-12 text-center">
          Our <span className="text-[#97ca4d]">Products</span>
        </h2>

        {/* Wide Card */}
        <div className="glass-effect card-hover rounded-2xl p-10 border border-white/10 flex flex-col w-full max-w-4xl transition-all duration-300">
          {/* Title */}
          <h3 className="text-3xl font-instrument text-[#97ca4d] mb-6">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-white/90 text-left font-cooper text-lg mb-6">
            {product.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-4 text-white/80 font-cooper text-lg">
            {product.highlights.map((highlight, i) => (
              <li key={i} className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#97ca4d] mr-3"></span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Products

