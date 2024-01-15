import { Routes } from '@angular/router';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./domains/main/main.component')
      },
      {
        path: 'about',
        loadComponent: () => import('./domains/about/about.component')
      },
      {
        path: 'contact',
        loadComponent: () => import('./domains/contact/contact.component')
      }

    ]
},
{
    path: '**',
    component: LayoutComponent
}
];
