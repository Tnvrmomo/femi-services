
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';
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
  };
  className?: string;
}

const ServiceCard = ({ service, className }: ServiceCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link 
      to={`/service/${service.id}`}
      className={cn(
        "block rounded-2xl overflow-hidden glass-card transition-all duration-300 group",
        isHovered ? "shadow-lg scale-[1.02]" : "shadow-soft hover:shadow-md",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div 
          className="h-48 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <button 
          onClick={toggleFavorite}
          className={`absolute top-3 right-3 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isFavorite 
              ? 'bg-rose-500 text-white' 
              : 'bg-white/80 backdrop-blur-sm text-muted-foreground hover:text-rose-500'
          }`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-white' : ''}`} />
        </button>
        
        <div className="absolute bottom-2 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
          {service.category}
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-lg line-clamp-1 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
        </div>
        
        <p className="text-sm text-muted-foreground">{service.vendor} • {service.location}</p>
        
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-gold-500 text-gold-500" />
          <span className="font-medium text-sm">{service.rating}</span>
          <span className="text-muted-foreground text-xs">({service.reviews} reviews)</span>
        </div>
        
        <div className="flex justify-between items-center pt-2">
          <p className="font-semibold text-lg">
            ৳{service.price.toLocaleString()}
          </p>
          <div className="bg-rose-50 text-rose-600 text-xs font-medium px-3 py-1 rounded-full">
            Book Now
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
