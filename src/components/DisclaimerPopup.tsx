
import React, { useState, useEffect } from 'react';
import { ShieldAlert, X, Check } from 'lucide-react';

interface DisclaimerPopupProps {
  onAccept: () => void;
  onClose: () => void;
}

const DisclaimerPopup: React.FC<DisclaimerPopupProps> = ({ onAccept, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-lg bg-broke-background brutalist-border p-0 animate-scale-in">
        <div className="bg-broke-card p-4 flex items-center justify-between">
          <div className="flex items-center">
            <ShieldAlert className="text-broke-tertiary mr-2" size={24} />
            <h2 className="font-display text-broke-primary text-xl">RISKS & DISCLAIMER</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-broke-muted hover:text-broke-text transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <p className="font-mono text-broke-text leading-relaxed mb-6">
            Investing in cryptocurrencies, including $BROKE, involves market volatility and inherent risks. 
            While the team is committed to ethical practices and transparency, investors are strongly 
            encouraged to conduct their own research and consult financial advisors before investing.
          </p>
          
          <p className="font-mono text-broke-muted text-sm mb-8">
            By clicking "Accept" you acknowledge that you have read and understand the risks associated with 
            cryptocurrency investments, and that this website is for informational purposes only and does not 
            constitute financial advice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onAccept}
              className="brutalist-button flex-1 justify-center"
            >
              <Check className="mr-2 h-4 w-4" />
              Accept
            </button>
            
            <button 
              onClick={onClose}
              className="brutalist-button flex-1 justify-center bg-broke-card text-broke-text hover:bg-broke-card/80"
            >
              <X className="mr-2 h-4 w-4" />
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
