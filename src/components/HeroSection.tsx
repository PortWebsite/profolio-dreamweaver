
import { ArrowRight, Linkedin, MessageSquare } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    alt: "IT Professional working on servers"
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    alt: "Close-up of circuit board"
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    alt: "Code on computer monitor"
  }
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.animate-element');
    elements?.forEach((el) => observer.observe(el));

    // Slideshow timer
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      observer.disconnect();
      clearInterval(slideTimer);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      {/* Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={slide.image} 
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          </div>
        ))}
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-primary w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 text-center">
        <span className="animate-element opacity-0 inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">
          Welcome to my portfolio
        </span>
        
        <h1 className="animate-element opacity-0 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-display text-white">
          <span className="text-white">IT Support Specialist</span>
          <br />
          <span className="text-primary">Network & Cybersecurity Expert</span>
        </h1>
        
        <p className="animate-element opacity-0 max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10">
          Bridging the gap between technical excellence and user experience. Committed to providing robust IT solutions with a focus on security and performance.
        </p>
        
        <div className="animate-element opacity-0 flex flex-wrap justify-center gap-4">
          <a 
            href="#about" 
            className="btn-hover px-6 py-3 text-base font-medium text-white bg-primary rounded-full flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            Get Started <ArrowRight size={18} />
          </a>
          
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer"
            className="btn-hover px-6 py-3 text-base font-medium text-white bg-white/10 border border-white/30 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          
          <a 
            href="https://wa.me/254758913807" 
            target="_blank" 
            rel="noreferrer"
            className="btn-hover px-6 py-3 text-base font-medium text-white bg-white/10 border border-white/30 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm"
          >
            <MessageSquare size={18} /> WhatsApp
          </a>
        </div>
        
        <div className="animate-element opacity-0 mt-20 sm:mt-32">
          <a href="#about" className="inline-block">
            <div className="w-8 h-14 rounded-full border-2 border-white/40 flex items-start justify-center p-1 cursor-pointer">
              <div className="w-1.5 h-3 bg-white/80 rounded-full animate-bounce"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
