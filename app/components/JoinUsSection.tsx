import { motion } from "framer-motion";

interface JoinUsSectionProps {
  isDarkMode: boolean;
  sendtoForm: () => void;
}

export default function JoinUsSection({ isDarkMode, sendtoForm }: JoinUsSectionProps) {
  return (
    <section
      id="join"
      className={`py-20 px-4 md:px-6 text-center font-sans ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3
          className={`text-3xl md:text-4xl font-semibold mb-4 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Join Us
        </h3>
        <p
          className={`text-base md:text-lg max-w-3xl mx-auto ${
            isDarkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Become part of our growing network. Whether you're an advertiser
          looking to boost visibility or a publisher ready to monetize,
          Avengers Media is here for you.
        </p>
        <button
          onClick={sendtoForm}
          className={`mt-6 px-6 py-3 font-bold rounded-lg shadow-md transition-colors duration-300 ${
            isDarkMode
              ? "bg-purple-500 hover:bg-purple-600 text-white"
              : "bg-purple-600 hover:bg-purple-700 text-white"
          }`}
        >
          Get Started
        </button>
      </motion.div>
    </section>
  );
}
