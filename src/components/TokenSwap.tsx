import React, { useEffect, useRef } from 'react';

const TokenSwap = () => {
    // BrokeCoin contract address
    const brokeContractAddress = 'Ga4oZoNRLkZkruJpS8NLwa8DJCwKP9hbTBSNDQZ9V43v';
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Construct Jupiter Swap URL with BrokeCoin as the output token and hide the navigation tabs
    const jupiterSwapUrl = `https://jup.ag/swap/SOL-${brokeContractAddress}?embed=true&hideFooter=true&hideSettings=true&hideHistory=true&hideChart=true&hideTabs=true`;

    // Handle iframe resize to match content
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            // Only accept messages from Jupiter
            if (event.origin !== 'https://jup.ag') return;

            // Handle resize messages from Jupiter iframe
            if (event.data && event.data.type === 'resize' && event.data.height && iframeRef.current) {
                iframeRef.current.style.height = `${event.data.height}px`;
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <section id="token-swap" className="py-12 px-4 md:px-8 relative z-10">
            <div className="container mx-auto max-w-md">
                <div className="bg-black/90 rounded-lg p-4 shadow-lg overflow-hidden">
                    {/* Jupiter Swap Widget */}
                    <iframe
                        ref={iframeRef}
                        src={jupiterSwapUrl}
                        frameBorder="0"
                        width="100%"
                        height="660px"
                        style={{
                            borderRadius: '10px',
                            display: 'block',
                        }}
                        allow="clipboard-write"
                        title="Jupiter Swap Widget"
                    />
                </div>
            </div>
        </section>
    );
};

export default TokenSwap;