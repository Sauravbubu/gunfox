"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
// import emailjs from "emailjs-com"; // Assuming EmailJS setup
import { ArrowRight, X } from 'lucide-react';
import { Activity, Settings, BarChart4, MessageCircle } from 'lucide-react';
import CountUp from "react-countup"; // Added for StatsSection
import { useInView } from "react-intersection-observer"; // Added for StatsSection
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/Services";
import ContactSection from "./components/ContactSection";
import JoinUsSection from "./components/JoinUsSection";
import FooterSection from "./components/Footer";
import AboutSection from "./components/AboutUs";
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

  // Dynamically update the title based on scroll position
  useEffect(() => {
    function handleScroll() {
      // Define your sections and their titles
      const sections = [
        { id: "about", title: "About | Avengers Media" },
        { id: "services", title: "Services | Avengers Media" },
        { id: "advertiser", title: "Advertiser | Avengers Media" },
        { id: "publisher", title: "Publisher | Avengers Media" },
        { id: "stats", title: "Stats | Avengers Media" },
        { id: "contact", title: "Contact | Avengers Media" },
        { id: "joinus", title: "Join Us | Avengers Media" },
      ];

      let found = false;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // You can adjust the threshold (here: 80px from top)
          if (rect.top <= 80 && rect.bottom >= 80) {
            document.title = section.title;
            found = true;
            break;
          }
        }
      }
      if (!found) {
        document.title = "Avengers Media";
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Call once to set initial title
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

