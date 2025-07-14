import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-white overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight px-2">
            Refund <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">Policy</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Learn about our refund policy and how to request refunds for our services.
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

            <h2 className="text-2xl font-bold text-black mb-4">1. Refund Eligibility</h2>
            <p className="text-black mb-6">
              We offer refunds under specific circumstances to ensure customer satisfaction while 
              maintaining fair business practices. Refunds are available for services that have not 
              been delivered or do not meet the agreed-upon website specifications.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">2. Refund Timeframes</h2>
            <p className="text-black mb-4">Refund requests must be submitted within the following timeframes:</p>
            <ul className="list-disc pl-6 mb-6 text-black">
              <li><strong>One-time services:</strong> Within 30 days of project completion</li>
              <li><strong>Monthly subscriptions:</strong> Within 14 days of billing cycle</li>
              <li><strong>Annual subscriptions:</strong> Within 30 days of initial purchase</li>
              <li><strong>Custom development:</strong> Before 50% project completion</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mb-4">3. Refundable Services</h2>
            <p className="text-black mb-4">The following services are eligible for refunds:</p>
            <ul className="list-disc pl-6 mb-6 text-black">
              <li>Undelivered websites or development projects</li>
              <li>Websites that significantly deviate from agreed specifications</li>
              <li>Maintenance services (prorated for unused time)</li>
              <li>Technical issues that cannot be resolved within 7 business days</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mb-4">4. Non-Refundable Services</h2>
            <p className="text-black mb-4">The following are not eligible for refunds:</p>
            <ul className="list-disc pl-6 mb-6 text-black">
              <li>Completed website development work that meets specifications</li>
              <li>Third-party software licenses or tools purchased on your behalf</li>
              <li>Websites live for more than 30 days</li>
              <li>Design consultation and strategy sessions that have been delivered</li>
              <li>Domain names and hosting services</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mb-4">5. Refund Process</h2>
            <p className="text-black mb-4">To request a refund, please follow these steps:</p>
            <ol className="list-decimal pl-6 mb-6 text-black">
              <li>Contact our support team at refunds@wysedtech.com</li>
              <li>Provide your order number and detailed reason for the refund request</li>
              <li>Allow 3-5 business days for review of your request</li>
              <li>If approved, refunds will be processed within 7-10 business days</li>
              <li>Refunds will be issued to the original payment method</li>
            </ol>

            <h2 className="text-2xl font-bold text-black mb-4">6. Partial Refunds</h2>
            <p className="text-black mb-6">
              In some cases, we may offer partial refunds for services that have been partially 
              completed or delivered. The refund amount will be calculated based on the development work 
              completed and the value delivered to the client.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">7. Dispute Resolution</h2>
            <p className="text-black mb-6">
              If you disagree with our refund decision, you may request a review by our management 
              team. We are committed to resolving disputes fairly and will work with you to find 
              a mutually acceptable solution.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">8. Chargebacks</h2>
            <p className="text-black mb-6">
              We encourage customers to contact us directly before initiating chargebacks with 
              their payment provider. Chargebacks may result in suspension of services and 
              additional fees. We prefer to resolve issues through direct communication.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">9. Changes to This Policy</h2>
            <p className="text-black mb-6">
              We reserve the right to modify this refund policy at any time. Changes will be 
              effective immediately upon posting on our website. Continued use of our services 
              constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">10. Contact Information</h2>
            <p className="text-black mb-6">
              For refund requests or questions about this policy, please contact us:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-black mb-2"><strong>Email:</strong> refunds@wysedtech.com</p>
              <p className="text-black mb-2"><strong>Support:</strong> support@wysedtech.com</p>
              <p className="text-black mb-2"><strong>Address:</strong> 456 Tech Boulevard, Austin, TX 78701</p>
              <p className="text-black"><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;