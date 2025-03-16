
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
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.remove('opacity-0');
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
    <section id="skills" className="py-24" ref={containerRef}>
      <div className="section-container opacity-0">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            My Skills
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 font-display">
            Technical Expertise
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
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-primary font-medium">{skill.level}%</span>
              </div>
              
              <div className="progress-bar mb-4">
                <div 
                  className="progress-bar-fill"
                  style={{ 
                    '--progress-value': `${skill.level}%`,
                    animationDelay: `${index * 0.1 + 0.3}s`
                  } as React.CSSProperties}
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
