import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className="bg-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={handleLogoClick}
          >
            <div className="text-2xl font-bold">
              <span className="text-blue-600">EL</span>
              <span className="text-green-600">pharmacy</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-16">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</a>
          </nav>
          <div className="hidden sm:flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-800 transition-colors">
            <Phone size={16} />
            <span className="font-medium text-sm">+91 7288877959</span>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <nav className="flex flex-col space-y-3">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</a>
            <div className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full w-fit hover:bg-green-600 transition-colors">
              <Phone size={16} />
              <span className="font-medium text-sm">+91 7288877959</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
export default Navbar;
