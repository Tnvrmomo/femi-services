
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceCard from '@/components/shared/ServiceCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Grid, List, Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import PaginationControls from '@/components/categories/PaginationControls';

// Sample data for services
const services = [
  {
    id: 1,
    title: 'Professional Makeup for Wedding',
    vendor: 'Beauty Queens',
    rating: 4.8,
    reviews: 245,
    price: 5000,
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop',
    category: 'Makeup',
    location: 'Dhaka',
    duration: '2-3 hours'
  },
  {
    id: 2,
    title: 'Full Body Spa Treatment',
    vendor: 'Relaxation Hub',
    rating: 4.6,
    reviews: 189,
    price: 3500,
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop',
    category: 'Spa',
    location: 'Dhaka',
    duration: '1.5 hours',
    discount: '15% OFF'
  },
  {
    id: 3,
    title: 'Hair Coloring and Styling',
    vendor: 'Hair Masters',
    rating: 4.7,
    reviews: 208,
    price: 2800,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop',
    category: 'Hair',
    location: 'Dhaka',
    duration: '2 hours'
  },
  {
    id: 4,
    title: 'Manicure and Pedicure',
    vendor: 'Nail Art Studio',
    rating: 4.5,
    reviews: 176,
    price: 1500,
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop',
    category: 'Nails',
    location: 'Dhaka',
    duration: '1 hour'
  },
  {
    id: 5,
    title: 'Facial Treatment',
    vendor: 'Glow & Shine',
    rating: 4.9,
    reviews: 312,
    price: 2000,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    category: 'Skincare',
    location: 'Dhaka',
    duration: '45 min',
    discount: '10% OFF'
  },
  {
    id: 6,
    title: 'Birthday Cake Decoration',
    vendor: 'Sweet Delights',
    rating: 4.7,
    reviews: 156,
    price: 3000,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=2070&auto=format&fit=crop',
    category: 'Baking',
    location: 'Dhaka',
    duration: 'Custom'
  }
];

const categories = [
  { name: 'Makeup', count: 45 },
  { name: 'Skincare', count: 32 },
  { name: 'Hair', count: 28 },
  { name: 'Nails', count: 20 },
  { name: 'Spa', count: 15 },
  { name: 'Baking', count: 22 },
  { name: 'Event Planning', count: 18 },
  { name: 'Photography', count: 24 }
];

const Services = () => {
  const [viewType, setViewType] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar - filters */}
            <aside className="w-full md:w-64 lg:w-72 space-y-6">
              {/* Search */}
              <div className="bg-white shadow-soft rounded-xl p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search services..." 
                    className="pl-9"
                  />
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white shadow-soft rounded-xl p-4">
                <h3 className="font-medium text-lg mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                      className={`w-full flex items-center justify-between py-2 px-3 rounded-lg text-left transition-colors ${
                        selectedCategory === category.name 
                          ? 'bg-rose-50 text-rose-600 font-medium' 
                          : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className={`text-xs rounded-full px-2 py-1 ${
                        selectedCategory === category.name 
                          ? 'bg-white text-rose-600' 
                          : 'bg-muted-foreground/10 text-muted-foreground'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="bg-white shadow-soft rounded-xl p-4">
                <h3 className="font-medium text-lg mb-3">Price Range</h3>
                <Slider 
                  defaultValue={[0, 10000]} 
                  max={10000} 
                  step={100} 
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="my-6"
                />
                <div className="flex items-center justify-between">
                  <div className="bg-muted-foreground/10 px-3 py-1.5 rounded-md text-sm">
                    ৳ {priceRange[0]}
                  </div>
                  <div className="bg-muted-foreground/10 px-3 py-1.5 rounded-md text-sm">
                    ৳ {priceRange[1]}
                  </div>
                </div>
              </div>
              
              {/* Additional Filters */}
              <div className="bg-white shadow-soft rounded-xl p-4">
                <h3 className="font-medium text-lg mb-3">Filters</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="discounted" />
                    <Label htmlFor="discounted">Discounted Items</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="highRated" />
                    <Label htmlFor="highRated">4+ Rated</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newArrival" />
                    <Label htmlFor="newArrival">New Arrivals</Label>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Reset Filters
              </Button>
            </aside>
            
            {/* Main content */}
            <div className="flex-1">
              {/* Top bar - sort & view options */}
              <div className="bg-white shadow-soft rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xl font-medium">
                  {selectedCategory ? selectedCategory : 'All Services'}
                </div>
                <div className="flex items-center gap-4">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[160px]">
                      <div className="flex items-center gap-1">
                        <ArrowUpDown className="h-4 w-4" />
                        <SelectValue placeholder="Sort by" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rating</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="flex bg-muted rounded-md">
                    <Button 
                      variant={viewType === 'grid' ? 'default' : 'ghost'} 
                      size="icon"
                      onClick={() => setViewType('grid')}
                      className="rounded-l-md rounded-r-none"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant={viewType === 'list' ? 'default' : 'ghost'} 
                      size="icon"
                      onClick={() => setViewType('list')}
                      className="rounded-r-md rounded-l-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Services Grid/List */}
              {viewType === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {services.map((service) => (
                    <ServiceCard key={service.id} service={service} viewType="list" />
                  ))}
                </div>
              )}
              
              {/* Pagination */}
              <div className="mt-10 flex justify-center">
                <PaginationControls 
                  currentPage={currentPage}
                  totalPages={5}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
