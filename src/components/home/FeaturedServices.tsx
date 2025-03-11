
import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '../shared/ServiceCard';

// Sample data - in a real app, this would come from an API
const featuredServices = [
  {
    id: 1,
    title: 'Bridal Makeup Package',
    vendor: 'Glamour Studio',
    rating: 4.9,
    reviews: 128,
    price: 12000,
    image: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=1944&auto=format&fit=crop',
    category: 'Beauty & Makeup',
    location: 'Dhaka',
  },
  {
    id: 2,
    title: 'Custom Birthday Cake',
    vendor: 'Sweet Delights',
    rating: 4.8,
    reviews: 96,
    price: 2500,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1888&auto=format&fit=crop',
    category: 'Cakes & Desserts',
    location: 'Dhaka',
  },
  {
    id: 3,
    title: 'Full Body Spa Treatment',
    vendor: 'Serenity Spa',
    rating: 4.7,
    reviews: 64,
    price: 5000,
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop',
    category: 'Spa & Massage',
    location: 'Chittagong',
  },
  {
    id: 4,
    title: 'Birthday Party Planning',
    vendor: 'Celebration Events',
    rating: 4.9,
    reviews: 112,
    price: 15000,
    image: 'https://images.unsplash.com/photo-1556126619-6c0b916be2a9?q=80&w=2070&auto=format&fit=crop',
    category: 'Event Planning',
    location: 'Dhaka',
  },
  {
    id: 5,
    title: 'Facial Treatment',
    vendor: 'Glow Skincare',
    rating: 4.8,
    reviews: 85,
    price: 3000,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    category: 'Skincare',
    location: 'Sylhet',
  },
  {
    id: 6,
    title: 'Wedding Photography',
    vendor: 'Capture Moments',
    rating: 4.9,
    reviews: 142,
    price: 25000,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    category: 'Events',
    location: 'Dhaka',
  },
];

const FeaturedServices = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setScrollPosition(carouselRef.current.scrollLeft - 300);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setScrollPosition(carouselRef.current.scrollLeft + 300);
    }
  };

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="section-title">Featured Services</h2>
            <p className="section-subtitle">Discover our most popular services</p>
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
          className="flex overflow-x-auto space-x-6 pb-6 scrollbar-none snap-x scroll-px-4"
        >
          {featuredServices.map((service) => (
            <div key={service.id} className="snap-start flex-shrink-0 w-[300px]">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
