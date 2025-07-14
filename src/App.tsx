import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import RefundPolicy from './pages/RefundPolicy';

function App() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = React.useState(false);

  const handleGetQuoteClick = () => {
    setIsQuotePopupOpen(true);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header 
        isQuotePopupOpen={isQuotePopupOpen}
        setIsQuotePopupOpen={setIsQuotePopupOpen}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </main>
      <Footer onGetQuoteClick={handleGetQuoteClick} />
      <WhatsAppButton />
    </div>
  );
}

export default App;