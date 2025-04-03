/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Tokenomics = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('tokenomics-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const tokenData = [
    { name: 'Liquidity Pool', value: 40, color: '#FCA903' },
    { name: 'Community Rewards', value: 15, color: '#FF3B30' },
    { name: 'Burn Wallet', value: 10, color: '#FF5900' },
    { name: 'Marketing Wallet', value: 10, color: '#5E5CE6' },
    { name: 'Community Incentives', value: 10, color: '#4CAF50' },
    { name: 'Team Tokens (locked)', value: 10, color: '#FF9500' },
    { name: 'Development', value: 5, color: '#8E8E93' },
  ];

  const totalSupply = "1,000,000,000,000";
  const remainingSupply = "90,000,000,000";
  const burnedSupply = "10,000,000,000";

  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
    if (active && payload && payload.length) {
      return (
        <div className="border-2 border-amber-700 bg-white p-3 font-bubble">
          <p className="text-amber-800 text-sm">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  // Custom renderer for the pie chart labels that ensures they're positioned properly
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    // Don't show labels for small segments to prevent overlap
    if (percent < 0.05) return null;

    const RADIAN = Math.PI / 180;
    // Position the label outside the pie to avoid overlap
    const radius = outerRadius * 1.15;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#121212"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="font-bubble text-xs"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Custom legend that displays both the name and percentage
  const CustomLegend = () => {
    return (
      <div className="grid grid-cols-2 gap-x-2 gap-y-1 mt-4 max-w-sm mx-auto">
        {tokenData.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center">
            <div
              className="w-3 h-3 mr-2"
              style={{ backgroundColor: entry.color, border: '1px solid #121212' }}
            ></div>
            <span className="text-xs font-bubble truncate">
              {entry.name} ({entry.value}%)
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="tokenomics" className="section-padding relative py-20">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 to-sky-200 z-0"></div>

      <div className="absolute bottom-0 left-0 right-0 h-40 mt-[200px]">
        <img src="/graphics/layer.svg" alt="" />
      </div>

      <div className="container mx-auto relative z-20" id="tokenomics-section">
        <div className="text-center mb-16">
          <h2 className="comic-title text-4xl md:text-5xl lg:text-6xl mb-4 font-comic">
            TOKENOMICS
          </h2>
          <div className="max-w-2xl mx-auto bg-white/90 p-4 border-2 border-amber-700 rounded-lg">
            <p className="font-bubble text-broke-text text-lg">
              BrokeCoin has a carefully balanced tokenomics model that prioritizes community rewards
              while ensuring sustainable development and growth.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-full aspect-square max-w-md mx-auto">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <Pie
                    data={tokenData}
                    cx="50%"
                    cy="50%"
                    outerRadius={animate ? "60%" : "50%"}
                    innerRadius={animate ? "30%" : "20%"}
                    dataKey="value"
                    animationDuration={2000}
                    animationBegin={0}
                    label={renderCustomizedLabel}
                    labelLine={false}
                    paddingAngle={2}
                    strokeWidth={3}
                  >
                    {tokenData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="#121212" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <CustomLegend />
            </div>
          </div>

          <div>
            <div className="space-y-8">
              <div className="bg-white/90 border-4 border-amber-700 shadow-[5px_5px_0px_rgba(180,83,9,0.8)] p-6 rounded-lg">
                <h3 className="font-comic text-amber-800 text-2xl mb-4">SUPPLY METRICS</h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-bubble text-broke-text">Total Supply:</span>
                      <span className="font-mono text-amber-800 font-bold">{totalSupply}</span>
                    </div>
                    <div className="w-full h-5 bg-amber-100 border-2 border-amber-700 overflow-hidden">
                      <div className="h-full w-full bg-yellow-400"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-bubble text-broke-text">Remaining Supply:</span>
                      <span className="font-mono text-amber-800 font-bold">{remainingSupply}</span>
                    </div>
                    <div className="w-full h-5 bg-amber-100 border-2 border-amber-700 overflow-hidden">
                      <div
                        className="h-full bg-orange-400 transition-all duration-1000 ease-out"
                        style={{ width: animate ? '75%' : '0%' }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-bubble text-broke-text">Burned Supply:</span>
                      <span className="font-mono text-amber-800 font-bold">{burnedSupply}</span>
                    </div>
                    <div className="w-full h-5 bg-amber-100 border-2 border-amber-700 overflow-hidden">
                      <div
                        className="h-full bg-red-500 transition-all duration-1000 ease-out"
                        style={{ width: animate ? '25%' : '0%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 border-4 border-amber-700 shadow-[5px_5px_0px_rgba(180,83,9,0.8)] p-6 rounded-lg">
                <h3 className="font-comic text-amber-800 text-2xl mb-4">TOKEN DETAILS</h3>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-bubble text-broke-text">Token Name:</span>
                    <span className="font-mono text-amber-800 font-bold">BrokeCoin</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-bubble text-broke-text">Symbol:</span>
                    <span className="font-mono text-amber-800 font-bold">$BROKE</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-bubble text-broke-text">Blockchain:</span>
                    <span className="font-mono text-amber-800 font-bold">Solana</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-bubble text-broke-text">Tax:</span>
                    <span className="font-mono text-amber-800 font-bold">0.25% buy/sell</span>
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

export default Tokenomics;