
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Partners from '@/components/Partners';
import Introduction from '@/components/Introduction';
import NftSection from '@/components/NftSection';
import TelegramGame from '@/components/TelegramGame';
import Tokenomics from '@/components/Tokenomics';
import Roadmap from '@/components/Roadmap';
import Footer from '@/components/Footer';
import DisclaimerPopup from '@/components/DisclaimerPopup';

const Index = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    // Check if the disclaimer has been accepted before
    const hasAcceptedDisclaimer = localStorage.getItem('brokecoin_disclaimer_accepted');

    if (!hasAcceptedDisclaimer) {
      // Show the disclaimer after a short delay
      const timer = setTimeout(() => {
        setShowDisclaimer(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem('brokecoin_disclaimer_accepted', 'true');
    setShowDisclaimer(false);
  };

  const handleCloseDisclaimer = () => {
    setShowDisclaimer(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-sky-300 comic-pattern relative overflow-hidden">
      {/* Comic-style sun */}
      <div className="absolute top-12 right-12 hidden md:block">
        <img src="/graphics/sun.svg" alt="Sun" className="w-full" />
      </div>

      {/* Comic-style birds */}
      {/* <div className="absolute top-[15%] left-[25%] animate-float">
        <img src="https://i.imgur.com/zcefNni.png" alt="Bird" className="w-8" />
      </div>
      <div className="absolute top-[10%] right-[35%] animate-float" style={{ animationDelay: "1.5s" }}>
        <img src="https://i.imgur.com/zcefNni.png" alt="Bird" className="w-6" />
      </div> */}

      <Header />
      <main>
        <HeroSection />
        <Partners />
        <Introduction />
        <NftSection />
        <TelegramGame />
        <Tokenomics />
        <Roadmap />
      </main>
      <Footer />

      {showDisclaimer && (
        <DisclaimerPopup
          onAccept={handleAcceptDisclaimer}
          onClose={handleCloseDisclaimer}
        />
      )}
    </div>
  );
};

export default Index;
