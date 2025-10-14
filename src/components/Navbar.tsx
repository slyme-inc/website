import { useState } from 'react'
import logo from '../assets/images/slyme-logo.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 pointer-events-none">
      <div className="main-container pointer-events-auto">
        <div className="rounded-full px-4 md:px-8 py-2 md:py-4 border border-white/10 glass-effect">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Slyme Logo" className="h-12 w-auto" />
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-white/90 hover:text-white transition-colors duration-200 font-instrument text-xl">
                Services
              </a>
              <a href="#products" className="text-white/90 hover:text-white transition-colors duration-200 font-instrument text-xl">
                Products
              </a>
              <a href="#features" className="text-white/90 hover:text-white transition-colors duration-200 font-instrument text-xl">
                Features
              </a>
              <a href="#contact" className="text-white/90 hover:text-white transition-colors duration-200 font-instrument text-xl">
                Contact
              </a>
              
              {/* Get Started Button */}
              <button className="px-6 py-2 bg-[#97ca4d] text-black font-instrument font-semibold rounded-full hover:bg-gray-100 transition-all duration-200 text-xl">
                Get Started!
              </button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden flex flex-col gap-1 p-2"
            >
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden mt-4 transition-all duration-300 ${isMenuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            <div className="flex flex-col items-center gap-4 py-4">
              <a 
                href="#services" 
                className="text-white/90 hover:text-white transition-colors duration-200 font-instrument text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#products" 
                className="text-white/90 hover:text-white transition-colors duration-200 font-instrument text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#features" 
                className="text-white/90 hover:text-white transition-colors duration-200 font-instrument text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#contact" 
                className="text-white/90 hover:text-white transition-colors duration-200 font-instrument text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              
              {/* Mobile Get Started Button */}
              <button className="px-6 py-2 bg-[#97ca4d] text-black font-instrument font-semibold rounded-full hover:bg-gray-100 transition-all duration-200 text-xl">
                Get Started!
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

