
import { Github, Linkedin, MessageSquare, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-secondary/80 dark:bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-base font-medium text-foreground/80">
              Peter Chuwa
            </p>
            <p className="text-sm text-foreground/60">
              IT Support Specialist | Network & Cybersecurity Expert
            </p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://wa.me/254758913807" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-border">
          <p className="text-center text-sm text-foreground/60">
            © {currentYear} Peter Chuwa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
