// src/components/sections/Inquiry.tsx
import { useState } from 'react';
import type { FormEvent } from 'react';

import emailjs from 'emailjs-com';
import Container from '../layout/Container';


export default function Inquiry() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="inquiry" className="min-h-screen flex items-center bg-black py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-center lg:text-left">
            Get in Touch
          </h2>
          
          <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 leading-relaxed text-center lg:text-left">
            Have a project in mind or want to discuss opportunities? 
            Send me a message and I'll get back to you soon.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-center text-sm sm:text-base">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}

            {status === 'error' && (
              <p className="text-red-400 text-center text-sm sm:text-base">
                Failed to send message. Please try again or contact me directly.
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}