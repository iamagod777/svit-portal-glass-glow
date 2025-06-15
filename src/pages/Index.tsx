
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowRight, BookOpen, Users, Calendar, Award, MapPin } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // GSAP Animations
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-title', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 
      '-=0.5'
    )
    .fromTo('.hero-buttons', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 
      '-=0.3'
    );

    // Animate feature cards
    gsap.fromTo('.feature-card', 
      { opacity: 0, y: 40, scale: 0.9 }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: 'power3.out',
        delay: 0.5
      }
    );
  }, []);

  const features = [
    {
      icon: BookOpen,
      title: 'Academic Resources',
      description: 'Access study materials, assignments, and course content'
    },
    {
      icon: Users,
      title: 'Student Community',
      description: 'Connect with peers and collaborate on projects'
    },
    {
      icon: Calendar,
      title: 'Event Management',
      description: 'Stay updated with campus events and important dates'
    },
    {
      icon: MapPin,
      title: 'Campus Map',
      description: 'Explore our campus with interactive maps and 360° views',
      link: '/campus-map'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            SVIT: Engineering the Future,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Today.
            </span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Revolutionizing the college experience with an all-in-one platform for a
            modern, tech-savvy campus.
          </p>
          
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/login"
              className="glass-button glow-blue-hover group flex items-center space-x-2 text-lg px-8 py-4"
            >
              <span>Student Login</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/register"
              className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-white/15 hover:border-white/30 text-lg"
            >
              New Student Registration
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Enhanced Student Experience
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Discover the tools and resources designed to elevate your academic journey
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const CardContent = (
                <div className="feature-card glass-card p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer h-full">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors">
                    <Icon size={24} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.link && (
                    <div className="mt-4 flex items-center text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                      <span>Explore Campus</span>
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </div>
              );

              return feature.link ? (
                <Link key={index} to={feature.link} className="block h-full">
                  {CardContent}
                </Link>
              ) : (
                <div key={index} className="h-full">
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of students already using the SVIT platform to enhance their academic experience.
            </p>
            <Link
              to="/register"
              className="glass-button glow-blue-hover text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>Create Your Account</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
