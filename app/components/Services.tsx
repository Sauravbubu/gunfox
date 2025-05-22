import React, { useState, useEffect, useRef } from 'react';
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
    bgImage: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, fullDescription, readMoreLink, index, bgImage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const colors = ['#F44336', '#4CAF50', '#3F51B5', '#FF9800'];
    const color = colors[index % colors.length];

    return (
        <div
            className={cn(
                "relative p-6 rounded-xl shadow-lg",
                "transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                "flex flex-col min-h-[400px] overflow-hidden",
                "bg-cover bg-center border border-white/10",
                "bg-black/50 backdrop-blur-md"
            )}
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
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
            <h2 className={cn(
                "text-xl font-semibold text-white mt-16 mb-2 relative",
                "drop-shadow-lg",
                "text-shadow-sm",
                "bg-white/10 backdrop-blur-md rounded-md px-2 py-1"
            )}>
                {title}
            </h2>
            {/* Description */}
            <p className="text-gray-300 text-sm mb-4 relative bg-white/10 backdrop-blur-md rounded-md px-2 py-1">
                {description}
            </p>

            {/* Read More Link */}
            <button
                onClick={() => setIsOpen(true)}
                style={{ color: color }}
                className="text-sm font-medium transition-colors duration-200 flex items-center gap-1 w-fit cursor-pointer hover:opacity-80 mt-auto bg-white/10 backdrop-blur-md rounded-md px-2 py-1"
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
                        className="absolute top-0 left-0 w-full h-full bg-black/95 backdrop-blur-md rounded-xl p-6 flex flex-col text-white z-10"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-lg font-semibold">{title}</h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white mt-0">
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

const AnimatedMulticolorText = ({ text }: { text: string }) => {
    const [gradient, setGradient] = useState(
      'linear-gradient(90deg, #F44336, #4CAF50, #3F51B5, #FF9800, #9C27B0, #2196F3)'
    );
    const [backgroundSize, setBackgroundSize] = useState('200%');
    const [backgroundPosition, setBackgroundPosition] = useState('0 50%');
    const containerRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackgroundPosition((prevPosition) =>
                prevPosition === '0 50%' ? '100% 50%' : '0 50%'
            );
        }, 2000); // Adjust for speed

        return () => clearInterval(intervalId);
    }, []);

    const textStyle = {
        fontSize: '4rem',  // Make sure the font size is appropriate
        fontWeight: 'bold',
        color: 'transparent',
        backgroundImage: gradient,
        backgroundSize: backgroundSize,
        backgroundPosition: backgroundPosition,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        transition: 'background-position 2s linear', // Keep the transition here
    };

    return (
        <h2 ref={containerRef} style={textStyle} className="mb-2 flex justify-center">
            {text}
        </h2>
    );
};

const ServicesSection = () => {
    const servicesData = [
        {
            icon: <Activity className="w-6 h-6 text-white" />,
            title: "Marketing Strategy",
            description: "Our marketing strategy service provides tailored solutions to meet your unique business needs. We analyze your market, identify opportunities, and develop a roadmap for success.",
            fullDescription:
                "We provide a full-fledged marketing strategy that includes competitor research, trend analysis, and a personalized roadmap to boost your brand visibility.  Our team of experts will work closely with you to understand your goals and create a plan that delivers results.",
            readMoreLink: "#",
            bgImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            icon: <Settings className="w-6 h-6 text-white" />,
            title: "Automation Tools",
            description: "We offer automation tools to streamline your workflows and improve efficiency.  Our solutions can help you automate repetitive tasks, freeing up your time to focus on more strategic initiatives.",
            fullDescription:
                "From CRM automation to email marketing pipelines, we equip you with tools that reduce manual effort and scale faster.  Our automation tools are designed to be easy to use and integrate seamlessly with your existing systems.",
            readMoreLink: "#",
            bgImage: 'https://images.unsplash.com/photo-1548372276-74815418f415?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            icon: <BarChart4 className="w-6 h-6 text-white" />,
            title: "Data Analytics",
            description: "Our data analytics services help you gain valuable insights from your data.  We use advanced techniques to identify trends, patterns, and opportunities that can help you make better business decisions.",
            fullDescription:
                "We help you collect, analyze, and act on data-driven insights to make better decisions for your campaigns and ROI.  Our team of data scientists and analysts will provide you with clear, actionable recommendations.",
            readMoreLink: "#",
            bgImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            icon: <MessageCircle className="w-6 h-6 text-white" />,
            title: "Customer Engagement",
            description: "We help you build stronger relationships with your customers through our customer engagement services.  We offer a range of solutions to help you connect with your audience and improve customer satisfaction.",
            fullDescription:
                "Our engagement tools enable you to interact with your audience via chat, social platforms, and personalized follow-ups. We provide the tools and strategies you need to build lasting customer loyalty.",
            readMoreLink: "#",
            bgImage: 'https://images.unsplash.com/photo-1531482615713-74a1a7e5b744?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ];

    const handleHireUsClick = () => {
        window.location.href = '#contact';
    };

    return (
        <section id='services' className="px-6 py-16 bg-gray-900 text-center">
            <AnimatedMulticolorText text="Our Services" />
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
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
                        bgImage={service.bgImage}
                    />
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <button
                    onClick={handleHireUsClick}
                    className="px-6 py-3 rounded-xl bg-pink-500 text-white font-semibold shadow-md hover:bg-pink-600 transition-all flex items-center gap-2"
                >
                    Contact Today
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
};

export default ServicesSection;

