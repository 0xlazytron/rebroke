
import React, { useState } from 'react';
import { Copy, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

const HeroSection = () => {
  const contractAddress = 'Ga4oZoNRLkZkruJpS8NLwa8DJCwKP9hbTBSNDQZ9V43v';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    toast.success("Contract address copied to clipboard!", {
      position: "bottom-center",
    });
  };

  return (
    <section className="min-h-screen pt-28 pb-16 px-4 md:px-8 relative overflow-hidden">

      {/* Real 2D clouds */}
      <div className="absolute top-24 left-[10%] z-0">
        <img src="/graphics/cloud/cloud.svg" alt="Cloud" className="w-32 opacity-90 animate-float" />
      </div>
      <div className="absolute top-40 right-[15%] z-0">
        <img src="/graphics/cloud/cloud-1.svg" alt="Cloud" className="w-40 opacity-90 animate-float" style={{ animationDelay: "1.2s" }} />
      </div>
      <div className="absolute top-60 left-[30%] z-0">
        <img src="/graphics/cloud/cloud-2.svg" alt="Cloud" className="w-36 opacity-90 animate-float" style={{ animationDelay: "0.7s" }} />
      </div>
      {/* Lower Background */}
      <div className='absolute bottom-0 left-0 right-0'>
        <img className="w-full" src="/graphics/lower_hero.svg" alt="" />
      </div>
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 md:order-1">
          <h1 className="font-comic text-5xl sm:text-6xl md:text-7xl leading-none mb-6 text-amber-800 drop-shadow-[3px_3px_0px_#FFF]">
            THE MOST <span className="text-yellow-500">BROKE</span><br />
            MEME TOKEN ON <span className="text-orange-500">SOLANA</span>
          </h1>

          <p className="font-bubble text-broke-text text-xl mb-8 max-w-md">
            We're not just broke, we're CRYPTO broke. Join the community
            of degenerates who understand that being broke together is better
            than being broke alone.
          </p>

          <div className="bg-white/90 brutalist-border p-4 mb-6 overflow-hidden">
            <label className="block font-bubble text-lg text-broke-text mb-2">
              Contract Address:
            </label>
            <div className="flex items-center">
              <input
                type="text"
                readOnly
                value={contractAddress}
                className="bg-amber-100 text-broke-text w-full p-3 border-2 border-amber-600 focus:outline-none font-mono text-sm truncate mr-2"
              />
              <button
                onClick={copyToClipboard}
                className="p-2 bg-yellow-400 hover:bg-orange-400 text-amber-900 rounded-md transition-colors border-2 border-amber-700"
              >
                <Copy size={18} />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://jup.ag/tokens/Ga4oZoNRLkZkruJpS8NLwa8DJCwKP9hbTBSNDQZ9V43v"
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-button flex-1 justify-center uppercase"
            >
              <ExternalLink size={16} className="mr-2" />
              buy on jupiter
            </a>
            <a
              href="/pdfs/Broke.pdf"
              target='_blank'
              rel="noopener noreferrer"
              className="brutalist-button flex-1 justify-center bg-white text-amber-800 hover:bg-orange-400 hover:text-white"
            >
              <ExternalLink size={16} className="mr-2" />
              Whitepaper
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="relative z-10 animate-float">
            <div className="w-full h-[300px] md:h-[400px] relative">
              <div className="absolute inset-0 bg-yellow-300/30 rounded-full blur-3xl animate-pulse-glow"></div>
              <div className="absolute inset-0 flex items-center justify-center">

                <div className="text-9xl font-display animate-bounce-slight">
                  <img src="/graphics/broke.png" alt="" />
                </div>


              </div>
            </div>
          </div>

        </div>
      </div>


    </section>
  );
};

export default HeroSection;
