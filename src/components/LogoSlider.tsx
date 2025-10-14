import react from '../assets/images/SlidingLogos/react.png'
import prisma from '../assets/images/SlidingLogos/prisma.png'
import postgres from '../assets/images/SlidingLogos/postgres.png'

function LogoSlider() {
  const logos = [
    { src: react, alt: 'React' },
    { src: prisma, alt: 'Prisma' },
    { src: postgres, alt: 'PostgreSQL' },
  ]

  // Duplicate logos multiple times to ensure full width coverage
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <div className="w-full overflow-hidden bg-black/30 pb-8 relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
      
      <div className="fixed-width-container">
        <div className="logo-slider flex gap-24 items-center">
          {/* First set of logos */}
          {repeatedLogos.map((logo, index) => (
            <img
              key={`logo-1-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-150"
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {repeatedLogos.map((logo, index) => (
            <img
              key={`logo-2-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-150"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoSlider
