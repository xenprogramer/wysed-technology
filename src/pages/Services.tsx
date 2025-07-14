import React from 'react';
import { Code, Smartphone, Search, Zap, Shield, Palette, Database, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Tailored web solutions built with modern technologies like React, Next.js, and TypeScript for optimal performance.',
      features: ['Responsive Design', 'Modern Frameworks', 'Clean Code', 'SEO Optimized'],
      price: 'Starting at $2,999'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Mobile-optimized websites that provide seamless user experience across all devices and screen sizes.',
      features: ['Touch-Friendly UI', 'Fast Loading', 'Cross-Platform', 'Progressive Web App'],
      price: 'Starting at $1,999'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Comprehensive SEO strategies to improve your website\'s visibility and ranking in search engines.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Performance Optimization'],
      price: 'Starting at $899'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your website with advanced optimization techniques for better user experience and conversions.',
      features: ['Core Web Vitals', 'Image Optimization', 'Code Splitting', 'CDN Integration'],
      price: 'Starting at $1,299'
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Comprehensive security measures and ongoing maintenance to keep your website safe and up-to-date.',
      features: ['SSL Certificates', 'Regular Updates', 'Backup Solutions', '24/7 Monitoring'],
      price: 'Starting at $499/month'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that engage users and drive conversions with modern design principles.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'Starting at $1,799'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust backend solutions with APIs, databases, and server infrastructure for dynamic web applications.',
      features: ['API Development', 'Database Design', 'Cloud Integration', 'Scalable Architecture'],
      price: 'Starting at $3,499'
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment processing, inventory management, and customer analytics.',
      features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Analytics Dashboard'],
      price: 'Starting at $4,999'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$2,999',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        'Social media integration',
        '3 months support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,999',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages',
        'Custom design',
        'Advanced SEO',
        'CMS integration',
        'E-commerce ready',
        'Analytics setup',
        '6 months support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$12,999',
      description: 'For large organizations',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'Advanced integrations',
        'Multi-language support',
        'Priority support',
        'Performance optimization',
        '12 months support'
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create wireframes and prototypes to visualize your website before development begins.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your website using modern technologies and conduct thorough testing across all devices.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We deploy your website and provide ongoing support to ensure optimal performance and security.'
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
            Web Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
            Transform your digital presence with cutting-edge web development solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development solutions to bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
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
                  <service.icon className="w-8 h-8 text-white opacity-90" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-400 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-purple-400 font-semibold text-sm">{service.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Process Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-black via-black to-purple-900/40 rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden border border-gray-700/50"
              >
                {/* Dark purple bottom space overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-800/5 to-purple-900/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-purple-400 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your requirements and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-purple-400 px-8 py-4 font-semibold transition-colors border border-gray-700 rounded-lg hover:border-purple-500">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;