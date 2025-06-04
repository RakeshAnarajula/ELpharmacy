import React from 'react';
import { Settings, TrendingUp, ShoppingCart, Monitor } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Settings size={32} />,
      title: "Optimized Store Operations",
      subtitle: "for streamlined workflow.",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Innovative Inventory",
      subtitle: "Model for strategic stock management.",
      borderColor: "border-teal-500",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      icon: <ShoppingCart size={32} />,
      title: "Unique Procurement",
      subtitle: "Process for cost-effective sourcing",
      borderColor: "border-green-500",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: <Monitor size={32} />,
      title: "End-to-End Pharmacy",
      subtitle: "Software for seamless operations",
      borderColor: "border-blue-400",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
          Maximize Your Revenue & Efficiency
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`border-t-4 ${feature.borderColor} rounded-lg p-6 shadow hover:shadow-lg transition duration-300`}
            >
              <div
                className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${feature.bgColor} ${feature.iconColor}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
