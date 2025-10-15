import { useEffect, useState } from 'react'
import logo from '../assets/images/slyme-logo.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close on ESC and lock body scroll when open
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    if (isMenuOpen) {
      document.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId)
    
    // Special handling for features section
    let element = document.getElementById(sectionId)
    
    if (sectionId === 'features') {
      // Try desktop first, then mobile
      const desktopElement = document.getElementById('features')
      const mobileElement = document.getElementById('features-mobile')
      element = desktopElement || mobileElement
    }
    
    if (element) {
      // For snap scrolling, use instant scroll to avoid conflicts
      element.scrollIntoView({ 
        behavior: 'instant',
        block: 'start'
      })
    } else {
      console.error('Element not found:', sectionId)
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 pointer-events-none">
      <div className="main-container pointer-events-auto">
        <div className={`${isMenuOpen ? 'rounded-xl' : 'rounded-full'} px-4 md:px-8 ${isMenuOpen ? 'py-4' : 'py-2'} md:py-4 border border-white/10 glass-effect`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-200"
            >
              <img src={logo} alt="Slyme Logo" className="h-12 w-auto" />
            </button>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-white/90 hover:text-white transition-colors duration-200 font-instrument text-xl cursor-pointer">
                Services
              </button>
              <button onClick={() => scrollToSection('products')} className="text-white/90 hover:text-white transition-colors duration-200 font-instrument text-xl cursor-pointer">
                Products
              </button>
              <button onClick={() => scrollToSection('features')} className="text-white/90 hover:text-white transition-colors duration-200 font-instrument text-xl cursor-pointer">
                Features
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white/90 hover:text-white transition-colors duration-200 font-instrument text-xl cursor-pointer">
                Contact
              </button>
              
              {/* Get Started Button */}
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-[#97ca4d] text-black font-instrument font-semibold rounded-full hover:bg-gray-100 transition-all duration-200 text-xl cursor-pointer"
              >
                Get Started!
              </button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden flex flex-col gap-1 p-2 cursor-pointer"
            >
            <div className={`w-6 h-0.5 bg-white transition-transform duration-200 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-opacity duration-150 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-transform duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>
          </div>

          {/* Simple mobile dropdown (unified with outer glass, no inner box) */}
          <div className={`md:hidden mt-3 ${isMenuOpen ? 'block' : 'hidden'}`} aria-expanded={isMenuOpen}>
            <div className="p-6 pt-4 flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white/90 hover:text-white transition-colors duration-200 font-instrument text-xl text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-white/90 hover:text-white transition-colors duration-200 font-instrument text-xl text-left"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-white/90 hover:text-white transition-colors duration-200 font-instrument text-xl text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white/90 hover:text-white transition-colors duration-200 font-instrument text-xl text-left"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="mt-2 px-6 py-2 bg-[#97ca4d] text-black font-instrument font-semibold rounded-full hover:bg-gray-100 transition-all duration-200 text-xl text-left"
              >
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

