"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
// import emailjs from "emailjs-com"; // Assuming EmailJS setup
import { ArrowRight, X } from 'lucide-react';
import { Activity, Settings, BarChart4, MessageCircle } from 'lucide-react';
import CountUp from "react-countup"; // Added for StatsSection
import { useInView } from "react-intersection-observer"; // Added for StatsSection
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
const sendtoForm = () => {
  window.location.href = '#contact';
};

// Utility function (from previous user provided code)
function cn(...args: any[]): string {
  return args.filter(Boolean).join(' ');
}

// Card Component (from previous user provided code)
interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  fullDescription: string;
  readMoreLink: string;
  index: number;
  bgImage: string;
  isDarkMode: boolean; // Added isDarkMode prop
}

const Card: React.FC<CardProps> = ({ icon, title, description, fullDescription, readMoreLink, index, bgImage, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Adjusted colors for better dark mode contrast
  const colors = isDarkMode
    ? ['#EF4444', '#22C55E', '#6366F1', '#F97316'] // More vibrant for dark
    : ['#F44336', '#4CAF50', '#3F51B5', '#FF9800']; // Original for light
  const color = colors[index % colors.length];

  return (
    <div
      className={cn(
        "relative p-6 rounded-xl shadow-lg",
        "transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
        "flex flex-col min-h-[400px] overflow-hidden",
        "bg-cover bg-center",
        isDarkMode ? "bg-black/60 border border-gray-700" : "bg-black/50 border border-white/10", // Darker glass for dark mode
        "backdrop-blur-md"
      )}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Top-left background shape */}
      <div
        className="absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-10 blur-2xl"
        style={{ backgroundColor: `${color}1A` }}
      />

      {/* Icon */}
      <div
        className="absolute top-6 left-6 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ backgroundColor: `${color}1A`, color: color }}
      >
        {icon}
      </div>

      {/* Title */}
      <h2 className={cn(
        "text-xl font-semibold mt-16 mb-2 relative",
        isDarkMode ? "text-white" : "text-white", // Text color for title
        "drop-shadow-lg",
        "text-shadow-sm",
        isDarkMode ? "bg-white/5 backdrop-blur-sm rounded-md px-2 py-1" : "bg-white/10 backdrop-blur-md rounded-md px-2 py-1"
      )}>
        {title}
      </h2>
      {/* Description */}
      <p className={cn(
        "text-sm mb-4 relative",
        isDarkMode ? "text-gray-300 bg-white/5 backdrop-blur-sm rounded-md px-2 py-1" : "text-gray-300 bg-white/10 backdrop-blur-md rounded-md px-2 py-1"
      )}>
        {description}
      </p>

      {/* Read More Link */}
      <button
        onClick={() => setIsOpen(true)}
        style={{ color: color }}
        className={cn(
          "text-sm font-medium transition-colors duration-200 flex items-center gap-1 w-fit cursor-pointer hover:opacity-80 mt-auto",
          isDarkMode ? "bg-white/5 backdrop-blur-sm rounded-md px-2 py-1" : "bg-white/10 backdrop-blur-md rounded-md px-2 py-1"
        )}
      >
        Read more
        <ArrowRight className="w-4 h-4 ml-1" />
      </button>

      {/* Full Description Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "absolute top-0 left-0 w-full h-full rounded-xl p-6 flex flex-col z-10",
              isDarkMode ? "bg-black/90 backdrop-blur-lg text-white" : "bg-black/95 backdrop-blur-md text-white"
            )}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-lg font-semibold">{title}</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white mt-0">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-y-scroll pr-1 max-h-[calc(100%-3rem)]">
              <p className="text-sm leading-relaxed whitespace-pre-line text-gray-300">{fullDescription}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// AnimatedMulticolorText Component (from previous user provided code)
const AnimatedMulticolorText = ({ text, isDarkMode }: { text: string; isDarkMode: boolean }) => {
  const [gradient, setGradient] = useState(
    isDarkMode
      ? 'linear-gradient(90deg, #F87171, #4ADE80, #818CF8, #FBBF24, #C084FC, #60A5FA)' // Lighter, more vibrant for dark mode
      : 'linear-gradient(90deg, #F44336, #4CAF50, #3F51B5, #FF9800, #9C27B0, #2196F3)' // Original for light mode
  );
  const [backgroundSize, setBackgroundSize] = useState('200%');
  const [backgroundPosition, setBackgroundPosition] = useState('0 50%');
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundPosition((prevPosition) =>
        prevPosition === '0 50%' ? '100% 50%' : '0 50%'
      );
    }, 2000); // Adjust for speed

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Update gradient when dark mode changes
    setGradient(
      isDarkMode
        ? 'linear-gradient(90deg, #F87171, #4ADE80, #818CF8, #FBBF24, #C084FC, #60A5FA)'
        : 'linear-gradient(90deg, #F44336, #4CAF50, #3F51B5, #FF9800, #9C27B0, #2196F3)'
    );
  }, [isDarkMode]);


  const textStyle = {
    fontSize: '4rem',  // Make sure the font size is appropriate
    fontWeight: 'bold',
    color: 'transparent',
    backgroundImage: gradient,
    backgroundSize: backgroundSize,
    backgroundPosition: backgroundPosition,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    transition: 'background-position 2s linear', // Keep the transition here
  };

  return (
    <h2 ref={containerRef} style={textStyle} className="mb-2 flex justify-center">
      {text}
    </h2>
  );
};

// ServicesSection Component (from previous user provided code)
const ServicesSection = ({ isDarkMode }) => {
  const servicesData = [
    {
      icon: <Activity className="w-6 h-6" />, // Color will be applied by parent
      title: "Marketing Strategy",
      description: "Our marketing strategy service provides tailored solutions to meet your unique business needs. We analyze your market, identify opportunities, and develop a roadmap for success.",
      fullDescription:
        "We provide a full-fledged marketing strategy that. includes competitor research, trend analysis, and a personalized roadmap to boost your brand visibility.  Our team of experts will work closely with you to understand your goals and create a plan that delivers results.",
      readMoreLink: "#",
      bgImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: <Settings className="w-6 h-6" />, // Color will be applied by parent
      title: "Automation Tools",
      description: "We offer automation tools to streamline your workflows and improve efficiency.  Our solutions can help you automate repetitive tasks, freeing up your time to focus on more strategic initiatives.",
      fullDescription:
        "From CRM automation to email marketing pipelines, we equip you with tools that reduce manual effort and scale faster.  Our automation tools are designed to be easy to use and integrate seamlessly with your existing systems.",
      readMoreLink: "#",
      bgImage: 'https://images.unsplash.com/photo-1548372276-74815418f415?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: <BarChart4 className="w-6 h-6" />, // Color will be applied by parent
      title: "Data Analytics",
      description: "Our data analytics services help you gain valuable insights from your data.  We use advanced techniques to identify trends, patterns, and opportunities that can help you make better business decisions.",
      fullDescription:
        "We help you collect, analyze, and act on data-driven insights to make better decisions for your campaigns and ROI.  Our team of data scientists and analysts will provide you with clear, actionable recommendations.",
      readMoreLink: "#",
      bgImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />, // Color will be applied by parent
      title: "Customer Engagement",
      description: "We help you build stronger relationships with your customers through our customer engagement services.  We offer a range of solutions to help you connect with your audience and improve customer satisfaction.",
      fullDescription:
        "Our engagement tools enable you to interact with your audience via chat, social platforms, and personalized follow-ups. We provide the tools and strategies you need to build lasting customer loyalty.",
      readMoreLink: "#",
      bgImage: 'https://images.unsplash.com/photo-1531482615713-74a1a7e5b744?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];



  return (
    <section id='services' className={cn(
      "px-6 py-16 text-center",
      isDarkMode ? "bg-gray-900" : "bg-gray-50" // Conditional background for the section
    )}>
      <AnimatedMulticolorText text="Our Services" isDarkMode={isDarkMode} /> {/* Pass isDarkMode */}
      <p className={cn(
        "max-w-2xl mx-auto mb-12",
        isDarkMode ? "text-gray-400" : "text-gray-700" // Conditional text color
      )}>
        Our mission is to drive progress and enhance the lives of our customers by delivering superior products and services that exceed expectations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {servicesData.map((service, index) => (
          <Card
            key={index}
            index={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            fullDescription={service.fullDescription}
            readMoreLink={service.readMoreLink}
            bgImage={service.bgImage}
            isDarkMode={isDarkMode} // Pass isDarkMode to Card
          />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          onClick={sendtoForm}
          className={cn(
            "px-6 py-3 rounded-xl font-semibold shadow-md transition-all flex items-center gap-2",
            isDarkMode ? "bg-green-600 text-white hover:bg-green-700" : "bg-green-500 text-white hover:bg-green-600" // Conditional button colors
          )}
        >
          Contact Today
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

// StatsSection Component (from previous user provided code)
const StatsSection = ({ isDarkMode }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const stats = [
    { value: 100, label: "Advertisers" },
    { value: 300, label: "Affiliates" },
    { value: 2000, label: "Campaigns" },
    { value: 10840, label: "Hours of Support" },
  ];

  return (
    <section
      id="facts"
      className={`relative py-24 px-6 text-center overflow-hidden font-sans ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
      style={{
        backgroundImage: isDarkMode ? `url('/your-world-map-dark-bg.png')` : `url('/your-world-map-light-bg.png')`, // Conditional background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className={`text-4xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-black"}`}>FACTS</h2> {/* Conditional text color */}
        <div className={`h-1 w-12 mx-auto mb-4 rounded-full ${isDarkMode ? "bg-yellow-300" : "bg-yellow-400"}`} /> {/* Conditional underline color */}
        <p className={`text-lg mb-12 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          Let's take a look at the numbers
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <h3 className={`text-4xl font-extrabold mb-2 ${isDarkMode ? "text-yellow-400" : "text-yellow-500"}`}> {/* Conditional stat number color */}
                {hasAnimated ? (
                  <CountUp end={stat.value} duration={2.5} />
                ) : (
                  "0"
                )}
                +
              </h3>
              <p className={`text-lg font-semibold ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}> {/* Conditional label color */}
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};


export default function Home() {
  const [userType, setUserType] = useState("");
  const [isDarkBackground, setIsDarkBackground] = useState(true); // For header text color based on scroll
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // State for theme toggle

  useEffect(() => {
    const handleScroll = () => {
      const threshold = -1; // Adjust this threshold based on your layout
      setIsDarkBackground(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Variants for text animations (retained)
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Variants for container to stagger children animations (retained)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between child animations
      },
    },
  };

  // Advertiser Section (defined within Home for this example)
  const AdvertiserSection = () => (
    <section id="advertiser" className={`py-16 md:py-24 px-4 md:px-6 font-sans ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center space-y-4 md:space-y-6" // Added text-center here
        >
          <h3 className={`text-3xl md:text-4xl font-semibold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>Advertiser</h3>
          <p className={`text-base md:text-lg max-w-4xl mx-auto ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
            Partner with Avengers Media for future-ready marketing. We invest in robust tech and media channels to connect you with high-intent audiences. Our continuous innovation in platforms and models ensures your brand remains competitive and impactful.
          </p>
          <div className="mt-8">
            <button onClick={sendtoForm} className={`py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-semibold ${isDarkMode ? "bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white" : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"}`}>
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );

  // Publisher Section (defined within Home for this example)
  const PublisherSection = () => (
    <section id="publisher" className={`py-16 md:py-24 px-4 md:px-6 font-sans ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Animation on the Left (for demonstration purposes) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex items-center justify-center" // Center content in the left column
        >
          {/* Placeholder Illustration - Replace with a more relevant image */}
          <div className="w-full max-w-[400px] h-auto">
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
          <h3 className={`text-3xl md:text-4xl font-semibold ${isDarkMode ? "text-green-400" : "text-green-600"}`}>Publisher</h3>
          <p className={`text-base md:text-lg max-w-3xl ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
            Why choose Avengers Media as your monetization partner?
          </p>
          <div className="">
            <ul className="list-none pl-0 space-y-4">
              <li className={`flex items-start gap-2 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                <span className={`mt-1.5 h-5 w-5 rounded-full flex-shrink-0 ${isDarkMode ? "bg-green-400" : "bg-green-500"}`}></span>
                <span>Access to worldwide campaigns with substantial budgets</span>
              </li>
              <li className={`flex items-start gap-2 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                <span className={`mt-1.5 h-5 w-5 rounded-full flex-shrink-0 ${isDarkMode ? "bg-green-400" : "bg-green-500"}`}></span>
                <span>Integrated MMP tracking for all campaigns</span>
              </li>
              <li className={`flex items-start gap-2 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                <span className={`mt-1.5 h-5 w-5 rounded-full flex-shrink-0 ${isDarkMode ? "bg-green-400" : "bg-green-500"}`}></span>
                <span>Prompt validation and timely payments</span>
              </li>
              <li className={`flex items-start gap-2 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                <span className={`mt-1.5 h-5 w-5 rounded-full flex-shrink-0 ${isDarkMode ? "bg-green-400" : "bg-green-500"}`}></span>
                <span>24/7 assistance via team, email, and calls</span>
              </li>
              <li className={`flex items-start gap-2 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                <span className={`mt-1.5 h-5 w-5 rounded-full flex-shrink-0 ${isDarkMode ? "bg-green-400" : "bg-green-500"}`}></span>
                <span>Flexible and convenient payment terms</span>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <button onClick={sendtoForm} className={`py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-semibold ${isDarkMode ? "bg-gradient-to-r from-green-400 to-teal-400 hover:from-green-500 hover:to-teal-500 text-white" : "bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white"}`}>
              Partner With Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );


  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 shadow-lg transition-colors duration-300 ${isDarkMode ? "bg-gray-900/80" : "bg-white/80 backdrop-blur-md"}`}>
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex flex-wrap justify-between items-center font-sans">
          <div className="px-3 py-1">
            {/* Logo changes based on both scroll and dark mode */}
            <img
              src={isDarkMode ? "/avengers_media_white_text.png" : (isDarkBackground ? "/avengers_media_black_text.png" : "/avengers_media_white_text.png")}
              alt="Logo"
              className="h-8 md:h-10 w-auto transition duration-300"
            />
          </div>

          {/* Hamburger button for mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden focus:outline-none ${isDarkMode ? "text-white" : "text-gray-800"}`}
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
            className={`w-full md:w-auto mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6 flex flex-col md:flex-row md:items-center text-[17px] font-medium tracking-wide ${isDarkMode ? "text-white" : (isDarkBackground ? "text-gray-800" : "text-white")} ${menuOpen ? "flex" : "hidden"} md:flex`}
          >
            <a href="#" className="hover:text-gray-400 transition">Home</a>
            <a href="#about" className="hover:text-gray-400 transition">About</a>
            <a href="#services" className="hover:text-gray-400 transition">Services</a>
            <a href="#advertiser" className="hover:text-gray-400 transition">Advertiser</a>
            <a href="#publisher" className="hover:text-gray-400 transition">Publisher</a>
            <a href="#contact" className="hover:text-gray-400 transition">Contact Us</a>
            <a
              href="#join"
              className={`font-semibold ${isDarkMode ? "text-pink-300 hover:text-pink-200" : "text-pink-400 hover:text-pink-300"} transition`}
            >
              Join Us
            </a>
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className={`ml-4 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${isDarkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </nav>
      </header>

      {/* Main Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center px-4 pt-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-1.svg')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className={`shadow-2xl rounded-3xl px-6 md:px-10 py-10 md:py-14 max-w-4xl text-center ${isDarkMode ? "bg-black/60 border border-white/10 text-white" : "bg-black/50 border border-white/10 text-white"}`}
        >
          <h2 className={`text-4xl md:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent ${isDarkMode ? "bg-gradient-to-r from-green-300 via-blue-400 to-purple-500" : "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"}`}>
            Customized Growth<br />Marketing Solutions
          </h2>
          <p className={`mt-6 text-lg md:text-xl font-light ${isDarkMode ? "text-gray-300" : "text-gray-200"}`}>
            Built for <span className="font-semibold text-white">Scalability</span> and <span className="font-semibold text-white">Impact</span>
          </p>
          <a href="#contact">
            <button className={`mt-8 px-6 py-3 font-bold rounded-xl shadow-lg hover:shadow-xl transition duration-300 ${isDarkMode ? "bg-gradient-to-r from-purple-400 to-pink-400 text-white" : "bg-gradient-to-r from-purple-500 to-pink-500 text-white"}`}>
              GET A QUOTE
            </button>
          </a>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="py-20 md:py-32 px-4 md:px-6 font-sans relative overflow-hidden"
        style={{ backgroundColor: isDarkMode ? '#1a202c' : '#f0f2f5' }}
      >
        {/* Abstract shapes for subtle background effect (outside the card) */}
        <div
          className="absolute w-52 h-52 rounded-full filter blur-3xl opacity-30 z-0"
          style={{
            top: '-50px',
            left: '-50px',
            background: isDarkMode ? 'linear-gradient(135deg, #6B46C1, #805AD5)' : 'linear-gradient(135deg, #C084FC, #A855F7)',
          }}
        ></div>
        <div
          className="absolute w-64 h-64 rounded-full filter blur-3xl opacity-30 z-0"
          style={{
            bottom: '-50px',
            right: '-50px',
            background: isDarkMode ? 'linear-gradient(135deg, #4299E1, #3182CE)' : 'linear-gradient(135deg, #60A5FA, #3B82F6)',
          }}
        ></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-5xl mx-auto p-8 md:p-12 rounded-2xl shadow-lg relative z-10"
          style={{
            backgroundColor: isDarkMode ? 'rgba(45, 55, 72, 0.6)' : 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
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
              fill={isDarkMode ? "#FF6347" : "#FFD700"} /* Tomato Red for dark, Gold for light */
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
              fill={isDarkMode ? "#3CB371" : "#00CED1"} /* Medium Sea Green for dark, Dark Cyan for light */
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
              fill={isDarkMode ? "#DA70D6" : "#BA55D3"} /* Orchid for dark, Medium Orchid for light */
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
                  backgroundImage: isDarkMode ? 'linear-gradient(to right, #90CDF4, #E9D8FD)' : 'linear-gradient(to right, #3B82F6, #9333EA)',
                }}
              >
                About Us
              </motion.h3>
              <motion.p
                variants={textVariants}
                className={isDarkMode ? "text-gray-200 text-lg md:text-xl leading-relaxed" : "text-gray-700 text-lg md:text-xl leading-relaxed"}
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
                    backgroundImage: isDarkMode ? 'linear-gradient(to right, #90CDF4, #E9D8FD)' : 'linear-gradient(to right, #3B82F6, #9333EA)',
                  }}
                >
                  Our Mission
                </motion.h3>
                <motion.p
                  variants={textVariants}
                  className={isDarkMode ? "text-gray-200 text-lg leading-relaxed" : "text-gray-700 text-lg leading-relaxed"}
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
                    backgroundImage: isDarkMode ? 'linear-gradient(to right, #90CDF4, #E9D8FD)' : 'linear-gradient(to right, #3B82F6, #9333EA)',
                  }}
                >
                  Our Vision
                </motion.h3>
                <motion.p
                  variants={textVariants}
                  className={isDarkMode ? "text-gray-200 text-lg leading-relaxed" : "text-gray-700 text-lg leading-relaxed"}
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

      {/* Services Section */}
      <ServicesSection isDarkMode={isDarkMode} />

      {/* Advertiser Section */}
      <AdvertiserSection />

      {/* Publisher Section */}
      <PublisherSection />

      {/* Stats Section */}
      <StatsSection isDarkMode={isDarkMode} />

      {/* Contact Us Section */}
      <section id="contact" className={`py-20 px-4 md:px-6 text-center font-sans ${isDarkMode ? "bg-gray-900" : "bg-gradient-to-br from-white/10 to-white/5"} backdrop-blur-lg`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h3 className={`text-4xl md:text-5xl font-semibold mb-6 bg-clip-text text-transparent ${isDarkMode ? "bg-gradient-to-r from-blue-400 to-purple-400" : "bg-gradient-to-r from-blue-600 to-purple-600"}`}>
            Contact Us
          </h3>
          <p className={isDarkMode ? "text-gray-200 text-lg md:text-xl" : "text-gray-700 text-lg md:text-xl"}>
            We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form
            className="space-y-6 text-left"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = Object.fromEntries(formData.entries());
              console.log("Form Data:", data);

              // Simulate EmailJS send for demonstration
              // In a real app, you would use emailjs.sendForm here
              setTimeout(() => {
                alert("Your message has been sent successfully!");
                e.currentTarget.reset();
                setUserType(''); // Reset the user type state after submission
              }, 500);
            }}
          >
            <div className="space-y-4">
              <select
                name="user_type"
                required
                className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 shadow-sm ${isDarkMode
                    ? "border-gray-600 bg-gray-700/80 text-gray-100 focus:ring-blue-400 placeholder:text-gray-400"
                    : "border-gray-300 bg-white/80 text-gray-900 focus:ring-blue-500 placeholder:text-gray-500"
                  }`}
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="" className={isDarkMode ? "text-gray-400" : "text-gray-500"} disabled>
                  I am a...
                </option>
                <option value="publisher" className={isDarkMode ? "hover:bg-gray-600 text-gray-100" : "hover:bg-gray-100/80 text-gray-900"}>
                  Publisher
                </option>
                <option value="advertiser" className={isDarkMode ? "hover:bg-gray-600 text-gray-100" : "hover:bg-gray-100/80 text-gray-900"}>
                  Advertiser
                </option>
              </select>

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 shadow-sm ${isDarkMode
                    ? "border-gray-600 bg-gray-700/80 text-gray-100 focus:ring-blue-400 placeholder:text-gray-400"
                    : "border-gray-300 bg-white/80 text-gray-900 focus:ring-blue-500 placeholder:text-gray-500"
                  }`}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 shadow-sm ${isDarkMode
                    ? "border-gray-600 bg-gray-700/80 text-gray-100 focus:ring-blue-400 placeholder:text-gray-400"
                    : "border-gray-300 bg-white/80 text-gray-900 focus:ring-blue-500 placeholder:text-gray-500"
                  }`}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 shadow-sm ${isDarkMode
                    ? "border-gray-600 bg-gray-700/80 text-gray-100 focus:ring-blue-400 placeholder:text-gray-400"
                    : "border-gray-300 bg-white/80 text-gray-900 focus:ring-blue-500 placeholder:text-gray-500"
                  }`}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none shadow-sm ${isDarkMode
                    ? "border-gray-600 bg-gray-700/80 text-gray-100 focus:ring-blue-400 placeholder:text-gray-400"
                    : "border-gray-300 bg-white/80 text-gray-900 focus:ring-blue-500 placeholder:text-gray-500"
                  }`}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg font-semibold text-lg transition-all duration-300 ${isDarkMode
                  ? "bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white"
                  : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                }`}
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* Join Us Section */}
      <section id="join" className={`py-20 px-4 md:px-6 text-center font-sans ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h3 className={`text-3xl md:text-4xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Join Us</h3>
          <p className={`text-base md:text-lg max-w-3xl mx-auto ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
            Become part of our growing network. Whether you're an advertiser looking to boost visibility or a publisher ready to monetize, Avengers Media is here for you.
          </p>
          <button onClick={sendtoForm} className={`mt-6 px-6 py-3 font-bold rounded-lg shadow-md transition-colors duration-300 ${isDarkMode ? "bg-purple-500 hover:bg-purple-600 text-white" : "bg-purple-600 hover:bg-purple-700 text-white"}`}>
            Get Started
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 md:px-6 font-sans ${isDarkMode ? "bg-green-700 text-gray-200" : "bg-green-400 text-white"}`}>
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
          {/* Social Media Buttons */}
          <div>
            <h4 className="text-xl md:text-2xl font-bold mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full transition-colors duration-300",
                  isDarkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white"
                    : "bg-white/20 text-white hover:bg-blue-600"
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full transition-colors duration-300",
                  isDarkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-blue-400 hover:text-white"
                    : "bg-white/20 text-white hover:bg-blue-400"
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full transition-colors duration-300",
                  isDarkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-blue-700 hover:text-white"
                    : "bg-white/20 text-white hover:bg-blue-700"
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full transition-colors duration-300",
                  isDarkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-pink-600 hover:text-white"
                    : "bg-white/20 text-white hover:bg-pink-600"
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
        <div className={`border-t mt-8 pt-6 text-center text-sm ${isDarkMode ? "border-gray-600/30" : "border-white/30"}`}>
          &copy; {new Date().getFullYear()} Avengers Media. All rights reserved.
        </div>
      </footer>
    </>
  );
}
