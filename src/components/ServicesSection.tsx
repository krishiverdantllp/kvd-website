
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Services & Solutions</h2>
          <div className="w-20 h-1 bg-verdant-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            We empower licensed commission agents, traders, and buyers to operate in a structured and data-rich environment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-verdant-100 hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-verdant-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-verdant-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <CardTitle className="text-xl font-serif">Market Yard Development</CardTitle>
              <CardDescription>Regulated markets with modern infrastructure</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We build and operate regulated market yards designed for scale, transparency, and farmer-centricity, adhering to the Maharashtra APMC Act.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-verdant-100 hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-verdant-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-verdant-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <CardTitle className="text-xl font-serif">Supply Chain Optimization</CardTitle>
              <CardDescription>Reducing post-harvest losses</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our initiatives are designed to reduce post-harvest losses and deliver high-quality produce to domestic and international markets through organized channels.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-verdant-100 hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-verdant-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-verdant-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <CardTitle className="text-xl font-serif">Digital Infrastructure</CardTitle>
              <CardDescription>Technology-enabled market operations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We develop compliant digital infrastructure that empowers licensed commission agents, traders, and buyers to operate in a structured and data-rich environment.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-verdant-100 hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-verdant-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-verdant-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <CardTitle className="text-xl font-serif">Farmer Network</CardTitle>
              <CardDescription>Strong connections across states</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We have built a strong farmer network across Maharashtra, Himachal, Gujarat, Telangana, Karnataka & Andhra Pradesh with deep domain expertise.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-verdant-100 hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-verdant-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-verdant-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <CardTitle className="text-xl font-serif">Commodity Expertise</CardTitle>
              <CardDescription>Specialization in perishable goods</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We have deep domain expertise in perishable commodities such as Pomegranate, Apple, Mango, and other fresh produce in the agricultural value chain.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-verdant-100 hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-verdant-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-verdant-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <CardTitle className="text-xl font-serif">Compliance & Governance</CardTitle>
              <CardDescription>Adhering to regulatory standards</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our market yards operate with a commitment to compliance and operational excellence, fully adhering to the Maharashtra APMC Act.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
