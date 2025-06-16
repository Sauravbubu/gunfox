import { Activity, ArrowRight, BarChart4, MessageCircle, Settings } from "lucide-react";
import { useState, useEffect } from "react";
import Card from "./Card";
import AnimatedMulticolorText from "./AnimatedMultiColorText";

function cn(...args: any[]): string {
  return args.filter(Boolean).join(' ');
}

interface ServicesSectionProps {
  isDarkMode: boolean;
}

    const servicesData = [
    {
      icon: <Activity className="w-6 h-6" />, // Color will be applied by parent
      title: "Marketing Strategy",
      description: "Our marketing strategy service provides tailored solutions to meet your unique business needs. We analyze your market, identify opportunities, and develop a roadmap for success.",
      fullDescription:
        "We provide a full-fledged marketing strategy that. includes competitor research, trend analysis, and a personalized roadmap to boost your brand visibility.  Our team of experts will work closely with you to understand your goals and create a plan that delivers results.",
      readMoreLink: "#",
      bgImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: <Settings className="w-6 h-6" />, // Color will be applied by parent
      title: "Automation Tools",
      description: "We offer automation tools to streamline your workflows and improve efficiency.  Our solutions can help you automate repetitive tasks, freeing up your time to focus on more strategic initiatives.",
      fullDescription:
        "From CRM automation to email marketing pipelines, we equip you with tools that reduce manual effort and scale faster.  Our automation tools are designed to be easy to use and integrate seamlessly with your existing systems.",
      readMoreLink: "#",
      bgImage:'https://images.unsplash.com/photo-1602468432285-0fe26e8352ac?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // New image
    },
    {
      icon: <BarChart4 className="w-6 h-6" />, // You can use a more appropriate icon if you like
      title: "Website & Web App Development",
      description: "We craft stunning, high-performance websites and web apps with breathtaking UI and seamless user experience.",
      fullDescription:
        "Our team specializes in building modern, responsive websites and web applications that not only look amazing but also deliver exceptional performance. From landing pages to complex dashboards, we use the latest technologies and design trends to ensure your digital presence stands out and delights your users.",
      readMoreLink: "#",
      bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />, // Color will be applied by parent
      title: "Customer Engagement",
      description: "We help you build stronger relationships with your customers through our customer engagement services.  We offer a range of solutions to help you connect with your audience and improve customer satisfaction.",
      fullDescription:
        "Our engagement tools enable you to interact with your audience via chat, social platforms, and personalized follow-ups. We provide the tools and strategies you need to build lasting customer loyalty.",
      readMoreLink: "#",
      bgImage: 'https://images.unsplash.com/photo-1426023671131-18ce9c8d5f80?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];
export default function ServicesSection({ isDarkMode }: ServicesSectionProps) {
  
  const [openReadMoreIndex, setOpenReadMoreIndex] = useState<number | null>(null);
 const sendtoForm = () => {
  window.location.href = '#contact';
};

 useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (openReadMoreIndex !== null && Math.abs(currentScrollY - lastScrollY) > 5) {
      setOpenReadMoreIndex(null);
    }
    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [openReadMoreIndex]);


  return (
    <section
      id="services"
      className={cn(
        "px-6 py-16 text-center",
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      )}
    >
      <AnimatedMulticolorText text="Our Services" isDarkMode={isDarkMode} />
      <p
        className={cn(
          "max-w-2xl mx-auto mb-12",
          isDarkMode ? "text-gray-400" : "text-gray-700"
        )}
      >
        Our mission is to drive progress and enhance the lives of our customers by
        delivering superior products and services that exceed expectations.
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
            isDarkMode={isDarkMode}
            layout="image-top"
            isReadMoreOpen={openReadMoreIndex === index}
            onToggleReadMore={() => {
              setOpenReadMoreIndex(
                openReadMoreIndex === index ? null : index
              );
            }}
          />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          onClick={sendtoForm}
          className={cn(
            "px-6 py-3 rounded-xl font-semibold shadow-md transition-all flex items-center gap-2",
            isDarkMode
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-green-500 text-white hover:bg-green-600"
          )}
        >
          Contact Today
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
