
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import CategoryFilter from '@/components/home/CategoryFilter';
import FeaturedServices from '@/components/home/FeaturedServices';
import PopularVendors from '@/components/home/PopularVendors';
import { Award, ArrowRight, Users, Calendar, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <CategoryFilter />
        <FeaturedServices />
        
        {/* How It Works Section */}
        <section className="py-16 bg-gradient-to-r from-rose-50 to-lavender-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                FemiServices connects women-centric businesses with customers looking for quality services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-soft flex flex-col items-center text-center group hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center mb-4 group-hover:bg-rose-100 transition-colors">
                  <Users className="h-7 w-7 text-rose-500" />
                </div>
                <h3 className="font-medium text-lg mb-2">Choose a Vendor</h3>
                <p className="text-muted-foreground text-sm">
                  Browse through our marketplace and select a vendor that matches your needs
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-soft flex flex-col items-center text-center group hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-lavender-50 flex items-center justify-center mb-4 group-hover:bg-lavender-100 transition-colors">
                  <Award className="h-7 w-7 text-lavender-600" />
                </div>
                <h3 className="font-medium text-lg mb-2">Pick a Service</h3>
                <p className="text-muted-foreground text-sm">
                  Select from the wide range of services offered by our top-rated vendors
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-soft flex flex-col items-center text-center group hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gold-50 flex items-center justify-center mb-4 group-hover:bg-gold-100 transition-colors">
                  <Calendar className="h-7 w-7 text-gold-600" />
                </div>
                <h3 className="font-medium text-lg mb-2">Book an Appointment</h3>
                <p className="text-muted-foreground text-sm">
                  Choose your preferred date and time for the service
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-soft flex flex-col items-center text-center group hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-cream-100 flex items-center justify-center mb-4 group-hover:bg-cream-200 transition-colors">
                  <CreditCard className="h-7 w-7 text-rose-600" />
                </div>
                <h3 className="font-medium text-lg mb-2">Make Payment</h3>
                <p className="text-muted-foreground text-sm">
                  Complete your booking by making a secure payment
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <PopularVendors />
        
        {/* Vendor CTA Section */}
        <section className="py-20 bg-gradient-to-r from-rose-600 to-lavender-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                Ready to Showcase Your Services?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Join our growing community of women entrepreneurs and reach thousands of potential customers
              </p>
              <Link to="/vendor-register">
                <Button className="bg-white text-rose-600 hover:bg-white/90 rounded-full px-8 py-6 font-medium shadow-md hover:shadow-lg transition-all duration-300">
                  Become a Vendor Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
