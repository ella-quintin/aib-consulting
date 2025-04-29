
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { motion } from "framer-motion";
import { useState, useEffect} from "react";

const Services = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

     // Handle scroll events to toggle button visibility
     useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top logic
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                // Use timeout to ensure DOM is fully rendered
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        }
    }, []);

   

    return (
        <>
            <Navbar />

            {/* Header */}
            <div className="w-full h-[40vh] flex items-center justify-center bg-gradient-to-r from-[#183C58] to-[#099AB3]">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-4xl mt-20 font-bold text-white"
                >
                    Our Services
                </motion.h1>
            </div>

            {/* Services Section */}
            <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">

                {/* Each Service */}
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        id={service.id}
                        className="scroll-mt-32 space-y-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-semibold text-[#183C58]">{service.title}</h2>
                        <p className="text-gray-700 leading-relaxed">{service.description}</p>

                        {/* Subpoints if available */}
                        {service.points && (
                            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
                                {service.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                ))}

            </div>

            {/* Scroll to Top Button */}
            {showScrollButton && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-[#099AB3] text-white p-4 rounded-full shadow-lg hover:bg-[#077f91] focus:outline-none"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                >
                    ↑
                </motion.button>
            )}

            <Footer />
        </>
    );
};

export default Services;

// Services Data
const services = [
    {
        id: "cybersecurity",
        title: "Cybersecurity",
        description: `Cybersecurity has become a major challenge for the digital economy. Cybercriminals are using sophisticated attack mechanisms to steal digital assets all over the world. To ensure a smooth transition, organizations must focus on setting up protective and defensive mechanisms for their digital transformation. AIB Consulting provides state of the art cybersecurity advice and recommend solutions that will let companies worry less of being attacked by cybercriminals. Our services include the following: `,
        points: [
            "Cybersecurity Policy/Strategy",
            "Cybersecurity Solutions deployment",
            "Executive & Employee Awareness Training",
            "Incident management capacity building",
            "Deployment of SOC",
        ],
    },
    {
        id: "digital-transformation",
        title: "Digital Transformation Strategy",
        description: `A Digital Transformation Strategy or plan of action describes how a business must strategically reposition itself in the digital economy. It includes the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers.
The digital economy is marked by rapid development, evolution, innovation, and disruption. A strategy and digital transformation roadmap can help you develop and harness capabilities to effectively manage the process effectively.
The strategy can be broken down to four inter-related domains: `,
        points: ["Technology", "Data", "Process", "Organizational change capability"],
    },
    {
        id: "digital-presence",
        title: "Digital Presence Solutions",
        description: `The ability to be seen in the digital world requires acquiring a unique name in the digital space. This name is the domain name. You also need to host your digital assets on a server – physical or in the cloud. AIB provides a range of products that can help you properly locate your company in the Digital World. 
AIB Consulting provides the following range of digital locating services: 
`,
        points: [
            "Domain Name Registration",
            "Web Hosting Services",
            "Cloud Hosting Services",
            "Productivity (Digital Workspace) Services",
            "Web Security Services",
        ],
    },
    {
        id: "digitalization",
        title: "Digitalization",
        description: `Digitalization is the conversion of text, pictures, or sound into a digital form that can be processed by a computer.  Establishing your digital presence requires you to digitize many physical (hard copy) elements of the business. Once digitized, businesses need a highly effective enterprise content management systems for access and retrieval of data needed. 
AIB Consulting provide consulting services for a robust digitization solutions and best fit Enterprise Content Management (ECM) systems for use of scanned data. `,
    },
    {
        id: "ecommerce",
        title: "E-commerce",
        description: `Digital trade is thriving in the digital economy. The recent pandemic has brought into focus use of e-commerce for trading purposes. Developing a very secure ecommerce platform with payment gateways incorporated has become very urgent requirement. AIB provides advisory and deployment of  e-commerce systems to its clients. Specifically, AIB Consulting:`,
        points: ["Deploys e-commerce website", "Deploys payment systems", "Performs usability analysis"],
    },
    {
        id: "business-process",
        title: "Business Process Reengineering",
        description: `AIB Consulting reengineers business processes to shorten, automate, and integrate systems for optimal performance and cost efficiency.`,
        points: [
            "Process Evaluation and Redesign",
            "Automation Processes",
            "Deployment of sub-systems and fully integrated software solutions",
            "Streamline of processes for optimum efficiency in terms performance and cost",
            "Introduce to state-of-the-art systems and devices to improve the processes ",
        ],
    },
    {
        id: "network-systems",
        title: "Network & Systems",
        description: `AIB Consulting provides network deployment, optimization, and security services to enhance connectivity and server performance.`,
        points: [
            "Network Rollout (Wireless, Fiber, WAN)",
            "Performance Enhancement",
            "Network Optimization",
            "Server Optimization",
            "Network Security",
        ],
    },
    {
        id: "data-management",
        title: "Data Management & Science",
        description: `AIB Consulting provide a suit of services to improve data management of companies including develop data portals to provide easy access to public data. AIB also provides data analytic services that allows businesses to use data to extract meaningful insights for business using multidisciplinary approach that combines principles and practices from the fields of mathematics, statistics, artificial intelligence, and computer engineering to analyse large amounts of data.`,
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing Solutions",
        description: `Boost brand visibility and engagement with AIB Consulting’s full suite of digital marketing services.`,
        points: [
            "Content Marketing",
            "Search engine optimization (SEO)",
            "Email Marketing",
            "Social Media Marketing",
            "Mobile Marketing",
            "Pay-Per-Click",
            "Affiliate Marketing",
        ],
    },
    {
        id: "general-consulting",
        title: "General ICT Consulting",
        description: `AIB Consulting provides a broad range of ICT services including industry analysis and datacenter management.`,
    },
];

