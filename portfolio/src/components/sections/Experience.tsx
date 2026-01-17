// src/components/sections/Experience.tsx
import Container from '../layout/Container';

export default function Experience() {
  const responsibilities = [
    'Planned and managed technical and non-technical events',
    'Coordinated with junior team members and delegated tasks',
    'Acted as a liaison between faculty and student teams',
    'Managed event logistics including prize distribution',
    'Ensured smooth execution under time constraints',
  ];

  const skills = [
    'Leadership and team coordination',
    'Working effectively with people',
    'Event planning and execution',
    'Handling responsibilities under pressure',
    'Practical problem-solving',
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center bg-black py-24">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Experience & Leadership
        </h2>

        <div className="max-w-4xl">
          <div className="border border-white/10 rounded-lg p-8">
            <div className="flex items-start gap-6 mb-6">
              <img
                src="/iste-logo.jpg"
                alt="ISTE Logo"
                className="w-16 h-16 object-contain opacity-70 grayscale"
              />
              
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Senior Member & Event Manager
                </h3>
                <p className="text-lg text-gray-300 mb-1">
                  ISTE – Indian Society for Technical Education
                </p>
                <p className="text-sm text-gray-400">
                  2023 – 2024
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Responsibilities
              </h4>
              <ul className="space-y-2">
                {responsibilities.map((item, index) => (
                  <li key={index} className="text-gray-400 flex items-start">
                    <span className="text-gray-500 mr-3">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Skills Gained
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-sm text-gray-300 bg-white/5 px-4 py-2 rounded-lg border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8">
            <a
                href="https://drive.google.com/drive/u/0/folders/1tnahdDfOgElNqPWXDIipb2EfeTNDQVll"
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex items-center gap-2
                text-sm text-gray-400
                hover:text-white
                transition-colors
                "
            >
                <span>View Certificate / Letter of Recommendation</span>
                <span className="text-xs">↗</span>
            </a>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}