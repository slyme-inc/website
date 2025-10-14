import pageBg from '../assets/images/page-bg.png'

function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Fast Development",
      description: "We deliver high-quality projects on time and within budget, ensuring rapid deployment without compromising on quality."
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Built with security best practices and robust architecture, ensuring your applications are protected and stable."
    },
    {
      icon: "🕐",
      title: "24/7 Support",
      description: "Round-the-clock support and maintenance for your applications, ensuring continuous operation and quick issue resolution."
    },
    {
      icon: "👤",
      title: "User-Centric",
      description: "Focus on creating intuitive and engaging user experiences that delight your customers and drive business growth."
    }
  ]

  return (
    <>
      {/* On mobile: 2 cards per screen */}
      <div className="md:hidden">
        {[0, 2].map((startIndex) => (
          <section 
            key={startIndex}
            id={`features-${startIndex === 0 ? 'first' : 'second'}`} 
            className="relative h-screen snap-start snap-always"
          >
            {/* Background layer */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${pageBg})` }}
              />
            </div>

            {/* Content */}
            <div className="main-container h-full flex flex-col items-center justify-center p-6">
              {/* Header - only show on first page */}
              {startIndex === 0 && (
                <div className="text-center mb-8">
                  <p className="text-[#97ca4d] text-sm font-cooper-bold uppercase tracking-wider">
                    WHY CHOOSE US
                  </p>
                  <h2 className="text-white text-3xl font-instrument font-bold mb-2">
                    Better solutions for your business
                  </h2>
                  <p className="text-white/80 text-base font-cooper">
                    We combine technical expertise with creative innovation to deliver exceptional results
                  </p>
                </div>
              )}

              {/* Features Grid - 2 cards */}
              <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
                {features.slice(startIndex, startIndex + 2).map((feature, index) => (
                  <div 
                    key={startIndex + index}
                    className="glass-effect card-hover rounded-2xl p-6 border border-white/10 flex flex-col transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="text-3xl mb-3">
                      {feature.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-lg font-instrument font-bold mb-2">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 font-cooper text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* On desktop: All 4 cards in one screen */}
      <section className="relative h-screen snap-start snap-always hidden md:block">
        {/* Background layer */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${pageBg})` }}
          />
        </div>

        {/* Content */}
        <div className="main-container h-full flex flex-col items-center justify-center p-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#97ca4d] text-sm font-cooper-bold uppercase tracking-wider mb-4">
              WHY CHOOSE US
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-instrument font-bold mb-6">
              Better solutions for your business
            </h2>
            <p className="text-white/80 text-lg font-cooper max-w-2xl mx-auto">
              We combine technical expertise with creative innovation to deliver exceptional results
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-effect card-hover rounded-2xl p-6 border border-white/10 flex flex-col transition-all duration-300"
              >
                {/* Icon */}
                <div className="text-4xl mb-4">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-instrument font-bold mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 font-cooper text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
