import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Instagram,
  ArrowRight,
} from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { scrollToSection } from '../../lib/scroll';

const navItems = [
  { id: 'hero', label: 'Home', number: '01' },
  { id: 'about', label: 'About', number: '02' },
  { id: 'certificates', label: 'Certificates', number: '03' },
  { id: 'experience', label: 'Experience', number: '04' },
  { id: 'projects', label: 'Projects', number: '05' },
  { id: 'inquiry', label: 'Contact', number: '06' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(navItems.map((i) => i.id));

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => handleNavClick('hero')}
            className="text-white font-semibold text-lg"
          >
            Aadit Mistry
          </button>

          {/* Desktop */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
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
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-sm text-white hover:bg-white hover:text-black transition"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-white p-2"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE BOTTOM SHEET */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sheet */}
        <div
          className={`absolute bottom-0 inset-x-0 bg-black border-t border-white/10 rounded-t-2xl
          transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="px-6 pt-6 pb-10 space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-white text-lg font-semibold">Navigation</h2>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="text-gray-400" />
              </button>
            </div>

            {/* Links */}
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-4 rounded-xl text-left transition ${
                      activeSection === item.id
                        ? 'bg-white/10 text-white'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-gray-500">
                        {item.number}
                      </span>
                      <span className="text-base font-medium">
                        {item.label}
                      </span>
                    </div>
                    <ArrowRight size={16} />
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="/resume.pdf"
              download
              className="block w-full text-center py-4 rounded-xl bg-white text-black font-semibold"
            >
              Download Resume
            </a>

            {/* Social */}
            <div className="flex justify-center gap-6 pt-2">
              <a
                href="https://github.com/AaditMistry1114"
                target="_blank"
                className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aadit-mistry-b5865b317/"
                target="_blank"
                className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/_aadicted/"
                target="_blank"
                className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
