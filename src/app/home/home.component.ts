import { Component, HostListener, OnInit } from '@angular/core';
import { ProjectsService } from '../shared/services/projects.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  isHeaderScrolled = false;
  projects: any;
  projects2: any;
  errorMessage: any;
  allCategories: any;

  constructor(private projectService: ProjectsService) {
  }

  // listen for the scroll event on the window object.
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    // Mettez à jour isHeaderScrolled en fonction de votre logique
    this.isHeaderScrolled = scrollY > 100; // ajustez le seuil selon vos besoins
  }

  ngOnInit(): void {
    // this.getProjects();
    // this.getCategory();
  }

  // time: boolean = false;
  // getProjects() {
  //   this.projectService.getProjects().subscribe(
  //     (data) => {
  //       this.time = true;
  //       this.projects = data;
  //       this.projects2 = data;
  //     },
  //     (error) => {
  //       // if any error, Code throws the error
  //       this.errorMessage = error.error.message;
  //       console.log(error.error.message, 'error');
  //     }
  //   );
  // }

  // retrieves categories from a service and filters out the category with id 1
  // getCategory() {
  //   this.projectService.getCategory().subscribe(
  //     (data) => {
  //       this.allCategories = data;
  //       this.allCategories = this.allCategories.filter((a: any) => a.id != 1);
  //     },
  //     (error) => {
  //       // if any error, Code throws the error
  //       this.errorMessage = error.error.message;
  //       console.log(error.error.message, 'error');
  //     }
  //   );
  // }

  // The function filters a category based on its ID and returns its name.
  // filterCategory(idCategory: any) {
  //   for (let i = 0; i < this.allCategories?.length; i++) {
  //     if (idCategory.includes(this.allCategories[i].id)) {
  //       return this.allCategories[i].name;
  //     }
  //   }
  // }

  // The `liChange(val: string)` method is used to filter the `projects` array based on the selected category.
  // iChange(val: string) {
  //   this.projects2 = this.projects.filter((projet: any) => {
  //     return projet.categories.includes(val);
  //   });
  // }
}
