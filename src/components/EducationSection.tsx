
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
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    year: "2010 - 2014",
    details: [
      "Specialized in Network Security and Systems Administration",
      "Graduated with First Class Honors",
      "Developed a network monitoring tool as final year project",
      "Active member of the University Cybersecurity Club"
    ]
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Technical Institute of Computing",
    year: "2008 - 2010",
    details: [
      "Foundations in programming, hardware, and networking",
      "Completed with distinction",
      "Participated in regional IT competitions",
      "Internship at local IT service provider"
    ]
  }
];

const certifications: Certification[] = [
  {
    name: "Cisco Certified Network Professional (CCNP)",
    issuer: "Cisco",
    year: "2019",
    details: "Advanced networking certification demonstrating proficiency in planning, implementing, verifying, and troubleshooting complex enterprise network solutions."
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    year: "2017",
    details: "Certification validating foundational skills in network security, compliance, operational security, threats, and vulnerabilities."
  },
  {
    name: "Microsoft Certified: Azure Administrator",
    issuer: "Microsoft",
    year: "2020",
    details: "Certification for implementing, monitoring, and maintaining Microsoft Azure solutions, including major services related to compute, storage, network, and security."
  },
  {
    name: "Certified Information Systems Security Professional (CISSP)",
    issuer: "ISC²",
    year: "2021",
    details: "Advanced security certification covering critical security domains including access control, security operations, and software development security."
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
    <section id="education" className="py-24" ref={containerRef}>
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
                  className="glass-card group overflow-hidden transition-all duration-500"
                >
                  <div className="p-6">
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
            
            <div className="grid sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="glass-card group overflow-hidden transition-all duration-500"
                >
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    
                    <div className="flex flex-wrap items-center gap-2 text-sm text-foreground/70 mb-3">
                      <span>{cert.issuer}</span>
                      <span className="bg-secondary/70 h-1 w-1 rounded-full"></span>
                      <span>{cert.year}</span>
                    </div>
                    
                    <div className="h-0 overflow-hidden transition-all duration-300 group-hover:h-auto group-hover:mt-2">
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
