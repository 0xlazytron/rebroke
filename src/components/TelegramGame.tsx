
import React from 'react';
import { Gamepad2 } from 'lucide-react';

const TelegramGame = () => {
  return (
    <section id="game" className="section-padding relative">
      <div className="container mx-auto">
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
              href="https://t.me/BrokeCoinbot/BROKE"
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
                  <img src="/public/graphics/game.png" alt="broke coin image" />
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-8 -right-8 w-1/3 h-1/3 bg-broke-primary/20 rotate-12"></div>
            <div className="absolute -bottom-12 -left-12 w-1/4 h-1/4 border-8 border-broke-secondary/30"></div>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-12 w-4 h-16 bg-broke-tertiary/30"></div>
        <div className="absolute bottom-1/4 right-12 w-12 h-3 bg-broke-primary/40"></div>
      </div>
    </section >
  );
};

export default TelegramGame;
