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
      title: 'Translogix TMS',
      role: 'Full Stack Developer',
      date: 'Apr 2025 - Jul 2025',
      description:
        'Architected and developed a full-stack Transport Management System handling 16 logistics resource modules, including clients, vehicles, drivers, orders, dispatches, routes, zones, GPS tracking, incidents, maintenance, reports, notifications, and a social feed with comments. Designed a DDD-inspired modular backend with Domain, Application, Infrastructure, and Interfaces layers using Node.js and Express.js, supported by a reusable factory pattern that reduced code duplication across CRUD modules. Provisioned Azure infrastructure, secured inbound traffic with Network Security Groups, containerized MongoDB, Mongo Express, and the API with Docker Compose, and documented the API with Swagger UI and Postman collections.',
      technologies: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'Docker',
        'Azure VM',
        'Azure App Service',
        'Azure NSG',
        'Swagger UI',
        'Firebase Hosting',
      ],
      images: ['/translogix-1.png', '/translogix-2.png', '/translogix-3.png'],
      links: [],
    },
    {
      title: 'IntegraVida Platform',
      role: 'Full Stack Developer',
      date: 'Feb 2025 - May 2025',
      description:
        'Developed and deployed a full-stack healthcare management web platform with Angular 19 and Tailwind CSS on the frontend and a Node.js/Express.js REST API on the backend. Identified production cold start delays of 15 to 30 seconds on the original PaaS backend, then led the migration to AWS by containerizing the API, publishing the image to Elastic Container Registry, and deploying it as a continuously running ECS Fargate service. Configured API Gateway routing, CORS, throttling, ECS health checks, and task resource allocation to eliminate cold starts, improve response consistency, and establish a scalable container-based backend architecture.',
      technologies: [
        'Angular 19',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'REST API',
        'JWT',
        'Docker',
        'AWS ECR',
        'AWS ECS Fargate',
        'AWS API Gateway',
        'Firebase Hosting',
      ],
      images: [
        '/integravida-frontend.png',
        '/integravida-movil.png',
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
      date: 'Dec 2025 - Mar 2026',
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
      date: 'Dec 2025 - Mar 2026',
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
      date: 'Nov 2025 - Dec 2025',
      description:
        'Designed a real-time safety monitoring interface enabling visual alert management and instant decision-making for water safety environments. Implemented WCAG accessibility standards, multi-language support, and optimized real-time data rendering using pure JavaScript (ES6+).',
      technologies: ['JavaScript (ES6+)', 'WCAG', 'i18n'],
      images: ['/safezone.png'],
      links: [],
    },
    {
      title: 'Login Template',
      role: 'Backend Developer',
      date: 'Aug 2025 - Oct 2025',
      description:
        'Built a reusable Node.js/Express.js authentication engine designed for large-scale projects, reducing initial setup time by 40%. Implemented JWT-based authentication with custom middleware for request interception, session management, and server-side route protection.',
      technologies: ['Node.js', 'Express.js', 'JWT'],
      images: ['/logintemplate-sawggerUI.png', '/logintemplate-postman.png'],
      links: [],
    },
    {
      title: 'PostWeb',
      role: 'Full Stack Developer',
      date: 'Jul 2025 - Oct 2025',
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
