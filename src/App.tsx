import Navbar from './components/Navbar'
import Hero from './components/Hero'
import homeBg from './assets/images/home.png'

function App() {

  return (
    <div className="relative">
      {/* Background layer - outside container */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-zoom"
          style={{ backgroundImage: `url(${homeBg})` }}
        />
      </div>
      
      {/* Navbar - has its own container inside */}
      <Navbar />
      
      {/* Main container with fixed width */}
      <div className="main-container">
        <Hero />
      </div>
    </div>
  )
}

export default App
