// src/components/sections/About.tsx
import Container from '../layout/Container';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-black py-24">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            I specialize in building modern web applications with a focus on
            performance, accessibility, and user experience. My approach combines
            clean code practices with thoughtful design to create products that
            are both functional and enjoyable to use.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Focus Areas
              </h3>
              <p className="text-gray-400">
                Frontend architecture, component design systems, performance
                optimization, and responsive interfaces.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}