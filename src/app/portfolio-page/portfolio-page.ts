import { Component } from '@angular/core';
import { NavBar } from '../components/nav-bar/nav-bar';
import { Hero } from '../components/hero/hero';
import { Technologies } from '../components/technologies/technologies';
import { Projects } from '../components/projects/projects';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [NavBar, Hero, Technologies, Projects, Footer],
  templateUrl: './portfolio-page.html',
})
export class PortfolioPage {}
