import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import s1 from "../assets/s1.jpg"
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      title: 'Mountain Paradise',
      description: 'Explore breathtaking mountain landscapes',
      bg: 'bg-gradient-to-r from-blue-500 to-purple-600',
      bgimg:s1
    },
    {
      id: 2,
      title: 'Ocean Dreams',
      description: 'Dive into crystal clear waters',
      bg: 'bg-gradient-to-r from-cyan-500 to-blue-500',
      bgimg:s1
    },
    {
      id: 3,
      title: 'Forest Serenity',
      description: 'Find peace in nature\'s embrace',
      bg: 'bg-gradient-to-r from-green-500 to-emerald-600',
      bgimg:s1
    },
    {
      id: 4,
      title: 'Desert Adventure',
      description: 'Experience the golden dunes',
      bg: 'bg-gradient-to-r from-orange-500 to-red-500',
      bgimg:s1
    }
  ];

  // Auto-swipe functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className=" flex items-center justify-center p-4">
      <div className="w-full max-w-7xl">
        {/* Slider Container */}
        <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
          {/* Slides */}
          <div className="relative h-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentIndex
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
              >
                <div className="h-full w-full flex flex-col items-center justify-center text-white px-8">
                  <img src={slide.bgimg} alt="" />
                </div>
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${index === currentIndex
                    ? 'w-8 bg-white'
                    : 'w-3 bg-white/50 hover:bg-white/70'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Info Text */}

      </div>


    </div>
  );
}
