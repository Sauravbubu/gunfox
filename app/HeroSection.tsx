"use client";

import { motion } from "framer-motion";
export function cn(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(" ");
  }
  // Assumed - adjust path if needed

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1614850715740-e1b99e747445?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", // Replace with a suitable high-resolution image URL
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 drop-shadow-lg"
        >
          Digital Solutions
          <br />
          for Your Growth
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          className="text-2xl sm:text-3xl font-serif font-extrabold text-white mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-600 drop-shadow-lg"
        >
          Marketing that Delivers
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
        >
          <button
            className={cn(
              "bg-white text-purple-700 font-bold rounded-full px-8 py-3",
              "shadow-lg hover:shadow-xl hover:scale-105",
              "transition-all duration-300",
              "text-lg sm:text-xl",
            )}
          >
            Get a Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
