import pageBg from '../assets/images/page-bg.png'
import Footer from '../components/Footer'

function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    const firstName = formData.get('firstName') || ''
    const lastName = formData.get('lastName') || ''
    const email = formData.get('email') || ''
    const message = formData.get('message') || ''
    
    // Create email content
    const subject = `Contact from ${firstName} ${lastName}`.trim()
    const body = `Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}`
    
    // Create mailto link
    const mailtoLink = `mailto:hislyme@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open mail app
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="relative h-screen snap-start snap-always">
      {/* Background layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${pageBg})` }}
        />
      </div>

      {/* Content */}
      <div className="main-container h-full flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Left Card - Contact Information */}
          <div className="bg-[#97ca4d] flex flex-col justify-center p-8 rounded-2xl">
            <div className="max-w-md">
              <h2 className="text-white text-3xl font-instrument font-bold mb-6">
                Contact information
              </h2>
              <p className="text-white text-lg font-cooper mb-8 leading-relaxed">
                Ready to start your next project? Get in touch with us today and let's build something amazing together.
              </p>
              <div className="flex items-center">
                <div className="text-white text-2xl mr-4 envelope-tilt">✉️</div>
                <a 
                  href="mailto:hislyme@gmail.com"
                  className="text-white text-lg font-cooper hover:text-gray-200 transition-colors duration-300"
                >
                  hislyme@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="glass-effect card-hover flex flex-col justify-center p-8 rounded-2xl border border-white/10 transition-all duration-300">
            <div className="max-w-md w-full">
              <h2 className="text-white text-3xl font-instrument font-bold mb-8">
                Send us a message
              </h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* First Name & Last Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-cooper mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="John"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#97ca4d] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-cooper mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Doe"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#97ca4d] transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white text-sm font-cooper mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#97ca4d] transition-colors duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white text-sm font-cooper mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#97ca4d] transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#97ca4d] text-white font-cooper font-bold py-3 px-6 rounded-lg hover:bg-[#7fb83d] transition-colors duration-300"
                >
                  Let's talk
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </section>
  )
}

export default Contact