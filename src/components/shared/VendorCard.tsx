
import { Link } from 'react-router-dom';
import { Star, MapPin, Star as ShopIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VendorCardProps {
  vendor: {
    id: number;
    name: string;
    category: string;
    rating: number;
    reviews: number;
    image: string;
    location: string;
    services: number;
  };
  className?: string;
}

const VendorCard = ({ vendor, className }: VendorCardProps) => {
  return (
    <Link 
      to={`/vendor/${vendor.id}`}
      className={cn(
        "block rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:shadow-md group",
        className
      )}
    >
      <div className="relative">
        <div 
          className="h-44 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${vendor.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
        </div>
        
        <div className="absolute -bottom-10 left-0 right-0 flex justify-center">
          <div className="h-20 w-20 rounded-full border-4 border-white shadow-sm bg-cover bg-center"
            style={{ backgroundImage: `url(${vendor.image})` }}
          ></div>
        </div>
      </div>
      
      <div className="p-4 pt-12 space-y-3 text-center">
        <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
          {vendor.name}
        </h3>
        
        <div className="text-sm text-muted-foreground">
          {vendor.category}
        </div>
        
        <div className="flex items-center justify-center gap-1">
          <Star className="h-4 w-4 fill-gold-500 text-gold-500" />
          <span className="font-medium text-sm">{vendor.rating}</span>
          <span className="text-muted-foreground text-xs">({vendor.reviews} reviews)</span>
        </div>
        
        <div className="flex items-center justify-center text-xs text-muted-foreground space-x-3 pt-1">
          <div className="flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{vendor.location}</span>
          </div>
          <div className="flex items-center">
            <ShopIcon className="h-3 w-3 mr-1" />
            <span>{vendor.services} services</span>
          </div>
        </div>
        
        <div className="pt-2">
          <div className="bg-lavender-50 text-lavender-600 text-xs font-medium px-4 py-2 rounded-full inline-block">
            View Profile
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VendorCard;
