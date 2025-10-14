import logo from '../assets/images/slyme-logo.png'

function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 pointer-events-none">
      <div className="main-container pointer-events-auto">
        <div className="bg-black/60 backdrop-blur-lg rounded-full px-8 py-4 border border-white/10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Slyme Logo" className="h-12 w-auto" />
            </div>
            
            {/* Navigation Links */}
            <div className="flex items-center gap-8">
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
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

