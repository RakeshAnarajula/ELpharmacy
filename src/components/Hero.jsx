import React from 'react';
const Hero = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-gray-600">First </span>
              <span className="text-blue-600">Tech enabled</span>
              <br />
              <span className="text-gray-500">Omni present</span>
              <br />
              <span className="text-blue-600">Pharmacy</span>
              <span className="text-gray-400"> Retail chain</span>
            </h1>
         <div>
              <button className="bg-green-600 text-white px-8 py-3 sm:px-10  rounded-full font-semibold sm:font-bold text-base sm:text-lg hover:bg-green-800 transition-all shadow-md">
                COMING SOON
              </button>
            </div> </div>
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[600px]">
              <img 
                src="/heropharmacy-removebg-preview.png" 
                alt="Modern Pharmacy Store"
                className="w-full h-auto  object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;