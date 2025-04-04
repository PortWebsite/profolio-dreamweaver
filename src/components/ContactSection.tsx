
import { useState, useEffect, useRef, FormEvent } from 'react';
import { Phone, Mail, Linkedin, Github, Check, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  
  const { toast } = useToast();
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
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950" ref={containerRef}>
      <div className="section-container max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-element opacity-0">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Get in Touch
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 font-display">
            Let's Work Together
          </h2>
          
          <p className="text-foreground/80">
            Have a project in mind or need IT consultation? Feel free to reach out.
            I'm always open to discussing new opportunities and challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
          {/* Contact Details */}
          <div className="lg:col-span-2 animate-element opacity-0">
            <div className="glass-card p-8 h-full border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/70 mb-1">Phone</h4>
                    <p className="font-medium">+254758913807 / +254784359445</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/70 mb-1">Email</h4>
                    <p className="font-medium">chuwapeter@yahoo.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/70 mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/peter-chuwa-77002488/" 
                      target="_blank" 
                      rel="noreferrer"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      linkedin.com/in/peter-chuwa-77002488
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-sm font-medium text-foreground/70 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/peter-chuwa-77002488/" 
                    target="_blank"
                    rel="noreferrer" 
                    className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank"
                    rel="noreferrer" 
                    className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 animate-element opacity-0">
            <form onSubmit={handleSubmit} className="glass-card p-8 border-t-4 border-primary">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block text-sm font-medium mb-2 transition-colors ${
                      focused === 'name' ? 'text-primary' : 'text-foreground/70'
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    required
                    className={`w-full px-4 py-3 rounded-lg border bg-card/50 outline-none transition-all ${
                      focused === 'name' 
                        ? 'border-primary ring-2 ring-primary/20' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block text-sm font-medium mb-2 transition-colors ${
                      focused === 'email' ? 'text-primary' : 'text-foreground/70'
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    required
                    className={`w-full px-4 py-3 rounded-lg border bg-card/50 outline-none transition-all ${
                      focused === 'email' 
                        ? 'border-primary ring-2 ring-primary/20' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="subject" 
                  className={`block text-sm font-medium mb-2 transition-colors ${
                    focused === 'subject' ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                  required
                  className={`w-full px-4 py-3 rounded-lg border bg-card/50 outline-none transition-all ${
                    focused === 'subject' 
                      ? 'border-primary ring-2 ring-primary/20' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  placeholder="How can I help you?"
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 transition-colors ${
                    focused === 'message' ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border bg-card/50 outline-none transition-all resize-none ${
                    focused === 'message' 
                      ? 'border-primary ring-2 ring-primary/20' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hover px-6 py-3 text-base font-medium text-white bg-primary rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </>
                ) : submitted ? (
                  <>
                    <Check size={18} /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
