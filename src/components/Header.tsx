import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-gray-800">
            Portfolio
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-gray-900 transition-colors ${
                    isActive ? 'text-blue-600 font-semibold' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            
            <div className="flex items-center space-x-4">
              <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-600 hover:text-gray-900">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-gray-600 hover:text-gray-900 transition-colors ${
                      isActive ? 'text-blue-600 font-semibold' : ''
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}