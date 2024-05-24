import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet />'
})
export class AppComponent {
  title = 'Citrux-Blog';
  ngOnInit(): void {
    initFlowbite();
  }
}
