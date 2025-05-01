
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic would go here
    console.log("Form submitted");
  };

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
            <p className="text-gray-700">+91 1234 567 890</p>
            <p className="text-gray-700">+91 9876 543 210</p>
          </Card>
          
          <Card className="p-6 border-verdant-100 hover:shadow-md transition-all duration-300 text-center">
            <div className="w-12 h-12 bg-verdant-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-5 w-5 text-verdant-600" />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-700">krishiverdantllp@gmail.com</p>
            <p className="text-gray-700">krishiverdantllp@gmail.com</p>
          </Card>
          
          <Card className="p-6 border-verdant-100 hover:shadow-md transition-all duration-300 text-center">
            <div className="w-12 h-12 bg-verdant-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-5 w-5 text-verdant-600" />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-700">123 Agriculture Road</p>
            <p className="text-gray-700">Nashik, Maharashtra 422001</p>
          </Card>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 border-verdant-100">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    placeholder="+91 98765 43210"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="w-full"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Please provide details about your inquiry..."
                  className="w-full min-h-[150px]"
                  required
                />
              </div>
              
              <div className="text-center">
                <Button type="submit" className="bg-verdant-600 hover:bg-verdant-700 text-white px-8 py-6">
                  Send Message
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
