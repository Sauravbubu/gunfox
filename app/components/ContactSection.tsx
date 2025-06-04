import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

interface ContactSectionProps {
  isDarkMode: boolean;
}

export default function ContactSection({ isDarkMode }: ContactSectionProps) {
  const [userType, setUserType] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const SERVICE_ID = "service_gp5d5ln";
  const TEMPLATE_ID = "template_407oyq8";
  const PUBLIC_KEY = "1a6kCqz97xf5lqTMc";

  return (
    <section
      id="contact"
      className={`py-20 px-4 md:px-6 text-center font-sans ${
        isDarkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-white/10 to-white/5"
      } backdrop-blur-lg`}
    >
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-sm w-full text-center">
            <h4 className="text-2xl font-bold mb-2 text-green-600">Thank you!</h4>
            <p className="mb-4 text-gray-700">Your message has been sent successfully.</p>
            <button
              className="mt-2 px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              onClick={() => setShowSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

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
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            const form = e.currentTarget;
            emailjs
              .sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
              .then(
                () => {
                  setShowSuccess(true);
                  form.reset();
                  setUserType("");
                },
                (error) => {
                  alert("Failed to send message. Please try again.");
                  console.error(error);
                }
              )
              .finally(() => setLoading(false));
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
              <option value="publisher">Publisher</option>
              <option value="advertiser">Advertiser</option>
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
            disabled={loading}
            className={`w-full px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg font-semibold text-lg transition-all duration-300 ${
              isDarkMode
                ? "bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white"
                : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}