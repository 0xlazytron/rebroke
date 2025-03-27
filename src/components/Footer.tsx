
import React from 'react';
import { Twitter, ExternalLink } from 'lucide-react';
import { FaTiktok, FaReddit, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-broke-card brutalist-pattern py-16 px-4 md:px-8 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-3xl font-display text-broke-primary tracking-tighter mb-4">
              BROKE<span className="text-broke-tertiary">COIN</span>
            </div>

            <p className="font-bubble text-broke-muted mb-6">
              The memecoin for those who've lost it all but still have their sense of humor.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://x.com/brokecoinonsol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 brutalist-border-sm bg-broke-background flex items-center justify-center text-broke-text hover:bg-broke-primary hover:text-broke-background transition-colors"
              >
                <Twitter size={18} />
              </a>

              <a
                href="https://t.me/Brokecoinonsolana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 brutalist-border-sm bg-broke-background flex items-center justify-center text-broke-text hover:bg-broke-primary hover:text-broke-background transition-colors"
              >
                <FaTelegramPlane size={24} className="text-broke-text" />
              </a>

              <a
                href="https://www.tiktok.com/@brokecoinonsolana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 brutalist-border-sm bg-broke-background flex items-center justify-center text-broke-text hover:bg-broke-primary hover:text-broke-background transition-colors"
              >
                <FaTiktok size={24} className="text-broke-text" />
              </a>
              <a
                href="https://www.reddit.com/r/BrokeCoinonSol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 brutalist-border-sm bg-broke-background flex items-center justify-center text-broke-text hover:bg-broke-primary hover:text-broke-background transition-colors"
              >
                <FaReddit size={24} className="text-broke-text" />

              </a>
            </div>
          </div>

          <div>
            <h3 className="font-comic text-broke-primary text-xl mb-4">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-bubble text-broke-text hover:text-broke-primary transition-colors inline-flex items-center">
                  <span className="mr-2 w-2 h-2 bg-broke-primary inline-block"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#intro" className="font-bubble text-broke-text hover:text-broke-primary transition-colors inline-flex items-center">
                  <span className="mr-2 w-2 h-2 bg-broke-primary inline-block"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#nft" className="font-bubble text-broke-text hover:text-broke-primary transition-colors inline-flex items-center">
                  <span className="mr-2 w-2 h-2 bg-broke-primary inline-block"></span>
                  NFTs
                </a>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="font-comic text-broke-primary text-xl mb-4">RESOURCES</h3>
            <ul className="space-y-3">
              <li>
                <a href="#game" className="font-bubble text-broke-text hover:text-broke-primary transition-colors inline-flex items-center">
                  <span className="mr-2 w-2 h-2 bg-broke-primary inline-block"></span>
                  Telegram Game
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="font-bubble text-broke-text hover:text-broke-primary transition-colors inline-flex items-center">
                  <span className="mr-2 w-2 h-2 bg-broke-primary inline-block"></span>
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#roadmap" className="font-bubble text-broke-text hover:text-broke-primary transition-colors inline-flex items-center">
                  <span className="mr-2 w-2 h-2 bg-broke-primary inline-block"></span>
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-comic text-broke-primary text-xl mb-4">GET BROKE</h3>
            <p className="font-bubble text-broke-muted mb-6">
              Ready to join the broke army? Buy $BROKE tokens on your favorite exchange.
            </p>

            <div className="space-y-4">
              <a
                href="https://raydium.io/swap/?inputMint=sol&outputMint=Ga4oZoNRLkZkruJpS8NLwa8DJCwKP9hbTBSNDQZ9V43v"
                target='__blank'
                className="brutalist-button w-full justify-center"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Buy on Raydium
              </a>

              <a
                href="https://dexscreener.com/solana/dfvyzkqbhs3lxtuojbtv5mtfyycnmcl66rad1nft7u46"
                target='__blank'
                className="brutalist-button w-full justify-center bg-broke-card text-broke-text hover:bg-broke-card/80"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> View Chart
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-4 border-broke-background">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bubble text-broke-muted text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} BrokeCoin. All rights reserved.
            </p>

            <p className="font-bubble text-broke-muted text-sm">
              <span className="glitch-effect" data-text="STAY BROKE, STAY HUMBLE.">STAY BROKE, STAY HUMBLE.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-12 left-12 w-20 h-6 bg-broke-tertiary/20 rotate-12 hidden md:block"></div>
      <div className="absolute top-1/4 right-12 w-12 h-12 border-4 border-broke-primary/30 hidden md:block"></div>
      <div className="absolute bottom-24 left-1/4 w-8 h-8 bg-broke-secondary/40 hidden md:block"></div>
    </footer>
  );
};

export default Footer;
