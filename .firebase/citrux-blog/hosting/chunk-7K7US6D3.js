import{a as q}from"./chunk-MQJCFFML.js";import{e as F}from"./chunk-PU4IVWEP.js";import{Aa as p,Ba as m,Ca as e,Da as t,Ea as d,Ga as j,Ha as r,Ia as v,La as I,Ma as C,Na as P,Oa as T,Pa as N,R as A,T as E,X as x,Y as w,ka as f,qa as a,wa as k,xa as h,za as g}from"./chunk-5WIX7MO7.js";var D=["carousel"];function z(i,s){if(i&1&&(e(0,"div",13)(1,"a",14),d(2,"img",15),t(),e(3,"div",16)(4,"h3",17)(5,"a",14),r(6),t()(),e(7,"span",18),r(8,"CEO & Web Developer"),t(),e(9,"p",19),r(10),t(),e(11,"ul",20)(12,"li"),d(13,"div",21),t()()()()),i&2){let o=s.$implicit;a(2),h("src",o.icon,f),a(4),v(o.name),a(4),v(o.description)}}function M(i,s){if(i&1&&(e(0,"div",36),d(1,"img",37),t()),i&2){let o=s.$implicit;a(),h("src",o,f)}}var O=(i,s)=>({block:i,hidden:s});function R(i,s){if(i&1&&(e(0,"div",38),d(1,"img",39),t()),i&2){let o=s.$implicit,n=s.$index;k("ngClass",C(2,O,n===0,n!==0)),a(),h("src",o,f)}}function $(i,s){if(i&1&&d(0,"button",40),i&2){let o=s.$index;k("aria-label","Slide "+(o+1))("data-carousel-slide-to",o)}}function Q(i,s){if(i&1&&(e(0,"div")(1,"div",22),p(2,M,2,1,"div",41,g),t(),e(4,"h3",23),r(5),t(),e(6,"p",24),r(7),t()(),e(8,"div",25,26)(10,"div",27),p(11,R,2,5,"div",42,g),t(),e(13,"div",28),p(14,$,1,2,"button",43,g),t(),e(16,"button",29)(17,"span",30),x(),e(18,"svg",31),d(19,"path",32),t(),w(),e(20,"span",33),r(21,"Previous"),t()()(),e(22,"button",34)(23,"span",30),x(),e(24,"svg",31),d(25,"path",35),t(),w(),e(26,"span",33),r(27,"Next"),t()()()()),i&2){let o=s.$implicit,n=s.$index;a(2),m(o.techs),a(3),v(o.title),a(2),v(o.description),a(),h("id","carousel-"+n),a(3),m(o.images),a(3),m(o.images)}}var X=(()=>{let s=class s{constructor(){this.router=A(F),this.skills=[{name:"Angular",icon:"../../../assets/icons/LogosAngularIcon.svg",description:"Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.",link:"https://angular.io/"},{name:"NestJS",icon:"../../../assets/icons/LogosNestjs.svg",description:"NestJS is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).",link:"https://nestjs.com/"},{name:"Spring Boot",icon:"../../../assets/icons/LogosSpringIcon.svg",description:"Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can 'just run'. We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss.",link:"https://spring.io/projects/spring-boot"},{name:"PostgreSQL",icon:"../../../assets/icons/LogosPostgresql.svg",description:"PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.",link:"https://www.postgresql.org/"},{name:"Postman",icon:"../../../assets/icons/LogosPostmanIcon.svg",description:"Postman is a collaboration platform for API development. Postman's features simplify each step of building an API and streamline collaboration so you can create better APIs\u2014faster.",link:"https://www.postman.com/"},{name:"Docker",icon:"../../../assets/icons/LogosDockerIcon.svg",description:"Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.",link:"https://www.docker.com/"},{name:"Supraset",icon:"../../../assets/icons/LogosApacheSupersetIcon.svg",description:"Apache Superset is a modern, enterprise-ready business intelligence web application. Superset is fast, lightweight, intuitive, and loaded with options that make it easy for users to explore and visualize their data, from simple line charts to highly detailed geospatial charts.",link:"https://superset.apache.org/"}],this.projects=[{title:"E-Commerce",description:"E-commerce website with Angular and NestJS",techs:["../../../assets/icons/LogosAngularIcon.svg","../../../assets/icons/LogosNestjs.svg","../../../assets/icons/LogosPostgresql.svg"],link:"http://algo-ecommerce.herokuapp.com/",images:["../../../assets/icons/LogosAngularIcon.svg","../../../assets/icons/LogosApacheSupersetIcon.svg","../../../assets/icons/LogosNestjs.svg","../../../assets/icons/LogosSpringIcon.svg","../../../assets/icons/LogosNestjs.svg","../../../assets/icons/LogosNestjs.svg"]},{title:"Trello Clone",description:"Trello Clone with Angular and NestJS",techs:["../../../assets/icons/LogosAngularIcon.svg","../../../assets/icons/LogosNestjs.svg","../../../assets/icons/LogosPostgresql.svg"],link:"",images:["../../../assets/icons/LogosAngularIcon.svg","../../../assets/icons/LogosApacheSupersetIcon.svg","../../../assets/icons/LogosNestjs.svg","../../../assets/icons/LogosSpringIcon.svg","../../../assets/icons/LogosNestjs.svg","../../../assets/icons/LogosNestjs.svg"]},{title:"Dashboards",description:"Dashboards with Apache Superset",techs:["../../../assets/icons/LogosApacheSupersetIcon.svg"],link:"",images:["../../../assets/icons/LogosAngularIcon.svg","../../../assets/icons/LogosApacheSupersetIcon.svg","../../../assets/icons/LogosNestjs.svg","../../../assets/icons/LogosSpringIcon.svg","../../../assets/icons/LogosNestjs.svg","../../../assets/icons/LogosNestjs.svg"]}]}ngAfterViewInit(){this.carousels.forEach((n,c)=>{let l=n.nativeElement,u=Array.from(l.querySelectorAll("[data-carousel-item]")).map((y,b)=>({position:b,el:y})),B={defaultPosition:0,interval:3e3,indicators:{activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",items:Array.from(l.querySelectorAll("[data-carousel-slide-to]")).map((y,b)=>({position:b,el:y}))},onNext:()=>{console.log("next slider item is shown")},onPrev:()=>{console.log("previous slider item is shown")},onChange:()=>{console.log("new slider item has been shown")}},S=new q(l,u,B),L=l.querySelector("[data-carousel-prev]"),_=l.querySelector("[data-carousel-next]");L&&L.addEventListener("click",()=>S.prev()),_&&_.addEventListener("click",()=>S.next())})}navigateTo(n){this.router.navigateByUrl(n)}};s.\u0275fac=function(c){return new(c||s)},s.\u0275cmp=E({type:s,selectors:[["app-about"]],viewQuery:function(c,l){if(c&1&&T(D,5),c&2){let u;P(u=N())&&(l.carousels=u)}},standalone:!0,features:[I],decls:23,vars:0,consts:[[1,"mt-10","m-auto","mb-2"],[1,"bg-white","dark:bg-gray-900"],[1,"py-8","px-4","mx-auto","max-w-screen-xl","lg:py-16","lg:px-6"],[1,"mx-auto","max-w-screen-sm","text-center","mb-8","lg:mb-16"],[1,"mb-4","text-4xl","tracking-tight","font-extrabold","text-transparent","bg-clip-text","bg-gradient-to-r","to-red-600","from-orange-500"],[1,"font-light","text-gray-500","lg:mb-16","sm:text-xl","dark:text-gray-400"],[1,"grid","grid-cols-1","lg:grid-cols-2","gap-6"],["src","../../../assets/images/personal.png","alt","mockup",1,"hidden","lg:block","lg:col-span-5","lg:float-right","lg:mr-8","custom",3,"click"],[1,"py-8","px-4","mx-auto","max-w-screen-xl","sm:py-16","lg:px-6"],[1,"max-w-screen-md","mb-8","lg:mb-16"],[1,"mb-4","text-4xl","tracking-tight","font-extrabold","text-gray-900","dark:text-white"],[1,"text-gray-500","sm:text-xl","dark:text-gray-400"],[1,"space-y-8","md:grid","md:grid-cols-1","lg:grid-cols-1","md:gap-12","md:space-y-0"],[1,"items-center","bg-gray-50","rounded-lg","shadow","sm:flex","dark:bg-gray-800","dark:border-gray-700","w-4/5","hover:bg-neutral-400/30"],["href","#"],["alt","Bonnie Avatar",1,"w-44","lg:w-60","mx-4","rounded-lg","sm:rounded-none","sm:rounded-l-lg",3,"src"],[1,"p-5"],[1,"text-xl","m-4","font-bold","tracking-tight","text-gray-900","dark:text-white"],[1,"text-gray-500","m-4","dark:text-gray-400"],[1,"m-4","font-light","text-gray-500","dark:text-gray-400"],[1,"flex","space-x-4","sm:mt-0"],[1,"sm:ml-auto","sm:self-start"],[1,"flex","flex-row"],[1,"mb-2","text-xl","font-bold","dark:text-white"],[1,"text-gray-500","dark:text-gray-400"],["data-carousel","slide",1,"relative","w-full",3,"id"],["carousel",""],[1,"relative","h-56","overflow-hidden","rounded-lg","md:h-96"],[1,"absolute","z-30","flex","-translate-x-1/2","bottom-5","left-1/2","space-x-3","rtl:space-x-reverse"],["type","button","data-carousel-prev","",1,"absolute","top-0","start-0","z-30","flex","items-center","justify-center","h-full","px-4","cursor-pointer","group","focus:outline-none"],[1,"inline-flex","items-center","justify-center","w-10","h-10","rounded-full","bg-white/30","dark:bg-gray-800/30","group-hover:bg-white/50","dark:group-hover:bg-gray-800/60","group-focus:ring-4","group-focus:ring-white","dark:group-focus:ring-gray-800/70","group-focus:outline-none"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 6 10",1,"w-4","h-4","text-white","dark:text-gray-800","rtl:rotate-180"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M5 1 1 5l4 4"],[1,"sr-only"],["type","button","data-carousel-next","",1,"absolute","top-0","end-0","z-30","flex","items-center","justify-center","h-full","px-4","cursor-pointer","group","focus:outline-none"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 9 4-4-4-4"],[1,"flex","mr-2","justify-center","items-center","mb-4","w-10","h-10","rounded-full","bg-primary-100","lg:h-12","lg:w-12","dark:bg-primary-900"],["alt","",1,"w-5","h-5","text-primary-600","lg:w-6","lg:h-6","dark:text-primary-300",3,"src"],["data-carousel-item","",1,"duration-700","ease-in-out"],["alt","...",1,"absolute","block","w-full","-translate-x-1/2","-translate-y-1/2","top-1/2","left-1/2",3,"src"],["type","button","aria-current","true",1,"w-3","h-3","rounded-full"],["class","flex mr-2 justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"],["class","duration-700 ease-in-out","data-carousel-item",""],["type","button","class","w-3 h-3 rounded-full","aria-current","true"],["class","items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 w-4/5 hover:bg-neutral-400/30"]],template:function(c,l){c&1&&(e(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"h2",4),r(5," Rodaja"),t(),e(6,"p",5),r(7,"Explora mis habilidades t\xE9cnicas. Desde desarrollo de software hasta an\xE1lisis de datos, descubre c\xF3mo puedo agregar valor a tu equipo."),t()(),e(8,"div",6),p(9,z,14,3,"div",44,g),t()(),e(11,"div")(12,"img",7),j("click",function(){return l.navigateTo("/about-detail")}),t()()(),e(13,"section",1)(14,"div",8)(15,"div",9)(16,"h2",10),r(17,"Proyectos Realizados"),t(),e(18,"p",11),r(19,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit vel rem eligendi animi vero deserunt odio velit laudantium, dolores, repudiandae in quia inventore amet itaque placeat blanditiis sequi corporis mollitia."),t()(),e(20,"div",12),p(21,Q,28,3,null,null,g),t()()()()),c&2&&(a(9),m(l.skills),a(12),m(l.projects))},styles:['@charset "UTF-8";.custom[_ngcontent-%COMP%]{-webkit-mask-image:linear-gradient(black 75%,transparent);mask-image:linear-gradient(black 75%,transparent);filter:grayscale(100%) drop-shadow(0 0 .5rem black);transition:transform .5s,filter .4s;position:fixed;left:75%;top:16%;height:120%;width:auto;padding:8px}.custom[_ngcontent-%COMP%]:hover{transform:scale(1.1);filter:grayscale(0%);cursor:pointer}']});let i=s;return i})();export{X as default};