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

// Utility function (from previous user provided code)
function cn(...args: any[]): string {
  return args.filter(Boolean).join(' ');
}


// StatsSection Component (from previous user provided code)


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const sendtoForm = () => {
    window.location.href = '#contact';
  };

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      <HeroSection />
      <AboutSection isDarkMode={isDarkMode} />
      <ServicesSection isDarkMode={isDarkMode} />
      <AdvertiserSection isDarkMode={isDarkMode} sendtoForm={sendtoForm} />
      <PublisherSection isDarkMode={isDarkMode} sendtoForm={sendtoForm} />
      <StatsSection isDarkMode={isDarkMode} />
      <ContactSection isDarkMode={isDarkMode} />
      <JoinUsSection isDarkMode={isDarkMode} sendtoForm={sendtoForm} />
      <FooterSection isDarkMode={isDarkMode} />
    </>
  );
}

