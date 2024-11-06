"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaChevronDown, FaMapMarkerAlt } from 'react-icons/fa'; 

const Footer = () => {
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [contactInfoOpen, setContactInfoOpen] = useState(false);
  const [legalLinksOpen, setLegalLinksOpen] = useState(false);

  return (
    <footer className="bg-pgreen text-pyellow py-12 p-3 md: p-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left md:text-left">
          {/* Company Info */}
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Profile Picture"
              className="w-16 h-16 bg-byellow rounded-full mr-2"
            />
            <div>
              <h2 className="text-2xl font-script font-bold">Golden Pakkada</h2>
              <p className="mt-4  font-script font-semibold text-byellow">
                Your favorite destination for delightful sweets and savory treats. Bringing joy to your taste buds for over 20 years.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex justify-between items-center md:block">
              <h3 className="text-xl font-script font-bold">Quick Links</h3>
              <button
                className="md:hidden text-byellow"
                onClick={() => setQuickLinksOpen(!quickLinksOpen)}
              >
                <FaChevronDown size={20} />
              </button>
            </div>
            <ul className={`mt-4 text-byellow font-script font-semibold space-y-2 ${quickLinksOpen ? 'block' : 'hidden'} md:block`}>
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/menu" className="hover:text-white">Menu</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <div className="flex justify-between items-center md:block">
              <h3 className="text-xl font-script font-bold">Legal</h3>
              <button
                className="md:hidden text-byellow"
                onClick={() => setLegalLinksOpen(!legalLinksOpen)}
              >
                <FaChevronDown size={20} />
              </button>
            </div>
            <ul className={`mt-4 text-byellow  font-script font-semibold space-y-2 ${legalLinksOpen ? 'block' : 'hidden'} md:block`}>
              
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms and Conditions</a></li>
              <li><a href="/trademark" className="hover:text-white">Trademark and Copyright</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="flex justify-between items-center md:block">
              <h3 className="text-xl font-script font-bold">Contact Us</h3>
              <button
                className="md:hidden text-byellow"
                onClick={() => setContactInfoOpen(!contactInfoOpen)}
              >
                <FaChevronDown size={20} />
              </button>
            </div>
            <div className={`mt-4 font-script ${contactInfoOpen ? 'block' : 'hidden'} md:block`}>
              <p className="mt-2 font-script font-semibold">Address:
                <a className='text-byellow'> No-3 Balu Street,  <br />
                Oldwashermenpet,<br />
                Chennai-600021.
                </a>
              </p>
              <p className="mt-2 font-script font-semibold">Phone: <a href="tel:+91 91762 29559" className="text-byellow hover:text-white">+91 91762 29559</a></p>
              <p className="mt-2  font-script font-semibold">Email: <a href="mailto:info@goldenpakkada.com" className="text-byellow hover:text-white">info@goldenpakkada.com</a></p>
            </div>
          </div>

        </div> 

        {/* Social Media & Copyright */}
        <div className="mt-12 text-left md:text-center border-t border-pyellow pt-8">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.facebook.com/goldenpakkada/" className="text-byellow hover:text-white transition-colors">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.instagram.com/goldenpakkada/" className="text-byellow hover:text-white transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://maps.app.goo.gl/nxGeNkrTwex1jF548" className="text-byellow hover:text-white transition-colors">
              <FaMapMarkerAlt size={24} />
            </a>
          </div>
          <p className="text-lg text-center font-script font-medium">&copy; 2024 Golden Pakkada | <Link href="https://www.web.dnyx.in/"> Powered by DNYX</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
