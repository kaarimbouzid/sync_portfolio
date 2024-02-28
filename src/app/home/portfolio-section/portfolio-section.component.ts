import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Portfolio } from 'src/app/shared/interfaces/portfolio';
import { PORTFOLIOS } from 'src/app/shared/portfolio';

@Component({
  selector: 'portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PortfolioSectionComponent {
  portfolios: Portfolio[] = PORTFOLIOS;
  filteredProjects: Portfolio[] = this.portfolios;
  allBtn: boolean = true;
  seoBtn: boolean = false;
  webBtn: boolean = false;
  mobileBtn: boolean = false;

  filterProjects(category: string) {
    if (category === 'All') {
      this.filteredProjects = this.portfolios;
      this.allBtn = true;
      this.seoBtn = false;
      this.webBtn = false;
      this.mobileBtn = false;
    } else {
      this.filteredProjects = this.portfolios.filter(project => project.category === category);
      if (category == 'SEO') {
        this.allBtn = false;
        this.seoBtn = true;
        this.webBtn = false;
        this.mobileBtn = false;
      } else if (category == 'WEB') {
        this.allBtn = false;
        this.seoBtn = false;
        this.webBtn = true;
        this.mobileBtn = false;
      } else if (category == 'MOBILE') {
        this.allBtn = false;
        this.seoBtn = false;
        this.webBtn = false;
        this.mobileBtn = true;
      } else {
        this.allBtn = false;
        this.seoBtn = false;
        this.webBtn = false;
        this.mobileBtn = false;
      }
    }

  }
}
