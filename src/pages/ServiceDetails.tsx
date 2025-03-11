
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Clock, MapPin, Calendar, ShoppingCart, Heart, Share2, Award } from 'lucide-react';
import ServiceCard from '@/components/shared/ServiceCard';

// Sample service data
const serviceData = {
  id: 1,
  title: 'Professional Makeup for Wedding',
  vendor: {
    id: 1,
    name: 'Beauty Queens',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop',
    rating: 4.8,
    reviews: 245,
  },
  rating: 4.8,
  reviews: 245,
  price: 5000,
  images: [
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=2012&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=2188&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1614270263016-c7309bc69839?q=80&w=2187&auto=format&fit=crop',
  ],
  category: 'Makeup',
  location: 'Dhaka',
  duration: '2-3 hours',
  description: 'Our professional makeup service for weddings includes a thorough consultation, skin preparation, foundation application, eye makeup, lipstick, and final touch-ups. We use premium products that ensure your makeup stays flawless throughout your special day. Our experienced makeup artists specialize in creating looks that photograph beautifully and withstand tears, smiles, and celebrations.',
  highlights: [
    'Professional consultation to understand your preferences',
    'Premium makeup products for lasting coverage',
    'False lashes and touch-up kit included',
    'Photography-friendly techniques',
    'Optional trial session available',
  ],
  includes: [
    'Full face makeup with high-quality products',
    'False eyelashes',
    'Touch-up kit',
    'Makeup removal instructions',
  ],
  reviewsData: [
    {
      id: 1,
      user: 'Sarah T.',
      rating: 5,
      date: '2023-12-15',
      comment: 'Absolutely amazing service! The makeup artist was professional, listened to what I wanted, and made me look stunning for my wedding day. My makeup lasted the entire day and night!',
    },
    {
      id: 2,
      user: 'Nusrat F.',
      rating: 4,
      date: '2023-11-20',
      comment: 'Great service and beautiful results. I loved how my makeup looked in the photos. Only giving 4 stars because the artist was a bit late, but otherwise perfect!',
    },
    {
      id: 3,
      user: 'Rehana K.',
      rating: 5,
      date: '2023-10-05',
      comment: 'Wonderful experience from start to finish. The artist was attentive and created exactly the look I wanted. Highly recommend for any bride!',
    },
  ],
};

// Sample related services
const relatedServices = [
  {
    id: 2,
    title: 'Bridal Hair Styling',
    vendor: 'Beauty Queens',
    rating: 4.7,
    reviews: 189,
    price: 3000,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop',
    category: 'Hair',
    location: 'Dhaka',
    duration: '1.5 hours',
  },
  {
    id: 3,
    title: 'Complete Bridal Package',
    vendor: 'Beauty Queens',
    rating: 4.9,
    reviews: 217,
    price: 8000,
    image: 'https://images.unsplash.com/photo-1560749003-f4b1e17e2dfd?q=80&w=2074&auto=format&fit=crop',
    category: 'Bridal',
    location: 'Dhaka',
    duration: '4-5 hours',
    discount: '10% OFF',
  },
  {
    id: 4,
    title: 'Mehendi Design',
    vendor: 'Henna Artists',
    rating: 4.6,
    reviews: 156,
    price: 2500,
    image: 'https://images.unsplash.com/photo-1609245460211-3cc742bf95aa?q=80&w=1887&auto=format&fit=crop',
    category: 'Bridal',
    location: 'Dhaka',
    duration: '2 hours',
  },
];

const ServiceDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          {/* Service details */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Images */}
            <div className="lg:w-1/2">
              <div className="rounded-xl overflow-hidden mb-4">
                <img 
                  src={serviceData.images[selectedImage]} 
                  alt={serviceData.title} 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {serviceData.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`rounded-lg overflow-hidden cursor-pointer transition-all ${
                      selectedImage === index 
                        ? 'border-2 border-rose-500' 
                        : 'border border-muted hover:opacity-80'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${serviceData.title} ${index + 1}`} 
                      className="w-full h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Details */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-rose-100 text-rose-600 text-sm font-medium px-3 py-1 rounded-full">
                  {serviceData.category}
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{serviceData.duration}</span>
                </div>
              </div>
              
              <h1 className="text-2xl lg:text-3xl font-serif font-semibold mb-3">
                {serviceData.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-gold-500 text-gold-500 mr-1" />
                  <span className="font-medium">{serviceData.rating}</span>
                  <span className="text-sm text-muted-foreground ml-1">({serviceData.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{serviceData.location}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="font-serif text-2xl md:text-3xl font-semibold">
                  ৳ {serviceData.price.toLocaleString()}
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border rounded-full">
                  <button 
                    className="w-10 h-10 flex items-center justify-center text-lg"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <div className="w-10 h-10 flex items-center justify-center font-medium">
                    {quantity}
                  </div>
                  <button 
                    className="w-10 h-10 flex items-center justify-center text-lg"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                
                <Button className="gap-2 bg-rose-600 hover:bg-rose-700 flex-1">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
                
                <Button variant="outline" size="icon" className="rounded-full">
                  <Heart className="h-4 w-4" />
                </Button>
                
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-muted/50 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3 mb-3">
                  <img 
                    src={serviceData.vendor.image} 
                    alt={serviceData.vendor.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">Service by {serviceData.vendor.name}</h3>
                    <div className="flex items-center text-sm">
                      <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500 mr-1" />
                      <span>{serviceData.vendor.rating}</span>
                      <span className="text-muted-foreground ml-1">({serviceData.vendor.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">View Vendor Profile</Button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-rose-500" />
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-rose-500" />
                  <span>Book now for your preferred date</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 mb-6">
                <TabsTrigger 
                  value="description" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rose-500 data-[state=active]:bg-transparent font-medium pb-2 transition-none"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger 
                  value="highlights" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rose-500 data-[state=active]:bg-transparent font-medium pb-2 transition-none"
                >
                  Highlights
                </TabsTrigger>
                <TabsTrigger 
                  value="includes" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rose-500 data-[state=active]:bg-transparent font-medium pb-2 transition-none"
                >
                  What's Included
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rose-500 data-[state=active]:bg-transparent font-medium pb-2 transition-none"
                >
                  Reviews ({serviceData.reviewsData.length})
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-0">
                <p className="text-muted-foreground leading-relaxed">
                  {serviceData.description}
                </p>
              </TabsContent>
              
              <TabsContent value="highlights" className="mt-0">
                <ul className="space-y-3">
                  {serviceData.highlights.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-rose-500 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="includes" className="mt-0">
                <ul className="space-y-3">
                  {serviceData.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-5 w-5 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center font-medium text-xs mt-0.5">
                        ✓
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-0">
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-5xl font-semibold">{serviceData.rating}</div>
                      <div className="flex items-center justify-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < Math.floor(serviceData.rating) 
                                ? 'fill-gold-500 text-gold-500' 
                                : 'text-muted'
                            }`} 
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Based on {serviceData.reviews} reviews
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center gap-2 mb-1">
                          <div className="text-sm w-6">{rating}</div>
                          <div className="relative h-2 flex-1 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="absolute top-0 left-0 h-full bg-gold-500 rounded-full"
                              style={{ 
                                width: `${rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 8 : 2}%` 
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {serviceData.reviewsData.map((review) => (
                      <div key={review.id} className="bg-muted/50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{review.user}</h4>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${
                                i < review.rating 
                                  ? 'fill-gold-500 text-gold-500' 
                                  : 'text-muted'
                              }`} 
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-white shadow-soft rounded-xl p-6">
                    <h3 className="font-medium text-lg mb-4">Write a Review</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block mb-2 text-sm">Your Rating</label>
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <Star 
                              key={rating} 
                              className="h-6 w-6 text-muted cursor-pointer hover:text-gold-500" 
                            />
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm">Your Review</label>
                        <textarea 
                          className="w-full border rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-rose-500"
                          placeholder="Share your experience with this service..."
                        ></textarea>
                      </div>
                      <Button className="bg-rose-600 hover:bg-rose-700">
                        Submit Review
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Related Services */}
          <div className="mt-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetails;
