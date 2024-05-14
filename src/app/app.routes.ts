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
        path: 'about-detail',
        loadComponent: () => import('./domains/shared/components/about-detail/about-detail.component')
      },
      {
        path: 'contact',
        loadComponent: () => import('./domains/contact/contact.component')
      },
      {
        path: 'blog',
        loadComponent: () => import('./domains/blog/blog.component')
      },
      {
        path: 'timeline',
        loadComponent: () => import('./domains/timeline/timeline.component')
      },
      {
        path: 'login',
        loadComponent: () => import('./domains/login/login.component')
      },
      {
        path: 'singup',
        loadComponent: () => import('./domains/singup/singup.component')
      }

    ]
},
{
    path: '**',
    component: LayoutComponent
}
];
