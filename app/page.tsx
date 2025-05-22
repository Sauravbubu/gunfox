"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import StatsSection from "./components/StatsSection";
import servicesData from "./servicesData.json";
import emailjs from "emailjs-com";
import ServicesSection from "./components/Services";
export default function Home() {
  const [userType, setUserType] = useState("");
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 2450;
      setIsDarkBackground(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Variants for text animations
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Variants for container to stagger children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between child animations
      },
    },
  };
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
      className="py-20 md:py-32 px-4 md:px-6 font-sans relative overflow-hidden"
      style={{ backgroundColor: '#1a202c' }} // Dark background for the section (Tailwind gray-900 equivalent)
    >
      {/* CSS for animations - embedded directly */}
      <style>
        {`
        @keyframes float-1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, 15px) rotate(5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @keyframes float-2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-15px, -10px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 10s ease-in-out infinite;
        }
        `}
      </style>

      {/* Abstract shapes for subtle background effect (outside the card) */}
      <div
        className="absolute w-52 h-52 rounded-full filter blur-3xl opacity-30 z-0"
        style={{
          top: '-50px',
          left: '-50px',
          background: 'linear-gradient(135deg, #C084FC, #A855F7)',
        }}
      ></div>
      <div
        className="absolute w-64 h-64 rounded-full filter blur-3xl opacity-30 z-0"
        style={{
          bottom: '-50px',
          right: '-50px',
          background: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
        }}
      ></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-5xl mx-auto p-8 md:p-12 rounded-2xl shadow-lg relative z-10"
        style={{
          backgroundColor: 'rgba(45, 55, 72, 0.6)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* NEW SVG shapes for the card background - more organic and flowing */}
        <svg
          className="absolute top-1/4 left-[10%] w-40 h-40 opacity-15 z-0 animate-float-1"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="blurFilterInner">
              <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
            </filter>
          </defs>
          <path
            fill="#FF6347" /* Tomato Red */
            d="M57.6,-57.8C72.1,-43.8,79.5,-21.9,74.7,-1.8C69.9,18.3,52.8,36.5,33.5,49.1C14.2,61.7,-7.3,68.6,-28.3,64.4C-49.3,60.2,-69.8,44.8,-76.3,23.3C-82.8,1.8,-75.4,-25.9,-60.6,-40.4C-45.9,-54.9,-23,-62.2,-0.2,-62C22.6,-61.8,45.3,-58.5,57.6,-57.8Z"
            transform="translate(100 100)"
            filter="url(#blurFilterInner)"
          />
        </svg>
        <svg
          className="absolute top-1/2 right-[10%] w-48 h-48 opacity-15 z-0 animate-float-2"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'translateY(-50%)' }} /* Align vertically */
        >
          <defs>
            <filter id="blurFilterInner">
              <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
            </filter>
          </defs>
          <path
            fill="#3CB371" /* Medium Sea Green */
            d="M60.6,-49.6C75.3,-32.8,81.4,-3.3,73.4,20.8C65.3,44.9,43.2,64.6,18.9,71.2C-5.4,77.8,-31.8,71.3,-50.2,56.7C-68.6,42.1,-79.1,19.4,-73.9,-2.4C-68.7,-24.2,-47.9,-46.1,-25.2,-59.5C-2.4,-72.9,22.2,-77.8,40.6,-68.8Z"
            transform="translate(100 100)"
            filter="url(#blurFilterInner)"
          />
        </svg>
        <svg
          className="absolute bottom-[10%] left-1/2 w-36 h-36 opacity-15 z-0 animate-float-1"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'translateX(-50%)' }} /* Align horizontally */
        >
          <defs>
            <filter id="blurFilterInner">
              <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
            </filter>
          </defs>
          <path
            fill="#DA70D6" /* Orchid */
            d="M51.8,-49.5C62.9,-32.9,64.2,-5.9,57.8,17.4C51.3,40.7,37.1,60.2,18.7,68.1C0.2,76,-22.4,72.4,-39.8,60.6C-57.2,48.8,-69.3,28.8,-70.6,7.5C-71.9,-13.9,-62.4,-34.5,-47.7,-49.4C-33,-64.3,-16.5,-73.5,2.1,-74.6C20.7,-75.7,41.4,-68.7,51.8,-49.5Z"
            transform="translate(100 100)"
            filter="url(#blurFilterInner)"
          />
        </svg>


        <div className="grid gap-8 md:grid-cols-2 items-center text-center md:text-left relative z-20">
          {/* Main About Us content */}
          <motion.div variants={containerVariants}>
            <motion.h3
              variants={textVariants}
              className="text-4xl md:text-5xl font-semibold mb-6"
              style={{
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                backgroundImage: 'linear-gradient(to right, #63B3ED, #D6BCFA)',
              }}
            >
              About Us
            </motion.h3>
            <motion.p
              variants={textVariants}
              className="text-gray-200 text-lg md:text-xl leading-relaxed"
            >
              Avengers Media is dedicated to empowering both{' '}
              <strong>publishers and advertisers</strong> with innovative,
              performance-driven digital marketing solutions. Our data-centric
              approach ensures that <strong>advertisers maximize their gifts and gain the most benefit from exposure</strong>, while{' '}
              <strong>publishers get the most out of their valuable traffic</strong>, fostering meaningful connections with audiences through
              cutting-edge strategies and tools.
            </motion.p>
          </motion.div>

          {/* Mission and Vision section */}
          <motion.div variants={containerVariants} className="mt-8 md:mt-0 space-y-8">
            <motion.div>
              <motion.h3
                variants={textVariants}
                className="text-3xl md:text-4xl font-semibold mb-4"
                style={{
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  backgroundImage: 'linear-gradient(to right, #63B3ED, #D6BCFA)',
                }}
              >
                Our Mission
              </motion.h3>
              <motion.p
                variants={textVariants}
                className="text-gray-200 text-lg leading-relaxed"
              >
                Our mission is to drive mutual progress and enhance the success
                of both our publishing partners and advertising clients. We
                achieve this by delivering superior products and services that
                exceed expectations, ensuring maximized ROI for advertisers and
                optimal traffic monetization for publishers.
              </motion.p>
            </motion.div>
            <motion.div>
              <motion.h3
                variants={textVariants}
                className="text-3xl md:text-4xl font-semibold mb-4"
                style={{
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  backgroundImage: 'linear-gradient(to right, #63B3ED, #D6BCFA)',
                }}
              >
                Our Vision
              </motion.h3>
              <motion.p
                variants={textVariants}
                className="text-gray-200 text-lg leading-relaxed"
              >
                To be the leading innovator in digital marketing, constantly
                evolving our strategies and technologies to set new industry
                benchmarks. We aim to empower businesses by creating a
                synergistic ecosystem where publishers thrive on quality traffic
                and advertisers achieve unprecedented growth through impactful
                exposure.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>

      <ServicesSection />

      <AdvertiserSection />

      <PublisherSection />

      <StatsSection />

      <section id="contact" className="py-20 px-4 md:px-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg text-center font-sans">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Contact Us
          </h3>
          <p className="text-gray-700 text-lg md:text-xl">
            We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form
            className="space-y-6 text-left"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = Object.fromEntries(formData.entries());
              console.log("Form Data:", data);

              setTimeout(() => {
                alert("Your message has been sent successfully!");
                e.currentTarget.reset();
              }, 500);
            }}
          >
            <div className="space-y-4">
              <select
                name="user_type"
                required
                className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-900 placeholder:text-gray-500 transition-all duration-300 shadow-sm"
              >
                <option value="" className="text-gray-500" disabled>
                  I am a...
                </option>
                <option value="publisher" className="hover:bg-gray-100/80 focus:bg-gray-100/80 text-gray-900">
                  Publisher
                </option>
                <option value="advertiser" className="hover:bg-gray-100/80 focus:bg-gray-100/80 text-gray-900">
                  Advertiser
                </option>
              </select>

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-900 placeholder:text-gray-500 transition-all duration-300 shadow-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-900 placeholder:text-gray-500 transition-all duration-300 shadow-sm"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-900 placeholder:text-gray-500 transition-all duration-300 shadow-sm"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 text-gray-900 placeholder:text-gray-500 transition-all duration-300 resize-none shadow-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3.5 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg font-semibold text-lg"
            >
              Send Message
            </button>
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
            <p>Phone: +1 1111 11 111 1</p>
          </div>
        </div>
        <div className="border-t border-white/30 mt-8 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Avengers Media. All rights reserved.
        </div>
      </footer>
    </>
  );
}
