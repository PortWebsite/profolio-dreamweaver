
import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "James Kamau",
    position: "IT Director",
    company: "Safaricom Kenya",
    text: "Peter's expertise in network security saved our company from a potentially devastating data breach. His quick response and thorough approach to cybersecurity is unmatched in the industry."
  },
  {
    name: "Wanjiku Njoroge",
    position: "CEO",
    company: "Nairobi Tech Solutions",
    text: "We hired Peter as a consultant to upgrade our IT infrastructure. His recommendations and implementations not only improved our security but also increased our operational efficiency by 40%."
  },
  {
    name: "David Omondi",
    position: "Operations Manager",
    company: "Kenya Airways IT Department",
    text: "Peter's support during our system migration was invaluable. He anticipated potential issues before they arose and ensured we had zero downtime during the transition."
  },
  {
    name: "Faith Mwangi",
    position: "Founder",
    company: "TechHub Nairobi",
    text: "As a startup incubator, we needed robust IT systems that could scale. Peter designed a solution that has grown with us for years without requiring major overhauls."
  },
  {
    name: "Samuel Kimani",
    position: "CTO",
    company: "M-Kopa Solar",
    text: "Peter's understanding of both hardware and software aspects of IT support made him the perfect consultant for our complex technical challenges. Highly recommended!"
  },
  {
    name: "Grace Achieng",
    position: "IT Systems Administrator",
    company: "Equity Bank Kenya",
    text: "I've worked with many IT consultants, but Peter stands out for his attention to detail and his ability to explain complex technical concepts in simple terms to non-technical stakeholders."
  }
];

export function TestimonialsSection() {
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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-tr from-gray-100 to-blue-50 dark:from-gray-900 dark:to-blue-950" ref={containerRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-element opacity-0">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Client Feedback
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 font-display">
            What People Say
          </h2>
          
          <p className="text-foreground/80">
            Don't just take my word for it. Here's what clients and colleagues have to say about my work
            and the impact of my IT solutions.
          </p>
        </div>
        
        <div className="relative mt-12 max-w-5xl mx-auto animate-element opacity-0">
          <div className="absolute -top-6 -left-6 text-6xl text-primary opacity-20">
            <Quote />
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="glass-card h-full p-6 md:p-7 transition-all duration-500 hover:-translate-y-2 transform"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mb-4">
                      <Quote className="text-primary opacity-40" size={28} />
                    </div>
                    
                    <p className="italic text-foreground/80 mb-6">"{testimonial.text}"</p>
                    
                    <div className="mt-auto">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-foreground/70">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
