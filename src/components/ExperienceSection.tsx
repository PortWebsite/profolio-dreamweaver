
import { useEffect, useRef } from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  contributions: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "IT Support Specialist",
    company: "Freelance",
    period: "2014 - Present",
    contributions: [
      "Diagnosed and resolved complex hardware/software issues for 50+ clients, achieving 95% first-time resolution rate.",
      "Conducted network setup and security assessments for small to medium-sized businesses, implementing solutions that reduced security incidents by 80%.",
      "Implemented data backup and disaster recovery solutions that decreased recovery time by 60% during system failures.",
      "Provided remote and on-site IT support to clients with 98% satisfaction rating based on post-service surveys.",
      "Developed customized IT training programs that improved client technical proficiency by 70% on average.",
      "Ensured network security compliance and best practices, maintaining zero data breaches for all clients."
    ]
  },
  {
    title: "Network Administrator",
    company: "TechSolutions Inc.",
    period: "2016 - 2020",
    contributions: [
      "Managed and maintained network infrastructure serving 200+ users across multiple locations.",
      "Implemented VPN solutions for secure remote access, increasing workforce mobility by 40%.",
      "Conducted regular security audits and vulnerability assessments, reducing potential threats by 75%.",
      "Designed and deployed scalable network architectures that accommodated 30% company growth.",
      "Maintained 99.9% network uptime through proactive monitoring and swift incident response.",
      "Collaborated with IT team to integrate new technologies while ensuring backward compatibility."
    ]
  }
];

export function ExperienceSection() {
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
    <section id="experience" className="py-24 bg-secondary/50 dark:bg-secondary/10" ref={containerRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-element opacity-0">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Work History
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 font-display">
            Professional Experience
          </h2>
          
          <p className="text-foreground/80">
            A track record of solving complex IT challenges and delivering exceptional technical support
            across various roles and environments.
          </p>
        </div>
        
        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 md:mb-24 relative">
              <div className={`flex flex-col md:flex-row items-start gap-6 md:gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30 z-10"></div>
                
                {/* Experience card */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} animate-element opacity-0`}>
                  <div className="glass-card hover:shadow-xl p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Briefcase size={20} />
                      </div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-foreground/70 mb-6">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {exp.contributions.map((contribution, i) => (
                        <div key={i} className="flex gap-2 items-start staggered-fade-in">
                          <ChevronRight size={18} className="text-primary mt-1 flex-shrink-0" />
                          <p className="text-sm">{contribution}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
