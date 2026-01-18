import { useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface CertificateCardProps {
  title: string;
  provider: string;
  description: string;
  file: string;
}

export default function CertificateCard({
  title,
  provider,
  description,
  file,
}: CertificateCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only apply tilt/glow on desktop (lg breakpoint and above)
    if (window.innerWidth < 1024) return;
    
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;

    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;
    setGlowPosition({ x: glowX, y: glowY });
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 1024) return;
    
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-6 transition-all duration-300 ease-out overflow-hidden group w-full"
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Cursor spotlight glow - desktop only */}
      <div
        className="absolute inset-0 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle 200px at ${glowPosition.x}% ${glowPosition.y}%, rgba(255, 255, 255, 0.08), transparent 80%)`,
        }}
      />

      <div className="relative z-10">
        {/* Provider */}
        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
          {provider}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
          {description}
        </p>

        {/* View Certificate Link */}
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors group/link"
        >
          View Certificate
          <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}