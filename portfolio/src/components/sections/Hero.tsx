// src/components/sections/Hero.tsx
import { Github, Linkedin, Instagram } from 'lucide-react';
import Container from '../layout/Container';
import { scrollToSection } from '../../lib/scroll';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-black pt-24 lg:pt-0">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
              Aadit Mistry
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 lg:mb-6 leading-relaxed">
              Web Developer with a strong backend foundation and a passion for building practical, adaptable solutions.
            </p>

            <p className="text-base md:text-lg text-gray-400 mb-8 lg:mb-10 leading-relaxed">
              Passionate about learning new technologies quickly and turning ideas into working projects using modern tools.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 lg:mb-10">
              <a
                href="/resume.pdf"
                download
                className="
                  w-full sm:w-auto
                  px-6 py-3
                  bg-white text-black font-medium rounded-lg
                  shadow-md
                  transition-all duration-300
                  md:hover:bg-gray-200
                  md:hover:-translate-y-0.5
                  md:hover:shadow-lg
                  text-center
                "
              >
                Download Resume
              </a>

              <button
                onClick={() => scrollToSection('projects')}
                className="
                  w-full sm:w-auto
                  px-6 py-3
                  border border-white/20 text-white font-medium rounded-lg
                  bg-white/5 backdrop-blur
                  transition-all duration-300
                  md:hover:border-white/40
                  md:hover:bg-white/10
                  md:hover:-translate-y-0.5
                "
              >
                View Projects
              </button>
            </div>

          {/* SOCIAL ICONS - Premium micro-interactions */}
<div className="flex items-center justify-center lg:justify-start gap-6">
  <a
    href="https://github.com/AaditMistry1114"
    target="_blank"
    rel="noopener noreferrer"
    className="
      text-gray-400
      transition-all duration-400 ease-out
      hover:text-white
      md:hover:scale-105
      md:hover:-translate-y-0.5
      md:hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]
    "
    aria-label="GitHub"
  >
    <Github size={24} />
  </a>

  <a
    href="https://www.linkedin.com/in/aadit-mistry-b5865b317/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      text-gray-400
      transition-all duration-400 ease-out
      hover:text-white
      md:hover:scale-105
      md:hover:-translate-y-0.5
      md:hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]
    "
    aria-label="LinkedIn"
  >
    <Linkedin size={24} />
  </a>

  <a
    href="https://www.instagram.com/_aadicted/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      text-gray-400
      transition-all duration-400 ease-out
      hover:text-white
      md:hover:scale-105
      md:hover:-translate-y-0.5
      md:hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]
    "
    aria-label="Instagram"
  >
    <Instagram size={24} />
  </a>
</div>
          </div>

          {/* RIGHT: PROFILE IMAGE */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative">
              <img
                src="/profile.jpeg"
                alt="Aadit Mistry"
                className="
                  w-64 h-64 lg:w-80 lg:h-80
                  object-cover rounded-2xl
                  border border-white/10
                  transition-all duration-700 ease-out
                  shadow-[0_0_25px_rgba(255,255,255,0.18)]
                  md:hover:-translate-y-1
                  md:hover:shadow-[0_0_40px_rgba(255,255,255,0.45)]
                "
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}