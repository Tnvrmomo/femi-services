
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const VendorRegister = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  
  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted",
      description: "We'll review your application and get back to you soon!",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 bg-gradient-to-b from-white to-rose-50/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                Become a Vendor
              </h1>
              <p className="text-muted-foreground">
                Join our platform and start showcasing your services to thousands of potential customers
              </p>
            </div>
            
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-10 max-w-md mx-auto">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-rose-500 text-white' : 'bg-muted text-muted-foreground'
                }`}>
                  1
                </div>
                <span className="text-xs mt-2">Business Info</span>
              </div>
              
              <div className={`h-1 flex-1 mx-2 ${
                step >= 2 ? 'bg-rose-500' : 'bg-muted'
              }`}></div>
              
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-rose-500 text-white' : 'bg-muted text-muted-foreground'
                }`}>
                  2
                </div>
                <span className="text-xs mt-2">Services</span>
              </div>
              
              <div className={`h-1 flex-1 mx-2 ${
                step >= 3 ? 'bg-rose-500' : 'bg-muted'
              }`}></div>
              
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 3 ? 'bg-rose-500 text-white' : 'bg-muted text-muted-foreground'
                }`}>
                  3
                </div>
                <span className="text-xs mt-2">Verification</span>
              </div>
            </div>
            
            <div className="bg-white shadow-soft rounded-2xl p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Business Information */}
                {step === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-xl font-medium mb-4">Business Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name</Label>
                        <Input id="businessName" placeholder="Your business name" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="category">Business Category</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beauty">Beauty & Makeup</SelectItem>
                            <SelectItem value="skincare">Skincare</SelectItem>
                            <SelectItem value="spa">Spa & Massage</SelectItem>
                            <SelectItem value="cakes">Cakes & Desserts</SelectItem>
                            <SelectItem value="events">Event Planning</SelectItem>
                            <SelectItem value="decor">Home Décor</SelectItem>
                            <SelectItem value="fashion">Fashion</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Business Description</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Tell us about your business" 
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Your email" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Your phone number" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Business Location</Label>
                      <Input id="location" placeholder="Your business address" required />
                    </div>
                  </div>
                )}
                
                {/* Step 2: Services */}
                {step === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-xl font-medium mb-4">Services Information</h2>
                    
                    <div className="space-y-2">
                      <Label>Service Areas</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="dhaka" />
                          <label
                            htmlFor="dhaka"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Dhaka
                          </label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox id="chittagong" />
                          <label
                            htmlFor="chittagong"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Chittagong
                          </label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox id="sylhet" />
                          <label
                            htmlFor="sylhet"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Sylhet
                          </label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox id="rajshahi" />
                          <label
                            htmlFor="rajshahi"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Rajshahi
                          </label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox id="khulna" />
                          <label
                            htmlFor="khulna"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Khulna
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Service Options</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="home-service" />
                          <label
                            htmlFor="home-service"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Home Service Available
                          </label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox id="studio-service" />
                          <label
                            htmlFor="studio-service"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            In-Studio Service
                          </label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox id="delivery" />
                          <label
                            htmlFor="delivery"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Delivery Available
                          </label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox id="pickup" />
                          <label
                            htmlFor="pickup"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Pickup Available
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="workingHours">Working Hours</Label>
                      <Input id="workingHours" placeholder="e.g., Mon-Fri: 9 AM - 6 PM, Sat: 10 AM - 4 PM" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="priceRange">Price Range (BDT)</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <Input id="minPrice" placeholder="Minimum" type="number" />
                        <Input id="maxPrice" placeholder="Maximum" type="number" />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Verification */}
                {step === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-xl font-medium mb-4">Verification</h2>
                    
                    <div className="space-y-2">
                      <Label htmlFor="businessLicense">Business License/Registration (Optional)</Label>
                      <Input id="businessLicense" type="file" className="cursor-pointer" />
                      <p className="text-xs text-muted-foreground mt-1">
                        Upload a copy of your business license or registration certificate
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="idProof">ID Proof</Label>
                      <Input id="idProof" type="file" className="cursor-pointer" required />
                      <p className="text-xs text-muted-foreground mt-1">
                        Upload a copy of your NID, passport, or driver's license
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="portfolio">Portfolio Images (Optional)</Label>
                      <Input id="portfolio" type="file" multiple className="cursor-pointer" />
                      <p className="text-xs text-muted-foreground mt-1">
                        Upload up to 5 images showcasing your work
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-2 pt-2">
                      <Checkbox id="terms" required />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the <a href="/terms" className="text-rose-600 hover:underline">Terms and Conditions</a> and <a href="/privacy" className="text-rose-600 hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                )}
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {step > 1 ? (
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  
                  {step < 3 ? (
                    <Button 
                      type="button" 
                      onClick={handleContinue}
                      className="bg-gradient-to-r from-rose-500 to-lavender-500 hover:from-rose-600 hover:to-lavender-600"
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-rose-500 to-lavender-500 hover:from-rose-600 hover:to-lavender-600"
                    >
                      Submit Registration
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VendorRegister;
