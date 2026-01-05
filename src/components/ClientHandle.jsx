import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import msm from "../assets/msm.png"
const testimonials = [
  {
    id: 1,
    name: "Manmalka Salt Pvt. Ltd.",
    role: "salt manufacturing company",
    image: msm,
    text: "The scalability of this platform is unmatched. We've seen a 40% increase in productivity since integrating these tools into our daily workflow."
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="shrink-0 w-[300px] md:w-[400px] p-6 mx-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-xl hover:border-slate-500 transition-colors duration-300 group">
    <div className="flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-slate-600 group-hover:border-blue-500 transition-colors"
          />
          <div>
            <h3 className="text-white font-semibold text-sm md:text-base">{testimonial.name}</h3>
            <p className="text-slate-400 text-xs md:text-sm">{testimonial.role}</p>
          </div>
        </div>
        <Quote className="w-6 h-6 text-slate-600 group-hover:text-blue-500 transition-colors" />
      </div>
      <p className="text-slate-300 text-sm md:text-base leading-relaxed grow">
        "{testimonial.text}"
      </p>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center py-20 overflow-hidden font-sans">
      
      {/* Header Section */}
      <div className="text-center mb-16 px-4 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Our Client
        </h1>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full max-w-[1920px]">
        
        {/* linear Masks for fading effect at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-linear-to-r from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-linear-to-l from-slate-950 to-transparent pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex overflow-hidden group justify-center">
          {/* Inner container with animation */}
          {/* We duplicate the set twice to ensure seamless looping */}
          <div className="flex justify-center"> {/*animate-scroll hover:pause-animation*/}{/*, ...testimonials*/}
            {[...testimonials].map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* CSS for custom animation */}
    </div>
  );
};

export default App;