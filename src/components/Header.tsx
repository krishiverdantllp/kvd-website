
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <span className="text-verdant-700 font-serif font-bold text-xl">Krishi Verdant</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-verdant-600 font-medium">Home</a>
          <a href="#about" className="text-gray-700 hover:text-verdant-600 font-medium">About Us</a>
          <a href="#services" className="text-gray-700 hover:text-verdant-600 font-medium">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-verdant-600 font-medium">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto py-2">
            <div className="flex flex-col space-y-3 p-4">
              <a href="#home" className="text-gray-700 hover:text-verdant-600 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="text-gray-700 hover:text-verdant-600 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>About Us</a>
              <a href="#services" className="text-gray-700 hover:text-verdant-600 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#contact" className="text-gray-700 hover:text-verdant-600 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
