
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CreditCard, Landmark, Calendar, LucideShield, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample cart data - in a real app, this would come from context/state management
const cartItems = [
  {
    id: 1,
    name: 'Full Face Makeup',
    vendor: 'Beauty Queens',
    price: 2500,
    quantity: 1
  },
  {
    id: 2,
    name: 'Relaxing Massage',
    vendor: 'Relaxation Hub',
    price: 1800,
    quantity: 2
  },
  {
    id: 3,
    name: 'Hair Styling',
    vendor: 'Hair Masters',
    price: 1200,
    quantity: 1
  }
];

const Checkout = () => {
  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <h1 className="font-serif text-3xl font-semibold mb-6">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h2 className="font-serif text-xl font-semibold mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="First name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Last name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+880 123 456 7890" className="mt-1" />
                  </div>
                </div>
              </div>
              
              {/* Service Details */}
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h2 className="font-serif text-xl font-semibold mb-4">Service Details</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="time">Preferred Time</Label>
                    <Input id="time" type="time" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="Service address" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="notes">Special Instructions</Label>
                    <Textarea id="notes" placeholder="Any special requests or instructions..." className="mt-1" />
                  </div>
                </div>
              </div>
              
              {/* Payment Method */}
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h2 className="font-serif text-xl font-semibold mb-4">Payment Method</h2>
                <RadioGroup defaultValue="card">
                  <div className="flex items-center space-x-2 border border-muted rounded-md p-3 mb-3">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center">
                      <CreditCard className="mr-2 h-5 w-5" />
                      <span>Credit/Debit Card</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-muted rounded-md p-3 mb-3">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank" className="flex items-center">
                      <Landmark className="mr-2 h-5 w-5" />
                      <span>Bank Transfer</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-muted rounded-md p-3">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5" />
                      <span>Cash on Delivery</span>
                    </Label>
                  </div>
                </RadioGroup>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" placeholder="Name on card" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" className="mt-1" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-soft p-6 sticky top-24">
                <h2 className="font-serif text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.name} <span className="text-muted-foreground">x{item.quantity}</span>
                      </span>
                      <span>৳{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                  
                  <div className="border-t border-muted pt-3 flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>৳{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (5%)</span>
                    <span>৳{tax.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-muted pt-3 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>৳{total.toLocaleString()}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-rose-600 hover:bg-rose-700">
                  Place Order
                </Button>
                
                <div className="mt-6 flex items-center justify-center text-xs text-muted-foreground">
                  <LucideShield className="h-4 w-4 mr-1" />
                  <span>Secure payment processing</span>
                </div>
                
                <Link to="/cart" className="mt-4 text-muted-foreground hover:text-foreground flex items-center justify-center text-sm">
                  <ShoppingBag size={16} className="mr-2" />
                  Back to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
