
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

function cn(...args: any[]): string {
  return args.filter(Boolean).join(' ');
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  fullDescription: string;
  readMoreLink: string;
  index: number;
  bgImage: string;
  isDarkMode: boolean;
  isReadMoreOpen: boolean;
  onToggleReadMore: () => void;
  layout?: "text-over-image" | "image-top"; // New prop
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  fullDescription,
  readMoreLink,
  index,
  bgImage,
  isDarkMode,
  isReadMoreOpen,
  onToggleReadMore,
  layout = "text-over-image", // Default to current layout
}) => {
  const colors = isDarkMode
    ? ['#EF4444', '#22C55E', '#ffec6b', '#F97316']
    : ['#F44336', '#4CAF50', '#3F51B5', '#FF9800'];
  const color = colors[index % colors.length];

  // Optional: Close modal on ESC key (nice UX)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isReadMoreOpen) {
        onToggleReadMore();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isReadMoreOpen, onToggleReadMore]);

  // Base classes for both layouts
  const baseCardClasses = cn(
    "relative p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col overflow-hidden",
    isDarkMode ? "bg-black/60 border border-gray-700" : "bg-black/50 border border-white/10",
    "backdrop-blur-md"
  );

  return (
    <div
      className={cn(
        baseCardClasses,
        layout === "text-over-image" ? "min-h-[400px] bg-cover bg-center" : "min-h-[auto]"
      )}
      style={layout === "text-over-image" ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      {/* Background overlay and decorative elements */}
      <div
        className="absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-10 blur-2xl"
        style={{ backgroundColor: `${color}1A` }}
      />
      <div
        className="absolute top-6 left-6 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ backgroundColor: `${color}1A`, color: color }}
      >
        {icon}
      </div>

      {/* Conditional rendering for "image-top" layout */}
      {layout === "image-top" && (
        <div
          className="w-full h-48 rounded-md mb-4 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      )}

      {/* Content for both layouts */}
      <h2
        className={cn(
          "text-xl font-semibold mb-2 relative text-white drop-shadow-lg",
          "bg-black/60 backdrop-blur-sm rounded-md px-2 py-1",
          layout === "text-over-image" ? "mt-16" : "mt-0" // Adjust margin based on layout
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "text-sm mb-4 relative bg-black/50 backdrop-blur-sm rounded-md px-2 py-1",
          isDarkMode ? "text-gray-200" : "text-gray-200"
        )}
      >
        {description}
      </p>

      <button
        onClick={onToggleReadMore}
        style={{ color: color }}
        className={cn(
          "text-sm font-medium transition-colors duration-200 flex items-center gap-1 w-fit cursor-pointer hover:opacity-80 mt-auto",
          "bg-black/40 text-white backdrop-blur-sm rounded-md px-2 py-1"
        )}
      >
        Read more
        <ArrowRight className="w-4 h-4 ml-1" />
      </button>

      <AnimatePresence>
        {isReadMoreOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "absolute top-0 left-0 w-full h-full rounded-xl p-6 flex flex-col z-10",
              isDarkMode ? "bg-black/90 backdrop-blur-lg text-white" : "bg-black/95 backdrop-blur-md text-white"
            )}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-lg font-semibold">{title}</h2>
              <button onClick={onToggleReadMore} className="text-gray-400 hover:text-white mt-0">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-y-scroll pr-1 max-h-[calc(100%-3rem)]">
              <p className="text-sm leading-relaxed whitespace-pre-line text-gray-300">{fullDescription}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Card;
