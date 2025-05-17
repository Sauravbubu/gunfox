"use client";
import { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  { value: 350, label: "Advertisers" },
  { value: 900, label: "Affiliates" },
  { value: 6000, label: "Campaigns" },
  { value: 15840, label: "Hours of Support" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <section
      id="facts"
      className="relative py-24 px-6 text-center bg-white overflow-hidden"
      style={{
        backgroundImage: `url('/your-world-map-bg.png')`,
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
        <h2 className="text-4xl font-bold mb-2 text-black">FACTS</h2>
        <div className="h-1 w-12 bg-yellow-400 mx-auto mb-4 rounded-full" />
        <p className="text-lg text-gray-700 mb-12">
          Let's take a look at the numbers
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-4xl font-extrabold text-yellow-500 mb-2">
                {hasAnimated ? (
                  <CountUp end={stat.value} duration={2.5} />
                ) : (
                  "0"
                )}
                +
              </h3>
              <p className="text-lg font-semibold text-gray-800">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
