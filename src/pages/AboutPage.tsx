import React from 'react';
import { Briefcase, Code, Coffee, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              I'm a passionate full-stack developer with over 5 years of experience in creating
              beautiful, functional, and user-centered digital experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Code className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                <p className="text-gray-600">
                  Proficient in modern web technologies including React, Node.js, and TypeScript.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Globe className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Experience</h3>
                <p className="text-gray-600">
                  Worked with clients from over 10 countries on various digital projects.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Briefcase className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Industry Knowledge</h3>
                <p className="text-gray-600">
                  Deep understanding of software development best practices and methodologies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Coffee className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                <p className="text-gray-600">
                  Passionate about finding elegant solutions to complex problems.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">My Journey</h2>
            <p className="text-gray-600 mb-6">
              Starting as a self-taught developer, I've grown into a full-stack engineer
              working with cutting-edge technologies. I believe in writing clean, maintainable
              code and creating intuitive user experiences.
            </p>

            <h2 className="text-2xl font-bold mb-4">What I Do</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Full-stack web development</li>
              <li>Mobile app development</li>
              <li>UI/UX design</li>
              <li>Technical consultation</li>
              <li>Performance optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}