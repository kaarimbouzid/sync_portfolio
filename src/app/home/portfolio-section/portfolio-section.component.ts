import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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

  constructor(
    private translate: TranslateService,
    private router: Router
  ){}

   // Fonction pour slugifier le texte (remplace les espaces et caractères spéciaux)
   slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/ /g, '-')        // Remplace les espaces par des tirets
      .replace(/[^\w-]+/g, '');  // Enlève les caractères non alphanumériques
  }

  selectProject(project: any) {
    // Stocker le projet dans le localStorage
    localStorage.setItem('selectedProject', JSON.stringify(project));

    // Traduire le titre du projet et slugifier avant de naviguer
    this.translate.get(project.title).subscribe((translatedTitle: string) => {
      const slugifiedTitle = this.slugify(translatedTitle);
      this.router.navigate(['/portfolio-details', slugifiedTitle]);
    });
  }

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
