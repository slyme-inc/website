import homeBg from '../assets/images/home.png'

function Hero() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-zoom"
        style={{ backgroundImage: `url(${homeBg})` }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-white text-5xl font-instrument font-bold text-center">
            transform your ideas into <br /> digital reality
        </p>
      </div>
    </div>
  )
}

export default Hero

