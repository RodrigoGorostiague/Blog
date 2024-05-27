import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './domains/shared/components/navbar/navbar.component';
import { FooterComponent } from './domains/shared/components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterOutlet, FooterComponent],
  template: `
    <div class=" ">
      <app-navbar></app-navbar>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div> `
})
export class AppComponent {
  title = 'Citrux-Blog';
  ngOnInit(): void {
    initFlowbite();
  }
}
