import Home from './pages/Home'
import Services from './pages/Services'
import ServicesCards from './pages/ServicesCards'
import Products from './pages/Products'
import Features from './pages/Features'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      {/* Sections with snap scrolling */}
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <Home />
        <Services />
        <ServicesCards />
        <Products />
        <Features />
        <Contact />
      </div>
    </>
  )
}

export default App
