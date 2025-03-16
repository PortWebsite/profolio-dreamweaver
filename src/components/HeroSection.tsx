
import { ArrowRight, Linkedin, MessageSquare } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
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

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/20 dark:from-primary/10 dark:to-accent/10" />
      
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-primary/5 to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 text-center">
        <span className="animate-element opacity-0 inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">
          Welcome to my portfolio
        </span>
        
        <h1 className="animate-element opacity-0 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-display">
          <span className="text-foreground">IT Support Specialist</span>
          <br />
          <span className="text-primary">Network & Cybersecurity Expert</span>
        </h1>
        
        <p className="animate-element opacity-0 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-10">
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
            className="btn-hover px-6 py-3 text-base font-medium text-primary bg-white dark:bg-white/10 border border-primary/20 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          
          <a 
            href="https://wa.me/254758913807" 
            target="_blank" 
            rel="noreferrer"
            className="btn-hover px-6 py-3 text-base font-medium text-primary bg-white dark:bg-white/10 border border-primary/20 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            <MessageSquare size={18} /> WhatsApp
          </a>
        </div>
        
        <div className="animate-element opacity-0 mt-20 sm:mt-32">
          <a href="#about" className="inline-block">
            <div className="w-8 h-14 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1 cursor-pointer">
              <div className="w-1.5 h-3 bg-foreground/60 rounded-full animate-bounce"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
