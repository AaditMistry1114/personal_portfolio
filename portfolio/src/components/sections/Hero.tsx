// src/components/sections/Hero.tsx
import { Github, Linkedin, Instagram } from 'lucide-react';
import Container from '../layout/Container';
import { scrollToSection } from '../../lib/scroll';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-black">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Aadit Mistry
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              Web Developer with a strong backend foundation and a passion for building practical, adaptable solutions.
            </p>

            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Passionate about learning new technologies quickly and turning ideas into working projects using modern tools.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="/resume.pdf"
                download
                className="
                  px-6 py-3
                  bg-white text-black font-medium rounded-lg
                  shadow-md
                  transition-all duration-300
                  hover:bg-gray-200
                  hover:-translate-y-0.5
                  hover:shadow-lg
                "
              >
                Download Resume
            </a>


             <button
  onClick={() => scrollToSection('projects')}
  className="
    px-6 py-3
    border border-white/20 text-white font-medium rounded-lg
    bg-white/5 backdrop-blur
    transition-all duration-300
    hover:border-white/40
    hover:bg-white/10
    hover:-translate-y-0.5
  "
>
  View Projects
</button>


            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/AaditMistry1114"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/aadit-mistry-b5865b317/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="https://www.instagram.com/_aadicted/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

         {/* RIGHT: PROFILE IMAGE */}
<div className="flex justify-center lg:justify-end">
  <div className="relative">
    <img
      src="/profile.jpeg"
      alt="Aadit Mistry"
      className="w-80 h-80 object-cover rounded-2xl border border-white/10
      transition-all duration-700 ease-out
      shadow-[0_0_25px_rgba(255,255,255,0.18)]
      hover:-translate-y-1
      hover:shadow-[0_0_40px_rgba(255,255,255,0.45)]"
    />
  </div>
</div>


        </div>
      </Container>
    </section>
  );
}
