import React from 'react';
import { Users, Target, Award, Lightbulb, Globe, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Team Members' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to transforming businesses through intelligent automation and data-driven solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Constantly pushing boundaries with cutting-edge AI technology to deliver unprecedented results.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships through exceptional service and results.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Serving businesses worldwide with scalable solutions that drive growth and efficiency.'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Full-stack developer with 15+ years in web development, formerly at Google and Microsoft.'
    },
    {
      name: 'Sarah Martinez',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert in modern web architecture and cloud infrastructure with background from Amazon and Netflix.'
    },
    {
      name: 'Emily Watson',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'UX/UI designer who led design teams at Apple and Adobe, specializing in user-centric web experiences.'
    },
    {
      name: 'Michael Chen',
      role: 'Senior Developer',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Frontend specialist with expertise in React, Vue, and modern JavaScript frameworks from Meta and Shopify.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-black overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {Array.from({ length: 100 }).map((_, i) => (
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

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-radial from-purple-900/30 via-purple-800/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Xtract</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
            We're pioneering the future of business automation with AI-powered solutions that transform how companies operate, analyze data, and make decisions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Founded in 2020, WyseD Technology emerged from a simple observation: businesses needed better web presence but struggled with outdated, slow websites. Our founders, veterans from Google, Apple, and Microsoft, recognized the gap between modern web capabilities and what most businesses were actually using.
                </p>
                <p>
                  What started as a small team of web developers and designers has grown into a global company serving Fortune 500 companies and innovative startups alike. We've built over 500 websites, launched dozens of e-commerce platforms, and helped our clients achieve an average of 300% increase in online engagement.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible with web technology, making modern web development accessible to businesses of all sizes while maintaining our commitment to performance, security, and exceptional user experiences.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/20">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Team collaboration" 
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-black via-black to-purple-900/40 rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden border border-gray-700/50"
              >
                {/* Dark purple bottom space overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-800/5 to-purple-900/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon positioned in top left */}
                <div className="relative z-10 mb-6">
                  <value.icon className="w-8 h-8 text-white opacity-90" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind Xtract's innovative AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-black via-black to-purple-900/40 rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden border border-gray-700/50"
              >
                {/* Dark purple bottom space overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-800/5 to-purple-900/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-purple-500/30"
                  />
                  <h3 className="text-xl font-bold text-white text-center mb-2">{member.name}</h3>
                  <p className="text-purple-400 text-sm text-center font-medium">{member.role}</p>
                </div>
                <p className="relative z-10 text-gray-300 text-sm leading-relaxed text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;