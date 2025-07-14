import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

interface FooterProps {
  onGetQuoteClick?: () => void;
}

const Footer = ({ onGetQuoteClick }: FooterProps) => {
  return (
    <footer className="relative bg-gradient-to-t from-purple-900/20 via-black to-black">
      {/* Gradient overlay for icon box effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-800/10 to-transparent pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 xs:mb-8 leading-tight px-4">
            Our team of experts is ready to discuss your<br />
            needs and tailor a solution that works for you.
          </h2>
          
          {/* Contact Button with Team Images */}
          <button 
            onClick={onGetQuoteClick}
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 xs:px-6 sm:px-8 py-3 xs:py-4 rounded-lg font-semibold text-sm xs:text-base transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2 xs:mr-4">Get quote</span>
          </button>
        </div>

        {/* Navigation and Social Section - Desktop Layout */}
        <div className="hidden md:flex justify-between items-center mb-8">
          {/* Left: Navigation Links */}
          <nav className="flex gap-4 lg:gap-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300">
              Services
            </Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-300">
              Portfolio
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </nav>

          {/* Center: Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-8 lg:w-10 h-8 lg:h-10 border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 transition-all duration-300"
            >
              <Instagram size={16} className="lg:w-5 lg:h-5" />
            </a>
            <a
              href="#"
              className="w-8 lg:w-10 h-8 lg:h-10 border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 transition-all duration-300"
            >
              <Linkedin size={16} className="lg:w-5 lg:h-5" />
            </a>
            <a
              href="#"
              className="w-8 lg:w-10 h-8 lg:h-10 border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 transition-all duration-300"
            >
              <Facebook size={16} className="lg:w-5 lg:h-5" />
            </a>
          </div>

          {/* Right: Policy Menu */}
          <div className="flex gap-3 lg:gap-6 text-xs lg:text-sm">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/refund-policy" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
              Refund Policy
            </Link>
          </div>
        </div>

        {/* Mobile and Tablet Layout */}
        <div className="md:hidden mb-8">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 xs:gap-6 mb-6">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300">
              Services
            </Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-300">
              Portfolio
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </nav>

          {/* Social Media Icons - Centered */}
          <div className="flex justify-center gap-3 xs:gap-4 mb-6">
            <a
              href="#"
              className="w-8 xs:w-10 h-8 xs:h-10 border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 transition-all duration-300"
            >
              <Instagram size={16} className="xs:w-5 xs:h-5" />
            </a>
            <a
              href="#"
              className="w-8 xs:w-10 h-8 xs:h-10 border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 transition-all duration-300"
            >
              <Linkedin size={16} className="xs:w-5 xs:h-5" />
            </a>
            <a
              href="#"
              className="w-8 xs:w-10 h-8 xs:h-10 border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 transition-all duration-300"
            >
              <Facebook size={16} className="xs:w-5 xs:h-5" />
            </a>
          </div>

          {/* Policy Menu - Centered */}
          <div className="flex flex-wrap justify-center gap-3 xs:gap-4 text-xs xs:text-sm">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/refund-policy" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
              Refund Policy
            </Link>
          </div>
        </div>

        {/* HR Line */}
        <div className="border-t border-gray-800 mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © 2025 WyseD Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;