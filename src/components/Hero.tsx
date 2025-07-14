import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      {/* Scattered dots background */}
      <div className="absolute inset-0">
        {/* Create a pattern of small white dots scattered across the screen */}
        {Array.from({ length: 150 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Large purple glow effect in center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-radial from-purple-900/30 via-purple-800/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center w-full">
        {/* New Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8">
          <span className="bg-white text-purple-700 text-xs font-bold px-2 py-1 rounded-full">New</span>
          <span className="text-white text-xs sm:text-sm font-medium">Modern Web Solutions</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
          Professional Web Development for
          <br />
          <span className="text-white block mt-1 sm:mt-2">Modern Businesses.</span>
        </h1>

        {/* Subheading */}
        <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-300 mb-6 xs:mb-8 sm:mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
          WyseD Technology creates stunning, responsive websites that drive results and elevate your brand.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 xs:mb-12 sm:mb-16 px-4">
          <button className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm xs:text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 w-full xs:w-auto justify-center">
            Get in touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="text-white hover:text-purple-400 px-4 xs:px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm xs:text-base sm:text-lg transition-colors w-full xs:w-auto">
            View services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;