import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PORTFOLIOS } from '../../shared/portfolio';
import { Portfolio } from '../../shared/interfaces/portfolio';
import { ProjectsService } from 'src/app/shared/services/projects.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss'],
})
export class PortfolioDetailsComponent implements OnInit {
  portfolios: Portfolio[] = PORTFOLIOS;
  id!: string;
  singleProject: any;
  errorMessage: any;
  portfolio!: any;
  portfolioDetails!: any;
  allCategories: any;
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    // console.log(this.id);
    // console.log('portfolios', this.portfolios);
    this.singleProject = this.portfolios.find(
      (portfolio) => portfolio._id.toString() === this.id
    );
    // this.getCategory();
    // this.getSingleProject();
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

  getSingleProject() {
    this.projectService.getSingleProject(this.id).subscribe(
      (data) => {
        // Try to run this code
        this.singleProject = data;
      },
      (error) => {
        // if any error, Code throws the error
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');
      }
    );
  }
}
