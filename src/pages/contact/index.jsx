import React from "react";
import { motion } from "framer-motion";
import { useState,} from "react";
import {
    Phone,
    MapPin,
    Clock,
    Mail
} from "lucide-react"; // Lucide icons
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2 },
    }),
};



const ContactUs = () => {
    const [showScrollButton] = useState(false);

    // Scroll to top logic
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    const contactItems = [
        {
            icon: <Phone size={28} className="text-[#099AB3] mx-auto mb-2" />,
            title: "Phone",
            content: "+01-234-567-890",
        },
        {
            icon: <MapPin size={28} className="text-[#099AB3] mx-auto mb-2" />,
            title: "Address",
            content: "Iris Watson, 283 Fusce Rd, NY",
        },
        {
            icon: <Clock size={28} className="text-[#099AB3] mx-auto mb-2" />,
            title: "Open Time",
            content: "10:00 am to 23:00 pm",
        },
        {
            icon: <Mail size={28} className="text-[#099AB3] mx-auto mb-2" />,
            title: "Email",
            content: "info.colorlib@gmail.com",
        },
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gray-100 pb-36">
                {/* Banner */}
                <div
                    className="relative h-80 bg-cover bg-center flex items-center justify-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1588854337118-1eaabed0a10f')",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#183C58] to-[#099AB3] bg-opacity-40" />
                    <h1 className="relative text-white text-4xl md:text-4xl mt-10 font-bold z-10">Contact Us</h1>
                </div>

                {/* Cards */}
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8 -mt-16 relative z-10 bg-white rounded-lg shadow-lg py-10">
                    {contactItems.map((item, i) => (
                        <motion.div
                            key={i}
                            className="text-center"
                            custom={i}
                            variants={cardVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            {item.icon}
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-gray-600 mt-1">{item.content}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Map */}
                <div className="mt-10 px-4 max-w-6xl mx-auto">
                    <motion.iframe
                        className="w-full h-96 rounded-lg shadow-lg"
                        src="https://maps.google.com/maps?q=Riga&output=embed"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    />
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

export default ContactUs;
