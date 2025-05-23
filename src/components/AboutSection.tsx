
import { Download } from 'lucide-react';
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
    <section id="about" className="py-24 bg-gradient-to-br from-secondary/80 to-accent/20 dark:from-secondary/20 dark:to-accent/10" ref={containerRef}>
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
                I'm <span className="font-semibold">Peter Chuwa</span>, an experienced IT Support Specialist with over 8 years in the field. I bring a comprehensive understanding of network infrastructure, cybersecurity protocols, and technical support excellence.
              </p>
              
              <p>
                My expertise spans from resolving complex hardware and software issues to implementing robust network security measures that protect sensitive data and ensure business continuity.
              </p>
              
              <p>
                I'm committed to delivering solutions that not only fix immediate problems but also contribute to long-term technological stability and growth. My approach combines technical precision with clear communication, ensuring that complex IT concepts are accessible to all stakeholders.
              </p>
            </div>
            
            <div className="animate-element opacity-0 pt-4 flex gap-4 flex-wrap">
              <a 
                href="https://wa.me/254758913807?text=Hello%20Peter%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20project%20or%20opportunity."
                target="_blank"
                rel="noreferrer"
                className="btn-hover px-6 py-3 text-base font-medium text-white bg-primary rounded-full inline-flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Get In Touch
              </a>
              
              <a 
                href="/Peter_CV.pdf" 
                download
                className="group relative overflow-hidden px-6 py-3 text-base font-medium text-primary bg-transparent border-2 border-primary rounded-full inline-flex items-center gap-2 shadow-lg hover:text-white transition-all duration-300"
              >
                <span className="relative z-10">Download CV</span>
                <Download size={18} className="relative z-10" />
                <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
              </a>
            </div>
          </div>
          
          <div className="animate-element opacity-0 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-xl relative z-10">
              <img 
                src="/about.jpg" 
                alt="Professional headshot of Peter Chuwa" 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'about.jpg';
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
