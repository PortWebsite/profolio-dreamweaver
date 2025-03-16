
import { useEffect, useRef } from 'react';
import { Bookmark, GraduationCap } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  year: string;
  details: string[];
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  details: string;
}

const educations: Education[] = [
  {
    degree: "MSc. Information Systems Technology",
    institution: "United States International University - Africa",
    year: "2019 - 2023",
    details: [
      "Specialized in Network Security and Systems Administration",
      "Advanced research in cybersecurity threat detection",
      "Developed enterprise IT security frameworks",
      "Graduated with distinction"
    ]
  },
  {
    degree: "BSc. Hardware and Networking",
    institution: "Mahatma Gandhi University Meghalaya, India",
    year: "2015 - 2018",
    details: [
      "Foundations in computer hardware systems and network infrastructure",
      "Specialized in network protocols and security",
      "Participated in international IT competitions",
      "Completed with first class honors"
    ]
  }
];

const certifications: Certification[] = [
  {
    name: "ALX Career Essentials",
    issuer: "ALX",
    year: "2024 - Current",
    details: "Focused on career development and essential professional skills."
  },
  {
    name: "ALX Full Stack Software Engineering",
    issuer: "ALX",
    year: "Feb 2023 - Apr 2023",
    details: "Developed skills in full-stack development and software engineering best practices."
  },
  {
    name: "Cyber Shujaa: Entrepreneurship & Business Development",
    issuer: "Cyber Shujaa",
    year: "Feb 2023 - Apr 2023",
    details: "Gained insights into entrepreneurship and business strategy within the tech industry."
  },
  {
    name: "Cisco IT Essentials: PC Hardware & Software",
    issuer: "Cisco",
    year: "Mar 2010 - Aug 2010",
    details: "Mastered fundamental hardware and software troubleshooting techniques."
  },
  {
    name: "Cisco Network Academy",
    issuer: "Cisco",
    year: "Jun 2010 - Aug 2010",
    details: "Developed a strong foundation in networking principles and technologies."
  }
];

export function EducationSection() {
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
    <section id="education" className="py-24 bg-gradient-to-tr from-white to-blue-50 dark:from-gray-900 dark:to-blue-950" ref={containerRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-element opacity-0">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Academic Background
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 font-display">
            Education & Certifications
          </h2>
          
          <p className="text-foreground/80">
            My academic foundation and industry certifications that provide a solid basis for delivering
            high-quality IT solutions and staying current with evolving technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {/* Education Section */}
          <div className="animate-element opacity-0">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" size={24} />
              Education
            </h3>
            
            <div className="space-y-8">
              {educations.map((edu, index) => (
                <div 
                  key={index} 
                  className="glass-card group overflow-hidden transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="p-6 border-l-4 border-primary">
                    <h4 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h4>
                    
                    <div className="flex flex-wrap items-center gap-2 text-sm text-foreground/70 mb-4">
                      <span>{edu.institution}</span>
                      <span className="bg-secondary/70 h-1 w-1 rounded-full"></span>
                      <span>{edu.year}</span>
                    </div>
                    
                    <div className="h-0 overflow-hidden transition-all duration-300 group-hover:h-auto group-hover:mt-4">
                      <ul className="space-y-2">
                        {edu.details.map((detail, i) => (
                          <li key={i} className="flex gap-2 items-start text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Section */}
          <div className="animate-element opacity-0">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Bookmark className="text-primary" size={24} />
              Certifications
            </h3>
            
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="glass-card group overflow-hidden transition-all duration-500 hover:-translate-y-1 transform"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <div className="p-5 border-l-4 border-primary">
                    <h4 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    
                    <div className="flex flex-wrap items-center gap-2 text-sm text-foreground/70 mb-3">
                      <span>{cert.issuer}</span>
                      <span className="bg-secondary/70 h-1 w-1 rounded-full"></span>
                      <span>{cert.year}</span>
                    </div>
                    
                    <div className="transition-all duration-300 max-h-0 overflow-hidden group-hover:max-h-20 opacity-0 group-hover:opacity-100">
                      <p className="text-sm text-foreground/80">{cert.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
