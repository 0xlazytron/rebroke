
import React, { useState, useEffect } from 'react';
import { Menu, X, Twitter, Globe, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-4",
      scrolled ? "bg-broke-background/95 backdrop-blur-sm shadow-md" : ""
    )}>
      <div className="container mx-auto flex justify-between items-center">

        <a href="/" className="flex items-center space-x-3">
          <img src="/public/logo.png" className="h-10 rounded-full md:h-12" alt="Brokecoin Logo" />
          <div className="text-3xl text-bold font-display text-broke-primary tracking-tighter">
            BROKE<span className="text-broke-tertiary">COIN</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#intro" className="font-bubble text-broke-text hover:text-broke-primary transition-colors">About</a>
          <a href="#nft" className="font-bubble text-broke-text hover:text-broke-primary transition-colors">NFTs</a>
          <a href="#game" className="font-bubble text-broke-text hover:text-broke-primary transition-colors">Game</a>
          <a href="#tokenomics" className="font-bubble text-broke-text hover:text-broke-primary transition-colors">Tokenomics</a>
          <a href="#roadmap" className="font-bubble text-broke-text hover:text-broke-primary transition-colors">Roadmap</a>

          <div className="flex space-x-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-broke-card rounded-full hover:bg-broke-primary/20 transition-colors">
              <Twitter size={18} className="text-broke-text" />
            </a>
            <a href="https://t.me/BrokeCoinbot" target="_blank" rel="noopener noreferrer" className="p-2 bg-broke-card rounded-full hover:bg-broke-primary/20 transition-colors">
              <Globe size={18} className="text-broke-text" />
            </a>
          </div>

          <a href="https://dexscreener.com/solana/dfvyzkqbhs3lxtuojbtv5mtfyycnmcl66rad1nft7u46" target='__blank' className="brutalist-button">
            <Download className="mr-2 h-4 w-4" /> Buy Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-broke-text"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-broke-background brutalist-pattern flex flex-col pt-20 px-6 transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-x-full"
      )}>
        {/* Close Button */}
        <button
          className="absolute top-5 right-6 p-2 text-broke-text"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} />
        </button>
        <nav className="flex flex-col space-y-6 items-center">
          <a href="#intro" className="font-bubble text-2xl text-broke-text hover:text-broke-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#nft" className="font-bubble text-2xl text-broke-text hover:text-broke-primary transition-colors" onClick={() => setIsMenuOpen(false)}>NFTs</a>
          <a href="#game" className="font-bubble text-2xl text-broke-text hover:text-broke-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Game</a>
          <a href="#tokenomics" className="font-bubble text-2xl text-broke-text hover:text-broke-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Tokenomics</a>
          <a href="#roadmap" className="font-bubble text-2xl text-broke-text hover:text-broke-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Roadmap</a>

          <div className="flex space-x-6 mt-8">
            <a href="https://x.com/brokecoinonsol" target="_blank" rel="noopener noreferrer" className="p-3 bg-broke-card rounded-full hover:bg-broke-primary/20 transition-colors">
              <Twitter size={24} className="text-broke-text" />
            </a>
            <a href="https://t.me/Brokecoinonsolana" target="_blank" rel="noopener noreferrer" className="p-3 bg-broke-card rounded-full hover:bg-broke-primary/20 transition-colors">
              <Globe size={24} className="text-broke-text" />
            </a>
          </div>

          <a href="https://dexscreener.com/solana/dfvyzkqbhs3lxtuojbtv5mtfyycnmcl66rad1nft7u46" target='__blank' className="brutalist-button w-full justify-center mt-8" onClick={() => setIsMenuOpen(false)}>
            <Download className="mr-2 h-5 w-5" /> Buy Now
          </a>
        </nav>
      </div>
    </header >
  );
};

export default Header;
