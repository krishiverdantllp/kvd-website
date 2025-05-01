
import React from 'react';
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-verdant-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Have questions about our market yards or want to join our farmer network? Contact us today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 border-verdant-100 hover:shadow-md transition-all duration-300 text-center">
            <div className="w-12 h-12 bg-verdant-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-5 w-5 text-verdant-600" />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-700">+91 8106229679</p>
          </Card>
          
          <Card className="p-6 border-verdant-100 hover:shadow-md transition-all duration-300 text-center">
            <div className="w-12 h-12 bg-verdant-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-5 w-5 text-verdant-600" />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-700">krishiverdantllp@gmail.com</p>
          </Card>
          
          <Card className="p-6 border-verdant-100 hover:shadow-md transition-all duration-300 text-center">
            <div className="w-12 h-12 bg-verdant-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-5 w-5 text-verdant-600" />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-700">Krishi Verdant LLP</p>
            <p className="text-gray-700">Ergo Building, 13th Floor, Room No. 1306, </p>
            <p className="text-gray-700">A-1/4 Block - EP & GP Block, Sector - V, Bidhannagar</p>
            <p className="text-gray-700">Saltlake City, Kolkata - 700091</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
