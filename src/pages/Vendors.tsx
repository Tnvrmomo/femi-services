
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import VendorCard from '@/components/shared/VendorCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Star, Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import PaginationControls from '@/components/categories/PaginationControls';

// Sample data for vendors
const vendors = [
  {
    id: 1,
    name: 'Beauty Queens',
    category: 'Makeup & Skincare',
    rating: 4.8,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop',
    location: 'Dhaka',
    services: 12
  },
  {
    id: 2,
    name: 'Relaxation Hub',
    category: 'Spa & Massage',
    rating: 4.6,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop',
    location: 'Dhaka',
    services: 8
  },
  {
    id: 3,
    name: 'Hair Masters',
    category: 'Hair Styling',
    rating: 4.7,
    reviews: 208,
    image: 'https://images.unsplash.com/photo-1633681926022-84c23e8bd2a2?q=80&w=1925&auto=format&fit=crop',
    location: 'Chittagong',
    services: 15
  },
  {
    id: 4,
    name: 'Nail Art Studio',
    category: 'Nail Art & Care',
    rating: 4.5,
    reviews: 176,
    image: 'https://images.unsplash.com/photo-1630149462176-e64e69eb61e9?q=80&w=2070&auto=format&fit=crop',
    location: 'Dhaka',
    services: 6
  },
  {
    id: 5,
    name: 'Glow & Shine',
    category: 'Skincare & Facials',
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1607779062737-e8dd7aa6dcb0?q=80&w=2070&auto=format&fit=crop',
    location: 'Sylhet',
    services: 10
  },
  {
    id: 6,
    name: 'Sweet Delights',
    category: 'Baking & Catering',
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop',
    location: 'Dhaka',
    services: 9
  },
  {
    id: 7,
    name: 'Event Masters',
    category: 'Event Planning',
    rating: 4.8,
    reviews: 201,
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop',
    location: 'Dhaka',
    services: 14
  },
  {
    id: 8,
    name: 'Lens Magic',
    category: 'Photography',
    rating: 4.6,
    reviews: 187,
    image: 'https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=2052&auto=format&fit=crop',
    location: 'Dhaka',
    services: 7
  }
];

const locations = [
  'All Locations',
  'Dhaka',
  'Chittagong',
  'Sylhet',
  'Rajshahi',
  'Khulna'
];

const categories = [
  'All Categories',
  'Makeup & Skincare',
  'Spa & Massage',
  'Hair Styling',
  'Nail Art & Care',
  'Baking & Catering',
  'Event Planning',
  'Photography'
];

const Vendors = () => {
  const [location, setLocation] = useState('All Locations');
  const [category, setCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          {/* Hero section */}
          <div className="bg-gradient-to-r from-rose-100 to-lavender-100 rounded-2xl p-8 md:p-12 mb-10">
            <div className="max-w-3xl">
              <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                Find the Perfect Beauty Professionals
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                Connect with talented vendors who specialize in beauty, wellness, event planning, and more
              </p>
              
              <div className="bg-white p-2 rounded-xl shadow-md flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search vendors..." 
                    className="pl-9 w-full"
                  />
                </div>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="w-full md:w-48">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Location" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button className="bg-rose-600 hover:bg-rose-700 w-full md:w-auto">
                  Search
                </Button>
              </div>
            </div>
          </div>
          
          {/* Filter bar */}
          <div className="bg-white shadow-soft rounded-xl p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Sort by" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="services">Most Services</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="text-muted-foreground text-sm w-full text-center sm:text-right sm:w-auto">
              {vendors.length} vendors found
            </div>
          </div>
          
          {/* Vendors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-10 flex justify-center">
            <PaginationControls 
              currentPage={currentPage}
              totalPages={3}
              onPageChange={setCurrentPage}
            />
          </div>
          
          {/* Become a vendor CTA */}
          <div className="mt-16 bg-gradient-to-r from-rose-600 to-lavender-600 rounded-2xl p-8 text-white text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
              Ready to Showcase Your Services?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Join our growing community of beauty and service professionals and connect with thousands of potential clients
            </p>
            <Button className="bg-white text-rose-600 hover:bg-white/90">
              Become a Vendor Today
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Vendors;
