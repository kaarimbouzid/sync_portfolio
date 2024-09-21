import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PORTFOLIOS } from '../../shared/portfolio';
import { Portfolio } from '../../shared/interfaces/portfolio';
import { ProjectsService } from 'src/app/shared/services/projects.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss'],
})
export class PortfolioDetailsComponent implements OnInit {
  portfolios: Portfolio[] = PORTFOLIOS;
  projectName!: string;
  singleProject: any;
  errorMessage: any;
  portfolio!: any;
  portfolioDetails!: any;
  allCategories: any;
  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService,
    private projectService: ProjectsService
  ) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    // Récupérer le nom slugifié depuis l'URL
    // this.projectName = this.route.snapshot.paramMap.get('name') as string;

    // // Rechercher le projet correspondant
    // this.singleProject = this.portfolios.find((portfolio) => {
    //   let translatedTitle = '';

    //   // Traduire et slugifier le titre du projet
    //   this.translate.get(portfolio.title).subscribe((translated: string) => {
    //     translatedTitle = this.slugify(translated);
    //   });

    //   // Comparer le slug traduit avec le slug dans l'URL
    //   return this.slugify(translatedTitle) === this.projectName;
    // });

    const savedProject = localStorage.getItem('selectedProject');

  if (savedProject) {
    this.singleProject = JSON.parse(savedProject);
  } else {
    // Si aucune donnée n'est trouvée dans le stockage local, vous pouvez afficher un message ou faire une autre action.
    console.log('Aucun projet trouvé, redirection...');
    // Par exemple, vous pourriez rediriger l'utilisateur vers la liste des projets.
  }
  }

  // Fonction pour slugifier le texte (remplace les espaces et caractères spéciaux)
  slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/ /g, '-')        // Remplace les espaces par des tirets
      .replace(/[^\w-]+/g, '');  // Enlève les caractères non alphanumériques
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

  getCategory() {
    this.projectService.getCategory().subscribe(
      (data) => {
        this.allCategories = data;
      },
      (error) => {
        // if any error, Code throws the error
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');
      }
    );
  }

  filterCategory(idCategory: any) {
    for (let i = 0; i < this.allCategories?.length; i++) {
      if (idCategory && idCategory.includes(this.allCategories[i].id)) {
        return this.allCategories[i].name;
      }
    }
  }

}
