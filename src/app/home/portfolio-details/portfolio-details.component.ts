import { Component, OnInit } from '@angular/core';
import { PORTFOLIOS } from '../../shared/portfolio';
import { Portfolio } from '../../shared/interfaces/portfolio';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss'],
})
export class PortfolioDetailsComponent implements OnInit {
  portfolios: Portfolio[] = PORTFOLIOS;
  projectName!: string;
  singleProject: any;
  portfolio!: any;
  portfolioDetails!: any;
  allCategories: any;
  constructor(
    private metaService: Meta
  ) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    this.metaService.addTag({ name: 'robots', content: 'noindex, nofollow' });
    const savedProject = localStorage.getItem('selectedProject');

  if (savedProject) {
    this.singleProject = JSON.parse(savedProject);
  } else {
    // Si aucune donnée n'est trouvée dans le stockage local, vous pouvez afficher un message ou faire une autre action.
    console.log('Aucun projet trouvé, redirection...');
    // Par exemple, vous pourriez rediriger l'utilisateur vers la liste des projets.
  }
  }

  eliminerCaracteres(phrase: string) {
    return phrase?.slice(3, -5);
  }

  formatDate(dateString: Date) {
    if (!dateString) {
      return '';
    }

    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(
      undefined,
      options as Intl.DateTimeFormatOptions
    );
  }

  filterCategory(idCategory: any) {
    for (let i = 0; i < this.allCategories?.length; i++) {
      if (idCategory && idCategory.includes(this.allCategories[i].id)) {
        return this.allCategories[i].name;
      }
    }
  }

  ngOnDestroy(): void {
    this.metaService.removeTag("name='robots'");
  }
}
