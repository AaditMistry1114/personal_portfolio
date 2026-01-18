import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowUp,
  Check,
  Copy,
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';

export default function Footer() {
  const [isEmailCardOpen, setIsEmailCardOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const email = 'aaditmistry31@gmail.com';

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/AaditMistry1114',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/aadit-mistry-b5865b317/',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/_aadicted/',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEmailClick = () => {
    setIsEmailCardOpen((prev) => !prev);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setShowToast(true);

      setTimeout(() => setIsCopied(false), 1500);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  // Close email card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: ReactMouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsEmailCardOpen(false);
      }
    };

    if (isEmailCardOpen) {
      document.addEventListener(
        'mousedown',
        handleClickOutside as unknown as EventListener
      );
    }

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside as unknown as EventListener
      );
    };
  }, [isEmailCardOpen]);

  return (
    <footer className="w-full bg-black relative">
      {/* Toast */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 px-4 ${
          showToast
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2.5 flex items-center gap-2">
          <Check className="w-4 h-4 text-green-400" strokeWidth={2} />
          <span className="text-sm text-white font-medium">
            Email copied to clipboard
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 sm:gap-12">
          {/* Left */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-lg font-medium text-white tracking-tight">
              Aadit Mistry
            </h3>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed px-4 sm:px-0 mx-auto md:mx-0">
              Building practical, adaptable digital experiences.
            </p>
          </div>

          {/* Center */}
          <div className="relative">
            <nav className="flex items-center gap-1" aria-label="Social links">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-500 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                    aria-label={link.name}
                  >
                    <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                  </a>
                );
              })}

              <button
                onClick={handleEmailClick}
                className="p-3 text-gray-500 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Email"
              >
                <Mail className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </button>
            </nav>

            {/* Email card - Desktop: above icons, Mobile: bottom sheet */}
            <div
              ref={cardRef}
              className={`
                fixed sm:absolute 
                bottom-0 sm:bottom-full 
                left-0 sm:left-1/2 
                sm:-translate-x-1/2 sm:mb-3 
                w-full sm:w-72 
                transition-all duration-300 z-40
                ${
                  isEmailCardOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-full sm:translate-y-2 pointer-events-none'
                }
              `}
            >
              <div className="bg-white/5 backdrop-blur-sm border-t sm:border border-white/10 sm:rounded-lg rounded-t-lg sm:rounded-b-lg p-4 sm:p-5 space-y-3 mx-4 sm:mx-0 mb-4 sm:mb-0">
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                    Email Address
                  </p>
                  <p className="text-sm text-white font-mono break-all">
                    {email}
                  </p>
                </div>

                <button
                  onClick={handleCopyEmail}
                  disabled={isCopied}
                  className={`w-full py-3 px-3 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                    isCopied
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied ✓
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy email
                    </>
                  )}
                </button>
              </div>

              {/* Arrow pointer - desktop only */}
              <div className="hidden sm:block absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/5 border-b border-r border-white/10 rotate-45" />
            </div>
          </div>

          {/* Right */}
          <button
            onClick={scrollToTop}
            className="hidden md:flex items-center gap-2 text-[13px] font-medium text-gray-500 hover:text-white transition-colors duration-200 group"
          >
            <span className="relative">
              Back to top
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-200 group-hover:w-full" />
            </span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="border-t border-white/5 py-8">
          <p className="text-[13px] text-white-600 text-center font-light tracking-wide">
            © 2026 Aadit Mistry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}