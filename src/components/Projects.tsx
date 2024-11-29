import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all', ...new Set(projects.map(project => project.category))];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600">Explore some of my recent work</p>
        </div>
        
        <div className="flex justify-center gap-4 mb-12 overflow-x-auto py-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full capitalize transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="card group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-end gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transform hover:-translate-y-1 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href="https://github.com"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transform hover:-translate-y-1 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.testimonial && (
                  <blockquote className="border-l-4 border-blue-600 pl-4 mt-6">
                    <p className="text-gray-600 italic text-sm">{project.testimonial.text}</p>
                    <footer className="mt-2 text-sm">
                      <strong>{project.testimonial.author}</strong>
                      <span className="text-gray-500"> - {project.testimonial.role}</span>
                    </footer>
                  </blockquote>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}