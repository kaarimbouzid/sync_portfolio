import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Portfolio } from '../shared/interfaces/portfolio';
import { PORTFOLIOS } from '../shared/portfolio';
import { ProjectsService } from '../shared/services/projects.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // standalone: true,
  // imports:[LottieComponent]
})

export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplaySpeed: 5000,
    autoplayHoverPause: true,
    smartSpeed: 5000,
    navSpeed: 20,
    dots: false,
    nav: false,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      900: {
        items: 4
      },
    },
  }

  images = [
    { id:"1", title:"TRS UK", src: 'assets/img/clients/trs.png', alt: 'TRS UK' },
    { id:"2", title:"Print Smarter", src: 'assets/img/clients/printsmarter.png', alt: 'Print Smarter' },
    { id:"3", title:"Gazradon Quebec", src: 'assets/img/clients/Gazradonquebec_LOGO.png', alt: 'Gazradon Quebec' },
    { id:"4", title:"SHOTZ", src: 'assets/img/clients/SHOTZ_LOGO.png', alt: 'SHOTZ' },
    { id:"5", title:"KlavKarr", src: 'assets/img/clients/kk.png', alt: 'KlavKarr' },
  ];

  whyUs: AnimationOptions = {path: './assets/lotties/why_us.json'};
  FAQ: AnimationOptions = {path: './assets/lotties/FAQ.json'};
  aboutUS: AnimationOptions = {path: './assets/lotties/about_us.json'};
  
  isHeaderScrolled = false;
  portfolios: Portfolio[] = PORTFOLIOS;
  projects: any;
  projects2: any;
  allCategories: any;
  id!: string;
  errorMessage: any;

  form: FormGroup;
  name: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  subject: FormControl = new FormControl('', [Validators.required]);
  message: FormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(256),
  ]);
  honeypot: FormControl = new FormControl(''); // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage!: string; // the response message to show to the user

  constructor(
    private projectService: ProjectsService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      subject: this.subject,
      honeypot: this.honeypot,
    });
  }

  // listen for the scroll event on the window object. 
  // When the scroll event is triggered, the `onWindowScroll()` method is called.
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    // Mettez à jour isHeaderScrolled en fonction de votre logique
    this.isHeaderScrolled = scrollY > 100; // ajustez le seuil selon vos besoins
  }

  ngOnInit(): void {
    this.getProjects();
    this.getCategory();
    this.customOptions.autoplay = true;
  }

  time: boolean = false;

  getProjects() {
    this.projectService.getProjects().subscribe(
      (data) => {
        this.time = true;
        this.projects = data;
        this.projects2 = data;
      },
      (error) => {
        // if any error, Code throws the error
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');
      }
    );
  }

  // retrieves categories from a service and filters out the category with id 1
  getCategory() {
    this.projectService.getCategory().subscribe(
      (data) => {
        this.allCategories = data;
        this.allCategories = this.allCategories.filter((a: any) => a.id != 1);
      },
      (error) => {
        // if any error, Code throws the error
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');
      }
    );
  }

  // The function filters a category based on its ID and returns its name.
  filterCategory(idCategory: any) {
    for (let i = 0; i < this.allCategories?.length; i++) {
      if (idCategory.includes(this.allCategories[i].id)) {
        return this.allCategories[i].name;
      }
    }
  }

  // The `liChange(val: string)` method is used to filter the `projects` array based on the selected category.
  iChange(val: string) {
    this.projects2 = this.projects.filter((projet: any) => {
      return projet.categories.includes(val);
    });
  }

  onSubmit() {
    if (this.form.status == 'VALID' && this.honeypot.value == '') {
      // console.log('this.form', this.form.value);
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append('name', this.form.get('name')?.value || '');
      formData.append('email', this.form.get('email')?.value || '');
      formData.append('message', this.form.get('message')?.value || '');
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
    }
  }
}
