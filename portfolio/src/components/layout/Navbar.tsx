// src/components/layout/Navbar.tsx
import { useState, useEffect } from 'react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { scrollToSection } from '../../lib/scroll';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'inquiry', label: 'Contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(navItems.map(item => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-sm border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-white font-semibold text-lg hover:text-gray-300 transition-colors focus:outline-none focus:text-gray-300 active:text-gray-400"
          >
            Portfolio
          </button>

          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors focus:outline-none ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white active:text-gray-300'
                  }`}
                >
                    
                  {item.label}
                </button>
              </li>
            ))}
            <li>
            <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-lg px-4 py-2 text-sm font-medium text-white 
                bg-white/10 backdrop-blur 
                border border-white/20 
                transition-all duration-300 
                hover:bg-white hover:text-black 
                hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
                <span className="tracking-wide">Resume</span>

            </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}