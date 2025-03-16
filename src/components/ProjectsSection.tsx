
import { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  url: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Network Monitoring Dashboard",
    description: "Real-time network traffic visualization system with alert capabilities for enterprise environments.",
    tech: ["Python", "React", "Node.js", "MongoDB", "WebSockets"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    url: "#",
    github: "https://github.com"
  },
  {
    title: "Automated Backup System",
    description: "Scheduled backup solution with compression and encryption capabilities for secure data management.",
    tech: ["PowerShell", "C#", "Azure", "Bash", "AWS S3"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    url: "#",
    github: "https://github.com"
  },
  {
    title: "Security Compliance Tool",
    description: "Automated security assessment tool that evaluates systems against industry standards and best practices.",
    tech: ["Python", "Docker", "REST API", "PostgreSQL", "React"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    url: "#",
    github: "https://github.com"
  },
  {
    title: "Inventory Management System",
    description: "IT asset tracking solution with QR code integration for efficient hardware and software inventory management.",
    tech: ["JavaScript", "Express", "MongoDB", "React Native", "QR API"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    url: "#"
  }
];

export function ProjectsSection() {
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
    <section id="projects" className="py-24 bg-secondary/50 dark:bg-secondary/10" ref={containerRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-element opacity-0">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            My Work
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 font-display">
            Featured Projects
          </h2>
          
          <p className="text-foreground/80">
            A showcase of my technical abilities through real-world solutions that address
            specific IT and security challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-element opacity-0 glass-card group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground/80 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-xs font-medium bg-secondary/70 dark:bg-secondary/30 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.url} 
                    className="btn-hover flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                  
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="btn-hover inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-foreground/80 bg-secondary/70 dark:bg-secondary/30 rounded-lg"
                      aria-label="View on GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
