import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

interface FooterSectionProps {
  isDarkMode: boolean;
}

function cn(...args: any[]) {
  return args.filter(Boolean).join(" ");
}

export default function FooterSection({ isDarkMode }: FooterSectionProps) {
  return (
    <footer
      className={`py-12 px-4 md:px-6 font-sans ${
        isDarkMode ? "bg-green-700 text-gray-200" : "bg-green-400 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="text-xl md:text-2xl font-bold mb-4">Avengers Media</h4>
          <p>
            Avengers Media is your partner for forward-thinking digital
            campaigns driven by data and creativity.
          </p>
        </div>
        <div>
          <h4 className="text-xl md:text-2xl font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>• Performance Marketing</li>
            <li>• Campaign Intelligence</li>
            <li>• Mobile Engagement</li>
            <li>• Anti-Fraud Systems</li>
            <li>• Real-time Insights</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl md:text-2xl font-bold mb-4">Contact</h4>
          <p>Email: admin@avengersmedia.in</p>
          <p>Phone: +91 8310531595</p>
        </div>
        <div>
          <h4 className="text-xl md:text-2xl font-bold mb-4">Connect With Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-full transition-colors duration-300",
                isDarkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white"
                  : "bg-white/20 text-white hover:bg-blue-600"
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Facebook className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-full transition-colors duration-300",
                isDarkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-blue-400 hover:text-white"
                  : "bg-white/20 text-white hover:bg-blue-400"
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-full transition-colors duration-300",
                isDarkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-blue-700 hover:text-white"
                  : "bg-white/20 text-white hover:bg-blue-700"
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-full transition-colors duration-300",
                isDarkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-pink-600 hover:text-white"
                  : "bg-white/20 text-white hover:bg-pink-600"
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </div>
      <div
        className={`border-t mt-8 pt-6 text-center text-sm ${
          isDarkMode ? "border-gray-600/30" : "border-white/30"
        }`}
      >
        &copy; {new Date().getFullYear()} Avengers Media. All rights reserved.
      </div>
    </footer>
  );
}
