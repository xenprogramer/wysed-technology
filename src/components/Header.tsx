import React from 'react';

interface HeaderProps {
  isQuotePopupOpen: boolean;
  setIsQuotePopupOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isQuotePopupOpen, setIsQuotePopupOpen }) => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Your Company</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>
          
          <button
            onClick={() => setIsQuotePopupOpen(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;