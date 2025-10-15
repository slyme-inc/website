import pageBg from '../assets/images/page-bg.png'
import webIcon from '../assets/images/web2.png'
import mobileIcon from '../assets/images/mobile.png'

function ServicesCards() {
  const services = [
    {
      title: "Web Development",
      icon: webIcon,
      description: "We craft modern, responsive web applications using cutting-edge technologies and best practices to deliver exceptional user experiences.",
      highlights: [
        "Full-stack web application development",
        "Custom CMS solutions",
        "Progressive Web Apps (PWA)",
        "API development and integration",
        "Performance optimization"
      ]
    },
    {
      title: "App Development",
      icon: mobileIcon,
      description: "We build cross-platform mobile applications that provide seamless experiences across all devices and platforms.",
      highlights: [
        "iOS and Android development",
        "Cross-platform solutions",
        "Real-time features integration",
        "Push notifications",
        "Offline functionality"
      ]
    }
  ]

  return (
    <>
      {/* Unified section: stacked on mobile, two-column on desktop */}
      <section className="relative min-h-screen md:h-screen md:snap-start md:snap-always">
        {/* Background layer */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${pageBg})` }}
          />
        </div>

        {/* Content */}
        <div className="main-container h-full flex items-center justify-center p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
            {services.map((service) => (
              <div 
                key={service.title}
                className="glass-effect card-hover rounded-2xl p-8 border border-white/10 flex flex-col items-center transition-all duration-300"
              >
                {/* Icon */}
                <div className={`${
                  service.title === "App Development" 
                    ? "w-40 h-40 md:w-52 md:h-52 -mt-4.5 mb-4.5" 
                    : "w-32 h-32 md:w-44 md:h-44 mb-8"
                }`}>
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-instrument text-[#97ca4d] mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 text-left md:text-left font-cooper mb-6 w-full">
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-3 md:space-y-2 text-white/80 font-cooper self-start">
                  {service.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#97ca4d] mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesCards
