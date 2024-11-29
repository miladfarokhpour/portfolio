export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}