// src/components/sections/Projects.tsx
import Container from '../layout/Container';
import ProjectCard from '../ui/ProjectCard';

interface Project {
  id: number;
  name: string;
  description: string;
  features?: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      name: 'Junk Journal',
      description:
        'A clean, minimal web app to track junk food habits, visualize spending, and reflect on unhealthy eating patterns without judgment. The app focuses on awareness rather than discipline.',
      features: [
        'Calendar-based junk food tracking',
        'Daily and monthly spending breakdown',
        'Junk vs no-junk streaks',
        'Export statistics as PDF',
        'Image gallery with filtering',
      ],
      techStack: ['React', 'Vite', 'Tailwind CSS', 'Recharts', 'LocalStorage'],
      githubUrl: 'https://github.com/AaditMistry1114/junk-journal',
      liveUrl: 'https://junk-journal.vercel.app/',
    },
    {
      id: 2,
      name: 'FocusFlow',
      description:
        'A task-first productivity web app that requires users to choose a task before starting a focus session.',
      features: [
        'Task-first focus model',
        'Focus timer with pause and resume',
        'Completion sound notification',
        'Task-wise focus tracking',
        'Minimal, distraction-free UI',
      ],
      techStack: ['React', 'Vite', 'Tailwind CSS', 'LocalStorage'],
      githubUrl: 'https://github.com/AaditMistry1114/focusflow',
      liveUrl: 'https://focusflow-orpin.vercel.app/',
    },
    {
      id: 3,
      name: 'Halo Architect',
      description:
        'A professional website built during a frontend hackathon for an interior design and architecture company.',
      techStack: ['Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/AaditMistry1114/Halo-Architect',
      liveUrl: 'https://halo-architect.vercel.app/',
    },
    {
      id: 4,
      name: 'Water Pollution Report System',
      description:
        'A web-based system that allows users to report water pollution issues by selecting a location on a map.',
      features: [
        'Location-based reporting',
        'Input pH value and contamination details',
        'Interactive map with report markers',
        'Reports listing page',
      ],
      techStack: ['HTML', 'Bootstrap', 'Python', 'Flask', 'MySQL', 'Geopy'],
      githubUrl: 'https://github.com/AaditMistry1114/water_pollution_report',
    },
    {
      id: 5,
      name: 'Recipe Finder with AR',
      description:
        'A collaborative project combining a recipe search web app with augmented reality.',
      techStack: ['React', 'JavaScript', 'SCSS', 'Free Food API', 'AR'],
      githubUrl: 'https://github.com/AaditMistry1114/Major-Mini_project',
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-black py-24">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              description={project.description}
              features={project.features}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}