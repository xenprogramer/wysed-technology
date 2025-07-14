import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isQuotePopupOpen: boolean;
  setIsQuotePopupOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isQuotePopupOpen, setIsQuotePopupOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
              WyseD Technology
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-purple-400 transition-colors">
              Services
            </Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-purple-400 transition-colors">
              Portfolio
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* Desktop Get Quote Button */}
          <button
            onClick={() => setIsQuotePopupOpen(true)}
            className="hidden md:block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-purple-400 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800/50">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-purple-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-purple-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="text-gray-300 hover:text-purple-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/portfolio" 
                className="text-gray-300 hover:text-purple-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-300 hover:text-purple-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  setIsQuotePopupOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-lg transition-all duration-300 text-left"
              >
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;