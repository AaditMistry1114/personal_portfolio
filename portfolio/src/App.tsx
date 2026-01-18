// src/App.tsx
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Inquiry from './components/sections/Inquiry';
import Experience from './components/sections/Experience';
import Certificates from './components/sections/Certificates';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <Navbar />
      
      <main className="w-full">
        <Hero />
        <About />
        <Certificates />
        <Experience />
        <Projects />
        <Inquiry />
        </main>
        <Footer /> 
    </div>
  );
}