
import {  FacebookIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
import { MapPin, Phone, Mail } from 'lucide-react';


const Footer = () => {
 

  return (
    <footer className="bg-[#183C58] text-white py-12 pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-4 sm:px-6 md:px-8">
        {/* Company Info + Social Links */}
        <div className="flex flex-col text-left">
          <h3 className="text-lg font-bold mb-4">AIB Consulting</h3>
          <p className="text-sm md:text-sm text-white hover:text-gray-100 leading-relaxed font-thin text-left mb-6">
          AIB Consulting is an ICT consulting firm working to assist companies streamline their ICT systems and providing them with turnkey ICT Solutions to enable them participate competitively in the digital economy.
          </p>
          <h3 className="text-lg text-left font-bold mb-3">Social Media</h3>
          <div className="mt-4 flex text-left space-x-4">
            <a href="#" className="hover:text-gray-300"><FacebookIcon size={20} /></a>
            <a href="#" className="hover:text-gray-300"><TwitterIcon size={20} /></a>
            <a href="#" className="hover:text-gray-300"><LinkedinIcon size={20} /></a>
          </div>
        </div>

        {/* Quick Links + Help */}
        <div className="flex flex-col text-left">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white font-thin">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Our Services", path: "/how-we-work" },
                { name: "Contact Us", path: "/contact-us" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.path} className="hover:underline hover:text-gray-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col text-left">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm font-thin text-white hover:text-gray-100">
              <li>Cybersecurity</li>
              <li>Digital Transformation Strategy </li>
              <li>Digital Presence Solutions </li>
              <li>Digitalization</li>
              <li>E-commerce</li>
              <li>Business Process Reengineering</li>
              <li>Network & Systems </li>
              <li>Data Management & Science</li>
              <li>Digital Marketing Solutions </li>
              <li>General ICT Consulting</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col text-left">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4 font-thin">
              {/* <li className="flex items-center">
                <MapPin className="text-white w-7 h-7 mr-3" />
                <p className="text-sm sm:text-base text-white hover:text-gray-100">
                  <span className="font-normal text-white">Location:</span> 4 Naa Botwey Street, Mabey, Haatso , Accra, Ghana
                </p>
              </li> */}
              <li className="flex items-center">
                <Phone className="text-white w-6 h-6 mr-3" />
                <p className="text-sm sm:text-base text-white hover:text-gray-100">
                  <span className="font-normal text-white">Phone:</span> +233-302905659 | +233-243380612
                </p>
              </li>
              <li className="flex items-center">
                <Mail className="text-white w-6 h-6 mr-3" />
                <p className="text-sm sm:text-base text-white hover:text-gray-100">
                  <span className="font-normal text-white">Email:</span>{" "}
                  <a
                    href="mailto:info@pleroma-scycamore.org"
                    className="hover:underline text-white hover:text-gray-200"
                  >
                     info@aibconsulting.biz
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}

      <div className="mt-12 border-t border-white pt-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AIB Consulting. All rights reserved.
        </p>
      </div>
    </footer >
  );
};

export default Footer;
