import React, { useState, useEffect } from 'react';

const Roadmap = () => {
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('roadmap-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const startAnimation = () => {
    let phase = 0;
    const maxPhase = roadmapData.length - 1;

    const interval = setInterval(() => {
      if (phase < maxPhase) {
        phase++;
        setActivePhase(phase);
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  };

  const roadmapData = [
    {
      phase: "PHASE 1",
      title: "FOUNDATION",
      items: [
        { text: "Website Launch", completed: true },
        { text: "Social Media Setup", completed: true },
        { text: "Community Building", completed: true },
        { text: "Token Launch on DEX", completed: true },
      ],
      icon: "🚀"
    },
    {
      phase: "PHASE 2",
      title: "GROWTH",
      items: [
        { text: "Telegram Game Launch", completed: true },
        { text: "Initial Marketing Push", completed: true },
        { text: "Partner Collaborations", completed: true },
        { text: "Meme Contest Kickoff", completed: true },
      ],
      icon: "📈"
    },
    {
      phase: "PHASE 3",
      title: "EXPANSION",
      items: [
        { text: "NFT Collection Launch", completed: true },
        { text: "CEX Listings", completed: false },
        { text: "Major Marketing Campaign", completed: false },
        { text: "Community DAO Formation", completed: true },
      ],
      icon: "🌍"
    },
    {
      phase: "PHASE 4",
      title: "EVOLUTION",
      items: [
        { text: "Expanded Utility Development", completed: false },
        { text: "Major Exchange Listings", completed: false },
        { text: "Broke University Launch", completed: false },
        { text: "Broke-to-Rich Ecosystem", completed: false },
      ],
      icon: "💎"
    }
  ];

  const phaseBackgrounds = [
    "", "", "", ""
  ];

  return (
    <section id="roadmap" className="section-padding relative bg-gradient-to-b from-broke-card/30 to-broke-card/10 md:mt-10">
      <div className="container mx-auto" id="roadmap-section">
        <div className="text-center mb-16">
          <h2 className="brutalist-title font-comic text-3xl md:text-4xl lg:text-5xl mb-4">
            ROADMAP
          </h2>
          <p className="font-bubble text-broke-muted max-w-2xl mx-auto">
            Our journey from broke to slightly less broke, mapped out in a series of ambitious steps.
            No promises, just possibilities!
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-24 left-0 w-full h-4 bg-amber-300 brutalist-border-sm z-10">
            <div
              className="h-full bg-broke-primary transition-all duration-1000 ease-out"
              style={{ width: `${(activePhase + 1) * 25}%` }}
            ></div>

            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`absolute top-0 h-12 w-12 -mt-5 transform -translate-x-1/2 transition-all duration-500 ${i <= activePhase ? 'rotate-0 scale-110' : '-rotate-45 scale-90'}`}
                style={{ left: `${i * 25 + 25 / 2}%` }}
              >
                <div className={`w-full h-full rounded-full brutalist-border-sm flex items-center justify-center ${i <= activePhase ? 'bg-yellow-400' : 'bg-broke-background'}`}>
                  <span className="text-2xl">{roadmapData[i].icon}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative pt-32">
            {roadmapData.map((phase, index) => (
              <div
                key={phase.phase}
                className={`relative ${index <= activePhase ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-4'} transition-all duration-500 ease-out`}
              >
                <div
                  className="brutalist-card h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${phaseBackgrounds[index]})`,
                    backgroundSize: '150%',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="relative z-10">
                    <div className="font-comic text-broke-primary text-sm mb-2 uppercase tracking-wider">{phase.phase}</div>
                    <h3 className="font-display text-broke-primary text-xl mb-4">{phase.title}</h3>

                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2"
                        >
                          <span className="w-6 h-6 bg-broke-primary mt-1 flex-shrink-0 flex items-center justify-center text-white font-bold">
                            {item.completed ? "✅" : itemIndex + 1}
                          </span>
                          <span className="font-bubble text-broke-text">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-10 w-16 h-16 bg-broke-tertiary/30 rotate-12 rounded-full hidden md:block"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 border-4 border-broke-primary/40 rounded-full hidden md:block"></div>
    </section>
  );
};

export default Roadmap;