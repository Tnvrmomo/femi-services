
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="font-serif text-2xl font-bold bg-gradient-to-r from-rose-600 to-lavender-600 bg-clip-text text-transparent">
            Glow<span className="text-gold-500">Up</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/categories" className="text-foreground hover:text-primary transition-colors">
            Categories
          </Link>
          <Link to="/vendors" className="text-foreground hover:text-primary transition-colors">
            Vendors
          </Link>
          <Link to="/services" className="text-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Heart className="h-5 w-5" />
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mt-2 glass-card">
              <DropdownMenuItem asChild>
                <Link to="/login" className="cursor-pointer">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/register" className="cursor-pointer">Register</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/vendor-register" className="cursor-pointer">Become a Vendor</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/vendor-register">
            <Button className="bg-gradient-to-r from-rose-500 to-lavender-500 hover:from-rose-600 hover:to-lavender-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300">
              Become a Vendor
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-down">
          <div className="container-custom py-4 flex flex-col">
            <nav className="flex flex-col space-y-4 mb-6">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-colors py-2 border-b border-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/categories" 
                className="text-foreground hover:text-primary transition-colors py-2 border-b border-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/vendors" 
                className="text-foreground hover:text-primary transition-colors py-2 border-b border-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Vendors
              </Link>
              <Link 
                to="/services" 
                className="text-foreground hover:text-primary transition-colors py-2 border-b border-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary transition-colors py-2 border-b border-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </nav>
            
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Heart className="h-5 w-5" />
                </Button>
                <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
              
              <Link to="/vendor-register" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="bg-gradient-to-r from-rose-500 to-lavender-500 hover:from-rose-600 hover:to-lavender-600 text-white rounded-full">
                  Become a Vendor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
