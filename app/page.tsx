"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md z-50 shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center font-serif">
          <h1 className="text-2xl font-bold text-black">Avengers Media</h1>
          <div className="space-x-6 text-lg text-black">
            <a href="#about" className="hover:text-gray-700">About</a>
            <a href="#services" className="hover:text-gray-700">Services</a>
            <a href="#blogs" className="hover:text-gray-700">Blog</a>
            <a href="#contact" className="hover:text-gray-700">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center backdrop-blur-md justify-center bg-white px-4 pt-24 font-serif">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-12 max-w-3xl text-center space-y-4" // Added space-y-4
        >
          <h2 className="hero-text-gradient text-6xl font-serif font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 animate-gradient">
            Digital solutions<br />
            according to your needs
          </h2>
          <h3 className="hero-text-gradient text-5xl font-serif font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600 animate-gradient">
            Growth <br /> marketing
          </h3>
          <button className="mt-2 px-6 py-3 bg-white text-purple-700 font-bold rounded-lg shadow-md hover:shadow-lg transition">QUOTE NOW</button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white text-center font-serif">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="text-4xl font-serif font-semibold mb-4">About Us</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We are Avengers Media — a result-oriented digital marketing agency specializing in SEO, PPC, branding, and content strategies.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gray-50 text-center font-serif">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="text-4xl font-serif font-semibold mb-12">Services</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {["SEO Optimization", "PPC Campaigns", "Social Media Strategy"].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-white shadow-sm border border-gray-200"
              >
                <h4 className="text-xl font-semibold mb-2">{service}</h4>
                <p className="text-gray-600">Grow your business through expert, tailored marketing services.</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="py-24 px-6 bg-gray-50 text-center font-serif">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="text-4xl font-serif font-semibold mb-12">Latest Blog Posts</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <h4 className="text-xl font-semibold mb-2">How SEO Drives Results</h4>
                <p className="text-gray-600">Discover how our SEO techniques lead to consistent online growth and engagement.</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white text-center font-serif">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="text-4xl font-serif font-semibold mb-4">Contact Us</h3>
          <p className="text-lg text-gray-600 mb-8">Let’s make business together! Improve your results with Avengers Media.</p>
          <form className="max-w-3xl mx-auto space-y-4 text-left">
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="Name" className="flex-1 px-4 py-3 border border-gray-300 rounded-md" />
              <input type="email" placeholder="Email" className="flex-1 px-4 py-3 border border-gray-300 rounded-md" />
            </div>
            <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-md" />
            <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md"></textarea>
            <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700">Send Message</button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-green-400 text-white py-12 px-6 font-serif">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-4">Avengers Media</h4>
            <p>
              Avengers Media is the perfect match between advanced technology and a team of experienced professionals specialized in digital marketing to grow your ROI and achieve real results.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-200"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-gray-200"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-gray-200"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-gray-200"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>• SEO Optimization</li>
              <li>• PPC Campaigns</li>
              <li>• Social Media Strategy</li>
              <li>• Content Marketing</li>
              <li>• Influencer Management</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">Company</h4>
            <p><strong>Email:</strong> info@avengersmedia.com</p>
            <p><strong>Phone:</strong> +1 234 567 8900</p>
            <p className="mt-4"><strong>Where?</strong></p>
            <ul className="space-y-1">
              <li>• 123 Stark Tower, NY, USA</li>
              <li>• 456 Shield St, London, UK</li>
              <li>• 789 Wakanda Rd, Johannesburg, SA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/30 mt-8 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Avengers Media. Website by YourCompanyName.
        </div>
      </footer>
    </>
  );
}