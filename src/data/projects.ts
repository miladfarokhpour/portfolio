import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and seamless payment integration.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1600',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    testimonial: {
      text: 'The platform transformed our business, increasing online sales by 200% in the first quarter.',
      author: 'Sarah Johnson',
      role: 'CEO, TechRetail'
    }
  },
  {
    id: 'project2',
    title: 'Mobile Banking App',
    description: 'A secure and intuitive mobile banking application that handles millions of transactions daily.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600',
    category: 'Mobile Development',
    technologies: ['React Native', 'TypeScript', 'Firebase'],
    testimonial: {
      text: 'Outstanding work on our mobile app. User engagement increased significantly.',
      author: 'Michael Chen',
      role: 'CTO, FinTech Solutions'
    }
  },
  {
    id: 'project3',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time analytics dashboard with AI-driven insights and predictive modeling capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
    category: 'Data Analytics',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js']
  }
];