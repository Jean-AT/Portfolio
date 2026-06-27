import { Component } from '@angular/core';
import { PortfolioPage } from './portfolio-page/portfolio-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PortfolioPage],
  template: '<app-portfolio-page />',
})
export class App {}
