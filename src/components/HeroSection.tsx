
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 md:pt-0">
      <div className="relative h-[80vh] min-h-[600px] w-full bg-gradient-to-b from-verdant-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-farm bg-cover bg-center opacity-20"></div>
        
        <div className="container mx-auto h-full flex flex-col justify-center px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4">
              Building the Future of Agricultural Markets
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              A new-age agri-market enterprise focused on building and operating regulated market yards designed for scale, transparency, and farmer-centricity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="border-verdant-600 text-verdant-600 hover:bg-verdant-50 text-lg py-6 px-8">
                Learn About Us
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
