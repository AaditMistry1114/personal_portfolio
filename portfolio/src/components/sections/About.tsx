// src/components/sections/About.tsx
import Container from '../layout/Container';

export default function About() {
  const profileItems = [
    { label: 'Education', value: 'B.Tech CSE, 3rd Year' },
    { label: 'Specialty', value: 'Backend-First Developer' },
    { label: 'Approach', value: 'AI-Assisted Rapid Building' },
    { label: 'Mindset', value: 'Fast Learner & Adaptable' },
  ];

  const skills = {
    Backend: ['Node.js', 'Python', 'APIs', 'Databases'],
    Frontend: ['React', 'TypeScript', 'Tailwind CSS'],
    Tools: ['Git', 'AI Tools'],
    Learning: ['Vibe Code','System Design'],
  };

  return (
    <section id="about" className="min-h-screen flex items-center bg-black py-24">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column: About Text */}
          <div className="space-y-4">
            <p className="text-lg text-gray-400 leading-relaxed">
              I specialize in building modern web applications with a focus on
              performance, accessibility, and user experience. My approach combines
              clean code practices with thoughtful design to create products that
              are both functional and enjoyable to use.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              As a backend-first developer, I leverage AI tools to accelerate 
              development and bring ideas to life quickly, while maintaining 
              code quality and scalability.
            </p>
          </div>

          {/* Right Column: Quick Profile Card */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Profile
            </h3>
            <div className="space-y-3">
              {profileItems.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-sm text-gray-500">{item.label}</span>
                  <span className="text-gray-300">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Focus Areas / Skills Snapshot */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-6">
            Focus Areas / Skills Snapshot
          </h3>
          <div className="space-y-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-sm text-gray-500 mb-2">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}