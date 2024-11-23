import React from 'react';

const AnimatedNetworkBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute h-px bg-yellow-300 opacity-5 animate-pulse"
                    style={{
                        top: `${i * 5}%`,
                        left: '-10%',
                        right: '-10%',
                        transform: `rotate(${i * 10}deg)`,
                        animation: `pulse${i} 3s infinite`,
                        animationDelay: `${i * 0.1}s`
                    }}
                >
                    <style jsx>{`
            @keyframes pulse${i} {
              0% {
                opacity: 0.05;
                transform: rotate(${i * 10}deg) translateX(0);
              }
              50% {
                opacity: 0.2;
                transform: rotate(${i * 10}deg) translateX(20px);
              }
              100% {
                opacity: 0.05;
                transform: rotate(${i * 10}deg) translateX(0);
              }
            }
          `}</style>
                </div>
            ))}
        </div>
    );
};

export default AnimatedNetworkBackground;