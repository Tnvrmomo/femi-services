
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Trash2, MinusCircle, PlusCircle, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample cart data - in a real app, this would come from context/state management
const cartItems = [
  {
    id: 1,
    name: 'Full Face Makeup',
    vendor: 'Beauty Queens',
    price: 2500,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    name: 'Relaxing Massage',
    vendor: 'Relaxation Hub',
    price: 1800,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: 'Hair Styling',
    vendor: 'Hair Masters',
    price: 1200,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

const Cart = () => {
  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <h1 className="font-serif text-3xl font-semibold mb-6">Your Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-soft p-6">
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-6 border-b border-muted last:border-0 last:pb-0">
                        <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">by {item.vendor}</p>
                          <p className="font-medium mt-1">৳{item.price.toLocaleString()}</p>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button className="text-muted-foreground hover:text-foreground">
                            <MinusCircle size={20} />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button className="text-muted-foreground hover:text-foreground">
                            <PlusCircle size={20} />
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-medium">৳{(item.price * item.quantity).toLocaleString()}</p>
                          <button className="mt-1 text-rose-500 hover:text-rose-600 text-sm flex items-center">
                            <Trash2 size={16} className="mr-1" /> Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-soft p-6 sticky top-24">
                  <h2 className="font-serif text-xl font-semibold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
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
                  
                  <Link to="/checkout">
                    <Button className="w-full bg-rose-600 hover:bg-rose-700">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  
                  <Link to="/services" className="mt-4 text-muted-foreground hover:text-foreground flex items-center justify-center text-sm">
                    <ShoppingBag size={16} className="mr-2" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-soft">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-muted">
                <ShoppingBag size={32} className="text-muted-foreground" />
              </div>
              <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Looks like you haven't added any services to your cart yet.</p>
              <Link to="/services">
                <Button className="bg-rose-600 hover:bg-rose-700">
                  Browse Services
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
