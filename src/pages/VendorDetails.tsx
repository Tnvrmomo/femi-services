
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Clock, Shield, CheckCircle } from 'lucide-react';
import ServiceCard from '@/components/shared/ServiceCard';

// Sample vendor data
const vendorData = {
  id: 1,
  name: 'Beauty Queens',
  tagline: 'Professional Makeup & Beauty Services',
  description: 'Beauty Queens is a premium beauty service provider specializing in bridal makeup, hair styling, and skincare treatments. With over 5 years of experience, our team of skilled professionals are dedicated to making you look and feel your best for any occasion.',
  category: 'Makeup & Skincare',
  rating: 4.8,
  reviews: 245,
  coverImage: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop',
  profileImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop',
  location: 'Gulshan, Dhaka',
  contact: {
    phone: '+880 123 456 7890',
    email: 'info@beautyqueens.com',
    instagram: '@beautyqueens',
    facebook: 'beautyqueensbd',
    twitter: '@beautyqueensbd'
  },
  workingHours: 'Mon-Sat: 10:00 AM - 8:00 PM',
  established: 2018,
  team: 8,
  gallery: [
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=2012&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=2188&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1614270263016-c7309bc69839?q=80&w=2187&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560749003-f4b1e17e2dfd?q=80&w=2074&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=2080&auto=format&fit=crop',
  ],
  highlighted: [
    'Professional licensed makeup artists',
    'Premium beauty products and tools',
    'Customized services for special occasions',
    'Hygiene and safety standards',
    'On-location services available'
  ],
  reviewsData: [
    {
      id: 1,
      user: 'Sarah T.',
      rating: 5,
      date: '2023-12-15',
      service: 'Bridal Makeup',
      comment: 'Absolutely amazing service! The makeup artist was professional, listened to what I wanted, and made me look stunning for my wedding day. My makeup lasted the entire day and night!',
    },
    {
      id: 2,
      user: 'Nusrat F.',
      rating: 4,
      date: '2023-11-20',
      service: 'Hair Styling',
      comment: 'Great service and beautiful results. I loved how my hair looked in the photos. Only giving 4 stars because the artist was a bit late, but otherwise perfect!',
    },
    {
      id: 3,
      user: 'Rehana K.',
      rating: 5,
      date: '2023-10-05',
      service: 'Complete Bridal Package',
      comment: 'Wonderful experience from start to finish. The artist was attentive and created exactly the look I wanted. Highly recommend for any bride!',
    },
  ],
};

// Sample services by this vendor
const vendorServices = [
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
    title: 'Skin Care Treatment',
    vendor: 'Beauty Queens',
    rating: 4.6,
    reviews: 142,
    price: 2500,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    category: 'Skincare',
    location: 'Dhaka',
    duration: '1 hour',
  },
];

const VendorDetails = () => {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 pb-16">
        {/* Cover Image */}
        <div 
          className="h-64 md:h-80 lg:h-96 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${vendorData.coverImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
        </div>
        
        <div className="container-custom">
          {/* Vendor Profile */}
          <div className="relative -mt-20 mb-10">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex flex-col md:flex-row">
                <div className="md:pr-8 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div 
                      className="h-24 w-24 rounded-full border-4 border-white shadow-sm bg-cover bg-center"
                      style={{ backgroundImage: `url(${vendorData.profileImage})` }}
                    ></div>
                    <div>
                      <h1 className="font-serif text-2xl md:text-3xl font-semibold">
                        {vendorData.name}
                      </h1>
                      <p className="text-muted-foreground">{vendorData.tagline}</p>
                      <div className="flex items-center mt-2">
                        <Star className="h-5 w-5 fill-gold-500 text-gold-500 mr-1" />
                        <span className="font-medium">{vendorData.rating}</span>
                        <span className="text-sm text-muted-foreground ml-1">
                          ({vendorData.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-rose-500" />
                      <span>{vendorData.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-rose-500" />
                      <span>{vendorData.workingHours}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-rose-500" />
                      <span>Established {vendorData.established}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-rose-500" />
                      <span>Team of {vendorData.team} professionals</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {vendorData.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-rose-600 hover:bg-rose-700">
                      Book an Appointment
                    </Button>
                    <Button variant="outline">
                      Message
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Instagram className="h-5 w-5 text-rose-500" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Facebook className="h-5 w-5 text-blue-600" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Twitter className="h-5 w-5 text-blue-400" />
                    </Button>
                  </div>
                </div>
                
                <div className="md:w-72 lg:w-80 mt-6 md:mt-0 bg-muted/50 rounded-xl p-4">
                  <h3 className="font-medium text-lg mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-rose-100 rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-rose-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Phone</div>
                        <div>{vendorData.contact.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-rose-100 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-rose-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Email</div>
                        <div>{vendorData.contact.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-rose-100 rounded-full flex items-center justify-center">
                        <Instagram className="h-5 w-5 text-rose-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Instagram</div>
                        <div>{vendorData.contact.instagram}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-rose-100 rounded-full flex items-center justify-center">
                        <Facebook className="h-5 w-5 text-rose-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Facebook</div>
                        <div>{vendorData.contact.facebook}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div>
            <Tabs defaultValue="services">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 mb-6">
                <TabsTrigger 
                  value="services" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rose-500 data-[state=active]:bg-transparent font-medium pb-2 transition-none"
                >
                  Services
                </TabsTrigger>
                <TabsTrigger 
                  value="portfolio" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rose-500 data-[state=active]:bg-transparent font-medium pb-2 transition-none"
                >
                  Portfolio
                </TabsTrigger>
                <TabsTrigger 
                  value="about" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rose-500 data-[state=active]:bg-transparent font-medium pb-2 transition-none"
                >
                  About
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rose-500 data-[state=active]:bg-transparent font-medium pb-2 transition-none"
                >
                  Reviews
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="services" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {vendorServices.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="portfolio" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {vendorData.gallery.map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden h-48 md:h-64">
                      <img 
                        src={image} 
                        alt={`${vendorData.name} portfolio ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="about" className="mt-0">
                <div className="bg-white shadow-soft rounded-xl p-6">
                  <h3 className="font-medium text-xl mb-4">About {vendorData.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {vendorData.description}
                  </p>
                  
                  <h4 className="font-medium text-lg mb-4">What Makes Us Special</h4>
                  <ul className="space-y-3 mb-6">
                    {vendorData.highlighted.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-rose-500 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-medium text-lg mb-4">Business Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="font-medium">Established:</div>
                      <div>{vendorData.established}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="font-medium">Team Size:</div>
                      <div>{vendorData.team} professionals</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="font-medium">Services:</div>
                      <div>{vendorServices.length} services offered</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="font-medium">Working Hours:</div>
                      <div>{vendorData.workingHours}</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-0">
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-5xl font-semibold">{vendorData.rating}</div>
                      <div className="flex items-center justify-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < Math.floor(vendorData.rating) 
                                ? 'fill-gold-500 text-gold-500' 
                                : 'text-muted'
                            }`} 
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Based on {vendorData.reviews} reviews
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
                    {vendorData.reviewsData.map((review) => (
                      <div key={review.id} className="bg-white shadow-soft rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{review.user}</h4>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-1">
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
                        <div className="text-rose-600 text-sm mb-2">{review.service}</div>
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
                          placeholder="Share your experience with this vendor..."
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VendorDetails;
