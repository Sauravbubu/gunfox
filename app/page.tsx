"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
// import emailjs from "emailjs-com"; // Assuming EmailJS setup
import { ArrowRight, X } from 'lucide-react';
import { Activity, Settings, BarChart4, MessageCircle } from 'lucide-react';
import CountUp from "react-countup"; // Added for StatsSection
import { useInView } from "react-intersection-observer"; // Added for StatsSection
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import HeroSection from "./HeroSection";
import ServicesSection from "./components/Services";
import ContactSection from "./components/ContactSection";
import JoinUsSection from "./components/JoinUsSection";
import FooterSection from "./components/Footer";
import AboutSection from "./AboutUs";
import Header from "./components/Header";
import AdvertiserSection from "./components/Advertiser";
import PublisherSection from "./components/Publisher";
import StatsSection from "./components/StatsSection";
export const sendtoForm = () => {
  window.location.href = '#contact';
};

// Utility function (from previous user provided code)
function cn(...args: any[]): string {
  return args.filter(Boolean).join(' ');
}


// StatsSection Component (from previous user provided code)


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true); // State for theme toggle

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {/* Header Section */}
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}  
      <HeroSection />

      {/* About Us Section */}
      <AboutSection
        isDarkMode={isDarkMode}
      />

      {/* Services Section */}
      <ServicesSection isDarkMode={isDarkMode} />

      {/* Advertiser Section */}
      <AdvertiserSection isDarkMode={isDarkMode} sendtoForm={sendtoForm}/>

      {/* Publisher Section */}
      <PublisherSection sendtoForm={sendtoForm} isDarkMode={isDarkMode} />

      {/* Stats Section */}
      <StatsSection isDarkMode={isDarkMode} />

      {/* Contact Section */}
      <ContactSection isDarkMode={isDarkMode} />

      {/* Join us Section */}
      <JoinUsSection isDarkMode={isDarkMode} sendtoForm={sendtoForm} />
      
      {/* Footer Section */}
      <FooterSection isDarkMode={isDarkMode} />

    </>
  );
}
