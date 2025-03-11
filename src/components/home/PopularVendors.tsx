
import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VendorCard from '../shared/VendorCard';

// Sample data - in a real app, this would come from an API
const popularVendors = [
  {
    id: 1,
    name: 'Glamour Studio',
    category: 'Beauty & Makeup',
    rating: 4.9,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop',
    location: 'Dhaka',
    services: 24,
  },
  {
    id: 2,
    name: 'Sweet Delights',
    category: 'Cakes & Desserts',
    rating: 4.8,
    reviews: 96,
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1974&auto=format&fit=crop',
    location: 'Dhaka',
    services: 18,
  },
  {
    id: 3,
    name: 'Serenity Spa',
    category: 'Spa & Massage',
    rating: 4.7,
    reviews: 64,
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=2070&auto=format&fit=crop',
    location: 'Chittagong',
    services: 12,
  },
  {
    id: 4,
    name: 'Celebration Events',
    category: 'Event Planning',
    rating: 4.9,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
    location: 'Dhaka',
    services: 15,
  },
];

const PopularVendors = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-t from-white to-lavender-50/30">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="section-title">Popular Vendors</h2>
            <p className="section-subtitle">Meet our top-rated service providers</p>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Button 
              onClick={scrollLeft} 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              aria-label="Scroll left"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button 
              onClick={scrollRight} 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              aria-label="Scroll right"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div 
          ref={carouselRef}
          className="flex overflow-x-auto space-x-6 pb-6 scrollbar-none snap-x"
        >
          {popularVendors.map((vendor) => (
            <div key={vendor.id} className="snap-start flex-shrink-0 w-[350px]">
              <VendorCard vendor={vendor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularVendors;
