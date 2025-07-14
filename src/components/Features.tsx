import React from 'react';
import { Code, Smartphone, Search, Zap, Shield, BarChart3, Database, Workflow } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Tailored web solutions built with modern technologies like React, Next.js, and TypeScript for optimal performance.',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Websites',
      description: 'Optimized websites that load in under 3 seconds. Performance-focused development for better user experience.',
      color: 'bg-gradient-to-br from-blue-500 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Responsive websites that look perfect on all devices. Mobile-optimized for today\'s users.',
      color: 'bg-gradient-to-br from-green-500 to-blue-500'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices to help your website rank higher in search engines and attract more visitors.',
      color: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security measures and reliable hosting to keep your website safe and always online.',
      color: 'bg-gradient-to-br from-pink-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics Integration',
      description: 'Built-in analytics and tracking to monitor your website performance and user engagement.',
      color: 'bg-gradient-to-br from-indigo-500 to-blue-500'
    },
    {
      icon: Workflow,
      title: 'E-commerce Ready',
      description: 'Full e-commerce functionality with payment processing, inventory management, and order tracking.',
      color: 'bg-gradient-to-br from-teal-500 to-green-500'
    },
    {
      icon: Database,
      title: 'Content Management',
      description: 'Easy-to-use content management systems that let you update your website without technical knowledge.',
      color: 'bg-gradient-to-br from-red-500 to-pink-500'
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
            Professional Features for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mt-1">
              Modern Websites
            </span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            From simple business websites to complex e-commerce platforms, we've got you covered with professional web development features.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-black via-black to-purple-900/40 rounded-2xl p-4 xs:p-6 sm:p-8 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden border border-gray-700/50"
            >
              {/* Dark purple bottom space overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-800/5 to-purple-900/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon positioned in top left */}
              <div className="relative z-10 mb-4 sm:mb-6">
                <feature.icon className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 text-white opacity-90" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white mb-2 xs:mb-3 sm:mb-4 leading-tight">{feature.title}</h3>
                <p className="text-gray-300 text-xs xs:text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;