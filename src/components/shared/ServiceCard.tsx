
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    vendor: string;
    rating: number;
    reviews: number;
    price: number;
    image: string;
    category: string;
    location: string;
    duration?: string;
    discount?: string | null;
  };
  viewType?: string;
  className?: string;
}

const ServiceCard = ({ service, viewType = 'grid', className }: ServiceCardProps) => {
  const { id, title, vendor, rating, reviews, price, image, location, category, duration, discount } = service;
  
  if (viewType === 'list') {
    return (
      <div className={cn(
        "flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-soft transition-shadow hover:shadow-md",
        className
      )}>
        <div className="relative md:w-1/3">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 md:h-full object-cover"
          />
          {discount && (
            <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              {discount}
            </div>
          )}
        </div>
        <div className="p-5 flex flex-col justify-between md:w-2/3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-rose-600 font-medium">{category}</span>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-gold-500 text-gold-500 mr-1" />
                <span className="text-sm font-medium">{rating}</span>
                <span className="text-xs text-muted-foreground ml-1">({reviews})</span>
              </div>
            </div>
            <h3 className="font-medium text-lg mb-1">{title}</h3>
            <p className="text-muted-foreground text-sm mb-4">By {vendor}</p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              {duration && (
                <div className="flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{duration}</span>
                </div>
              )}
              <div className="flex items-center">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span>{location}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xl font-semibold">৳ {price.toLocaleString()}</div>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                View Details
              </Button>
              <Button size="sm" className="bg-rose-600 hover:bg-rose-700">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <Link 
      to={`/service/${id}`}
      className={cn(
        "block rounded-xl overflow-hidden bg-white shadow-soft transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {discount && (
          <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            {discount}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm text-rose-600 font-medium">{category}</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-gold-500 text-gold-500 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-muted-foreground ml-1">({reviews})</span>
          </div>
        </div>
        <h3 className="font-medium text-lg mb-1 line-clamp-1">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3">By {vendor}</p>
        <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
          {duration && (
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{duration}</span>
            </div>
          )}
          <div className="flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{location}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">৳ {price.toLocaleString()}</div>
          <Button size="sm" className="bg-rose-600 hover:bg-rose-700">
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
