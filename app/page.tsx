"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Briefcase, Code, Users, Mail, Phone, MapPin, Menu, X, ChevronRight, Sun, Moon, Lightbulb, TrendingUp, Handshake, Award, Target, LayoutGrid, Rocket, Zap, Leaf, Laptop, Megaphone, DollarSign, ArrowUp } from 'lucide-react';
import * as THREE from 'three';
import AnimatedShape from './components/3dshape';
import Card3DEffect from './components/3dCard';
type CardData = {
  title: string;
  description: string;
  color?: string; // card background
  textColor?: string; // title and description color
};

const serviceCards: CardData[] = [
  {
    title: 'Environment Engineering',
    description: 'Sustainable solutions for environmental challenges, leveraging technology for a greener future.',
    color: '#0f172a', // Tailwind gray-950
    textColor: '#ffffff', // Tailwind white
  },
  {
    title: 'IT Strategy & Product Development',
    description: 'Crafting robust IT strategies and developing innovative products from concept to launch.',
    color: '#0f172a',
    textColor: '#ffffff', 
  },
  {
    title: 'Media and Advertisement',
    description: 'Creative and data-driven media and advertising strategies for maximum impact and reach.',
    color: '#0f172a',
    textColor: '#ffffff',
  },
  {
    title: 'Business Development & Funding',
    description: 'Strategic growth and comprehensive support for startup funding and expansion.',
    color: '#0f172a',
    textColor: '#ffffff',
  }
];


// Main App component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [activeSection, setActiveSection] = useState('home'); // State for active section
  const [showScrollToTop, setShowScrollToTop] = useState(false); // State for scroll-to-top button
  const [formStatus, setFormStatus] = useState(''); // State for contact form messages

  // Refs for each section to observe their visibility
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    process: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
  };

  // Ref for the 3D canvas
  const canvasRef = useRef(null);
  const servicesCanvasRef = useRef(null);

  // Three.js variables
  const scene = useRef(null);
  const camera = useRef(null);
  const renderer = useRef(null);
  const objects = useRef([]); // Array to hold 3D objects
  const mouse = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Effect to apply or remove 'dark' class on the documentElement (html tag)
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Effect to observe sections for active link highlighting
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '-50% 0px -50% 0px', // When section midpoint is in viewport
      threshold: 0, // No threshold needed, as rootMargin defines the active area
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Attach observer to each section
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Clean up observer on component unmount
    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []); // Empty dependency array means this runs once on mount

  // Effect to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after scrolling 300px
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle contact form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus(''); // Clear previous status

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      setFormStatus('Please fill in all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormStatus('Please enter a valid email address.');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', { name, email, message });
    setFormStatus('Message sent successfully! We will get back to you soon.');

    // Clear form fields
    e.target.reset();

    // Optionally clear status message after a few seconds
    setTimeout(() => {
      setFormStatus('');
    }, 5000);
  };

  // Helper function to render navbar links with active state
  const renderNavLink = (id, text) => (
    <a
      href={`#${id}`}
      onClick={() => { setActiveSection(id); toggleMenu(); }} // Update active and close menu on click
      className={`relative group px-2 py-1 rounded-md transition duration-300
        ${activeSection === id
          ? 'text-orange-400 dark:text-orange-600 font-semibold before:scale-x-100 before:bg-orange-400 dark:before:bg-orange-600'
          : 'text-gray-300 hover:text-orange-400 dark:text-gray-700 dark:hover:text-orange-600'
        }
        before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-transparent before:scale-x-0 before:transition-transform before:duration-300 group-hover:before:scale-x-100
      `}
    >
      {text}
    </a>
  );

  // Three.js Animation Loop
  const animate = useCallback(() => {
    requestAnimationFrame(animate);

    if (renderer.current && scene.current && camera.current) {
      objects.current.forEach((obj, index) => {
        // Simple rotation
        obj.rotation.x += 0.005 + (index * 0.001);
        obj.rotation.y += 0.005 + (index * 0.001);

        // Subtle floating motion
        obj.position.y = Math.sin(Date.now() * 0.0005 + index * 100) * 0.5;
        obj.position.x = Math.cos(Date.now() * 0.0007 + index * 100) * 0.5;
      });

      renderer.current.render(scene.current, camera.current);
    }
  }, []);

  // Three.js Initialization
  useEffect(() => {
    if (!canvasRef.current || typeof THREE === 'undefined') {
      console.warn('Three.js is not loaded or canvas ref is not available.');
      return;
    }

    const currentCanvas = canvasRef.current as HTMLCanvasElement;
    const width = currentCanvas.clientWidth;
    const height = currentCanvas.clientHeight;

    // 1. Scene
    scene.current = new THREE.Scene();
    scene.current.background = null; // Transparent background

    // 2. Camera
    camera.current = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.current.position.z = 5;

    // 3. Renderer
    renderer.current = new THREE.WebGLRenderer({ canvas: currentCanvas, antialias: true, alpha: true });
    renderer.current.setSize(width, height);
    renderer.current.setPixelRatio(window.devicePixelRatio);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 5); // soft white light, increased intensity
    scene.current.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3); // white light, increased intensity
    directionalLight.position.set(0, 1, 1);
    scene.current.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0xFFD700, 2, 100); // Gold light
    pointLight1.position.set(-5, 5, 5);
    scene.current.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xFF8C00, 2, 100); // Dark Orange light
    pointLight2.position.set(5, -5, 5);
    scene.current.add(pointLight2);


    // 5. Objects (abstract shapes)
    const material = new THREE.MeshPhongMaterial({
      color: 0xFFA500, // Orange
      shininess: 100,
      specular: 0xcccccc,
      transparent: true,
      opacity: 0.6
    });

    const geometry1 = new THREE.DodecahedronGeometry(1); // 12-sided shape
    const obj1 = new THREE.Mesh(geometry1, material);
    obj1.position.set(-2, 1, 0);
    objects.current.push(obj1);
    scene.current.add(obj1);

    const geometry2 = new THREE.IcosahedronGeometry(0.8); // 20-sided shape
    const obj2 = new THREE.Mesh(geometry2, material.clone()); // Clone material to allow individual property changes if needed
    obj2.material.color.setHex(0xFFD700); // Gold
    obj2.position.set(2, -1, 0);
    objects.current.push(obj2);
    scene.current.add(obj2);

    const geometry3 = new THREE.TorusKnotGeometry(0.7, 0.2, 100, 16);
    const obj3 = new THREE.Mesh(geometry3, material.clone());
    obj3.material.color.setHex(0xFF6347); // Tomato (red-orange)
    obj3.position.set(0, 0, -2);
    objects.current.push(obj3);
    scene.current.add(obj3);

    // Mouse Interaction for Camera Rotation
    const onMouseDown = (event) => {
      isDragging.current = true;
      previousMousePosition.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const onMouseMove = (event) => {
      if (!isDragging.current) return;

      const deltaX = event.clientX - previousMousePosition.current.x;
      const deltaY = event.clientY - previousMousePosition.current.y;

      // Rotate around Y-axis based on horizontal mouse movement
      camera.current.rotation.y += deltaX * 0.005;
      // Rotate around X-axis based on vertical mouse movement (limit to avoid flipping)
      camera.current.rotation.x += deltaY * 0.005;

      // Ensure camera rotation doesn't go too far
      camera.current.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, camera.current.rotation.x));

      previousMousePosition.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const onMouseUp = () => {
      isDragging.current = false;
    };

    // Add event listeners directly to the canvas
    currentCanvas.addEventListener('mousedown', onMouseDown);
    currentCanvas.addEventListener('mousemove', onMouseMove);
    currentCanvas.addEventListener('mouseup', onMouseUp);

    // Touch events for mobile
    const onTouchStart = (event) => {
      if (event.touches.length === 1) {
        isDragging.current = true;
        previousMousePosition.current = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        };
      }
    };

    const onTouchMove = (event) => {
      if (!isDragging.current || event.touches.length !== 1) return;

      const deltaX = event.touches[0].clientX - previousMousePosition.current.x;
      const deltaY = event.touches[0].clientY - previousMousePosition.current.y;

      camera.current.rotation.y += deltaX * 0.005;
      camera.current.rotation.x += deltaY * 0.005;
      camera.current.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, camera.current.rotation.x));

      previousMousePosition.current = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };
      event.preventDefault(); // Prevent scrolling while dragging
    };

    const onTouchEnd = () => {
      isDragging.current = false;
    };

    currentCanvas.addEventListener('touchstart', onTouchStart);
    currentCanvas.addEventListener('touchmove', onTouchMove);
    currentCanvas.addEventListener('touchend', onTouchEnd);


    // Handle window resize
    const onWindowResize = () => {
      const newWidth = currentCanvas.clientWidth;
      const newHeight = currentCanvas.clientHeight;
      if (camera.current && renderer.current) {
        camera.current.aspect = newWidth / newHeight;
        camera.current.updateProjectionMatrix();
        renderer.current.setSize(newWidth, newHeight);
      }
    };
    window.addEventListener('resize', onWindowResize);

    // Start animation loop
    animate();

    // Cleanup function
    return () => {
      if (renderer.current) {
        renderer.current.dispose();
      }
      if (scene.current) {
        scene.current.remove(...objects.current);
        objects.current.forEach(obj => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) obj.material.dispose();
        });
      }
      window.removeEventListener('resize', onWindowResize);
      currentCanvas.removeEventListener('mousedown', onMouseDown);
      currentCanvas.removeEventListener('mousemove', onMouseMove);
      currentCanvas.removeEventListener('mouseup', onMouseUp);
      currentCanvas.removeEventListener('touchstart', onTouchStart);
      currentCanvas.removeEventListener('touchmove', onTouchMove);
      currentCanvas.removeEventListener('touchend', onTouchEnd);
    };
  }, [animate]); // Re-run effect if 'animate' changes (though useCallback prevents this)

  // Services Canvas Initialization
  useEffect(() => {
    if (!servicesCanvasRef.current || typeof THREE === 'undefined') return;

    const canvas = servicesCanvasRef.current;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Add a spinning cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xff9800, metalness: 0.5, roughness: 0.5 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add a glowing sphere
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x00bcd4, emissive: 0x2196f3, emissiveIntensity: 0.5 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 1.5;
    scene.add(sphere);

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambient);
    const point = new THREE.PointLight(0xffffff, 1);
    point.position.set(2, 2, 5);
    scene.add(point);

    // Animation loop
    let frameId;
    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      sphere.rotation.y -= 0.008;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
    };
  }, []);

  return (
    // Apply dark mode classes conditionally to the main container
    <div className="min-h-screen bg-gray-950 text-gray-200 dark:bg-gray-50 dark:text-gray-800 font-sans antialiased">
      {/* Navbar */}
      <header className="fixed w-full z-50 bg-gray-950 bg-opacity-90 shadow-lg py-4 dark:bg-gray-100 dark:bg-opacity-90 transition-colors duration-300 ease-in-out">
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-orange-400 dark:text-orange-600 font-inter">Gnufox</span>
            <span className="text-xl text-gray-400 dark:text-gray-600 hidden sm:inline">Consultancy</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {renderNavLink('home', 'Home')}
            {renderNavLink('about', 'About Us')}
            {renderNavLink('services', 'Services')}
            {renderNavLink('process', 'Process')}
            {renderNavLink('testimonials', 'Testimonials')}
            {renderNavLink('contact', 'Contact')}
            {/* Dark/Light mode toggle button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="ml-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 dark:bg-gray-300 dark:hover:bg-gray-400 text-gray-200 dark:text-gray-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            {/* Dark/Light mode toggle button for mobile */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="mr-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 dark:bg-gray-300 dark:hover:bg-gray-400 text-gray-200 dark:text-gray-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleMenu} className="text-gray-300 hover:text-orange-400 dark:text-gray-700 dark:hover:text-orange-600 focus:outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-95 py-4 px-6 text-center shadow-inner dark:bg-gray-200 dark:bg-opacity-95 transition-colors duration-300 ease-in-out">
            {renderNavLink('home', 'Home')}
            {renderNavLink('about', 'About Us')}
            {renderNavLink('services', 'Services')}
            {renderNavLink('process', 'Process')}
            {renderNavLink('testimonials', 'Testimonials')}
            {renderNavLink('contact', 'Contact')}
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" ref={sectionRefs.home} className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden perspective-1000">
          {/* Background image for Hero section */}
          <img
            src="https://placehold.co/1920x1080/000000/FFFFFF?text=Abstract+Tech+Background" // Using a placeholder URL for direct img tag
            alt="Abstract tech background with glowing lines and shapes"
            className="absolute inset-0 z-0 w-full h-full object-cover opacity-20 dark:opacity-10 transition-opacity duration-300 animate-zoom-in"
          />
          {/* Subtle gradient overlay for text readability */}
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-950 via-indigo-900 to-transparent opacity-70 dark:from-blue-100 dark:via-indigo-200 dark:to-transparent dark:opacity-60 transition-colors duration-300"></div>

          {/* Animated Blob Elements - Reintroduced */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div className="w-96 h-96 rounded-full bg-blue-600 opacity-10 blur-3xl animate-blob -top-10 left-10 dark:bg-blue-300 animation-delay-0"></div>
            <div className="w-96 h-96 rounded-full bg-orange-500 opacity-10 blur-3xl animate-blob animation-delay-2000 top-20 right-10 dark:bg-orange-300 animation-speed-slow"></div>
            <div className="w-96 h-96 rounded-full bg-purple-600 opacity-10 blur-3xl animate-blob animation-delay-4000 bottom-10 left-10 dark:bg-purple-300 animation-speed-medium"></div>
            <div className="w-80 h-80 rounded-full bg-red-400 opacity-8 blur-3xl animate-blob-reverse animation-delay-1000 top-50 left-50 dark:bg-red-300 animation-speed-fast"></div>
          </div>

          {/* 3D Canvas */}
          <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full"></canvas>

          <div className="relative z-10 max-w-4xl mx-auto transform-gpu"> {/* Removed animate-hero-text class */}
            <h1 className="text-5xl md:text-7xl font-inter font-extrabold leading-tight text-white dark:text-gray-900 mb-6 drop-shadow-lg">
              Innovate. Transform. Succeed.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 dark:text-gray-700 mb-10 drop-shadow">
              Your trusted partner in navigating the complex world of technology,
              delivering cutting-edge solutions for a digital future.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full shadow-lg hover:from-orange-600 hover:to-orange-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-950 dark:focus:ring-offset-gray-50"
            >
              Let’s Build Something Great
              <ChevronRight className="ml-2" size={20} />
            </a>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" ref={sectionRefs.about} className="py-20 bg-gray-900 dark:bg-gray-100 px-6 transition-colors duration-300 ease-in-out">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-inter font-bold text-center text-orange-400 dark:text-orange-600 mb-12">About Gnufox</h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src="https://placehold.co/600x400/1f2937/d3d3d3?text=Our+Professional+Team"
                  alt="Our professional team collaborating in an office setting"
                  className="rounded-2xl shadow-lg w-full h-auto object-cover transition-all duration-300 transform hover:scale-[1.02]"
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
            <h2 className="text-4xl font-inter font-bold text-center text-orange-400 dark:text-orange-600 mb-12">Why Choose Gnufox?</h2>
            {/* Added perspective for 3D effect on child elements */}
            <div style={{ perspective: '1000px' }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-900 rounded-2xl shadow-xl p-6 text-center border border-gray-800 hover:border-orange-500 dark:bg-gray-100 dark:border-gray-200 dark:hover:border-orange-600 transition duration-300 transform-gpu hover:-translate-y-2 hover:rotate-x-2 hover:shadow-2xl">
                <Lightbulb className="text-amber-400 dark:text-amber-600 mb-4 mx-auto" size={48} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">Unmatched Expertise</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">Our team comprises industry veterans and innovators with deep domain knowledge.</p>
              </div>
              <div className="bg-gray-900 rounded-2xl shadow-xl p-6 text-center border border-gray-800 hover:border-orange-500 dark:bg-gray-100 dark:border-gray-200 dark:hover:border-orange-600 transition duration-300 transform-gpu hover:-translate-y-2 hover:rotate-x-2 hover:shadow-2xl">
                <TrendingUp className="text-orange-500 dark:text-orange-700 mb-4 mx-auto" size={48} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">Innovation Driven</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">We are always at the forefront of emerging technologies, bringing you future-proof solutions.</p>
              </div>
              <div className="bg-gray-900 rounded-2xl shadow-xl p-6 text-center border border-gray-800 hover:border-orange-500 dark:bg-gray-100 dark:border-gray-200 dark:hover:border-orange-600 transition duration-300 transform-gpu hover:-translate-y-2 hover:rotate-x-2 hover:shadow-2xl">
                <Handshake className="text-deep-orange-500 dark:text-deep-orange-700 mb-4 mx-auto" size={48} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">Client-Centric Approach</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">Your success is our priority. We tailor every solution to your unique business goals.</p>
              </div>
              <div className="bg-gray-900 rounded-2xl shadow-xl p-6 text-center border border-gray-800 hover:border-orange-500 dark:bg-gray-100 dark:border-gray-200 dark:hover:border-orange-600 transition duration-300 transform-gpu hover:-translate-y-2 hover:rotate-x-2 hover:shadow-2xl">
                <Award className="text-yellow-600 dark:text-yellow-800 mb-4 mx-auto" size={48} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">We have a track record of delivering tangible, impactful results for diverse businesses.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" ref={sectionRefs.services} className="py-20 bg-gray-900 dark:bg-gray-100 px-6 transition-colors duration-300 ease-in-out">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-inter font-bold text-center text-orange-400 dark:text-orange-600 mb-12">Our Services</h2>
            {/* Three.js Canvas for Services */}
            {/* <div className="relative w-full h-64 mb-12">
              <canvas ref={servicesCanvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
            </div> */}
            {/* <AnimatedShape />; */}
            {/* Added perspective for 3D effect on child elements */}
            <div style={{ perspective: '1000px' }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {/* Service Card 1: Environment Engineering */}
              <div className="bg-gray-950 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-800 hover:border-orange-500 dark:bg-gray-50 dark:border-gray-200 dark:hover:border-orange-600 transition duration-300 transform-gpu hover:scale-105 hover:rotate-y-2 hover:shadow-2xl">
                <Leaf className="text-orange-400 dark:text-orange-600 mb-6" size={60} strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold text-white dark:text-gray-900 mb-4">Environment Engineering</h3>
                <p className="text-gray-400 dark:text-gray-600 leading-relaxed">
                  Sustainable solutions for environmental challenges, leveraging technology for a greener future.
                </p>
              </div>
              {/* Service Card 2: IT Strategy & Product development */}
              <div className="bg-gray-950 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-800 hover:border-orange-500 dark:bg-gray-50 dark:border-gray-200 dark:hover:border-orange-600 transition duration-300 transform-gpu hover:scale-105 hover:rotate-y-2 hover:shadow-2xl">
                <Laptop className="text-amber-500 dark:text-amber-700 mb-6" size={60} strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold text-white dark:text-gray-900 mb-4">IT Strategy & Product Development</h3>
                <p className="text-gray-400 dark:text-gray-600 leading-relaxed">
                  Crafting robust IT strategies and developing innovative products from concept to launch.
                </p>
              </div>
              {/* Service Card 3: Media and advertisement */}
              <div className="bg-gray-950 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-800 hover:border-orange-500 dark:bg-gray-50 dark:border-gray-200 dark:hover:border-orange-600 transition duration-300 transform-gpu hover:scale-105 hover:rotate-y-2 hover:shadow-2xl">
                <Megaphone className="text-deep-orange-400 dark:text-deep-orange-600 mb-6" size={60} strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold text-white dark:text-gray-900 mb-4">Media and Advertisement</h3>
                <p className="text-gray-400 dark:text-gray-600 leading-relaxed">
                  Creative and data-driven media and advertising strategies for maximum impact and reach.
                </p>
              </div>
              {/* Service Card 4: Business Development and startup funding support */}
              <div className="bg-gray-950 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-800 hover:border-orange-500 dark:bg-gray-50 dark:border-gray-200 dark:hover:border-orange-600 transition duration-300 transform-gpu hover:scale-105 hover:rotate-y-2 hover:shadow-2xl">
                <DollarSign className="text-yellow-500 dark:text-yellow-700 mb-6" size={60} strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold text-white dark:text-gray-900 mb-4">Business Development & Startup Funding Support</h3>
                <p className="text-gray-400 dark:text-gray-600 leading-relaxed">
                  Strategic business growth and comprehensive support for startup funding and expansion.
                </p>
              </div>
            </div>
            {/* <Card3DEffect cards={serviceCards} /> */}
          </div>
        </section>

        {/* Our Process Section */}
        <section id="process" ref={sectionRefs.process} className="py-20 bg-gray-950 dark:bg-gray-50 px-6 transition-colors duration-300 ease-in-out">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-inter font-bold text-center text-orange-400 dark:text-orange-600 mb-12">Our Collaborative Process</h2>
            <div className="relative flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-8">
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-700 dark:bg-gray-300 z-0 transform -translate-y-1/2 rounded-full"></div>

              {/* Process Step 1 */}
              <div className="relative z-10 w-full md:w-1/4 flex flex-col items-center text-center bg-gray-900 dark:bg-gray-100 rounded-2xl shadow-lg p-6 border border-gray-800 dark:border-gray-200 transition-colors duration-300 transform hover:scale-[1.02]">
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mb-4 text-white font-bold text-2xl shadow-md">1</div>
                <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">Discovery & Strategy</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">Understanding your vision, challenges, and defining clear objectives.</p>
              </div>
              {/* Process Step 2 */}
              <div className="relative z-10 w-full md:w-1/4 flex flex-col items-center text-center bg-gray-900 dark:bg-gray-100 rounded-2xl shadow-lg p-6 border border-gray-800 dark:border-gray-200 transition-colors duration-300 transform hover:scale-[1.02]">
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mb-4 text-white font-bold text-2xl shadow-md">2</div>
                <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">Design & Planning</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">Crafting detailed architectures, UX/UI designs, and project roadmaps.</p>
              </div>
              {/* Process Step 3 */}
              <div className="relative z-10 w-full md:w-1/4 flex flex-col items-center text-center bg-gray-900 dark:bg-gray-100 rounded-2xl shadow-lg p-6 border border-gray-800 dark:border-gray-200 transition-colors duration-300 transform hover:scale-[1.02]">
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mb-4 text-white font-bold text-2xl shadow-md">3</div>
                <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">Development & Iteration</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">Building robust solutions with agile methodologies and continuous feedback.</p>
              </div>
              {/* Process Step 4 */}
              <div className="relative z-10 w-full md:w-1/4 flex flex-col items-center text-center bg-gray-900 dark:bg-gray-100 rounded-2xl shadow-lg p-6 border border-gray-800 dark:border-gray-200 transition-colors duration-300 transform hover:scale-[1.02]">
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mb-4 text-white font-bold text-2xl shadow-md">4</div>
                <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">Launch & Optimization</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">Seamless deployment and ongoing support, monitoring, and performance optimization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" ref={sectionRefs.testimonials} className="py-20 bg-gray-900 dark:bg-gray-100 px-6 transition-colors duration-300 ease-in-out">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-inter font-bold text-center text-orange-400 dark:text-orange-600 mb-12">What Our Clients Say</h2>
            {/* Added perspective for 3D effect on child elements */}
            <div style={{ perspective: '1000px' }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial Card 1 */}
              <div className="bg-gray-950 rounded-2xl shadow-xl p-8 border border-gray-800 dark:bg-gray-50 dark:border-gray-200 transition-colors duration-300 transform-gpu hover:scale-[1.02] hover:rotate-x-1 hover:shadow-2xl">
                <p className="text-gray-300 dark:text-gray-700 italic mb-6">
                  "Gnufox transformed our outdated systems into a streamlined, efficient powerhouse. Their expertise and dedication were unparalleled."
                </p>
                <div className="flex items-center">
                  {/* Placeholder profile image for testimonial */}
                  <img
                    src="https://placehold.co/48x48/7e7e7e/ffffff?text=AB"
                    alt="Profile of Alice Brown, CEO of Tech Solutions Inc."
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white dark:text-gray-900">Alice Brown</p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">CEO, Tech Solutions Inc.</p>
                  </div>
                </div>
              </div>
              {/* Testimonial Card 2 */}
              <div className="bg-gray-950 rounded-2xl shadow-xl p-8 border border-gray-800 dark:bg-gray-50 dark:border-gray-200 transition-colors duration-300 transform-gpu hover:scale-[1.02] hover:rotate-x-1 hover:shadow-2xl">
                <p className="text-gray-300 dark:text-gray-700 italic mb-6">
                  "The strategic insights provided by Gnufox were invaluable. They helped us navigate complex challenges with clarity and confidence."
                </p>
                <div className="flex items-center">
                  {/* Placeholder profile image for testimonial */}
                  <img
                    src="https://placehold.co/48x48/7e7e7e/ffffff?text=CJ"
                    alt="Profile of Chris Johnson, CTO of Global Innovations"
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
        <section id="contact" ref={sectionRefs.contact} className="py-20 bg-gray-950 dark:bg-gray-50 px-6 transition-colors duration-300 ease-in-out">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-inter font-bold text-center text-orange-400 dark:text-orange-600 mb-12">Get In Touch</h2>
            <div className="flex flex-col md:flex-row md:space-x-12 items-start">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <p className="text-lg text-gray-300 dark:text-gray-700 mb-6">
                  Ready to transform your business with cutting-edge technology solutions?
                  Contact us today for a personalized consultation.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center text-gray-300 dark:text-gray-700">
                    <Mail className="text-orange-400 dark:text-orange-600 mr-4" size={24} />
                    <a href="mailto:info@gnufox.in" className="hover:text-white dark:hover:text-gray-900 transition duration-300">info@gnufox.in</a>
                  </div>
                  <div className="flex items-center text-gray-300 dark:text-gray-700">
                    <Phone className="text-orange-400 dark:text-orange-600 mr-4" size={24} />
                    <span>+91 12345 67890</span> {/* Placeholder phone number */}
                  </div>
                  <div className="flex items-center text-gray-300 dark:text-gray-700">
                    <MapPin className="text-orange-400 dark:text-orange-600 mr-4" size={24} />
                    <span>Brahmapur, Odisha, India</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 dark:bg-gray-200 dark:border-gray-300 transition-colors duration-300">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 dark:text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name" // Add name attribute for form submission
                      className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-900 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-50 transition-colors duration-300"
                      placeholder="Your Name"
                      aria-label="Your Name" // Accessibility
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 dark:text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email" // Add name attribute
                      className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-900 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-50 transition-colors duration-300"
                      placeholder="you@example.com"
                      aria-label="Your Email" // Accessibility
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 dark:text-gray-700 text-sm font-bold mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message" // Add name attribute
                      rows={5}
                      className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-900 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-50 resize-none transition-colors duration-300"
                      placeholder="Tell us about your project..."
                      aria-label="Your Message" // Accessibility
                    ></textarea>
                  </div>
                  {formStatus && (
                    <div className={`text-center py-2 rounded-lg ${formStatus.includes('successfully') ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                      {formStatus}
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg shadow-lg hover:from-orange-600 hover:to-orange-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 dark:focus:ring-offset-gray-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll-to-Top Button */}
      {showScrollToTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 p-4 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-950 dark:focus:ring-offset-gray-50 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

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
