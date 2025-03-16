
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Create animation cycle for the button to catch attention
    const animationInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000);
    
    return () => clearInterval(animationInterval);
  }, []);
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl animate-fade-in w-72">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-lg text-green-600">WhatsApp Support</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              <span className="text-xl">&times;</span>
            </button>
          </div>
          <p className="text-sm mb-3 text-foreground/80">
            Hi there! 👋 Need IT support or want to discuss a project? Message me directly on WhatsApp.
          </p>
          <a 
            href="https://wa.me/254758913807?text=Hello%20Peter%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20project%20or%20opportunity."
            target="_blank"
            rel="noreferrer"
            className="btn-hover block w-full py-2 px-3 bg-green-600 hover:bg-green-700 text-white rounded-md text-center transition-colors"
          >
            Start Chat
          </a>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`btn-hover flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-colors ${
          isAnimating ? 'animate-bounce' : ''
        }`}
        aria-label="WhatsApp Chat"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
