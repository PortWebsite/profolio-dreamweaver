
import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  description: string;
}

const skills: Skill[] = [
  {
    name: "IT Support",
    level: 100,
    description: "Expert troubleshooting of hardware, software, and network issues with focus on user satisfaction."
  },
  {
    name: "Networking Hardware",
    level: 95,
    description: "Installation and maintenance of routers, switches, firewalls and VPNs for secure network infrastructure."
  },
  {
    name: "Microsoft Office 365",
    level: 90,
    description: "Advanced knowledge of Office suite, SharePoint, Teams, and cloud-based collaboration tools."
  },
  {
    name: "Operating Systems",
    level: 85,
    description: "Proficient with Windows, macOS, and Linux systems administration and troubleshooting."
  },
  {
    name: "Software Engineering",
    level: 95,
    description: "Development of custom solutions using various programming languages and frameworks."
  },
  {
    name: "AI Career Essentials",
    level: 90,
    description: "Integration of AI tools and automation to streamline IT processes and enhance productivity."
  }
];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-gradient-to-tr from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950" ref={containerRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            My Skills
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 font-display">
            Professional Skills
          </h2>
          
          <p className="text-foreground/80">
            My professional toolkit combines deep technical knowledge with hands-on experience,
            allowing me to deliver robust IT solutions across various domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`glass-card dark:bg-gray-800/70 rounded-xl p-6 shadow-xl transform transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-5 flex justify-between items-center">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-primary font-medium">{skill.level}%</span>
              </div>
              
              <div className="mb-4 bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-1500 ease-out ${isVisible ? '' : 'w-0'}`}
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 0.1 + 0.3}s`
                  }}
                ></div>
              </div>
              
              <p className="text-sm text-foreground/80">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
