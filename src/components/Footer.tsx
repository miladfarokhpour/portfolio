import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Portfolio</h3>
            <p className="text-gray-400">Building digital experiences that matter.</p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}