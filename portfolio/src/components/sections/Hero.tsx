// src/components/sections/Hero.tsx
import Container from '../layout/Container';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-black">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Building Digital Experiences
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
            Frontend engineer crafting clean, performant web applications
            with modern technologies and thoughtful design.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <button className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors">
              View Projects
            </button>
            
            <button className="px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:border-white/40 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}