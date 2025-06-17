"use client";

import React, { useState, useEffect } from 'react';
import { Briefcase, Code, Users, Mail, Phone, MapPin, Menu, X, ChevronRight, Sun, Moon, Lightbulb, TrendingUp, Handshake, Award, Target, LayoutGrid, Rocket, Zap, Leaf, Laptop, Megaphone, DollarSign } from 'lucide-react';
import heroBg from '../public/hero-bg.jpg'; // Adjust the path as necessary
import Image from 'next/image';
// Main App component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect to apply or remove 'dark' class on the documentElement (html tag)
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    // Apply dark mode classes conditionally to the main container
    <div className="min-h-screen bg-gray-950 text-gray-200 dark:bg-gray-50 dark:text-gray-800 font-sans antialiased">
      {/* Navbar */}
      <header className="fixed w-full z-50 bg-gray-950 bg-opacity-90 shadow-lg py-4 dark:bg-gray-100 dark:bg-opacity-90 transition-colors duration-300 ease-in-out">
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Gnufox Logo Placeholder - replace with actual SVG/Image */}
            {/* Example: <img src="/path/to/your/gnufox-logo.svg" alt="Gnufox Logo" className="h-8 w-auto" /> */}
            <span className="text-3xl font-bold text-emerald-400 dark:text-emerald-600 font-elegant">Gnufox</span>
            <span className="text-xl text-gray-400 dark:text-gray-600">Consultancy</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-gray-300 hover:text-emerald-400 dark:text-gray-700 dark:hover:text-emerald-600 transition duration-300">Home</a>
            <a href="#about" className="text-gray-300 hover:text-emerald-400 dark:text-gray-700 dark:hover:text-emerald-600 transition duration-300">About Us</a>
            <a href="#services" className="text-gray-300 hover:text-emerald-400 dark:text-gray-700 dark:hover:text-emerald-600 transition duration-300">Services</a>
            <a href="#process" className="text-gray-300 hover:text-emerald-400 dark:text-gray-700 dark:hover:text-emerald-600 transition duration-300">Process</a>
            <a href="#testimonials" className="text-gray-300 hover:text-emerald-400 dark:text-gray-700 dark:hover:text-emerald-600 transition duration-300">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-emerald-400 dark:text-gray-700 dark:hover:text-emerald-600 transition duration-300">Contact</a>
            {/* Dark/Light mode toggle button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="ml-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 dark:bg-gray-300 dark:hover:bg-gray-400 text-gray-200 dark:text-gray-800 transition duration-300 focus:outline-none"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            {/* Dark/Light mode toggle button for mobile */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="mr-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 dark:bg-gray-300 dark:hover:bg-gray-400 text-gray-200 dark:text-gray-800 transition duration-300 focus:outline-none"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleMenu} className="text-gray-300 hover:text-emerald-400 dark:text-gray-700 dark:hover:text-emerald-600 focus:outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-95 py-4 px-6 text-center shadow-inner dark:bg-gray-200 dark:bg-opacity-95 transition-colors duration-300 ease-in-out">
            <a href="#home" onClick={toggleMenu} className="block py-2 text-gray-300 hover:text-emerald-400 dark:text-gray-700 dark:hover:text-emerald-600 transition duration-300 text-lg">Home</a>
            <a href="#about" onClick={toggleMenu} className="block py-2 text-gray-300 hover:text-emerald-400 dark:text-gray-700 dark:hover:text-emerald-600 transition duration-300 text-lg">About Us</a>
            <a href="#services" onClick={toggleMenu} className="block py-2 text-gray-300 hover:text-emerald-400 dark:text-gray-700 dark:hover:text-emerald-600 transition duration-300 text-lg">Services</a>
            <a href="#process" onClick={toggleMenu} className="block py-2 text-gray-300 hover:text-emerald-400 dark:text-gray-700 dark:hover:text-emerald-600 transition duration-300 text-lg">Process</a>
            <a href="#testimonials" onClick={toggleMenu} className="block py-2 text-gray-300 hover:text-emerald-400 dark:text-gray-700 dark:hover:text-emerald-600 transition duration-300 text-lg">Testimonials</a>
            <a href="#contact" onClick={toggleMenu} className="block py-2 text-gray-300 hover:text-emerald-400 dark:text-gray-700 dark:hover:text-emerald-600 transition duration-300 text-lg">Contact</a>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden perspective-1000">
          {/* Background image for Hero section */}
          <Image
            src="/hero-bg.jpg"
            alt="Abstract tech background"
            layout="fill"
            objectFit="cover"
            className="opacity-30 dark:opacity-20 transition-opacity duration-300 animate-zoom-in z-0"
          />
          {/* <img
            src={heroBg}
            alt="Abstract tech background"
            className="absolute inset-0 z-0 w-full h-full object-cover opacity-30 dark:opacity-20 transition-opacity duration-300 animate-zoom-in"
            // You can add an onerror handler for production images if needed
            // onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1920x1080/000000/FFFFFF?text=Image+Load+Error'; }}
          /> */}
          {/* Background animation/gradient */}
          {/* <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-950 to-indigo-900 opacity-90 dark:from-blue-200 dark:to-indigo-300 dark:opacity-90 transition-colors duration-300"></div> */}
<div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-950 to-indigo-900 opacity-0 dark:from-blue-200 dark:to-indigo-300 dark:opacity-40 transition-colors duration-300"></div>

          {/* Animated Blob Elements - now with more varied movement */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div className="w-96 h-96 rounded-full bg-blue-600 opacity-10 blur-3xl animate-blob -top-10 left-10 dark:bg-blue-300 animation-delay-0"></div>
            <div className="w-96 h-96 rounded-full bg-emerald-500 opacity-10 blur-3xl animate-blob animation-delay-2000 top-20 right-10 dark:bg-emerald-300 animation-speed-slow"></div>
            <div className="w-96 h-96 rounded-full bg-purple-600 opacity-10 blur-3xl animate-blob animation-delay-4000 bottom-10 left-10 dark:bg-purple-300 animation-speed-medium"></div>
            <div className="w-80 h-80 rounded-full bg-orange-400 opacity-8 blur-3xl animate-blob-reverse animation-delay-1000 top-50 left-50 dark:bg-orange-300 animation-speed-fast"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto transform-gpu animate-hero-text">
            <h1 className="text-5xl md:text-7xl font-elegant font-extrabold leading-tight text-white dark:text-gray-900 mb-6">
              Innovate. Transform. Succeed.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 dark:text-gray-700 mb-10">
              Your trusted partner in navigating the complex world of technology,
              delivering cutting-edge solutions for a digital future.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full shadow-lg hover:from-emerald-600 hover:to-teal-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get a Free Consultation
              <ChevronRight className="ml-2" size={20} />
            </a>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 bg-gray-900 dark:bg-gray-100 px-6 transition-colors duration-300 ease-in-out">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-elegant font-bold text-center text-emerald-400 dark:text-emerald-600 mb-12">About Gnufox</h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                {/* Replaced icon with a placeholder image for 'About Us' */}
                <img
                  src="https://placehold.co/600x400/1f2937/d3d3d3?text=Our+Team"
                  alt="Our professional team"
                  className="rounded-2xl shadow-lg w-full h-auto object-cover transition-all duration-300 transform hover:scale-102"
                />
              </div>
              <div className="md:w-1/2 text-lg leading-relaxed text-gray-300 dark:text-gray-700">
                <p className="mb-4">
                  At <span className="font-semibold text-white dark:text-gray-900">Gnufox</span>, we are more than just a tech consultancy; we are your strategic innovation partners.
                  Founded on the principles of excellence, integrity, and forward-thinking, we empower businesses to thrive in the rapidly evolving digital landscape.
                </p>
                <p className="mb-4">
                  Our team of seasoned experts specializes in transforming complex challenges into seamless,
                  high-impact technological solutions. From initial strategy to implementation and ongoing support,
                  we are committed to delivering measurable results that drive growth and efficiency.
                </p>
                <p>
                  We believe in building lasting relationships with our clients, understanding their unique needs,
                  and co-creating a future where technology serves as a powerful catalyst for success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="py-20 bg-gray-950 dark:bg-gray-50 px-6 transition-colors duration-300 ease-in-out">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-elegant font-bold text-center text-emerald-400 dark:text-emerald-600 mb-12">Why Choose Gnufox?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-900 rounded-2xl shadow-xl p-6 text-center border border-gray-800 hover:border-emerald-500 dark:bg-gray-100 dark:border-gray-200 dark:hover:border-emerald-600 transition duration-300 transform hover:-translate-y-2">
                <Lightbulb className="text-teal-400 dark:text-teal-600 mb-4 mx-auto" size={48} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">Unmatched Expertise</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">Our team comprises industry veterans and innovators with deep domain knowledge.</p>
              </div>
              <div className="bg-gray-900 rounded-2xl shadow-xl p-6 text-center border border-gray-800 hover:border-emerald-500 dark:bg-gray-100 dark:border-gray-200 dark:hover:border-emerald-600 transition duration-300 transform hover:-translate-y-2">
                <TrendingUp className="text-indigo-400 dark:text-indigo-600 mb-4 mx-auto" size={48} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">Innovation Driven</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">We are always at the forefront of emerging technologies, bringing you future-proof solutions.</p>
              </div>
              <div className="bg-gray-900 rounded-2xl shadow-xl p-6 text-center border border-gray-800 hover:border-emerald-500 dark:bg-gray-100 dark:border-gray-200 dark:hover:border-emerald-600 transition duration-300 transform hover:-translate-y-2">
                <Handshake className="text-purple-400 dark:text-purple-600 mb-4 mx-auto" size={48} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">Client-Centric Approach</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">Your success is our priority. We tailor every solution to your unique business goals.</p>
              </div>
              <div className="bg-gray-900 rounded-2xl shadow-xl p-6 text-center border border-gray-800 hover:border-emerald-500 dark:bg-gray-100 dark:border-gray-200 dark:hover:border-emerald-600 transition duration-300 transform hover:-translate-y-2">
                <Award className="text-red-400 dark:text-red-600 mb-4 mx-auto" size={48} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">We have a track record of delivering tangible, impactful results for diverse businesses.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-900 dark:bg-gray-100 px-6 transition-colors duration-300 ease-in-out">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-elegant font-bold text-center text-emerald-400 dark:text-emerald-600 mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {/* Service Card 1: Environment Engineering */}
              <div className="bg-gray-950 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-800 hover:border-teal-500 dark:bg-gray-50 dark:border-gray-200 dark:hover:border-emerald-600 transition duration-300 transform hover:scale-105">
                <Leaf className="text-teal-400 dark:text-teal-600 mb-6" size={60} strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold text-white dark:text-gray-900 mb-4">Environment Engineering</h3>
                <p className="text-gray-400 dark:text-gray-600 leading-relaxed">
                  Sustainable solutions for environmental challenges, leveraging technology for a greener future.
                </p>
              </div>
              {/* Service Card 2: IT Strategy & Product development */}
              <div className="bg-gray-950 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-800 hover:border-teal-500 dark:bg-gray-50 dark:border-gray-200 dark:hover:border-emerald-600 transition duration-300 transform hover:scale-105">
                <Laptop className="text-indigo-400 dark:text-indigo-600 mb-6" size={60} strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold text-white dark:text-gray-900 mb-4">IT Strategy & Product Development</h3>
                <p className="text-gray-400 dark:text-gray-600 leading-relaxed">
                  Crafting robust IT strategies and developing innovative products from concept to launch.
                </p>
              </div>
              {/* Service Card 3: Media and advertisement */}
              <div className="bg-gray-950 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-800 hover:border-teal-500 dark:bg-gray-50 dark:border-gray-200 dark:hover:border-emerald-600 transition duration-300 transform hover:scale-105">
                <Megaphone className="text-purple-400 dark:text-purple-600 mb-6" size={60} strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold text-white dark:text-gray-900 mb-4">Media and Advertisement</h3>
                <p className="text-gray-400 dark:text-gray-600 leading-relaxed">
                  Creative and data-driven media and advertising strategies for maximum impact and reach.
                </p>
              </div>
              {/* Service Card 4: Business Development and startup funding support */}
              <div className="bg-gray-950 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-800 hover:border-teal-500 dark:bg-gray-50 dark:border-gray-200 dark:hover:border-emerald-600 transition duration-300 transform hover:scale-105">
                <DollarSign className="text-red-400 dark:text-red-600 mb-6" size={60} strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold text-white dark:text-gray-900 mb-4">Business Development & Startup Funding Support</h3>
                <p className="text-gray-400 dark:text-gray-600 leading-relaxed">
                  Strategic business growth and comprehensive support for startup funding and expansion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section id="process" className="py-20 bg-gray-950 dark:bg-gray-50 px-6 transition-colors duration-300 ease-in-out">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-elegant font-bold text-center text-emerald-400 dark:text-emerald-600 mb-12">Our Collaborative Process</h2>
            <div className="relative flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-8">
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-700 dark:bg-gray-300 z-0 transform -translate-y-1/2"></div>

              {/* Process Step 1 */}
              <div className="relative z-10 w-full md:w-1/4 flex flex-col items-center text-center bg-gray-900 dark:bg-gray-100 rounded-2xl shadow-lg p-6 border border-gray-800 dark:border-gray-200 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center mb-4 text-white font-bold text-2xl shadow-md">1</div>
                <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">Discovery & Strategy</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">Understanding your vision, challenges, and defining clear objectives.</p>
              </div>
              {/* Process Step 2 */}
              <div className="relative z-10 w-full md:w-1/4 flex flex-col items-center text-center bg-gray-900 dark:bg-gray-100 rounded-2xl shadow-lg p-6 border border-gray-800 dark:border-gray-200 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center mb-4 text-white font-bold text-2xl shadow-md">2</div>
                <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">Design & Planning</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">Crafting detailed architectures, UX/UI designs, and project roadmaps.</p>
              </div>
              {/* Process Step 3 */}
              <div className="relative z-10 w-full md:w-1/4 flex flex-col items-center text-center bg-gray-900 dark:bg-gray-100 rounded-2xl shadow-lg p-6 border border-gray-800 dark:border-gray-200 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center mb-4 text-white font-bold text-2xl shadow-md">3</div>
                <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">Development & Iteration</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">Building robust solutions with agile methodologies and continuous feedback.</p>
              </div>
              {/* Process Step 4 */}
              <div className="relative z-10 w-full md:w-1/4 flex flex-col items-center text-center bg-gray-900 dark:bg-gray-100 rounded-2xl shadow-lg p-6 border border-gray-800 dark:border-gray-200 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center mb-4 text-white font-bold text-2xl shadow-md">4</div>
                <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">Launch & Optimization</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">Seamless deployment and ongoing support, monitoring, and performance optimization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-900 dark:bg-gray-100 px-6 transition-colors duration-300 ease-in-out">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-elegant font-bold text-center text-emerald-400 dark:text-emerald-600 mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial Card 1 */}
              <div className="bg-gray-950 rounded-2xl shadow-xl p-8 border border-gray-800 dark:bg-gray-50 dark:border-gray-200 transition-colors duration-300">
                <p className="text-gray-300 dark:text-gray-700 italic mb-6">
                  "Gnufox transformed our outdated systems into a streamlined, efficient powerhouse. Their expertise and dedication were unparalleled."
                </p>
                <div className="flex items-center">
                  {/* Placeholder profile image for testimonial */}
                  <img
                    src="https://placehold.co/48x48/7e7e7e/ffffff?text=AB"
                    alt="Alice Brown profile"
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white dark:text-gray-900">Alice Brown</p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">CEO, Tech Solutions Inc.</p>
                  </div>
                </div>
              </div>
              {/* Testimonial Card 2 */}
              <div className="bg-gray-950 rounded-2xl shadow-xl p-8 border border-gray-800 dark:bg-gray-50 dark:border-gray-200 transition-colors duration-300">
                <p className="text-gray-300 dark:text-gray-700 italic mb-6">
                  "The strategic insights provided by Gnufox were invaluable. They helped us navigate complex challenges with clarity and confidence."
                </p>
                <div className="flex items-center">
                  {/* Placeholder profile image for testimonial */}
                  <img
                    src="https://placehold.co/48x48/7e7e7e/ffffff?text=CJ"
                    alt="Chris Johnson profile"
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white dark:text-gray-900">Chris Johnson</p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">CTO, Global Innovations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-950 dark:bg-gray-50 px-6 transition-colors duration-300 ease-in-out">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-elegant font-bold text-center text-emerald-400 dark:text-emerald-600 mb-12">Get In Touch</h2>
            <div className="flex flex-col md:flex-row md:space-x-12 items-start">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <p className="text-lg text-gray-300 dark:text-gray-700 mb-6">
                  Ready to transform your business with cutting-edge technology solutions?
                  Contact us today for a personalized consultation.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center text-gray-300 dark:text-gray-700">
                    <Mail className="text-emerald-400 dark:text-emerald-600 mr-4" size={24} />
                    <a href="mailto:info@gnufox.in" className="hover:text-white dark:hover:text-gray-900 transition duration-300">info@gnufox.in</a>
                  </div>
                  <div className="flex items-center text-gray-300 dark:text-gray-700">
                    <Phone className="text-emerald-400 dark:text-emerald-600 mr-4" size={24} />
                    <span>+91 12345 67890</span> {/* Placeholder phone number */}
                  </div>
                  <div className="flex items-center text-gray-300 dark:text-gray-700">
                    <MapPin className="text-emerald-400 dark:text-emerald-600 mr-4" size={24} />
                    <span>Brahmapur, Odisha, India</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <form className="space-y-6 bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 dark:bg-gray-200 dark:border-gray-300 transition-colors duration-300">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 dark:text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-900 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-50 transition-colors duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 dark:text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-900 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-50 transition-colors duration-300"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 dark:text-gray-700 text-sm font-bold mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-900 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-50 resize-none transition-colors duration-300"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg shadow-lg hover:from-emerald-600 hover:to-teal-700 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 text-center text-gray-500 border-t border-gray-800 dark:bg-gray-50 dark:text-gray-500 dark:border-gray-200 px-6 transition-colors duration-300 ease-in-out">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Gnufox. All rights reserved.</p>
          <p className="mt-2 text-sm">Innovate. Transform. Succeed.</p>
        </div>
      </footer>
    </div>
  );
}
