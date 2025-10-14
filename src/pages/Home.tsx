import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import homeBg from '../assets/images/home.png'

function Home() {
  return (
    <section id="home" className="relative h-screen snap-start snap-always">
      {/* Background layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-zoom"
          style={{ backgroundImage: `url(${homeBg})` }}
        />
      </div>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main container with content */}
      <div className="main-container">
        <Hero />
      </div>
    </section>
  )
}

export default Home

