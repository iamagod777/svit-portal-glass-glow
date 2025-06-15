
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { MapPin, Camera, Car, Building, Utensils, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CampusMap = () => {
  useEffect(() => {
    // GSAP Animations
    const tl = gsap.timeline();
    
    tl.fromTo('.campus-header', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.map-section', 
      { opacity: 0, y: 40, scale: 0.9 }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: 'power3.out',
        delay: 0.3
      }
    );
  }, []);

  const mapSections = [
    {
      id: 'aerial-view',
      title: '📍 SVIT Campus - Aerial View',
      type: 'map',
      icon: MapPin,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d478.2648445345!2d78.496234!3d17.4397267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a1822d3dd8f%3A0xdd25815d2e63bdc6!2sSvit%20Auditorium!5e1!3m2!1sen!2sin!4v1734192000000!5m2!1sen!2sin',
      description: 'Explore the complete campus layout from above'
    },
    {
      id: 'parking-street-view',
      title: '🚗 Main Parking Area – Explore in 360°',
      type: 'streetview',
      icon: Car,
      embedUrl: 'https://www.google.com/maps/embed?pb=!4v1734192100000!6m8!1m7!1sCIHM0ogKEICAgICaybSxgwE!2m2!1d17.4401362!2d78.4963785!3f343.92!4f-11.11!5f0.7820865974627469',
      description: 'Navigate through the main parking area in 360° view'
    },
    {
      id: 'campus-entrance',
      title: '🏫 SVIT Main Entrance – Street Perspective',
      type: 'streetview',
      icon: Camera,
      embedUrl: 'https://www.google.com/maps/embed?pb=!4v1734192200000!6m8!1m7!1s8JnnXbGlUun1gy49dN9g6w!2m2!1d17.440383!2d78.4961828!3f129.4!4f-5.17!5f0.7820865974627469',
      description: 'View the impressive main entrance of SVIT campus'
    }
  ];

  const campusImages = [
    {
      id: 'main-building',
      title: '🏫 SVIT Main Building',
      icon: Building,
      imageUrl: 'https://svit.ac.in/images/svit.jpg',
      description: 'The iconic main academic building of SVIT'
    },
    {
      id: 'canteen',
      title: '🍴 Campus Canteen – Student Favorite Spot',
      icon: Utensils,
      imageUrl: 'https://svit.ac.in/images/svit/3.jpg',
      description: 'Where students gather for meals and conversations'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header Section */}
      <section className="relative py-20 px-4">
        <div className="campus-header max-w-6xl mx-auto text-center">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Campus{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Map & Views
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Explore SVIT campus through interactive maps, 360° street views, and stunning photography. 
            Discover every corner of our modern educational facility.
          </p>
        </div>
      </section>

      {/* Interactive Maps Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Interactive Campus Views
          </h2>
          
          <div className="space-y-12">
            {mapSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.id}
                  className="map-section glass-card p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {section.title}
                      </h3>
                      <p className="text-gray-400">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="rounded-xl overflow-hidden shadow-2xl backdrop-blur-md">
                    <iframe
                      src={section.embedUrl}
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                      title={section.title}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campus Images Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Campus Photography
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {campusImages.map((image, index) => {
              const Icon = image.icon;
              return (
                <div
                  key={image.id}
                  className="map-section glass-card p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                      <Icon size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {image.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {image.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="rounded-xl overflow-hidden shadow-lg backdrop-blur-md bg-white/5 p-2">
                    <img
                      src={image.imageUrl}
                      alt={image.title}
                      className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Visit SVIT?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Experience our campus in person. Contact us for campus tours and admissions information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@svit.ac.in"
                className="glass-button glow-blue-hover text-lg px-8 py-4 inline-flex items-center justify-center"
              >
                Contact Admissions
              </a>
              <Link
                to="/login"
                className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-white/15 hover:border-white/30 text-lg inline-flex items-center justify-center"
              >
                Student Portal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusMap;
