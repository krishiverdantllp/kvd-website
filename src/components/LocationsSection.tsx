
import React from 'react';
import { Button } from "@/components/ui/button";

const LocationsSection = () => {
  const locations = [
    { 
      state: "Maharashtra", 
      cities: ["Nashik", "Pune", "Solapur"],
      imageUrl: "https://images.unsplash.com/photo-1580488805802-6dafa39135af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      details: "Our primary market yard locations with modern infrastructure and digital systems"
    },
    { 
      state: "Himachal Pradesh", 
      cities: ["Shimla", "Solan"],
      imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      details: "Specialized in apple sourcing and trading networks"
    },
    { 
      state: "Gujarat", 
      cities: ["Ahmedabad", "Surat"],
      imageUrl: "https://images.unsplash.com/photo-1582980752625-9e8cf129fc23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      details: "Expanding farmer networks and infrastructure development"
    },
    { 
      state: "Telangana & Andhra Pradesh", 
      cities: ["Hyderabad", "Vijayawada"],
      imageUrl: "https://images.unsplash.com/photo-1516390843412-b50d4548329e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      details: "Strategic partnerships with farmer producer organizations"
    },
    { 
      state: "Karnataka", 
      cities: ["Bangalore", "Mysore"],
      imageUrl: "https://images.unsplash.com/photo-1588413453099-362bc8572bee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      details: "Developing supply chain infrastructure for fresh produce"
    }
  ];

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Geographic Presence</h2>
          <div className="w-20 h-1 bg-verdant-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            With a strong farmer network across multiple states, we connect agricultural communities with markets
          </p>
        </div>
        
        <div className="space-y-12">
          {locations.map((location, index) => (
            <div 
              key={location.state}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <img 
                    src={location.imageUrl} 
                    alt={location.state} 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">{location.state}</h3>
                      <p>{location.cities.join(", ")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="p-4">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{location.state}</h3>
                  <ul className="list-disc list-inside mb-4 text-gray-700">
                    {location.cities.map((city) => (
                      <li key={city} className="mb-2">{city}</li>
                    ))}
                  </ul>
                  <p className="text-gray-700 mb-6">{location.details}</p>
                  <Button variant="outline" className="border-verdant-600 text-verdant-600 hover:bg-verdant-50">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
