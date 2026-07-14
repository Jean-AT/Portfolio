import { Component } from '@angular/core';

interface Tech {
  name: string;
  description: string;
  icon: string;
  wide?: boolean;
}

@Component({
  selector: 'app-technologies',
  standalone: true,
  templateUrl: './technologies.html',
})
export class Technologies {
  techs: Tech[] = [
    { name: 'Java / Spring Boot', description: 'Secure Backend APIs', icon: 'code' },
    { name: 'Node.js / Express.js', description: 'REST APIs & Services', icon: 'terminal' },
    { name: 'Angular 19 / TypeScript', description: 'Frontend Applications', icon: 'data_object' },
    { name: 'React / Tailwind CSS', description: 'Responsive Interfaces', icon: 'view_module' },
    { name: 'PostgreSQL / SQL Server', description: 'Relational Storage', icon: 'database' },
    { name: 'MongoDB / Mongoose', description: 'Document Storage', icon: 'dns' },
    {
      name: 'AWS / Azure / Firebase',
      description: 'ECS, ECR, API Gateway, App Service, Hosting',
      icon: 'cloud',
      wide: true,
    },
    {
      name: 'Docker & Docker Compose',
      description: 'Containerized Deployments',
      icon: 'deployed_code',
      wide: false,
    },
    {
      name: 'JWT / Spring Security',
      description: 'Authentication & Authorization',
      icon: 'lock',
      wide: false,
    },
    {
      name: 'DDD-inspired Architecture',
      description: 'Modular Domain Layers',
      icon: 'account_tree',
      wide: false,
    },
    { name: 'Swagger UI / Postman', description: 'API Documentation & Testing', icon: 'integration_instructions' },
    { name: 'Git / GitHub', description: 'Version Control', icon: 'hub' },
  ];
}
