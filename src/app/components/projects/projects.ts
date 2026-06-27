import { Component } from '@angular/core';
import { ProjectModal, ProjectData } from '../project-modal/project-modal';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectModal],
  templateUrl: './projects.html',
})
export class Projects {
  selectedProject: ProjectData | null = null;

  projects: ProjectData[] = [
    {
      title: 'IntegraVida Platform',
      role: 'Full Stack & DevOps Engineer',
      date: 'Dec 2025 – Mar 2026',
      description:
        'Architected scalable microservices using Spring Boot 4.0.6 and Java 21 with modular Domain-Driven Design (DDD) spanning five bounded contexts (IAM, profiles, patients, medical, monitoring). Engineered a modular Angular 21 frontend application with reusable services and responsive UI components. Designed RESTful API endpoints with automatic Swagger/OpenAPI 3.0 documentation. Built a comprehensive Docker-based PostgreSQL 16 solution with automated initialization scripts, persistent volume management, and connection pooling. Executed production deployment on the Render platform.',
      technologies: ['Spring Boot', 'Java 21', 'Angular 21', 'TypeScript', 'PostgreSQL 16', 'Docker', 'Render'],
      images: [
        '/integravida-frontend.png',
        '/integravida-swaggerUI.png',
        '/integravida-landingpage.png',
        '/dockerPostgresql.png',
      ],
      links: [
        { label: 'Swagger UI', url: 'https://integravida-backendservices.onrender.com/swagger-ui/index.html' },
        { label: 'Frontend', url: 'https://integravida-appweb.web.app/dashboard' },
        { label: 'Landing Page', url: 'https://mts-opensource.github.io/IntegraVida/' },
      ],
    },
    {
      title: 'ColdTrace Platform',
      role: 'Full Stack Developer',
      date: 'Dec 2025 – Mar 2026',
      description:
        'Developed an enterprise-grade ASP.NET Core Web API (.NET 10.0) with organization-scoped REST endpoints, Role-Based Access Control (RBAC), and multi-tenancy support. Engineered a responsive Vue 3 application using the Composition API and Vite, integrating multi-language support (i18n) and real-time offline synchronization. Implemented a data access layer using Entity Framework Core 10 and MySQL, managing an 18-table domain schema with optimized repository patterns. Established a CI/CD pipeline through GitHub Actions, automating tests, Docker image creation, and deployment to Google Cloud Run and Vercel.',
      technologies: ['ASP.NET Core', '.NET 10', 'Vue 3', 'Vite', 'MySQL', 'EF Core', 'GitHub Actions', 'Google Cloud Run', 'Vercel'],
      images: [
        '/coldtrace-frontend.png',
        '/coldtrace-frontend2.png',
        '/coldtrace-frontend3.png',
        '/coldtrace-swaggerUI.png',
        '/coldtrace-landingpage.png',
      ],
      links: [
        { label: 'Swagger UI', url: 'https://coldtrace-platform-55771439812.us-central1.run.app/swagger/index.html' },
        { label: 'Frontend', url: 'https://coldtrace-frontend-web.vercel.app/identity-access/sign-in' },
        { label: 'Landing Page', url: 'https://aplicacionesweb-grupo-2.github.io/landing-page/' },
      ],
    },
    {
      title: 'NATIVO SHAPI',
      role: 'Full Stack Developer',
      date: 'Dec 2025 – Mar 2026',
      description:
        'Architected a full-stack e-commerce platform for an indigenous artisan brand using Angular 19, Node.js, and Tailwind CSS. Developed a RESTful API backend with Node.js/Express.js, implementing structured routing and middleware-based validation. Deployed the application on AWS using S3 for static hosting and CloudFront as a CDN, ensuring HTTPS enforcement and optimized caching.',
      technologies: ['Angular 19', 'Node.js', 'Express.js', 'Tailwind CSS', 'AWS S3', 'CloudFront'],
      images: ['/nativoshapi.png'],
      links: [
        { label: 'Live Site', url: 'https://d20a8dmrycj9vg.cloudfront.net/' },
      ],
    },
    {
      title: 'SafeZone',
      role: 'Frontend Developer',
      date: 'Nov 2025 – Dec 2025',
      description:
        'Designed a real-time safety monitoring interface enabling visual alert management and instant decision-making for water safety environments. Implemented WCAG accessibility standards, multi-language support, and optimized real-time data rendering using pure JavaScript (ES6+).',
      technologies: ['JavaScript (ES6+)', 'WCAG', 'i18n'],
      images: ['/safezone.png'],
      links: [],
    },
    {
      title: 'Login Template',
      role: 'Backend Developer',
      date: 'Aug 2025 – Oct 2025',
      description:
        'Built a reusable Node.js/Express.js authentication engine designed for large-scale projects, reducing initial setup time by 40%. Implemented JWT-based authentication with custom middleware for request interception, session management, and server-side route protection.',
      technologies: ['Node.js', 'Express.js', 'JWT'],
      images: ['/logintemplate-sawggerUI.png', '/logintemplate-postman.png'],
      links: [],
    },
    {
      title: 'PostWeb',
      role: 'Full Stack Developer',
      date: 'Jul 2025 – Oct 2025',
      description:
        'Led the complete development lifecycle from concept and data modeling to deployment of an order-management platform using React and Node.js. Managed MySQL persistence with an optimized schema for orders and users, ensuring data consistency and fast query response times.',
      technologies: ['React', 'Node.js', 'MySQL'],
      images: ['/postweb.png'],
      links: [],
    },
  ];

  openProject(project: ProjectData) {
    this.selectedProject = project;
  }

  closeProject() {
    this.selectedProject = null;
  }
}
