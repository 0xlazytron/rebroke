import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NftSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);

  // Sample NFT data
  const nfts = [
    {
      id: 1,
      name: "Broke #1",
      description: "This dude is so broke, he can't even afford pixels.",
      image: "/graphics/nfts/1.webp",
      rarity: "Common",
    },
    {
      id: 2,
      name: "Broke #7",
      description: "She spent her last SOL on this NFT. Now she's truly broke.",
      image: "/graphics/nfts/2.webp",
      rarity: "Uncommon",
    },
    {
      id: 3,
      name: "Broke #42",
      description: "Even apes get broke in this market. Especially this one.",
      image: "/graphics/nfts/3.webp",
      rarity: "Rare",
    },
    {
      id: 4,
      name: "Broke #13",
      description: "Nine lives, zero funds. This cat is financially challenged.",
      image: "/graphics/nfts/4.webp",
      rarity: "Epic",
    },
    {
      id: 5,
      name: "Broke #99",
      description: "Came to Earth for riches, ended up with empty pockets.",
      image: "/graphics/nfts/5.webp",
      rarity: "Legendary",
    },
    {
      id: 6,
      name: "Broke #76",
      description: "No money for upgrades, this robot is running on empty.",
      image: "/graphics/nfts/6.webp",
      rarity: "Legendary",
    },
    {
      id: 7,
      name: "Broke #42",
      description: "All magic, no money. This wizard can't even afford a new hat.",
      image: "/graphics/nfts/1.webp",
      rarity: "Legendary",
    },
    {
      id: 8,
      name: "Broke #11",
      description: "Spent all their cash on the rocket, now living on space ramen.",
      image: "/graphics/nfts/2.webp",
      rarity: "Legendary",
    },
  ];

  // Update slides per view based on screen width
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };

    updateSlidesPerView();
    setTotalSlides(nfts.length);

    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  // Function to handle automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, totalSlides]);

  const slideToIndex = (index: number) => {
    if (!carouselRef.current) return;

    setCurrentSlide(index);
    carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
    carouselRef.current.style.transform = `translateX(-${index * (100 / slidesPerView)}%)`;
  };

  const nextSlide = () => {
    if (!carouselRef.current) return;

    const nextIndex = (currentSlide + 1) % totalSlides;
    slideToIndex(nextIndex);
  };

  const prevSlide = () => {
    if (!carouselRef.current) return;

    const prevIndex = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    slideToIndex(prevIndex);
  };

  // Create a circular array for infinite scrolling effect
  const getCircularNfts = () => {
    // Duplicate items at the beginning and end to create the illusion of infinite scrolling
    const preItems = nfts.slice(-slidesPerView);
    const postItems = nfts.slice(0, slidesPerView);
    return [...preItems, ...nfts, ...postItems];
  };

  const circularNfts = getCircularNfts();

  // Calculate card width based on slides per view
  const cardWidth = 100 / slidesPerView;

  return (
    <section id="nft" className="section-padding bg-broke-card/30 brutalist-pattern relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="brutalist-title font-comic text-3xl md:text-4xl lg:text-5xl mb-4">
            MINT THE BROKIES NFT
          </h2>
          <p className="font-bubble text-broke-muted max-w-2xl mx-auto">
            Our NFTs are as broke as you are! Collect these uniquely Brokie digital assets that unlock unique rewards such as airdrops, discounted future Brokie Merch, free classes in Broke University, staking and more!
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden px-4 md:px-0">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${(slidesPerView + currentSlide) * cardWidth}%)`,
              }}
            >
              {circularNfts.map((nft, index) => (
                <div
                  key={`${nft.id}-${index}`}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${cardWidth}%` }}
                >
                  <div className="brutalist-card bg-broke-background h-full">
                    <div className="aspect-square mb-4 flex items-center justify-center overflow-hidden">
                      <img
                        src={nft.image}
                        alt={nft.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-3">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display text-broke-primary text-lg">{nft.name}</h3>
                        <span className="inline-block px-2 py-1 bg-broke-primary/20 text-broke-primary font-mono text-xs">
                          {nft.rarity}
                        </span>
                      </div>

                      <p className="font-bubble text-broke-muted text-sm mb-3">{nft.description}</p>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls - positioned outside the carousel */}
          <div className="flex justify-between w-full absolute top-1/2 -translate-y-1/2 left-0 px-4 md:px-0">
            <button
              onClick={prevSlide}
              className="relative -left-6 md:-left-12 w-12 h-12 bg-broke-card brutalist-border-sm flex items-center justify-center text-broke-text hover:bg-broke-primary hover:text-broke-background transition-colors z-10 rounded-full shadow-lg transform -translate-x-1/2"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="relative -right-6 md:-right-12 w-12 h-12 bg-broke-card brutalist-border-sm flex items-center justify-center text-broke-text hover:bg-broke-primary hover:text-broke-background transition-colors z-10 rounded-full shadow-lg transform translate-x-1/2"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://mint.brokecoinonsol.net"
            target="_blank"
            rel="noopener noreferrer"
            className="brutalist-button inline-block"
          >
            MINT YOUR BROKIE NOW
          </a>
          <p className="font-bubble text-md text-broke-muted mt-4">
            *Minting requires SOL. If you're actually broke, this might not be for you.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-12 left-12 w-24 h-6 bg-broke-tertiary/30 -rotate-12 hidden md:block"></div>
      <div className="absolute bottom-12 right-12 w-16 h-16 border-4 border-broke-primary/40 rounded-full hidden md:block"></div>
    </section>
  );
};

export default NftSection;