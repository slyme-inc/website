import pageBg from '../assets/images/page-bg.png'
import LogoSlider from '../components/LogoSlider'

function Services() {
  return (
    <section id="services" className="relative h-screen snap-start snap-always flex flex-col">
      {/* Background layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${pageBg})` }}
        />
      </div>
      
      <div className="flex-1 flex flex-col items-center">
        {/* Main text centered vertically */}
        <div className="flex-1 flex flex-col justify-center items-center main-container">
          <p className="text-white text-4xl font-instrument text-center">
            We offer cutting-edge solutions in <br/><span className="text-[#97ca4d]">web development</span> <br/> and <br/><span className="text-[#97ca4d]">mobile applications.</span>
          </p>

          <div className="w-full mt-24">
            <LogoSlider />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Services

