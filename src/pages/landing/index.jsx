import Navbar from "../../components/navbar";
import hero from "../../assets/images/hero.jpg";
import { motion } from "framer-motion";
import about from "../../assets/images/about-image.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'
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

const Landing = () => {
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
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-6 md:px-12 z-10">
                    <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        Supporting Businesses Transition into the Digital World
                    </h3>
                    <h4 className="text-white text-base sm:text-lg md:text-2xl font-light">
                        Your Trusted Partner in ICT Transformation
                    </h4>

                    {/* Animated Button */}
                    <motion.button
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="bg-[#099AB3] rounded-3xl text-white font-semibold px-6 py-3 mt-6 shadow-xl hover:scale-110"
                    >
                        Talk to a Consultant
                    </motion.button>
                </div>
            </div>

            {/* About Us Section */}
            <div className="bg-white flex flex-col-reverse md:flex-row gap-10 py-10 px-6 md:px-16 mt-16 items-center">
                {/* Image */}
                <img
                    className="w-full md:w-1/2 object-cover rounded-lg"
                    src={about}
                    alt="About-image"
                />

                {/* Text Content */}
                <div className="flex flex-col justify-center gap-6">
                    <div className="flex gap-2 justify-center md:justify-start">
                        <span className="text-5xl md:text-6xl font-medium text-[#183C58]">
                            About
                        </span>
                        <span className="text-5xl md:text-6xl font-medium text-[#099AB3]">
                            Us
                        </span>
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
                        <button className="bg-[#099AB3] rounded-3xl px-6 py-3 mt-2 text-white hover:scale-105 transition duration-300">
                            See More
                        </button>
                    </div>
                </div>
            </div>


            <div className="flex flex-col bg-gray-50 items-center text-center md:text-left md:items-start gap-8 py-10 px-6 md:px-16 mt-16">
                {/* Heading */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#183C58]">
                        Why Work
                    </span>
                    <span className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#099AB3]">
                        With Us
                    </span>
                </div>

                {/* Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-6xl w-full">
                    {/* Box 1 */}
                    <div className="bg-[#f9f9f9] rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
                        <div className="flex items-start gap-4">
                            {/* Icon wrapper */}
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
                    </div>

                    {/* Box 2 */}
                    <div className="bg-[#f9f9f9] rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
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
                    </div>

                    {/* Box 3 */}
                    <div className="bg-[#f9f9f9] rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
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
                    </div>

                    {/* Box 4 */}
                    <div className="bg-[#f9f9f9] rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
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
                    </div>
                </div>
            </div>
            

            {/* Services Section */}
            <div className="py-16 px-6 md:px-16 bg-[#183C58]">
  {/* Heading */}
  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-12">
    <span className="text-4xl sm:text-5xl md:text-6xl font-medium text-white">
      Our
    </span>
    <span className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#099AB3]">
      Services
    </span>
  </div>

  {/* Services Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    
    {/* CARD TEMPLATE */}
    {/* Example for Cybersecurity */}
    <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square">
      <div className="flex flex-col items-center">
        <FaShieldAlt className="text-[#099AB3] text-4xl mb-4" />
        <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">Cybersecurity</h4>
      </div>
      <Link to="/services/cybersecurity" className="mt-4">
        <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
          Learn More
        </button>
      </Link>
    </div>

    {/* Digital Transformation Strategy */}
    <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square">
      <div className="flex flex-col items-center">
        <FaRocket className="text-[#099AB3] text-4xl mb-4" />
        <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">Digital Transformation Strategy</h4>
      </div>
      <Link to="/services/digital-transformation" className="mt-4">
        <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
          Learn More
        </button>
      </Link>
    </div>

    {/* Digital Presence Solutions */}
    <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square">
      <div className="flex flex-col items-center">
        <FaGlobe className="text-[#099AB3] text-4xl mb-4" />
        <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">Digital Presence Solutions</h4>
      </div>
      <Link to="/services/digital-presence" className="mt-4">
        <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
          Learn More
        </button>
      </Link>
    </div>

    {/* ... (repeat same structure for all the others below) */}

    <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square">
      <div className="flex flex-col items-center">
        <FaCogs className="text-[#099AB3] text-4xl mb-4" />
        <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">Digitalization</h4>
      </div>
      <Link to="/services/digitalization" className="mt-4">
        <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
          Learn More
        </button>
      </Link>
    </div>

    <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square">
      <div className="flex flex-col items-center">
        <FaShoppingCart className="text-[#099AB3] text-4xl mb-4" />
        <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">E-commerce</h4>
      </div>
      <Link to="/services/ecommerce" className="mt-4">
        <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
          Learn More
        </button>
      </Link>
    </div>

    <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square">
      <div className="flex flex-col items-center">
        <FaRedo className="text-[#099AB3] text-4xl mb-4" />
        <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">Business Process Reengineering</h4>
      </div>
      <Link to="/services/business-process" className="mt-4">
        <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
          Learn More
        </button>
      </Link>
    </div>

    <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square">
      <div className="flex flex-col items-center">
        <FaNetworkWired className="text-[#099AB3] text-4xl mb-4" />
        <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">Network & Systems</h4>
      </div>
      <Link to="/services/network-systems" className="mt-4">
        <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
          Learn More
        </button>
      </Link>
    </div>

    <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square">
      <div className="flex flex-col items-center">
        <FaDatabase className="text-[#099AB3] text-4xl mb-4" />
        <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">Data Management & Science</h4>
      </div>
      <Link to="/services/data-management" className="mt-4">
        <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
          Learn More
        </button>
      </Link>
    </div>

    <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square">
      <div className="flex flex-col items-center">
        <FaBullhorn className="text-[#099AB3] text-4xl mb-4" />
        <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">Digital Marketing Solutions</h4>
      </div>
      <Link to="/services/digital-marketing" className="mt-4">
        <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
          Learn More
        </button>
      </Link>
    </div>

    <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 aspect-square">
      <div className="flex flex-col items-center">
        <FaLaptopCode className="text-[#099AB3] text-4xl mb-4" />
        <h4 className="text-lg font-semibold text-center text-[#183C58] mb-4">General ICT Consulting</h4>
      </div>
      <Link to="/services/general-consulting" className="mt-4">
        <button className="bg-[#099AB3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#077f91] transition">
          Learn More
        </button>
      </Link>
    </div>

  </div>
</div>

        </>
    );
};

export default Landing;
