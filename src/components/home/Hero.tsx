
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Background images for the slider
const backgrounds = [
  'https://images.unsplash.com/photo-1607779097040-28dfb5a19d66?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1607006483204-b304e6edb778?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583852677270-411f4bfc7260?q=80&w=2069&auto=format&fit=crop'
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Images */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center 
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/40 to-lavender-900/40 backdrop-blur-[2px]"></div>
        </div>
      ))}

      {/* Content */}
      <div className="container-custom h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white animate-fade-in">
          <h5 className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block text-sm font-medium mb-4 animate-slide-up shadow-sm">
            Women-Centric Marketplace
          </h5>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up [animation-delay:200ms]">
            Discover <span className="text-gold-300">Beauty</span>, <span className="text-rose-300">Elegance</span> & <span className="text-lavender-300">Craftsmanship</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl animate-slide-up [animation-delay:400ms]">
            Connect with the best women-led businesses offering beauty services, event planning, baking, and more.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up [animation-delay:600ms]">
            <Link to="/categories">
              <Button className="bg-white text-rose-600 hover:bg-white/90 rounded-full px-6 py-6 font-medium shadow-md hover:shadow-lg transition-all duration-300">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/vendor-register">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-6 py-6 font-medium">
                Become a Vendor
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-10 bg-white' 
                : 'w-2 bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
