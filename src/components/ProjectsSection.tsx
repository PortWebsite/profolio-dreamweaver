
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
    title: "ChatBot-Vercel",
    description: "A modern chatbot implementation using AI technologies. This project demonstrates conversational AI capabilities and natural language processing.",
    tech: ["React", "Node.js", "AI/ML", "Vercel", "JavaScript"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    url: "https://github.com/count58/ChatBot-Vercel",
    github: "https://github.com/count58/ChatBot-Vercel"
  },
  {
    title: "Backend User Data Management",
    description: "A robust user data management system with a focus on security and data privacy. Implements secure authentication and authorization mechanisms.",
    tech: ["Python", "Backend", "API", "Security", "Database"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    url: "https://github.com/count58/alx-backend-user-data",
    github: "https://github.com/count58/alx-backend-user-data"
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
              className="animate-element opacity-0 glass-card group overflow-hidden transform transition-all duration-500 hover:translate-y-[-10px]"
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
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                  
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="btn-hover inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-foreground/80 bg-secondary/70 dark:bg-secondary/30 rounded-lg"
                      aria-label="View on GitHub"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 animate-element opacity-0">
          <a 
            href="https://github.com/count58" 
            target="_blank"
            rel="noreferrer"
            className="btn-hover inline-flex items-center gap-2 px-6 py-3 bg-white/10 dark:bg-black/30 backdrop-blur-md border border-primary/30 rounded-full text-primary font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            See More Projects on GitHub <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
