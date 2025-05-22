import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  // Define variants for the main content block animation
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        when: "beforeChildren", // Animate children after parent
        staggerChildren: 0.05,  // Stagger children animations by 0.05 seconds for word-by-word effect
      },
    },
  };

  // Define variants for individual text elements (children of the container)
  // Now, only opacity is animated for a pure fade-in effect.
  const itemVariants = {
    hidden: { opacity: 0 }, // Starts invisible
    visible: { opacity: 1 }, // Fades to visible
  };

  // Split the heading text into words for individual animation
  const headingText1 = "Affiliate Marketing".split(" ");
  const headingText2 = "Built to Perform".split(" ");

  return (
    // The main section container, ensuring it takes at least the full screen height
    // and centers its content. overflow-hidden prevents scrollbars from the animated background.
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden" >
      {/* Animated Background Layer */}
      {/* This div acts as the container for the animated gradient. */}
      {/* It's positioned absolutely to cover the entire section and has a lower z-index */}
      {/* to stay behind the main content. */}
      <div className="absolute inset-0 z-0">
        {/* The actual gradient element. */}
        {/* bg-gradient-to-br defines the gradient direction and colors. */}
        {/* animate-breathing-gradient applies the new custom CSS animation defined below. */}
        <div className="w-full h-full bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 animate-breathing-gradient"  style={{ backgroundImage: "url('/bg-3.png')" }}></div>
      </div>

      {/* Main Content Block with Animation and Glass Background */}
      {/* This motion.div contains your primary hero content. */}
      {/* It's positioned relatively and has a higher z-index to appear above the background. */}
      {/* The shadow, rounded corners, padding, backdrop-blur (for glass effect), and border are applied. */}
      <motion.div
        // Apply the container variants for the overall block animation
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 shadow-2xl rounded-3xl px-6 md:px-12 py-14 md:py-20 max-w-5xl text-center bg-black/60 border border-white/10 backdrop-blur-2xl text-white"
      >
        {/* Main Heading with Word-by-Word Fade-In Animation */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-400 to-purple-500">
          {headingText1.map((word, index) => (
            <motion.span variants={itemVariants} key={index} className="inline-block mr-2">
              {word}
            </motion.span>
          ))}
          <br /> {/* Line break between the two parts of the heading */}
          {headingText2.map((word, index) => (
            <motion.span variants={itemVariants} key={index + headingText1.length} className="inline-block mr-2">
              {word}
            </motion.span>
          ))}
        </h1>
        {/* Sub-heading/Description with Pure Fade-In Animation */}
        <motion.p variants={itemVariants} className="mt-6 text-lg md:text-xl text-gray-300 font-medium">
          Partner. Promote. Profit. We empower publishers & advertisers with tech-driven solutions.
        </motion.p>
        {/* Call-to-Action Button with Hover Effect and Pure Fade-In Animation */}
        <motion.a href="#contact" variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.4)" }} // Scale up and add more shadow on hover
            whileTap={{ scale: 0.95 }} // Slightly shrink on tap/click
            className="mt-8 px-8 py-4 font-bold rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg"
          >
            Get Started Now
          </motion.button>
        </motion.a>
      </motion.div>

      {/* Custom CSS for the Gradient Animation */}
      {/* This style block defines the @keyframes for the new background animation. */}
      <style>
        {`
        /* Defines the animation for a breathing/pulsating gradient effect */
        @keyframes breathing-gradient {
          0% {
            background-size: 200% 200%; /* Start with a smaller background size */
            background-position: 0% 0%; /* Start position */
          }
          50% {
            background-size: 400% 400%; /* Expand the background size */
            background-position: 100% 100%; /* Move to a different position */
          }
          100% {
            background-size: 200% 200%; /* Return to original size */
            background-position: 0% 0%; /* Return to original position */
          }
        }

        /* Applies the new animation to the .animate-breathing-gradient class */
        .animate-breathing-gradient {
          animation: breathing-gradient 30s ease infinite; /* Applies the animation: */
                                                          /* - breathing-gradient: the keyframe name */
                                                          /* - 30s: duration of one animation cycle (slower for subtlety) */
                                                          /* - ease: timing function for smooth acceleration/deceleration */
                                                          /* - infinite: makes the animation loop indefinitely */
        }
        `}
      </style>
    </section>
  );
}

export default HeroSection;
