
import React from 'react';

const Partners = () => {
  // Partner logos with actual logos and links
  const partners = [
    {
      id: 1,
      name: "SolScan",
      url: "https://solscan.io",
      logo: "/icons/solscan.svg"
    },
    {
      id: 2,
      name: "Raydium",
      url: "https://raydium.io",
      logo: "https://cryptologos.cc/logos/raydium-ray-logo.png"
    },
    {
      id: 3,
      name: "Jupiter",
      url: "https://jup.ag",
      logo: "https://jup.ag/_next/image?url=%2Fsvg%2Fjupiter-logo.png&w=32&q=75"
    },
    {
      id: 4,
      name: "Phantom",
      url: "https://phantom.app",
      logo: "/icons/solana.svg"
    },
    {
      id: 4,
      name: "Swftcoin Bridgers",
      url: "https://swap.swft.pro/#/?sourceFlag=BROKE",
      logo: "https://swap.swft.pro/img/allchain.4cda5362.png"
    },
    {
      id: 5,
      name: "Solana",
      url: "https://solana.com",
      logo: "https://cryptologos.cc/logos/solana-sol-logo.png"
    },
    {
      id: 6,
      name: "Orca",
      url: "https://orca.so",
      logo: "https://cryptologos.cc/logos/orca-orca-logo.png"
    },
    {
      id: 7,
      name: "SolScan",
      url: "https://solscan.io",
      logo: "/icons/solscan.svg"
    },
    {
      id: 8,
      name: "Raydium",
      url: "https://solscan.io",
      logo: "https://cryptologos.cc/logos/raydium-ray-logo.png"
    },
    {
      id: 9,
      name: "Jupiter",
      url: "https://jup.ag",
      logo: "https://jup.ag/_next/image?url=%2Fsvg%2Fjupiter-logo.png&w=32&q=75"
    },
    {
      id: 10,
      name: "orca",
      url: "https://solscan.io",
      logo: "https://cryptologos.cc/logos/orca-orca-logo.png"
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-broke-card/50">
      <div className="container mx-auto">
        <h3 className="brutalist-title text-center text-xl mb-8">PARTNERSHIPS & EXCHANGES</h3>

        <div className="flex justify-center">
          <div className="overflow-hidden" style={{ maxWidth: '100%' }}>
            <div className="flex gap-8 py-4 animate-scroll" style={{ animationDuration: '30s' }}>
              {partners.map((partner) => (
                <a
                  key={partner.id}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 transform transition-transform hover:scale-110"
                >
                  <div className="h-20 w-44 bg-broke-card brutalist-border-sm flex flex-col items-center justify-center p-2">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="partner-logo mb-2 h-10 object-contain"
                    />
                    <span className="font-bubble text-broke-text text-sm">{partner.name}</span>
                  </div>
                </a>
              ))}

              {/* Duplicate for continuous scrolling */}
              {partners.map((partner) => (
                <a
                  key={`duplicate-${partner.id}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 transform transition-transform hover:scale-110"
                >
                  <div className="h-20 w-44 bg-broke-card brutalist-border-sm flex flex-col items-center justify-center p-2">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="partner-logo mb-2 h-10 object-contain"
                    />
                    <span className="font-bubble text-broke-text text-sm">{partner.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
