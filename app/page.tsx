"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import StatsSection from "./components/StatsSection";
import servicesData from "./servicesData.json";
import ServicesSection from "./components/Services";
export default function Home() {
  const [userType, setUserType] = useState("");
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 750;
      setIsDarkBackground(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use the improved AdvertiserSection and PublisherSection
    const AdvertiserSection = () => (
        <section id="advertiser" className="py-16 md:py-24 px-4 md:px-6 bg-white text-center font-sans">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="space-y-4 md:space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-semibold text-blue-600">Advertiser</h3>
              <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto">
                Partner with Avengers Media for future-ready marketing. We invest in robust tech and media channels to connect you with high-intent audiences. Our continuous innovation in platforms and models ensures your brand remains competitive and impactful.
              </p>
               <div className="mt-8">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                    Get Started
                </button>
               </div>
            </motion.div>
          </div>
        </section>
    );

    const PublisherSection = () => (
      <section id="publisher" className="py-16 md:py-24 px-4 md:px-6 bg-gray-50 font-sans">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Animation on the Left (for demonstration purposes) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex items-center justify-center" // Center content in the left column
          >
              {/* Replace this with your actual animation or image */}
              <div className="w-full max-w-[400px] h-auto">
                {/* Placeholder Illustration - Replace with a more relevant image */}
                <img
                  src="https://images.unsplash.com/photo-1580829336415-591c5488ba04?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Marketing and Growth Illustration"
                  className="rounded-lg shadow-lg"
                />
              </div>
          </motion.div>
  
          {/* Publisher Content on the Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            className="text-center md:text-left space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-semibold text-green-600">Publisher</h3>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl">
              Why choose Avengers Media as your monetization partner?
            </p>
            <div className="">
              <ul className="list-none pl-0 space-y-4 text-gray-700 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-5 w-5 rounded-full bg-green-500 flex-shrink-0"></span>
                  <span>Access to worldwide campaigns with substantial budgets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-5 w-5 rounded-full bg-green-500 flex-shrink-0"></span>
                  <span>Integrated MMP tracking for all campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-5 w-5 rounded-full bg-green-500 flex-shrink-0"></span>
                  <span>Prompt validation and timely payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-5 w-5 rounded-full bg-green-500 flex-shrink-0"></span>
                  <span>24/7 assistance via team, email, and calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-5 w-5 rounded-full bg-green-500 flex-shrink-0"></span>
                  <span>Flexible and convenient payment terms</span>
                </li>
              </ul>
             </div>
              <div className="mt-8">
                  <button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                      Partner With Us
                  </button>
              </div>
          </motion.div>
        </div>
      </section>
      );
  


  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md z-50 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex flex-wrap justify-between items-center font-sans">
          <div className="px-3 py-1">
            <img
              src={isDarkBackground ? "/avengers_media_black_text.png" : "/avengers_media_white_text.png"}
              alt="Logo"
              className="h-8 md:h-10 w-auto transition duration-300"
            />
          </div>

          {/* Hamburger button for mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div
            className={`w-full md:w-auto mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6 flex flex-col md:flex-row md:items-center text-[17px] font-medium tracking-wide ${isDarkBackground ? "text-gray-800" : "text-white"} ${menuOpen ? "flex" : "hidden"} md:flex`}
          >
            <a href="#" className="hover:text-gray-300 transition">Home</a>
            <a href="#about" className="hover:text-gray-300 transition">About</a>
            <a href="#services" className="hover:text-gray-300 transition">Services</a>
            <a href="#advertiser" className="hover:text-gray-300 transition">Advertiser</a>
            <a href="#publisher" className="hover:text-gray-300 transition">Publisher</a>
            <a href="#contact" className="hover:text-gray-300 transition">Contact Us</a>
            <a
              href="#join"
              className="text-pink-400 hover:text-pink-300 transition font-semibold"
            >
              Join Us
            </a>
          </div>
        </nav>

      </header>

      <section
        className="min-h-screen flex items-center justify-center px-4 pt-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-1.svg')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="bg-black/50 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl px-6 md:px-10 py-10 md:py-14 max-w-4xl text-center text-white"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            Customized Growth<br />Marketing Solutions
          </h2>
          <p className="mt-6 text-lg md:text-xl font-light text-gray-200">
            Built for <span className="font-semibold text-white">Scalability</span> and <span className="font-semibold text-white">Impact</span>
          </p>
          <a href="#contact">
            <button className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              GET A QUOTE
            </button>
          </a>
        </motion.div>
      </section>

      <section
        id="about"
        className="py-20 md:py-32 px-4 md:px-6 bg-white text-[#1E1A49] font-sans"
      >
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 items-center">
          <h3 className="text-4xl md:text-5xl font-semibold text-left">About Us</h3>
          <p className="text-base md:text-lg text-left md:text-right leading-relaxed">
            Avengers Media is committed to providing innovative, performance-driven digital marketing solutions for modern businesses. Our data-centric approach empowers brands to connect meaningfully with their audiences while maximizing ROI through cutting-edge strategies and tools.
          </p>
        </div>
      </section>

      <ServicesSection />

      <AdvertiserSection />

      <PublisherSection />

      <StatsSection />

      <section id="contact" className="py-20 px-4 md:px-6 bg-white text-center font-sans">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">Contact Us</h3>
          <form className="max-w-3xl mx-auto space-y-4 text-left">
            <select value={userType} onChange={(e) => setUserType(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-md">
              <option value="">I am a...</option>
              <option value="publisher">Publisher</option>
              <option value="advertiser">Advertiser</option>
            </select>
            <input type="text" placeholder="Name" className="w-full px-4 py-3 border border-gray-300 rounded-md" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded-md" />
            <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-md" />
            <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md"></textarea>
            <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700">Send Message</button>
          </form>
        </motion.div>
      </section>

      <section id="join" className="py-20 px-4 md:px-6 bg-gray-50 text-center font-sans">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">Join Us</h3>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Become part of our growing network. Whether you're an advertiser looking to boost visibility or a publisher ready to monetize, Avengers Media is here for you.
          </p>
          <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700">
            Get Started
          </button>
        </motion.div>
      </section>

      <footer className="bg-green-400 text-white py-12 px-4 md:px-6 font-sans">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-xl md:text-2xl font-bold mb-4">Avengers Media</h4>
            <p>
              Avengers Media is your partner for forward-thinking digital campaigns driven by data and creativity.
            </p>
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>• Performance Marketing</li>
              <li>• Campaign Intelligence</li>
              <li>• Mobile Engagement</li>
              <li>• Anti-Fraud Systems</li>
              <li>• Real-time Insights</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-bold mb-4">Contact</h4>
            <p>Email: hello@avengersmedia.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        <div className="border-t border-white/30 mt-8 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Avengers Media. All rights reserved.
        </div>
      </footer>
    </>
  );
}
