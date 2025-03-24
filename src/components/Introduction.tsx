
import React from 'react';

const Introduction = () => {
  return (
    <section id="intro" className="section-padding relative">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <h2 className="brutalist-title text-3xl md:text-4xl lg:text-5xl mb-6" data-text="WHAT IS BROKECOIN?">
              WHAT IS BROKECOIN?
            </h2>

            <div className="grid grid-cols-1 gap-8 mt-8">
              <div className="brutalist-card">
                <h3 className="font-comic text-xl text-broke-primary mb-3">BROKE AS A JOKE</h3>
                <p className="font-bubble text-broke-text">
                  BrokeCoin started as a joke between friends who lost everything in the last bear market.
                  We decided if we're going to be broke, let's at least have fun with it.
                </p>
              </div>

              <div className="brutalist-card">
                <h3 className="font-comic text-xl text-broke-primary mb-3">COMMUNITY POWERED</h3>
                <p className="font-bubble text-broke-text">
                  What began as a meme has evolved into a vibrant community of crypto enthusiasts united by humor and
                  the shared experience of watching our portfolios crash together.
                </p>
              </div>

              <div className="brutalist-card">
                <h3 className="font-comic text-xl text-broke-primary mb-3">UTILITY? WE'RE BROKE!</h3>
                <p className="font-bubble text-broke-text">
                  Unlike other tokens that promise the moon and deliver nothing, BrokeCoin promises nothing
                  and might just deliver something! Low expectations, high hopes.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 relative">
            <div className="w-full h-[400px] relative overflow-hidden brutalist-border">
              <div className="absolute inset-0 bg-broke-card flex items-center justify-center">
                <div className="relative object-cover">
                  <img src="/public/graphics/tok.png" alt="broke coin image" />
                  {/* <div className="text-9xl animate-bounce-slight">🪙</div> */}
                  {/* <div className="absolute top-1/2 -left-10 w-6 h-24 bg-broke-primary -rotate-45"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-4 bg-broke-tertiary"></div> */}
                </div>
              </div>

              {/* Comic-style speech bubble */}
              <div className="absolute top-8 right-8 bg-white p-4 rounded-2xl border-2 border-amber-700 w-40 transform rotate-12">
                <div className="absolute bottom-[-10px] left-6 w-6 h-6 bg-white border-r-2 border-b-2 border-amber-700 transform rotate-45"></div>
                <p className="font-bubble text-amber-800 text-sm">I'm not just broke, I'm crypto broke!</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="hidden md:block absolute -top-8 -right-8 w-20 h-20 bg-broke-primary/40 rotate-12 z-10 rounded-md"></div>
            <div className="hidden md:block absolute -bottom-8 -left-8 w-16 h-16 border-4 border-broke-secondary z-10 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-2 h-24 bg-broke-tertiary"></div>
      <div className="absolute top-1/2 right-0 w-4 h-40 bg-broke-primary"></div>

      {/* Added comic-style clouds */}
      <div className="absolute top-20 right-[20%] w-32 h-2">
        <img src="/public/graphics/cloud/cloud-3.svg" alt="" />
      </div>
    </section>
  );
};

export default Introduction;
