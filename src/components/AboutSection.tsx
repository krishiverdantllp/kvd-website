
import React from 'react';
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">About Krishi Verdant LLP</h2>
          <div className="w-20 h-1 bg-verdant-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            With a proven track record in the fresh produce value chain, we specialize in developing compliant digital & physical infrastructure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-4">
              We focus on creating sustainable, scalable, and inclusive market systems. Our initiatives are designed to enhance farmer incomes, reduce post-harvest losses, and deliver high-quality produce to domestic and international markets through organized and wholesale channels.
            </p>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 mt-8">Our Commitment</h3>
            <p className="text-gray-700 mb-6">
              Our market yards aim to bring modern systems and governance to traditional mandi operations while fully adhering to the Maharashtra APMC Act. In alignment with the progressive reforms under the Maharashtra Agricultural Produce Marketing (Development and Regulation) Act, M/s Krishi Verdant proposes to establish and operate private market yards at Nashik, Pune, and Solapur.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-crop-200 rounded-lg -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Agricultural Market" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-verdant-100 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <h4 className="font-bold text-4xl text-verdant-600 mb-2">6+</h4>
            <p className="text-gray-700">States Across India</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <h4 className="font-bold text-4xl text-verdant-600 mb-2">3</h4>
            <p className="text-gray-700">Market Yards</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <h4 className="font-bold text-4xl text-verdant-600 mb-2">10+</h4>
            <p className="text-gray-700">Years Experience</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <h4 className="font-bold text-4xl text-verdant-600 mb-2">1000+</h4>
            <p className="text-gray-700">Farmer Network</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
