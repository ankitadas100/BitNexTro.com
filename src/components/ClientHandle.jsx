import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Product Manager at TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    text: "The scalability of this platform is unmatched. We've seen a 40% increase in productivity since integrating these tools into our daily workflow."
  },
  {
    id: 2,
    name: "David Chen",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    text: "Finally, a solution that understands the needs of modern developers. The API documentation is crystal clear and the community support is phenomenal."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
    text: "Our campaign analytics have never been clearer. This tool gives us the insights we need to make data-driven decisions in real-time."
  },
  {
    id: 4,
    name: "Michael Chang",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    text: "I was skeptical at first, but the ROI speaks for itself. It's rare to find a product that balances power with such an intuitive user interface."
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    text: "Beautifully designed and incredibly functional. It's refreshing to use software that actually feels like it was designed with the user in mind."
  },
  {
    id: 6,
    name: "James Wilson",
    role: "CTO at FutureNet",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    text: "Security was our top concern, and they delivered. The enterprise-grade encryption and compliance features gave us total peace of mind."
  }
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
        <h2 className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">
          Testimonials
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Loved by thousands of creators
        </h1>
        <p className="text-slate-400 text-lg">
          Don't just take our word for it. Read what our users have to say about their experience with our platform.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full max-w-[1920px]">
        
        {/* linear Masks for fading effect at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-linear-to-r from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-linear-to-l from-slate-950 to-transparent pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex overflow-hidden group">
          {/* Inner container with animation */}
          {/* We duplicate the set twice to ensure seamless looping */}
          <div className="flex animate-scroll hover:pause-animation">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
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