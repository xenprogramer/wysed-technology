import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-white overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight px-2">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">Policy</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
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

            <h2 className="text-2xl font-bold text-black mb-4">1. Information We Collect</h2>
            <p className="text-black mb-6">
              We collect information you provide directly to us, such as when you request a quote, 
              use our website services, or contact us for support. This may include your name, email address, 
              phone number, company information, and project details you choose to provide.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Your Information</h2>
            <p className="text-black mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6 text-black">
              <li>Provide, maintain, and improve our web development services</li>
              <li>Process project requests and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Communicate with you about web development projects and services</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mb-4">3. Information Sharing</h2>
            <p className="text-black mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share your information 
              with trusted service providers who assist us in delivering web development services and conducting our business.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">4. Data Security</h2>
            <p className="text-black mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">5. Your Rights</h2>
            <p className="text-black mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 text-black">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mb-4">6. Cookies and Tracking</h2>
            <p className="text-black mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">7. Changes to This Policy</h2>
            <p className="text-black mb-6">
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">8. Contact Us</h2>
            <p className="text-black mb-6">
              If you have any questions about this privacy policy, please contact us at:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-black mb-2"><strong>Email:</strong> privacy@wysedtech.com</p>
              <p className="text-black mb-2"><strong>Address:</strong> 456 Tech Boulevard, Austin, TX 78701</p>
              <p className="text-black"><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;