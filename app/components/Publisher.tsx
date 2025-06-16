// components/PublisherSection.tsx
import { motion } from "framer-motion";

const PublisherSection: React.FC<{ isDarkMode: boolean; sendtoForm: () => void }> = ({ isDarkMode, sendtoForm }) => (
  <section id="publisher" className={`py-16 md:py-24 px-4 md:px-6 font-sans ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "linear" }}
        className="flex items-center justify-center"
      >
        <div className="w-full max-w-[500px] h-auto">
          <img src="./publisher.png" alt="Marketing and Growth Illustration" className="rounded-lg shadow-lg" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
        className="text-center md:text-left space-y-6"
      >
        <h3 className={`text-3xl md:text-4xl font-semibold ${isDarkMode ? "text-green-400" : "text-green-600"}`}>Publisher</h3>
        <p className={`text-base md:text-lg max-w-3xl ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Why choose Avengers Media as your monetization partner?</p>
        <ul className="list-none pl-0 space-y-4">
          {[
            "Access to worldwide campaigns with substantial budgets",
            "Integrated MMP tracking for all campaigns",
            "Prompt validation and timely payments",
            "24/7 assistance via team, email, and calls",
            "Flexible and convenient payment terms",
          ].map((item, idx) => (
            <li key={idx} className={`flex items-start gap-2 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
              <span className={`mt-1.5 h-5 w-5 rounded-full flex-shrink-0 ${isDarkMode ? "bg-green-400" : "bg-green-500"}`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <button onClick={sendtoForm} className={`py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-semibold ${isDarkMode ? "bg-gradient-to-r from-green-400 to-teal-400 hover:from-green-500 hover:to-teal-500 text-white" : "bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white"}`}>
            Partner With Us
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PublisherSection;