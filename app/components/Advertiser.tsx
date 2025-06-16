
import { motion } from "framer-motion";

const AdvertiserSection: React.FC<{ isDarkMode: boolean; sendtoForm: () => void }> = ({ isDarkMode, sendtoForm }) => (
  <section id="advertiser" className={`py-16 md:py-24 px-4 md:px-6 font-sans ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="text-center space-y-4 md:space-y-6"
      >
        <h3 className={`text-3xl md:text-4xl font-semibold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>Advertiser</h3>
        <p className={`text-base md:text-lg max-w-4xl mx-auto ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
          Partner with Avengers Media for future-ready marketing. We invest in robust tech and media channels to connect you with high-intent audiences. Our continuous innovation in platforms and models ensures your brand remains competitive and impactful.
        </p>
        <div className="mt-8">
          <button onClick={sendtoForm} className={`py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-semibold ${isDarkMode ? "bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white" : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"}`}>
            Get Started
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AdvertiserSection;