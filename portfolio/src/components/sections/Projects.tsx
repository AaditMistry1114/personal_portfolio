// src/components/sections/Projects.tsx
import Container from '../layout/Container';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A modern web application built with React and TypeScript, focusing on performance and user experience.',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Full-stack solution with real-time data synchronization and responsive design for mobile and desktop.',
      tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Interactive dashboard with data visualization and analytics, built for scalability and maintainability.',
      tags: ['React', 'D3.js', 'Redux'],
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-black py-24">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-gray-300 bg-white/5 px-3 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}