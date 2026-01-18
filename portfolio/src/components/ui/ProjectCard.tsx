// src/components/ui/ProjectCard.tsx
import { useState, useRef } from 'react';
import type { MouseEvent } from 'react';

import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  features?: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  features,
  techStack,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tiltStyle, setTiltStyle] = useState({});

  // Handle mouse movement for tilt and glow effects
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to card center
    // Values range from -1 to 1 (center is 0,0)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Store raw mouse position for spotlight glow
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    // Calculate tilt angles
    // Multiply by 2 to get range of -1 to 1, then scale to desired tilt
    // Maximum tilt is 7 degrees for smooth, professional effect
    const tiltX = y * 7; // Vertical mouse movement affects X-axis rotation
    const tiltY = -x * 7; // Horizontal mouse movement affects Y-axis rotation

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-6px)`,
    });
  };

  // Reset card to default state on mouse leave
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative border border-white/10 rounded-lg p-6 transition-all duration-300 ease-out"
      style={{
        ...tiltStyle,
        // Smooth transitions for transform changes
        transitionProperty: 'transform, box-shadow, border-color',
        boxShadow: isHovered
        ? `
            0 25px 50px rgba(0, 0, 0, 0.55),
            0 0 0 1px rgba(255, 255, 255, 0.15)
        `
        : '0 4px 6px rgba(0, 0, 0, 0.1)',

        borderColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.4)',
      }}
    >
      {/* Cursor-following spotlight glow */}
      {/* Radial gradient centered on mouse position with very low opacity */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-lg pointer-events-none opacity-50"
          style={{
            background: `radial-gradient(
            700px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(255, 255, 255, 0.22),
            rgba(255, 255, 255, 0.08) 25%,
            transparent 45%
            )`,
          }}
        />
      )}

      {/* Card content - positioned relative to appear above glow */}
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>

        <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>

        {features && features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
            <ul className="space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-400 flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-5">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs text-gray-300 bg-white/5 px-3 py-1 rounded border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}