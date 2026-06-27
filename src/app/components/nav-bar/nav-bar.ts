import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.html',
})
export class NavBar {
  copyEmail() {
    navigator.clipboard.writeText('jeanpoolariass2017@gmail.com');
  }
}
