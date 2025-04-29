import { HashLink as Link } from "react-router-hash-link";
import Navbar from "../../components/navbar";
import hero from "../../assets/images/hero.jpg";
import { motion } from "framer-motion";
import about from "../../assets/images/about-image.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { useState,} from "react";
import {
    FaShieldAlt,
    FaRocket,
    FaGlobe,
    FaCogs,
    FaShoppingCart,
    FaRedo,
    FaNetworkWired,
    FaDatabase,
    FaBullhorn,
    FaLaptopCode
} from "react-icons/fa";
import Footer from "../../components/footer";

const Landing = () => {
    const [showScrollButton,] = useState(false);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    // Scroll to top logic
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
}

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full h-[90vh] md:h-screen mt-24">
                {/* Background Image */}
                <img
                    src={hero}
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Overlay */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-6 md:px-12 z-10"
                >
                    <motion.h3
                        className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Supporting Businesses Transition into the Digital World
                    </motion.h3>
                    <motion.h4
                        className="text-white text-base sm:text-lg md:text-2xl font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        Your Trusted Partner in ICT Transformation
                    </motion.h4>

                    <motion.button
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="bg-[#099AB3] rounded-3xl text-white font-semibold px-6 py-3 mt-6 shadow-xl hover:scale-110"
                    >
                        Talk to a Consultant
                    </motion.button>
                </motion.div>

            </div>


            {/* About Us Section */}
            <div className="bg-white flex flex-col-reverse md:flex-row gap-10 py-10 px-6 md:px-16 mt-16 items-center overflow-x-hidden">

                {/* Image slides in from the left */}
                <motion.img
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-full md:w-1/2 object-cover rounded-lg"
                    src={about}
                    alt="About-image"
                />

                {/* Text slides in from the right */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex flex-col justify-center gap-6"
                >
                    <div className="flex gap-2 justify-center md:justify-start">
                        <span className="text-4xl md:text-4xl font-medium text-[#183C58]">About</span>
                        <span className="text-4xl md:text-4xl font-medium text-[#099AB3]">Us</span>
                    </div>

                    <p className="text-[#183C58] text-justify max-w-full leading-relaxed">
                        As customer habits rapidly evolve, companies must innovate, adapt
                        their operations, transform business models, and embrace emerging
                        technologies to stay competitive.
                        <br />
                        <br />
                        At AIB Consulting, we are dedicated to helping businesses streamline
                        their ICT systems and unlock new growth opportunities through
                        turnkey ICT solutions.
                        <br />
                        <br />
                        Our team of expert consultants partners with organizations to
                        reposition them for success in the digital economy — providing
                        services that tackle the most critical areas of digital
                        transformation and operational excellence.
                    </p>

                    <div>
                        <Link to="about-us">
                            <button className="bg-[#099AB3] rounded-3xl px-6 py-3 mt-2 text-white hover:scale-105 transition duration-300">
                                See More
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>


            <motion.div
                className="flex flex-col bg-gray-50 items-center text-center md:text-left md:items-start gap-8 py-10 px-6 md:px-16 mt-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.2 }
                    }
                }}
            >
                {/* Heading */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="text-4xl sm:text-3xl md:text-4xl font-medium text-[#183C58]">
                        Why Work
                    </span>
                    <span className="text-4xl sm:text-3xl md:text-4xl font-medium text-[#099AB3]">
                        With Us
                    </span>
                </div>

                {/* Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-6xl w-full">

                    {/* Box 1 */}
                    <motion.div
                        className="bg-[#f9f9f9] rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.6,
                                    ease: "easeOut"
                                }
                            }
                        }}

                    >
                        <div className="flex items-start gap-4">
                            <div className="min-w-[40px] min-h-[40px] flex items-center justify-center">
                                <FaCheckCircle className="text-[#099AB3] text-3xl" />
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-[#183C58]">
                                    Get proven business IT solutions.
                                </h4>
                                <p className="text-[#183C58] leading-relaxed mt-2">
                                    We have rich experience in deploying and managing diverse business IT solutions.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Box 2 */}
                    <motion.div
                        className="bg-[#f9f9f9] rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.6,
                                    ease: "easeOut"
                                }
                            }
                        }}

                    >
                        <div className="flex items-start gap-4">
                            <div className="min-w-[40px] min-h-[40px] flex items-center justify-center">
                                <FaCheckCircle className="text-[#099AB3] text-3xl" />
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-[#183C58]">
                                    Stay ahead of technology.
                                </h4>
                                <p className="text-[#183C58] leading-relaxed mt-2">
                                    Our consultants are well-versed in various technologies. The solutions we recommend are smart, proven, and designed to meet your business goals.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Box 3 */}
                    <motion.div
                        className="bg-[#f9f9f9] rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.6,
                                    ease: "easeOut"
                                }
                            }
                        }}

                    >
                        <div className="flex items-start gap-4">
                            <div className="min-w-[40px] min-h-[40px] flex items-center justify-center">
                                <FaCheckCircle className="text-[#099AB3] text-3xl" />
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-[#183C58]">
                                    In-depth industry experience.
                                </h4>
                                <p className="text-[#183C58] leading-relaxed mt-2">
                                    Our team has working experience across diverse industries, from banking to oil exploration.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Box 4 */}
                    <motion.div
                        className="bg-[#f9f9f9] rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.6,
                                    ease: "easeOut"
                                }
                            }
                        }}

                    >
                        <div className="flex items-start gap-4">
                            <div className="min-w-[40px] min-h-[40px] flex items-center justify-center">
                                <FaCheckCircle className="text-[#099AB3] text-3xl" />
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-[#183C58]">
                                    Capacity to support your business growth.
                                </h4>
                                <p className="text-[#183C58] leading-relaxed mt-2">
                                    We provide comprehensive IT solutions so you can focus on growing your business without upfront hardware and software investments slowing you down.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </motion.div>



            {/* Services Section */}
            <div className="py-16 px-6 md:px-16 bg-white">
                {/* Heading */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-12">
                    <span className="text-4xl sm:text-3xl md:text-4xl font-medium text-[#183C58]">
                        Our
                    </span>
                    <span className="text-4xl sm:text-3xl md:text-4xl font-medium text-[#099AB3]">
                        Services
                    </span>
                </div>

                {/* Services Grid with Animation */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >

                    {/* Cybersecurity */}
                    <motion.div
                        className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square"
                        variants={cardVariants}
                    >
                        <div className="flex flex-col items-center">
                            <FaShieldAlt className="text-[#099AB3] text-4xl mb-4" />
                            <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">Cybersecurity</h4>
                        </div>
                        <Link to="/our-services#cybersecurity" smooth className="mt-4">
                            <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
                                Learn More
                            </button>
                        </Link>
                    </motion.div>

                    {/* Repeat for each card — no content changes */}

                    <motion.div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square" variants={cardVariants}>
                        <div className="flex flex-col items-center">
                            <FaRocket className="text-[#099AB3] text-4xl mb-4" />
                            <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">Digital Transformation Strategy</h4>
                        </div>
                        <Link to="/our-services#digital-transformation" smooth className="mt-4">
                            <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
                                Learn More
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square" variants={cardVariants}>
                        <div className="flex flex-col items-center">
                            <FaGlobe className="text-[#099AB3] text-4xl mb-4" />
                            <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">Digital Presence Solutions</h4>
                        </div>
                        <Link to="/our-services#digital-presence" smooth className="mt-4">
                            <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
                                Learn More
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square" variants={cardVariants}>
                        <div className="flex flex-col items-center">
                            <FaCogs className="text-[#099AB3] text-4xl mb-4" />
                            <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">Digitalization</h4>
                        </div>
                        <Link to="/our-services#digitalization" smooth className="mt-4">
                            <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
                                Learn More
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square" variants={cardVariants}>
                        <div className="flex flex-col items-center">
                            <FaShoppingCart className="text-[#099AB3] text-4xl mb-4" />
                            <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">E-commerce</h4>
                        </div>
                        <Link to="/our-services#ecommerce" smooth className="mt-4">
                            <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
                                Learn More
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square" variants={cardVariants}>
                        <div className="flex flex-col items-center">
                            <FaRedo className="text-[#099AB3] text-4xl mb-4" />
                            <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">Business Process Reengineering</h4>
                        </div>
                        <Link to="/our-services#business-process" smooth className="mt-4">
                            <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
                                Learn More
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square" variants={cardVariants}>
                        <div className="flex flex-col items-center">
                            <FaNetworkWired className="text-[#099AB3] text-4xl mb-4" />
                            <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">Network & Systems</h4>
                        </div>
                        <Link to="/our-services#network-systems" smooth className="mt-4">
                            <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
                                Learn More
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square" variants={cardVariants}>
                        <div className="flex flex-col items-center">
                            <FaDatabase className="text-[#099AB3] text-4xl mb-4" />
                            <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">Data Management & Science</h4>
                        </div>
                        <Link to="/our-services#data-management" smooth className="mt-4">
                            <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
                                Learn More
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square" variants={cardVariants}>
                        <div className="flex flex-col items-center">
                            <FaBullhorn className="text-[#099AB3] text-4xl mb-4" />
                            <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">Digital Marketing Solutions</h4>
                        </div>
                        <Link to="/our-services#digital-marketing" smooth className="mt-4">
                            <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
                                Learn More
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square" variants={cardVariants}>
                        <div className="flex flex-col items-center">
                            <FaLaptopCode className="text-[#099AB3] text-4xl mb-4" />
                            <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">General ICT Consulting</h4>
                        </div>
                        <Link to="/our-services#general-consulting" smooth className="mt-4">
                            <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
                                Learn More
                            </button>
                        </Link>
                    </motion.div>

                </motion.div>
            </div>


            {/* Contact Us Section */}
            <div className="relative w-full bg-cover bg-center my-32" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}>
                <div className="bg-black/70 w-full h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 text-white">
                    {/* Text Content */}
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact us now!</h2>
                        <p className="text-lg max-w-md">
                            Contact (+12) 345-678-9999 to book directly or for advice
                        </p>
                    </div>

                    {/* Button */}
                    <Link to="/contact">
                        <button className="bg-[#09B2A7] hover:bg-[#077f91] text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300">
                            Contact Now
                        </button>
                    </Link>
                </div>
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

export default Landing;
