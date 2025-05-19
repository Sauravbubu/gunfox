import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Utility function to combine class names
function cn(...args: any[]): string {
    let className = "";
    for (let arg of args) {
        if (typeof arg === "string") {
            className += arg + " ";
        } else if (typeof arg === "object" && arg !== null) {
            if (Array.isArray(arg)) {
                for (let subArg of arg) {
                    if (subArg) {
                        className += subArg + " ";
                    }
                }
            } else {
                for (let key in arg) {
                    if (arg[key]) {
                        className += key + " ";
                    }
                }
            }
        }
    }
    return className.trim();
}

interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    fullDescription: string;
    readMoreLink: string;
    index: number;
}

const Card: React.FC<CardProps> = ({ icon, title, description, fullDescription, readMoreLink, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const colors = ['#F44336', '#4CAF50', '#3F51B5'];
    const color = colors[index % colors.length];

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={cn(
                "relative p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg",
                "transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-white/10",
                "flex flex-col gap-6",
                "overflow-hidden"
            )}
        >
            {/* Circular Cutout Shape */}
            <div
                className="absolute top-0 left-0 w-24 h-24 bg-transparent rounded-full -translate-x-1/4 -translate-y-1/4"
                style={{
                    backgroundColor: `${color}1A`,
                }}
            />

            {/* Circular Icon */}
            <div className="absolute top-6 left-6 w-10 h-10 rounded-full flex items-center justify-center">
                <div style={{ color: color }}>{icon}</div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-white mt-8">{title}</h2>
            {/* Description */}
            <p className="text-gray-300 text-sm">{description}</p>

            {/* Read More Link */}
            <button
                onClick={toggleOpen}
                className={cn(
                    "text-sm font-medium transition-colors duration-200 flex items-center gap-1 w-fit cursor-pointer",
                    `text-[${color}] hover:text-[${color}]/80`,
                    "flex items-center" // Added to align arrow
                )}
            >
                Read more →
            </button>

            {/* Full Description Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                            "absolute top-0 left-0 w-full h-full bg-black/80 backdrop-blur-md rounded-xl p-6 flex flex-col text-white z-10 overflow-y-auto max-h-[80vh]"
                        )}  
                        style={
                            { backgroundColor: `${color}1A` } as React.CSSProperties
                        }
                    >
                        <div className="bg-[var(--background-color)] rounded-xl p-6 shadow-xl">
                            <h2 className="text-2xl font-semibold mb-4 text-white">{title}</h2>
                            <p className="text-gray-200 leading-relaxed whitespace-pre-line">{fullDescription}</p>
                            <button
                                onClick={toggleOpen}
                                className="mt-6 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md self-start"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const CardGrid = () => {
    const cardData = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-activity"
                >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
            ),
            title: "Title 1",
            description: "Tailored to meet individual needs perfectly balanced.",
            fullDescription: `This is the full description for card 1.  It can contain a lot more text and details than the short description.  This is an example of expanded content shown on Read More.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            
            Additional details can be added here.  This is a multi-line description to test how the card handles longer content. We want to make sure the text wraps correctly and that the modal is scrollable.
            
            More paragraphs can be included to simulate a very long description. The user should be able to scroll through this content without any issues.  The modal should expand vertically as needed, up to a maximum height.`,
            readMoreLink: "#",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle"
                >
                    <circle cx="12" cy="12" r="10" />
                </svg>
            ),
            title: "Title 2",
            description: "Tailored to meet individual needs perfectly balanced.",
            fullDescription:
                "This is the full description for card 2.  It can contain a lot more text and details than the short description. This is an example of expanded content shown on Read More.",
            readMoreLink: "#",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-zap"
                >
                    <path d="M13 2L3 14h9l-1 8 10-18H13z" />
                </svg>
            ),
            title: "Title 3",
            description: "Tailored to meet individual needs perfectly balanced.",
            fullDescription:
                "This is the full description for card 3. It can contain a lot more text and details than the short description. This is an example of expanded content shown on Read More.",
            readMoreLink: "#",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    index={index}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                    fullDescription={card.fullDescription}
                    readMoreLink={card.readMoreLink}
                />
            ))}
        </div>
    );
};

export default CardGrid;
