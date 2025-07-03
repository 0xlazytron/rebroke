
import React, { useState, useRef, useEffect } from 'react';
import { Copy, ExternalLink, Volume2, VolumeX, Play, Pause, Maximize, Minimize } from 'lucide-react';
import { toast } from 'sonner';

const HeroSection = () => {
  const contractAddress = 'Ga4oZoNRLkZkruJpS8NLwa8DJCwKP9hbTBSNDQZ9V43v';
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Handle video play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Handle video mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Handle seeking when clicking on progress bar
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent default and stop propagation are now handled in the onClick handler
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  // Handle fullscreen toggle
  const toggleFullscreen = () => {
    if (!videoContainerRef.current) return;
    
    if (!document.fullscreenElement) {
      videoContainerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };
  
  // Update fullscreen state when exiting with Escape key
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Initialize video
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set initial state
      setIsPlaying(!video.paused);
      setIsMuted(video.muted);

      // Add event listeners
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleVolumeChange = () => setIsMuted(video.muted);
      const handleTimeUpdate = () => {
        if (video.duration) {
          setProgress((video.currentTime / video.duration) * 100);
        }
      };

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('volumechange', handleVolumeChange);
      video.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('volumechange', handleVolumeChange);
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

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
            <button
              onClick={() => {
                // Scroll to the TokenSwap section
                const tokenSwapSection = document.getElementById('token-swap');
                if (tokenSwapSection) {
                  tokenSwapSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="brutalist-button flex-1 justify-center uppercase"
            >
              <ExternalLink size={16} className="mr-2" />
              buy on jupiter
            </button>
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
                  {/* <img src="/graphics/broke.png" alt="" /> */}
                  <div 
                    ref={videoContainerRef}
                    className="video-player-container brutalist-border bg-white/90 p-2 relative overflow-hidden"
                  >
                    <div
                      className="relative"
                      onMouseEnter={() => setShowControls(true)}
                      onMouseLeave={() => setShowControls(false)}
                    >
                      {/* Video wrapper to handle play/pause clicks */}
                      <div 
                        className="video-wrapper relative" 
                        onClick={(e) => {
                          // Only toggle play when clicking directly on the wrapper
                          // and not on any child elements (like controls)
                          if (e.currentTarget === e.target && !showControls) {
                            e.preventDefault();
                            togglePlay();
                          }
                        }}
                      >
                        <video
                          ref={videoRef}
                          id="hero-video"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full rounded-sm"
                          poster="/graphics/broke.png"
                          onClick={(e) => {
                            // Completely stop propagation on video element clicks
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                        >
                          <source src="/graphics/broke.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-broke-primary via-broke-secondary to-broke-tertiary"></div>

                      {/* Custom video title overlay */}
                      <div className="absolute top-2 left-2 bg-broke-primary/90 text-broke-text px-2 py-1 text-xs font-bubble brutalist-border-sm rounded-sm">
                        BROKE COIN
                      </div>

                      {/* Video controls */}
                      <div 
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity duration-300 flex flex-col gap-2 z-10"
                        style={{ opacity: showControls ? 1 : 0 }}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          return false;
                        }}
                      >
                        {/* Progress bar */}
                        <div 
                          className="w-full h-2 bg-white/30 rounded-full cursor-pointer relative overflow-hidden brutalist-border-sm"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleSeek(e);
                            return false;
                          }}
                        >
                          <div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-broke-primary to-broke-secondary rounded-full"
                            style={{ width: `${progress}%` }}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              return false;
                            }}
                          ></div>
                        </div>
                        
                        {/* Control buttons */}
                        <div 
                          className="flex justify-between items-center"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            return false;
                          }}
                        >
                          <div 
                            className="flex items-center gap-4"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              return false;
                            }}
                          >
                            {/* Play/Pause button */}
                            <button 
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                togglePlay();
                                return false;
                              }}
                              className="w-8 h-8 bg-broke-primary text-broke-text rounded-full flex items-center justify-center brutalist-border-sm hover:bg-broke-secondary transition-colors"
                            >
                              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                            </button>
                            
                            {/* Mute/Unmute button */}
                            <button 
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleMute();
                                return false;
                              }}
                              className="w-8 h-8 bg-broke-primary text-broke-text rounded-full flex items-center justify-center brutalist-border-sm hover:bg-broke-secondary transition-colors"
                            >
                              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                            </button>
                          </div>
                          
                          {/* Fullscreen button */}
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleFullscreen();
                              return false;
                            }}
                            className="w-8 h-8 bg-broke-primary text-broke-text rounded-full flex items-center justify-center brutalist-border-sm hover:bg-broke-secondary transition-colors"
                          >
                            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
                          </button>
                        </div>
                      </div>

                      {/* Play/Pause overlay for center of video - only shown when controls are hidden and video is paused */}
                      {!isPlaying && !showControls && (
                        <div
                          className="absolute inset-0 flex items-center justify-center cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            togglePlay();
                            return false;
                          }}
                        >
                          <div 
                            className="w-16 h-16 bg-broke-primary/80 rounded-full flex items-center justify-center brutalist-border animate-pulse"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              return false;
                            }}
                          >
                            <Play size={32} className="text-broke-text ml-1" />
                          </div>
                        </div>
                      )}

                      {/* Custom video corner decoration */}
                      {/* <div className="absolute bottom-2 right-2">
                        <div className="w-6 h-6 bg-broke-secondary brutalist-border-sm flex items-center justify-center rounded-full">
                          <span className="text-white text-xs">$</span>
                        </div>
                      </div> */}
                    </div>
                  </div>
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
