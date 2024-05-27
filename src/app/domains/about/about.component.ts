import { Component, AfterViewInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Carousel, CarouselOptions, CarouselItem } from 'flowbite';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export default class AboutComponent implements AfterViewInit {
  router = inject(Router);

  skills = [
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

  ngAfterViewInit() {
    const carouselElement = document.getElementById('default-carousel');

    if (carouselElement) {
      const items: CarouselItem[] = Array.from(carouselElement.querySelectorAll('[data-carousel-item]')).map((item, index) => ({
        position: index,
        el: item as HTMLElement
      }));

      const options: CarouselOptions = {
        defaultPosition: 0,
        interval: 3000,
        indicators: {
          activeClasses: 'bg-white dark:bg-gray-800',
          inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
          items: Array.from(carouselElement.querySelectorAll('[data-carousel-slide-to]')).map((indicator, index) => ({
            position: index,
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

      const carousel = new Carousel(carouselElement, items, options);

      // Attach event listeners for controls
      const prevButton = carouselElement.querySelector('[data-carousel-prev]');
      const nextButton = carouselElement.querySelector('[data-carousel-next]');

      if (prevButton) {
        prevButton.addEventListener('click', () => carousel.prev());
      }

      if (nextButton) {
        nextButton.addEventListener('click', () => carousel.next());
      }
    }
  }

  navigateTo(link: string) {
    this.router.navigateByUrl(link);
  }
}
