
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, SlidersHorizontal, Search, ChevronDown, Grid2X2, List } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import ServiceCard from '@/components/shared/ServiceCard';
import CategoryItem from '@/components/categories/CategoryItem';
import PaginationControls from '@/components/categories/PaginationControls';

// Sample data - in a real app, this would come from an API
const services = [
  {
    id: 1,
    title: 'Aloe Soothing Face Ritual',
    vendor: 'Glamour Studio',
    rating: 4.9,
    reviews: 128,
    price: 1150,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    category: 'Facials',
    location: 'Dhaka',
    duration: '45 min',
    discount: '10% Off'
  },
  {
    id: 2,
    title: 'Vitamin C Deep Clean Facial',
    vendor: 'Beauty Haven',
    rating: 4.8,
    reviews: 96,
    price: 1499,
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop',
    category: 'Facials',
    location: 'Dhaka',
    duration: '60 min',
    discount: null
  },
  {
    id: 3,
    title: 'Brightening Polish For Hands',
    vendor: 'Nail Artistry',
    rating: 4.7,
    reviews: 64,
    price: 1080,
    image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=2070&auto=format&fit=crop',
    category: 'Manicure',
    location: 'Chittagong',
    duration: '30 min',
    discount: '15% Off'
  },
  {
    id: 4,
    title: 'Full Body Relaxation Massage',
    vendor: 'Serenity Spa',
    rating: 4.9,
    reviews: 112,
    price: 2500,
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop',
    category: 'Massage',
    location: 'Dhaka',
    duration: '90 min',
    discount: null
  },
  {
    id: 5,
    title: '24K Gold Facial Treatment',
    vendor: 'Luxury Spa',
    rating: 4.8,
    reviews: 85,
    price: 3499,
    image: 'https://images.unsplash.com/photo-1487412947147-5cdc1cca4ac2?q=80&w=2070&auto=format&fit=crop',
    category: 'Facials',
    location: 'Sylhet',
    duration: '75 min',
    discount: null
  },
  {
    id: 6,
    title: 'Anti-Tan Facial',
    vendor: 'Glow Up Studio',
    rating: 4.9,
    reviews: 142,
    price: 1299,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2070&auto=format&fit=crop',
    category: 'Facials',
    location: 'Dhaka',
    duration: '60 min',
    discount: '5% Off'
  },
];

// Service categories with icons
const categories = [
  { id: 'all', name: 'All', count: 156 },
  { id: 'body-care', name: 'Body Care', count: 42 },
  { id: 'hair-care', name: 'Hair Care', count: 38 },
  { id: 'makeovers', name: 'Makeovers', count: 24 },
  { id: 'bridal', name: 'Bridal', count: 15 },
  { id: 'packages', name: 'Packages', count: 12 },
  { id: 'facials', name: 'Facials', count: 32 },
  { id: 'henna-art', name: 'Henna Art', count: 8 },
  { id: 'hair-removal', name: 'Hair Removal', count: 18 },
  { id: 'manicure', name: 'Manicure', count: 21 },
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewType, setViewType] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [sortOrder, setSortOrder] = useState('featured');
  const [filtersVisible, setFiltersVisible] = useState(false);

  // Filter services based on active category and search query
  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category.toLowerCase() === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.vendor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = service.price >= priceRange.min && service.price <= priceRange.max;
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  // Sort services based on selected order
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortOrder) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default: // featured
        return 0; // Keep original order
    }
  });

  // Pagination
  const servicesPerPage = 6;
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = sortedServices.slice(indexOfFirstService, indexOfLastService);
  const totalPages = Math.ceil(sortedServices.length / servicesPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-rose-50 to-lavender-50 py-12">
          <div className="container-custom">
            <div className="flex flex-col items-center text-center">
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Our Services
              </h1>
              <p className="text-muted-foreground max-w-2xl mb-6">
                Discover our range of premium beauty and wellness services designed to pamper and enhance your natural beauty
              </p>
              
              {/* Breadcrumb */}
              <div className="flex items-center text-sm text-muted-foreground">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Services</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom py-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Category Filters */}
            <div className="lg:w-1/4 space-y-8">
              {/* Mobile Filters Button */}
              <div className="block lg:hidden">
                <Button 
                  variant="outline" 
                  className="w-full flex justify-between items-center" 
                  onClick={() => setFiltersVisible(!filtersVisible)}
                >
                  <span className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${filtersVisible ? 'rotate-180' : ''}`} />
                </Button>
              </div>
              
              <div className={`space-y-8 ${filtersVisible ? 'block' : 'hidden lg:block'}`}>
                <div>
                  <h3 className="font-medium text-lg mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <CategoryItem 
                        key={category.id}
                        category={category}
                        isActive={activeCategory === category.id}
                        onClick={() => {
                          setActiveCategory(category.id);
                          setCurrentPage(1);
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium text-lg mb-4">Price Range</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Input 
                        type="number" 
                        placeholder="Min" 
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({...priceRange, min: Number(e.target.value)})}
                        className="w-24"
                      />
                      <span>to</span>
                      <Input 
                        type="number" 
                        placeholder="Max" 
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value)})}
                        className="w-24"
                      />
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setCurrentPage(1)}
                      className="w-full"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium text-lg mb-4">Popular Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                      Facial
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                      Massage
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                      Hair Color
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                      Manicure
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                      Bridal Package
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Filters & Search */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
                <div className="relative w-full md:w-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="Search services..." 
                    className="pl-10 w-full md:w-64"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                </div>
                
                <div className="flex flex-wrap gap-4 items-center w-full md:w-auto">
                  <div className="flex items-center space-x-2">
                    <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                    <select 
                      className="bg-transparent text-sm focus:outline-none"
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                  </div>
                  
                  <Tabs defaultValue={viewType} onValueChange={setViewType} className="h-9">
                    <TabsList className="grid w-16 grid-cols-2">
                      <TabsTrigger value="grid" className="p-0 data-[state=active]:bg-muted">
                        <Grid2X2 className="h-4 w-4" />
                      </TabsTrigger>
                      <TabsTrigger value="list" className="p-0 data-[state=active]:bg-muted">
                        <List className="h-4 w-4" />
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>
              
              {/* Results Count */}
              <div className="text-sm text-muted-foreground mb-6">
                Showing {currentServices.length} of {sortedServices.length} results
              </div>
              
              {/* Services Grid */}
              {currentServices.length > 0 ? (
                <div className={viewType === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                  : "space-y-4"
                }>
                  {currentServices.map((service) => (
                    <ServiceCard 
                      key={service.id} 
                      service={service} 
                      viewType={viewType}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">No services found</h3>
                  <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria</p>
                </div>
              )}
              
              {/* Pagination */}
              {sortedServices.length > servicesPerPage && (
                <div className="mt-10">
                  <PaginationControls 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={paginate}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Exclusive Packages Section */}
        <section className="py-16 bg-gradient-to-r from-rose-50 to-lavender-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-semibold mb-4">
                Discover Our Exclusive Packages
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Enjoy special discounts and combinations of our most popular services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Package 1 */}
              <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1596178060810-72c18dce6f7f?q=80&w=2069&auto=format&fit=crop" 
                    alt="Salon Package" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    15% OFF
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">Season Package</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <span>90 min</span>
                    <span className="mx-2">•</span>
                    <span>4 services</span>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <p>• Herbal Facial</p>
                    <p>• Hair Spa Therapy</p>
                    <p>• Manicure & Pedicure</p>
                    <p>• Head Oil Massage</p>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-lg font-semibold text-foreground">৳ 3,999</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">৳ 4,700</span>
                    </div>
                    <Badge variant="outline" className="text-rose-600 border-rose-200 bg-rose-50">
                      Save ৳ 701
                    </Badge>
                  </div>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">
                    Add to Cart
                  </Button>
                </div>
              </div>
              
              {/* Package 2 */}
              <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" 
                    alt="Bridal Package" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    20% OFF
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">Bridal Package</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <span>120 min</span>
                    <span className="mx-2">•</span>
                    <span>6 services</span>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <p>• Bridal Makeup</p>
                    <p>• Hair Styling</p>
                    <p>• Facial & Cleanup</p>
                    <p>• 3 More Services</p>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-lg font-semibold text-foreground">৳ 12,500</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">৳ 15,000</span>
                    </div>
                    <Badge variant="outline" className="text-rose-600 border-rose-200 bg-rose-50">
                      Save ৳ 2,500
                    </Badge>
                  </div>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">
                    Add to Cart
                  </Button>
                </div>
              </div>
              
              {/* Package 3 */}
              <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" 
                    alt="Glow Package" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    10% OFF
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">Glow Package</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <span>60 min</span>
                    <span className="mx-2">•</span>
                    <span>3 services</span>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <p>• Gold Facial</p>
                    <p>• Face Massage</p>
                    <p>• Skin Brightening Mask</p>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-lg font-semibold text-foreground">৳ 3,500</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">৳ 3,900</span>
                    </div>
                    <Badge variant="outline" className="text-rose-600 border-rose-200 bg-rose-50">
                      Save ৳ 400
                    </Badge>
                  </div>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">
                    Add to Cart
                  </Button>
                </div>
              </div>
              
              {/* Package 4 */}
              <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
                    alt="Relaxation Package" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    25% OFF
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">Relaxation Package</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <span>120 min</span>
                    <span className="mx-2">•</span>
                    <span>4 services</span>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <p>• Aromatherapy Massage</p>
                    <p>• Hot Stone Therapy</p>
                    <p>• Foot Reflexology</p>
                    <p>• Head Massage</p>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-lg font-semibold text-foreground">৳ 5,250</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">৳ 7,000</span>
                    </div>
                    <Badge variant="outline" className="text-rose-600 border-rose-200 bg-rose-50">
                      Save ৳ 1,750
                    </Badge>
                  </div>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
