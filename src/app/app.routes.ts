import { Routes } from '@angular/router';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';
import BlogComponent from './domains/shared/components/blog/blog.component';
import TimelineComponent from './domains/timeline/timeline.component';
import SingupComponent from './domains/singup/singup.component';
import ContactComponent from './domains/contact/contact.component';
import AboutDetailComponent from './domains/shared/components/about-detail/about-detail.component';
import AboutComponent from './domains/about/about.component';
import MainComponent from './domains/main/main.component';

/* export const routes: Routes = [
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
        path: 'blogs',
        loadComponent: () => import('./domains/timeline/timeline.component')
      },
      {
        path: 'blog-detail',
        loadComponent: () => import('./domains/shared/components/blog/blog.component')
      },
      {
        path: 'timeline',
        loadComponent: () => import('./domains/timeline/timeline.component')
      },
      {
        path: 'singup',
        loadComponent: () => import('./domains/singup/singup.component')
      }

    ]
},
{
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
}
]; */
export const routes: Routes = [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        component: MainComponent
      },
      {
        path: 'about',
        component: AboutComponent,
        children: [
          {
            path: 'detail',
            component: AboutDetailComponent
          }
        ]
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'blogs',
        component: TimelineComponent,
        children: [
          { path: 'id', component: BlogComponent } // Corrección del marcador de posición dinámico ':id'
        ]
      },
      {
        path: 'singup',
        component: SingupComponent // Corrección del nombre del componente de registro
      },
  { path: '**', redirectTo: '/home' }
];
