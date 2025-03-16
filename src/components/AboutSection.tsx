
import { useEffect, useRef } from 'react';

export function AboutSection() {
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
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = containerRef.current?.querySelectorAll('.animate-element');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-secondary/50 dark:bg-secondary/10" ref={containerRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="animate-element opacity-0 inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              About Me
            </span>
            
            <h2 className="animate-element opacity-0 text-3xl md:text-4xl font-bold tracking-tight font-display">
              IT Professional with a Passion for Network Security
            </h2>
            
            <div className="animate-element opacity-0 space-y-4 text-foreground/80">
              <p>
                As an experienced IT Support Specialist with over 8 years in the field, I bring a comprehensive understanding of network infrastructure, cybersecurity protocols, and technical support excellence.
              </p>
              
              <p>
                My expertise spans from resolving complex hardware and software issues to implementing robust network security measures that protect sensitive data and ensure business continuity.
              </p>
              
              <p>
                I'm committed to delivering solutions that not only fix immediate problems but also contribute to long-term technological stability and growth. My approach combines technical precision with clear communication, ensuring that complex IT concepts are accessible to all stakeholders.
              </p>
            </div>
            
            <div className="animate-element opacity-0 pt-4">
              <a 
                href="#contact"
                className="btn-hover px-6 py-3 text-base font-medium text-white bg-primary rounded-full inline-flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="animate-element opacity-0 relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative z-10">
              <img 
                src="/about.jpg" 
                alt="Professional headshot" 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80';
                }}
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
