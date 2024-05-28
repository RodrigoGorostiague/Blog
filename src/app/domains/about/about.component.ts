import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, inject, QueryList, ElementRef, ViewChildren, signal, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Carousel, CarouselOptions, CarouselItem } from 'flowbite';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive, TranslateModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export default class AboutComponent implements OnInit, AfterViewInit{
  constructor(){
    this.loadTraslations();
    this.translate.onLangChange.subscribe(() => {
      // Volver a cargar las traducciones dinámicas
      this.loadTraslations();
    });
  }
  router = inject(Router);
  translate = inject(TranslateService);
  skills: any = []
  projects: any = []

  loadTraslations() {
    this.translate.get('SKILLS').subscribe((skills) => {
      this.skills = [{
        name: skills.ANGULAR.NAME,
        icon: '../../../assets/icons/LogosAngularIcon.svg',
        description: skills.ANGULAR.DESCRIPTION,
        link: 'https://angular.io/'
      },
    {
      name: skills.NESTJS.NAME,
      icon: '../../../assets/icons/LogosNestjs.svg',
      description: skills.NESTJS.DESCRIPTION,
      link: 'https://nestjs.com/'
    }]
    });

    this.translate.get('PROJECTS').subscribe((projects) => {
      this.projects = [{
        name: projects.ECOMMERCE.TITLE,
        description: projects.ECOMMERCE.DESCRIPTION,
        techs: ['../../../assets/icons/LogosAngularIcon.svg', '../../../assets/icons/LogosNestjs.svg', '../../../assets/icons/LogosPostgresql.svg'],
        link: 'http://algo-ecommerce.herokuapp.com/',
        images: [
          '../../../assets/icons/LogosAngularIcon.svg',
          '../../../assets/icons/LogosApacheSupersetIcon.svg',
          '../../../assets/icons/LogosNestjs.svg',
          '../../../assets/icons/LogosSpringIcon.svg',
          '../../../assets/icons/LogosNestjs.svg',
          '../../../assets/icons/LogosNestjs.svg',
        ]
      },
    {
      name: projects.TRELLO_CLONE.TITLE,
      description: projects.TRELLO_CLONE.DESCRIPTION,
      techs: ['../../../assets/icons/LogosAngularIcon.svg', '../../../assets/icons/LogosNestjs.svg', '../../../assets/icons/LogosPostgresql.svg'],
      link: '',
      images: [
        '../../../assets/icons/LogosAngularIcon.svg',
        '../../../assets/icons/LogosApacheSupersetIcon.svg',
        '../../../assets/icons/LogosNestjs.svg',
        '../../../assets/icons/LogosSpringIcon.svg',
        '../../../assets/icons/LogosNestjs.svg',
        '../../../assets/icons/LogosNestjs.svg',
      ]
    },
    {
      name: projects.DASHBOARDS.TITLE,
      description: projects.DASHBOARDS.DESCRIPTION,
      techs: ['../../../assets/icons/LogosApacheSupersetIcon.svg'],
      link: '',
      images: [
        '../../../assets/icons/LogosAngularIcon.svg',
        '../../../assets/icons/LogosApacheSupersetIcon.svg',
        '../../../assets/icons/LogosNestjs.svg',
        '../../../assets/icons/LogosSpringIcon.svg',
        '../../../assets/icons/LogosNestjs.svg',
        '../../../assets/icons/LogosNestjs.svg',
      ]
    }
    ];
    });
  }


  /* skills = [
    {name: 'Angular',
    icon: '../../../assets/icons/LogosAngularIcon.svg',
    description:"Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.",
    link: 'https://angular.io/'
    },
    {
      name: 'NestJS',
      icon: '../../../assets/icons/LogosNestjs.svg',
      description:"NestJS is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).",
      link: 'https://nestjs.com/'
    },
    {
      name: 'Spring Boot',
      icon: '../../../assets/icons/LogosSpringIcon.svg',
      description:"Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can 'just run'. We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss.",
      link: 'https://spring.io/projects/spring-boot'
    },
    {
      name: 'PostgreSQL',
      icon: '../../../assets/icons/LogosPostgresql.svg',
      description:"PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.",
      link: 'https://www.postgresql.org/'
    },
    {
      name:'Postman',
      icon: '../../../assets/icons/LogosPostmanIcon.svg',
      description:"Postman is a collaboration platform for API development. Postman's features simplify each step of building an API and streamline collaboration so you can create better APIs—faster.",
      link: 'https://www.postman.com/'
    },
    {
      name:'Docker',
      icon: '../../../assets/icons/LogosDockerIcon.svg',
      description:"Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.",
      link: 'https://www.docker.com/'
    },
    {
      name: 'Supraset',
      icon: '../../../assets/icons/LogosApacheSupersetIcon.svg',
      description:"Apache Superset is a modern, enterprise-ready business intelligence web application. Superset is fast, lightweight, intuitive, and loaded with options that make it easy for users to explore and visualize their data, from simple line charts to highly detailed geospatial charts.",
      link: 'https://superset.apache.org/'
    }
  ]

  projects = [
    {
      title: 'E-Commerce',
      description: 'E-commerce website with Angular and NestJS',
      techs: ['../../../assets/icons/LogosAngularIcon.svg', '../../../assets/icons/LogosNestjs.svg', '../../../assets/icons/LogosPostgresql.svg'],
      link: 'http://algo-ecommerce.herokuapp.com/',
      images: [
        '../../../assets/icons/LogosAngularIcon.svg',
        '../../../assets/icons/LogosApacheSupersetIcon.svg',
        '../../../assets/icons/LogosNestjs.svg',
        '../../../assets/icons/LogosSpringIcon.svg',
        '../../../assets/icons/LogosNestjs.svg',
        '../../../assets/icons/LogosNestjs.svg',
      ]
    },
    {
      title: 'Trello Clone',
      description: 'Trello Clone with Angular and NestJS',
      techs: ['../../../assets/icons/LogosAngularIcon.svg', '../../../assets/icons/LogosNestjs.svg', '../../../assets/icons/LogosPostgresql.svg'],
      link: '',
      images: [
        '../../../assets/icons/LogosAngularIcon.svg',
        '../../../assets/icons/LogosApacheSupersetIcon.svg',
        '../../../assets/icons/LogosNestjs.svg',
        '../../../assets/icons/LogosSpringIcon.svg',
        '../../../assets/icons/LogosNestjs.svg',
        '../../../assets/icons/LogosNestjs.svg',
      ]
    },
    {
      title: 'Dashboards',
      description: 'Dashboards with Apache Superset',
      techs: ['../../../assets/icons/LogosApacheSupersetIcon.svg'],
      link: '',
      images: [
        '../../../assets/icons/LogosAngularIcon.svg',
        '../../../assets/icons/LogosApacheSupersetIcon.svg',
        '../../../assets/icons/LogosNestjs.svg',
        '../../../assets/icons/LogosSpringIcon.svg',
        '../../../assets/icons/LogosNestjs.svg',
        '../../../assets/icons/LogosNestjs.svg',
      ]
    }
  ] */

  @ViewChildren('carousel') carousels!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.loadTraslations();
  }

  ngAfterViewInit() {
    this.carousels.forEach((carouselElement, index) => {
      const element = carouselElement.nativeElement;

      const items = Array.from(element.querySelectorAll('[data-carousel-item]')).map((item, idx) => ({
        position: idx,
        el: item as HTMLElement
      }));

      const options: CarouselOptions = {
        defaultPosition: 0,
        interval: 3000,
        indicators: {
          activeClasses: 'bg-white dark:bg-gray-800',
          inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
          items: Array.from(element.querySelectorAll('[data-carousel-slide-to]')).map((indicator, idx) => ({
            position: idx,
            el: indicator as HTMLElement
          }))
        },
        onNext: () => {
          console.log('next slider item is shown');
        },
        onPrev: () => {
          console.log('previous slider item is shown');
        },
        onChange: () => {
          console.log('new slider item has been shown');
        }
      };

      const carousel = new Carousel(element, items, options);

      // Attach event listeners for controls
      const prevButton = element.querySelector('[data-carousel-prev]');
      const nextButton = element.querySelector('[data-carousel-next]');

      if (prevButton) {
        prevButton.addEventListener('click', () => carousel.prev());
      }

      if (nextButton) {
        nextButton.addEventListener('click', () => carousel.next());
      }
    });
  }

  navigateTo(link: string) {
    this.router.navigateByUrl(link);
  }
}
