// Navigation
const Navigation = {
    init() {
        this.setupMobileMenu();
    },

    setupMobileMenu() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn?.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
};

// Projects
const ProjectManager = {
    projects: [
        {
            id: 1,
            title: 'Smart Home Dashboard',
            description: 'A comprehensive IoT dashboard for managing smart home devices with real-time monitoring and control.',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1600',
            technologies: ['React', 'Node.js', 'Socket.io']
        },
        {
            id: 2,
            title: 'Health Tracking App',
            description: 'A mobile application for tracking health metrics and daily wellness activities.',
            category: 'mobile',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600',
            technologies: ['React Native', 'TypeScript', 'Firebase']
        },
        {
            id: 3,
            title: 'AI Content Generator',
            description: 'An AI-powered platform for generating and optimizing marketing content.',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600',
            technologies: ['Next.js', 'Python', 'OpenAI']
        }
    ],

    init() {
        if (document.querySelector('.projects-grid')) {
            this.setupFilters();
            this.filterProjects('all');
        }
    },

    createProjectCard(project) {
        return `
            <article class="card">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-overlay">
                        <div class="project-links">
                            <a href="#" class="project-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                            <a href="#" class="project-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-technologies">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                </div>
            </article>
        `;
    },

    filterProjects(category) {
        const filteredProjects = category === 'all'
            ? this.projects
            : this.projects.filter(project => project.category === category);
        
        const projectsGrid = document.querySelector('.projects-grid');
        if (projectsGrid) {
            projectsGrid.innerHTML = filteredProjects.map(project => this.createProjectCard(project)).join('');
        }
    },

    setupFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                this.filterProjects(button.dataset.category);
            });
        });
    }
};

// Contact Form
const ContactForm = {
    init() {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            this.setupFormSubmission(contactForm);
        }
    },

    setupFormSubmission(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            console.log('Form submitted:', data);
            form.reset();
            alert('Thank you for your message! I will get back to you soon.');
        });
    }
};

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    Navigation.init();
    ProjectManager.init();
    ContactForm.init();
});