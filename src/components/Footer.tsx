
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-serif font-bold mb-3">Krishi Verdant LLP</h3>
            <p className="text-gray-400 mb-4">
              A new-age agri-market enterprise focused on building and operating regulated market yards.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Market Yard Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Supply Chain Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Infrastructure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Farmer Network</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commodity Expertise</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Ergo Building, 13th Floor, Room No. 1306, </li>
              <li className="text-gray-400">A-1/4 Block - EP & GP Block, Sector - V, Bidhannagar</li>
              <li className="text-gray-400">Saltlake City, Kolkata - 700091</li>
              <li className="text-gray-400">Phone: +91 8106229679</li>
              <li className="text-gray-400">Email: krishiverdantllp@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Krishi Verdant LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
