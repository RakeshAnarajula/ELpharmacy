import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
export default function PharmacyLanding() {
  return (
    <div className="bg-white">
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Unmatched Convenience
            </h1>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-left">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-base sm:text-lg text-gray-700">
                  Provide Seamless Home Deliveries for ultimate customer satisfaction.
                </p>
              </div>

              <div className="flex items-start space-x-3 text-left">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-base sm:text-lg text-gray-700">
                  Comprehensive Support: From setup to supply chain, we ensure you have the resources you need.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 text-sm sm:text-base">
                Call us to know more
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/delivery_pharamcy-removebg-preview.png"
              alt="Delivery"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
      <div className="relative z-10 mb-[-100px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#e0f7fa] rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between shadow-xl">
            <div className="mb-6 sm:mb-0 flex-shrink-0">
              <img
                src="/parnetship elpharamcy.png"
                alt="Partner with us"
                className="w-40 h-32 object-contain"
              />
            </div>
            <div className="text-center sm:text-left space-y-3 sm:ml-3 w-full">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
                Partner with EL Pharmacy Chain <br />
                <span>and Multiply Your Revenue!</span>
              </h2>
              <button className="bg-green-600 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-lg text-sm sm:text-base transition-all duration-300">
                Contact us for more information
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-blue-900 text-white pt-28 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Get In Touch</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-sm sm:text-base">+91 7288877959</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-sm sm:text-base break-all">info@elpharmacy.in</span>
              </div>
              <div className="flex items-start space-x-3 col-span-1 sm:col-span-2 lg:col-span-1">
                <MapPin className="w-5 h-5 text-green-400 mt-1" />
                <span className="text-sm leading-relaxed">
                  First Floor, Plot No:479, Road No:10, Kakatiya Hills, Madhapur, Hyderabad, Telangana, 500081
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs sm:text-sm text-blue-200 text-center sm:text-left">
              Made With Love By Entro Labs IT Solutions, All Right Reserved.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-blue-200 hover:text-white transition" />
              <Instagram className="w-5 h-5 text-blue-200 hover:text-white transition" />
              <Twitter className="w-5 h-5 text-blue-200 hover:text-white transition" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
