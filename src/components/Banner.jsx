import React from 'react';
import { Star } from 'lucide-react';
export default function AnimatedRibbons() {
  const topRibbonItems = [
    'WHY CHOOSE US?',
    'WHAT WE ARE BEST?',
    'WHAT IS SPECIAL?',
    'WHY TRUST US?',
  ];
  
  const bottomRibbonItems = [
    'WHY CHOOSE US?',
    'WHAT IS SPECIAL?',
    'WHY TRUST US?',
    'WHAT WE ARE BEST?',

  ];

  return (
    <div className="relative w-full h-24">
      {/* Top Orange Ribbon - goes from top-left to bottom-right */}
      <div className="absolute w-[150%] top-8 -left-[25%] rotate-[5deg] overflow-hidden">
        <div className="flex animate-scroll-left">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0">
              {topRibbonItems.map((item, index) => (
                <div key={`${setIndex}-${index}`} className="flex items-center shrink-0 px-8 py-4 bg-sky-900 ">
                  <span className="text-white font-bold text-lg md:text-2xl whitespace-nowrap">
                    {item}
                  </span>
                  <svg className="w-6 h-6 md:w-8 md:h-8 ml-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Black Ribbon - goes from top-right to bottom-left */}
      <div className="absolute w-[150%] top-8 -left-[25%] -rotate-[5deg] overflow-hidden">
        <div className="flex animate-scroll-right">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0">
              {bottomRibbonItems.map((item, index) => (
                <div key={`${setIndex}-${index}`} className="flex items-center shrink-0 px-8 py-4 bg-[#0374d2]">
                  <svg className="w-6 h-6 md:w-8 md:h-8 mr-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    
                  </svg>
                  <span className="text-white font-bold text-lg md:text-2xl whitespace-nowrap">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </div>
  );
}