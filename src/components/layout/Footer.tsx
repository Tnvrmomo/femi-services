
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Send, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-rose-50 to-lavender-50 pt-16 border-t border-muted">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-foreground">GlowUp</h3>
            <p className="text-muted-foreground leading-relaxed">
              Connecting women-centric businesses with customers, providing a platform for beauty, events, baking and more.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white flex items-center justify-center border border-muted shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <Instagram className="h-5 w-5 text-rose-500" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white flex items-center justify-center border border-muted shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <Facebook className="h-5 w-5 text-blue-600" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white flex items-center justify-center border border-muted shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <Twitter className="h-5 w-5 text-blue-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors">Categories</Link>
              </li>
              <li>
                <Link to="/vendors" className="text-muted-foreground hover:text-primary transition-colors">Vendors</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-rose-500 mt-0.5" />
                <span className="text-muted-foreground">123 Beauty Street, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-rose-500" />
                <span className="text-muted-foreground">+880 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-rose-500" />
                <span className="text-muted-foreground">info@glowup.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-foreground">Newsletter</h3>
            <p className="text-muted-foreground">Subscribe to our newsletter for updates</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="rounded-full bg-white border-muted"
              />
              <Button size="icon" className="rounded-full bg-rose-500 hover:bg-rose-600">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-muted py-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} GlowUp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
