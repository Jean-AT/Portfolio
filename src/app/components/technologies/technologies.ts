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
    { name: 'Java / Spring Boot', description: 'Backend Architecture', icon: 'code' },
    { name: 'TypeScript', description: 'Typed Language', icon: 'javascript' },
    { name: 'Angular', description: 'Frontend Framework', icon: 'data_object' },
    { name: 'Vue 3 / React', description: 'Component UI', icon: 'view_module' },
    { name: 'PostgreSQL / MySQL', description: 'Relational Storage', icon: 'database' },
    { name: 'Docker / AWS / GCP', description: 'Containerization / Cloud', icon: 'cloud' },
    {
      name: 'Node.js & ASP.NET Core',
      description: 'Server-Side Runtime & API',
      icon: 'terminal',
      wide: true,
    },
    {
      name: 'DDD & Microservices',
      description: 'Domain-Driven Design',
      icon: 'account_tree',
      wide: false,
    },
    { name: 'CI/CD & DevOps', description: 'GitHub Actions / Render / Vercel', icon: 'deployed_code' },
  ];
}
