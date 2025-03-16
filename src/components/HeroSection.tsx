
import { ArrowRight, Download, Github, Linkedin, MessageSquare } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    alt: "IT Professional working on servers",
    heading: "IT Support Specialist",
    subheading: "Solving Complex Technical Challenges",
    text: "Delivering robust IT solutions with a focus on performance and reliability."
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    alt: "Close-up of circuit board",
    heading: "Network Expert",
    subheading: "Building Secure Infrastructures",
    text: "Creating and maintaining resilient network systems for modern business needs."
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    alt: "Code on computer monitor",
    heading: "Cybersecurity Specialist",
    subheading: "Protecting Digital Assets",
    text: "Implementing best practices to safeguard your most valuable information."
  }
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  
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
    
    // Welcome message timer
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 10000);

    return () => {
      observer.disconnect();
      clearInterval(slideTimer);
      clearTimeout(welcomeTimer);
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
      
      {/* Welcome overlay */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all">
          <div className="max-w-md w-full mx-auto px-6 py-8 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-2xl transform animate-scale-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Welcome to My Portfolio</h2>
            <p className="text-foreground/80 mb-6">
              Thank you for visiting my professional portfolio. I'm excited to share my IT expertise and services with you.
            </p>
            <button 
              onClick={() => setShowWelcome(false)}
              className="btn-hover px-6 py-3 text-base font-medium text-white bg-primary rounded-full flex items-center gap-2 mx-auto shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Get Started <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
      
      {/* GitHub Projects Highlight */}
      <div className="absolute top-20 right-0 z-10 max-w-xs overflow-hidden bg-white/10 backdrop-blur-md p-4 rounded-l-lg border-l-4 border-primary">
        <div className="animate-slide-in-right transform translate-x-full whitespace-nowrap inline-block animate-[slide_20s_linear_infinite]">
          <span className="text-white font-medium mr-4">For more project information, please follow my GitHub account</span>
          <a href="https://github.com/count58" target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center">
            <Github size={16} className="mr-1" /> github.com/count58
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 text-center">
        <span className="animate-element opacity-0 inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">
          Welcome to my portfolio
        </span>
        
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
          >
            <h1 className="animate-element opacity-0 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-display text-white">
              <span className="text-white">{slide.heading}</span>
              <br />
              <span className="text-primary">{slide.subheading}</span>
            </h1>
            
            <p className="animate-element opacity-0 max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10">
              {slide.text}
            </p>
          </div>
        ))}
        
        <div className="animate-element opacity-0 flex flex-wrap justify-center gap-4">
          <a 
            href="#about" 
            className="btn-hover px-6 py-3 text-base font-medium text-white bg-primary rounded-full flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            Get Started <ArrowRight size={18} />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/peter-chuwa-77002488/" 
            target="_blank" 
            rel="noreferrer"
            className="btn-hover px-6 py-3 text-base font-medium text-white bg-white/10 border border-white/30 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          
          <a 
            href="https://wa.me/254758913807?text=Hello%20Peter%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20project%20or%20opportunity." 
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
