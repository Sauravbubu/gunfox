import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { Activity, Settings, BarChart4, MessageCircle } from 'lucide-react';

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
}

const Card: React.FC<CardProps> = ({ icon, title, description, fullDescription, readMoreLink, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const colors = ['#F44336', '#4CAF50', '#3F51B5', '#FF9800'];
    const color = colors[index % colors.length];

    return (
        <div
            className={cn(
                "relative p-6 rounded-xl bg-white shadow-lg",
                "transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                "flex flex-col min-h-[400px] overflow-hidden"
            )}
        >
            {/* Top-left background shape */}
            <div
                className="absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-10 blur-2xl"
                style={{ backgroundColor: `${color}1A` }}
            />

            {/* Icon */}
            <div
                className="absolute top-6 left-6 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${color}1A`, color: color }}
            >
                {icon}
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-900 mt-16 mb-2">{title}</h2>

            {/* Short Description */}
            <p className="text-gray-600 text-sm mb-4">{description}</p>

            {/* Read More Link */}
            <button
                onClick={() => setIsOpen(true)}
                style={{ color: color }}
                className="text-sm font-medium transition-colors duration-200 flex items-center gap-1 w-fit cursor-pointer hover:opacity-80 mt-auto"
            >
                Read more
                <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            {/* Full Description Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-0 left-0 w-full h-full bg-white/95 backdrop-blur-md rounded-xl p-6 flex flex-col text-gray-900 z-10"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-lg font-semibold">{title}</h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800 mt-0">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="overflow-y-scroll pr-1 max-h-[calc(100%-3rem)]">
                            <p className="text-sm leading-relaxed whitespace-pre-line">{fullDescription}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ServicesSection = () => {
    const servicesData = [
        {
            icon: <Activity className="w-6 h-6" />,
            title: "Marketing Strategy",
            description: "Our marketing strategy service provides tailored solutions to meet your unique business needs. We analyze your market, identify opportunities, and develop a roadmap for success.",
            fullDescription:
                "We provide a full-fledged marketing strategy that includes competitor research, trend analysis, and a personalized roadmap to boost your brand visibility.  Our team of experts will work closely with you to understand your goals and create a plan that delivers results.",
            readMoreLink: "#",
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: "Automation Tools",
            description: "We offer automation tools to streamline your workflows and improve efficiency.  Our solutions can help you automate repetitive tasks, freeing up your time to focus on more strategic initiatives.",
            fullDescription:
                "From CRM automation to email marketing pipelines, we equip you with tools that reduce manual effort and scale faster.  Our automation tools are designed to be easy to use and integrate seamlessly with your existing systems.",
            readMoreLink: "#",
        },
        {
            icon: <BarChart4 className="w-6 h-6" />,
            title: "Data Analytics",
            description: "Our data analytics services help you gain valuable insights from your data.  We use advanced techniques to identify trends, patterns, and opportunities that can help you make better business decisions.",
            fullDescription:
                "We help you collect, analyze, and act on data-driven insights to make better decisions for your campaigns and ROI.  Our team of data scientists and analysts will provide you with clear, actionable recommendations.",
            readMoreLink: "#",
        },
        {
            icon: <MessageCircle className="w-6 h-6" />,
            title: "Customer Engagement",
            description: "We help you build stronger relationships with your customers through our customer engagement services.  We offer a range of solutions to help you connect with your audience and improve customer satisfaction.",
            fullDescription:
                "Our engagement tools enable you to interact with your audience via chat, social platforms, and personalized follow-ups. We provide the tools and strategies you need to build lasting customer loyalty.",
            readMoreLink: "#",
        },
    ];

    const handleHireUsClick = () => {
        window.location.href = '#contact'; // would work in a simple app.
    };

    return (
        <section className="px-6 py-16 bg-[#f8fafc] text-center">
            <h2 className="text-4xl font-bold mb-2 text-black">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                Our mission is to drive progress and enhance the lives of our customers by delivering superior products and services that exceed expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {servicesData.map((service, index) => (
                    <Card
                        key={index}
                        index={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        fullDescription={service.fullDescription}
                        readMoreLink={service.readMoreLink}
                    />
                ))}
            </div>

            <div className="mt-12 flex justify-center"> {/* Centered the button */}
                <button
                    onClick={handleHireUsClick}
                    className="px-6 py-3 rounded-xl bg-pink-400 text-white font-semibold shadow-md hover:bg-pink-500 transition-all flex items-center gap-2"
                >
                    Contact Today
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
};

export default ServicesSection;
