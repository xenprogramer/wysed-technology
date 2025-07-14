import React from 'react';

interface HeaderProps {
  isQuotePopupOpen: boolean;
  setIsQuotePopupOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isQuotePopupOpen, setIsQuotePopupOpen }) => {
  return (
    <header className="bg-transparent fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">WyseD Technology</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-purple-400 transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">
              Contact
            </a>
          </nav>
          
          <button
            onClick={() => setIsQuotePopupOpen(true)}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;