// components/StatsSection.tsx
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const StatsSection: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
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
        backgroundImage: isDarkMode ? `url('/your-world-map-dark-bg.png')` : `url('/your-world-map-light-bg.png')`,
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
        <h2 className={`text-4xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-black"}`}>FACTS</h2>
        <div className={`h-1 w-12 mx-auto mb-4 rounded-full ${isDarkMode ? "bg-yellow-300" : "bg-yellow-400"}`} />
        <p className={`text-lg mb-12 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Let's take a look at the numbers</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <h3 className={`text-4xl font-extrabold mb-2 ${isDarkMode ? "text-yellow-400" : "text-yellow-500"}`}>
                {hasAnimated ? <CountUp end={stat.value} duration={2.5} /> : "0"}+
              </h3>
              <p className={`text-lg font-semibold ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;