import React from 'react';
import { ArrowRight, Code, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 animate-fade-up">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Available for new projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight animate-fade-up animate-delay-100">
            Crafting Digital
            <span className="text-blue-600"> Experiences</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-up animate-delay-200">
            Full-stack developer specializing in creating beautiful, functional, and user-centered digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up animate-delay-300">
            <Link
              to="/projects"
              className="btn-primary group"
            >
              View Projects
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="btn-secondary"
            >
              Get in Touch
            </Link>
          </div>

          <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <Code className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-600">Writing maintainable and scalable solutions</p>
            </div>
            {/* Add more feature cards here */}
          </div>
        </div>
      </div>
    </section>
  );
}