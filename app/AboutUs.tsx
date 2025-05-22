'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function AboutSection({ isDarkMode }: { isDarkMode: boolean }) {
  return (
   <section
  id="about"
  className="py-20 md:py-32 px-4 md:px-6 font-sans relative overflow-hidden"
  style={{ backgroundColor: isDarkMode ? '#1a202c' : '#f0f2f5' }}
>
  {/* Background abstract shapes */}
  <div
    className="absolute w-52 h-52 rounded-full filter blur-3xl opacity-30 z-0"
    style={{
      top: '-40px',
      right: '-40px',
      background: isDarkMode ? 'linear-gradient(135deg, #ED64A6, #D53F8C)' : 'linear-gradient(135deg, #F472B6, #EC4899)',
    }}
  ></div>
  <div
    className="absolute w-64 h-64 rounded-full filter blur-3xl opacity-30 z-0"
    style={{
      bottom: '-40px',
      left: '-40px',
      background: isDarkMode ? 'linear-gradient(135deg, #38B2AC, #319795)' : 'linear-gradient(135deg, #5EEAD4, #2DD4BF)',
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
    <div className="text-center mb-12">
      <motion.h3
        variants={textVariants}
        className="text-4xl md:text-5xl font-semibold mb-4"
        style={{
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          backgroundImage: isDarkMode ? 'linear-gradient(to right, #90CDF4, #E9D8FD)' : 'linear-gradient(to right, #3B82F6, #9333EA)',
        }}
      >
        Why Choose Us ?
      </motion.h3>
      <motion.p
        variants={textVariants}
        className={isDarkMode ? "text-gray-200 text-lg md:text-xl leading-relaxed" : "text-gray-700 text-lg md:text-xl leading-relaxed"}
      >
        At Avengers Media, our commitment goes beyond results—we provide a strategic edge powered by innovation, precision, and transparency.
      </motion.p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
      {[
        {
          title: 'Performance-First Approach',
          text: 'We prioritize data-driven strategies that guarantee results and deliver unmatched ROI for both advertisers and publishers.',
        },
        {
          title: 'Transparent Partnership',
          text: 'Trust is the foundation. We ensure complete visibility in our processes, empowering our clients to make informed decisions.',
        },
        {
          title: 'Tech-Powered Innovation',
          text: 'From AI-enhanced targeting to real-time analytics, we leverage the latest technologies to drive smarter outcomes.',
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          variants={textVariants}
          className="p-6 rounded-xl shadow-md bg-white/10 backdrop-blur-md border border-white/10"
        >
          <h4
            className="text-2xl font-semibold mb-3"
            style={{
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              backgroundImage: isDarkMode
                ? 'linear-gradient(to right, #FBD38D, #F6AD55)'
                : 'linear-gradient(to right, #F59E0B, #F97316)',
            }}
          >
            {item.title}
          </h4>
          <p className={isDarkMode ? "text-gray-200 text-base leading-relaxed" : "text-gray-700 text-base leading-relaxed"}>
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

  );
}

function FloatingBlob({
  className,
  fill,
  transform,
}: {
  className: string;
  fill: string;
  transform?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="blurFilterInner">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
        </filter>
      </defs>
      <path
        fill={fill}
        transform={transform || 'translate(100 100)'}
        filter="url(#blurFilterInner)"
        d="M57.6,-57.8C72.1,-43.8,79.5,-21.9,74.7,-1.8C69.9,18.3,52.8,36.5,33.5,49.1C14.2,61.7,-7.3,68.6,-28.3,64.4C-49.3,60.2,-69.8,44.8,-76.3,23.3C-82.8,1.8,-75.4,-25.9,-60.6,-40.4C-45.9,-54.9,-23,-62.2,-0.2,-62C22.6,-61.8,45.3,-58.5,57.6,-57.8Z"
      />
    </svg>
  );
}
