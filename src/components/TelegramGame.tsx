
import React from 'react';
import { Gamepad2, Clock } from 'lucide-react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const TelegramGame = () => {
  return (
    <section id="game" className="section-padding relative">
      <div className="container mx-auto">
        {/* 
        COMMENTED OUT - TELEGRAM GAME CONTENT (TO BE RESTORED LATER)
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="brutalist-title text-3xl md:text-4xl lg:text-5xl mb-6">
              PLAY THE TELEGRAM GAME
            </h2>

            <p className="ont-bubble text-broke-text mb-8">
              Play the Telegram game, complete tasks, refer friends, and earn BrokeCoin.
              The more broke friends you bring, the more tokens you earn!
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-broke-primary brutalist-border-sm flex items-center justify-center text-broke-background shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-display text-broke-primary text-xl mb-2">JOIN THE GAME</h3>
                  <p className="ont-bubble text-broke-text">
                    Connect with our Telegram bot and create your game profile.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-broke-primary brutalist-border-sm flex items-center justify-center text-broke-background shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-display text-broke-primary text-xl mb-2">COMPLETE TASKS</h3>
                  <p className="ont-bubble text-broke-text">
                    Follow social accounts, create memes, engage with the community.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-broke-primary brutalist-border-sm flex items-center justify-center text-broke-background shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-display text-broke-primary text-xl mb-2">REFER FRIENDS</h3>
                  <p className="ont-bubble text-broke-text">
                    Share your unique referral code and earn BrokeCoin for each new user.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://t.me/brokiesbrokebot?profile"
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-button inline-flex"
            >
              <Gamepad2 className="mr-2 h-5 w-5" />
              START PLAYING NOW
            </a>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative z-10">
              <div className="w-full aspect-square max-w-md mx-auto bg-broke-card brutalist-border relative overflow-hidden">
                <div className="absolute inset-0 bg-broke-background/10"></div>
                <div className="relative object-cover">
                  <img src="/graphics/game.png" alt="broke coin image" />
                </div>
              </div>
            </div>

            Background decorative elements
            <div className="absolute -top-8 -right-8 w-1/3 h-1/3 bg-broke-primary/20 rotate-12"></div>
            <div className="absolute -bottom-12 -left-12 w-1/4 h-1/4 border-8 border-broke-secondary/30"></div>
          </div>
        </div>
        */}

        {/* NEW MOBILE APP CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative mb-6">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-1 bg-broke-primary text-broke-background text-xs px-3 py-1 rounded-full font-bold animate-pulse shadow-lg">
                <Clock size={12} />
                <span>Coming Soon</span>
              </div>
              <h2 className="brutalist-title text-3xl md:text-4xl lg:text-5xl">
                BROKE MOBILE APP
              </h2>
            </div>

            <p className="font-bubble text-broke-text mb-8">
              Coming soon, The Broke mobile app experience to be made available on iOS and Google Play store. Play games with multiplayer, complete daily tasks, earn Brokecoin with instant withdrawals. Prepare to get unbroke with Broke!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="brutalist-button inline-flex cursor-not-allowed opacity-75">
                <FaApple className="mr-2 h-5 w-5" />
                Download on iOS
              </div>
              <div className="brutalist-button inline-flex cursor-not-allowed opacity-75">
                <FaGooglePlay className="mr-2 h-5 w-5" />
                Download on Google Play
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative z-10">
              <div className="w-full aspect-square max-w-md mx-auto bg-broke-card brutalist-border relative overflow-hidden">
                <div className="absolute inset-0 bg-broke-background/10"></div>
                <div className="relative object-cover">
                  <img src="/graphics/stake.jpg" alt="Broke mobile app preview" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-8 -right-8 w-1/3 h-1/3 bg-broke-primary/20 rotate-12"></div>
            <div className="absolute -bottom-12 -left-12 w-1/4 h-1/4 border-8 border-broke-secondary/30"></div>
          </div>
        </div>
      </div >

      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" >
        <div className="absolute top-1/4 left-12 w-4 h-16 bg-broke-tertiary/30"></div>
        <div className="absolute bottom-1/4 right-12 w-12 h-3 bg-broke-primary/40"></div>
      </div>
    </section >
  );
};

export default TelegramGame;
