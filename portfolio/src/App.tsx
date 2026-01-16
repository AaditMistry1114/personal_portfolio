// src/App.tsx
import Navbar from './components/layout/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main>
        <section id="hero" className="min-h-screen"></section>
        <section id="about" className="min-h-screen"></section>
        <section id="projects" className="min-h-screen"></section>
        <section id="inquiry" className="min-h-screen"></section>
      </main>
    </div>
  );
}