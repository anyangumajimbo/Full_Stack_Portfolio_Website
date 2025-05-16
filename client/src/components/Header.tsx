import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/95 shadow-md backdrop-blur-sm py-2" : "bg-transparent py-4"
    )}>
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#hero" 
          className={cn(
            "text-2xl font-bold transition-colors",
            scrolled ? "text-primary" : "text-white"
          )}
        >
          Majimbo
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={cn(
                "transition-colors hover:text-primary",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button 
            asChild
            variant="default"
            className="bg-primary hover:bg-secondary text-white"
          >
            <a href="/attached_assets/MAJIMBOCV.pdf" download>
              Download CV
            </a>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className={cn(
            "md:hidden focus:outline-none transition-colors",
            scrolled ? "text-foreground" : "text-white"
          )}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon="bars" className="text-2xl" />
        </button>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="flex flex-col px-4 py-2 space-y-3">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-foreground hover:text-primary py-2 transition-colors"
              onClick={closeMobileMenu}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="bg-primary hover:bg-secondary text-white">
            <a 
              href="/attached_assets/MAJIMBOCV.pdf" 
              download
              onClick={closeMobileMenu}
            >
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
