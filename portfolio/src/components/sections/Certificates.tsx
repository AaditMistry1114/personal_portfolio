// src/components/sections/Certificates.tsx
import Container from '../layout/Container';
import CertificateCard from '../ui/CertificateCard';

export default function Certificates() {
  const certificates = [
    {
      title: 'Python Programming',
      provider: 'Udemy',
      description: 'Python fundamentals, logic building, backend readiness',
      file: '/certificates/python-udemy.pdf',
    },
    {
      title: 'Software Engineering Fundamentals',
      provider: 'Infosys Springboard',
      description: 'Software engineering principles, SDLC, clean code practices',
      file: '/certificates/software-engineering-infosys.pdf',
    },
    {
      title: 'Networking Basics',
      provider: 'Cisco',
      description: 'Networking fundamentals, protocols, system communication',
      file: '/certificates/networkingbasics-cisco.pdf',
    },
  ];

  return (
    <section id="certificates" className="min-h-screen flex items-center bg-black py-24">
      <Container>
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & Learning
          </h2>
          <p className="text-lg text-gray-400">
            Verified certifications from recognized platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              provider={cert.provider}
              description={cert.description}
              file={cert.file}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}