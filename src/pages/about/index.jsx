import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import hero from "../../assets/images/hero.jpg";
import main from "../../assets/images/main-about.jpg";
import { FaRegStar, FaChartLine, FaHandshake, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AboutUs = () => {
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

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div
                className="w-full h-[40vh] flex items-center justify-center bg-gradient-to-r from-[#183C58] to-[#099AB3]"

            >
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-white text-4xl md:text-4xl font-bold px-6 py-3 mt-20"
                >
                    About Us
                </motion.h1>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* About Section */}
                <div className="grid md:grid-cols-2 gap-10 items-center my-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src={main} alt="About AIB Consulting" className="rounded-lg shadow-lg" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-6 flex gap-2">
                            <span h2 className="text-3xl font-semibold text-[#183C58]">Who</span>
                            <span h2 className="text-3xl font-semibold text-[#099AB3]">We Are</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            AIB Consulting is an ICT consulting firm helping companies streamline their ICT systems
                            and providing turnkey ICT solutions to enable them to participate competitively in the digital economy.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            As customer habits evolve, businesses must innovate and adopt emerging technologies.
                            Our expert consultants assist organizations in repositioning themselves in today's digital world,
                            addressing critical operational segments and enabling transformation.
                        </p>
                    </motion.div>
                </div>

                {/* Brief History */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mt-20"
                >
                    <div className="mb-6 flex gap-2">
                        <span className="text-3xl font-semibold text-[#183C58]">Our</span>
                        <span className="text-3xl font-semibold text-[#099AB3]">History</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        Since our inception, AIB Consulting has been privileged to work with a diverse range of clients,
                        from dynamic startups to established enterprises across various industries.
                        We pride ourselves on delivering tailored ICT solutions that meet the unique challenges
                        and opportunities of each client.
                    </p>
                </motion.div>

                {/* Mission, Vision, Values */}
                <div className="grid md:grid-cols-2 my-16 gap-10">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-[#099AB3]">Mission</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To assist organizations successfully migrate into the digital world and reposition
                            them within the digital economy by focusing on all aspects of the transformation journey.
                        </p>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl text-[#099AB3] font-semibold mb-4">Vision</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To become the foremost consulting firm supporting organizations to operate competitively
                            in the digital economy through state-of-the-art ICT solutions.
                        </p>
                    </motion.div>
                </div>

                {/* Values */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="my-28"
                >
                    <h3 className="text-3xl font-semibold mb-8 text-center text-[#183C58]">Our Values</h3>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
                            <FaRegStar className="text-4xl text-[#099AB3] mx-auto mb-4" />
                            <h4 className="text-xl font-semibold mb-2 text-[#183C58] ">Standards</h4>
                            <p className="text-gray-600 text-sm">
                                We adhere to the highest professional standards in all that we do.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
                            <FaChartLine className="text-4xl text-[#099AB3] mx-auto mb-4" />
                            <h4 className="text-xl font-semibold mb-2 text-[#183C58]">Performance</h4>
                            <p className="text-gray-600 text-sm">
                                We are committed to significantly improving our clients' performance.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
                            <FaHandshake className="text-4xl text-[#099AB3] mx-auto mb-4" />
                            <h4 className="text-xl font-semibold mb-2 text-[#183C58]">Integrity</h4>
                            <p className="text-gray-600 text-sm">
                                Honesty, trustworthiness, and ethical standards are at our core.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
                            <FaLightbulb className="text-4xl text-[#099AB3] mx-auto mb-4" />
                            <h4 className="text-xl font-semibold mb-2 text-[#183C58]">Innovation</h4>
                            <p className="text-gray-600 text-sm">
                                We embrace innovation to continually improve and deliver value.
                            </p>
                        </div>
                    </div>
                </motion.div>
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

export default AboutUs;
