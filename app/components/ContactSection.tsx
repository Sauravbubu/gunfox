import { motion } from "framer-motion";
import { useState } from "react";

interface ContactSectionProps {
  isDarkMode: boolean;
}

export default function ContactSection({ isDarkMode }: ContactSectionProps) {
  const [userType, setUserType] = useState("");

  return (
    <section
      id="contact"
      className={`py-20 px-4 md:px-6 text-center font-sans ${
        isDarkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-white/10 to-white/5"
      } backdrop-blur-lg`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-8"
      >
        <h3
          className={`text-4xl md:text-5xl font-semibold mb-6 bg-clip-text text-transparent ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-400 to-purple-400"
              : "bg-gradient-to-r from-blue-600 to-purple-600"
          }`}
        >
          Contact Us
        </h3>
        <p
          className={
            isDarkMode
              ? "text-gray-200 text-lg md:text-xl"
              : "text-gray-700 text-lg md:text-xl"
          }
        >
          We'd love to hear from you! Please fill out the form below and we'll
          get back to you as soon as possible.
        </p>

        <form
          className="space-y-6 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());
            console.log("Form Data:", data);

            setTimeout(() => {
              alert("Your message has been sent successfully!");
              e.currentTarget.reset();
              setUserType(""); // Reset userType after submission
            }, 500);
          }}
        >
          <div className="space-y-4">
            <select
              name="user_type"
              required
              className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 shadow-sm ${
                isDarkMode
                  ? "border-gray-600 bg-gray-700/80 text-gray-100 focus:ring-blue-400 placeholder:text-gray-400"
                  : "border-gray-300 bg-white/80 text-gray-900 focus:ring-blue-500 placeholder:text-gray-500"
              }`}
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option
                value=""
                className={isDarkMode ? "text-gray-400" : "text-gray-500"}
                disabled
              >
                I am a...
              </option>
              <option
                value="publisher"
                className={
                  isDarkMode
                    ? "hover:bg-gray-600 text-gray-100"
                    : "hover:bg-gray-100/80 text-gray-900"
                }
              >
                Publisher
              </option>
              <option
                value="advertiser"
                className={
                  isDarkMode
                    ? "hover:bg-gray-600 text-gray-100"
                    : "hover:bg-gray-100/80 text-gray-900"
                }
              >
                Advertiser
              </option>
            </select>

            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 shadow-sm ${
                isDarkMode
                  ? "border-gray-600 bg-gray-700/80 text-gray-100 focus:ring-blue-400 placeholder:text-gray-400"
                  : "border-gray-300 bg-white/80 text-gray-900 focus:ring-blue-500 placeholder:text-gray-500"
              }`}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 shadow-sm ${
                isDarkMode
                  ? "border-gray-600 bg-gray-700/80 text-gray-100 focus:ring-blue-400 placeholder:text-gray-400"
                  : "border-gray-300 bg-white/80 text-gray-900 focus:ring-blue-500 placeholder:text-gray-500"
              }`}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 shadow-sm ${
                isDarkMode
                  ? "border-gray-600 bg-gray-700/80 text-gray-100 focus:ring-blue-400 placeholder:text-gray-400"
                  : "border-gray-300 bg-white/80 text-gray-900 focus:ring-blue-500 placeholder:text-gray-500"
              }`}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none shadow-sm ${
                isDarkMode
                  ? "border-gray-600 bg-gray-700/80 text-gray-100 focus:ring-blue-400 placeholder:text-gray-400"
                  : "border-gray-300 bg-white/80 text-gray-900 focus:ring-blue-500 placeholder:text-gray-500"
              }`}
            />
          </div>
          <button
            type="submit"
            className={`w-full px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg font-semibold text-lg transition-all duration-300 ${
              isDarkMode
                ? "bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white"
                : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
            }`}
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
