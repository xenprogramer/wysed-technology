import React from 'react';

const TermsOfService = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-white overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight px-2">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">Service</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-black">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> January 15, 2025
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">1. Acceptance of Terms</h2>
            <p className="text-black mb-6">
              By accessing and using WyseD Technology's services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do 
              not use this service.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">2. Description of Service</h2>
            <p className="text-black mb-6">
              WyseD Technology provides professional web development and digital solutions to help businesses 
              establish and enhance their online presence. Our services include but are not limited to website development, 
              e-commerce solutions, mobile applications, and digital marketing support.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">3. User Responsibilities</h2>
            <p className="text-black mb-4">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 mb-6 text-black">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our services in compliance with applicable laws</li>
              <li>Not attempt to reverse engineer or compromise our systems</li>
              <li>Respect intellectual property rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mb-4">4. Payment Terms</h2>
            <p className="text-black mb-6">
              Payment for services is due according to the terms specified in your service agreement. 
              We reserve the right to suspend or terminate services for non-payment. All fees are 
              non-refundable unless otherwise specified.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">5. Intellectual Property</h2>
            <p className="text-black mb-6">
              All content, features, and functionality of our services are owned by WyseD Technology and are 
              protected by copyright, trademark, and other intellectual property laws. You may not 
              reproduce, distribute, or create derivative works without our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">6. Data Ownership and Privacy</h2>
            <p className="text-black mb-6">
              You retain ownership of your data. We process your data according to our Privacy Policy 
              and applicable data protection laws. We implement appropriate security measures to protect 
              your information.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">7. Service Availability</h2>
            <p className="text-black mb-6">
              While we strive to maintain high availability, we do not guarantee uninterrupted service. 
              We may perform maintenance, updates, or modifications that temporarily affect service availability.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">8. Limitation of Liability</h2>
            <p className="text-black mb-6">
              WyseD Technology shall not be liable for any indirect, incidental, special, or consequential damages 
              arising from your use of our services. Our total liability shall not exceed the amount 
              paid by you for the services in the preceding 12 months.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">9. Termination</h2>
            <p className="text-black mb-6">
              Either party may terminate this agreement with appropriate notice. Upon termination, 
              your access to our services will cease, and we will provide you with your data according 
              to our data retention policy.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">10. Changes to Terms</h2>
            <p className="text-black mb-6">
              We reserve the right to modify these terms at any time. We will notify users of significant 
              changes via email or through our service. Continued use of our services constitutes 
              acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">11. Contact Information</h2>
            <p className="text-black mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-black mb-2"><strong>Email:</strong> legal@wysedtech.com</p>
              <p className="text-black mb-2"><strong>Address:</strong> 456 Tech Boulevard, Austin, TX 78701</p>
              <p className="text-black"><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;