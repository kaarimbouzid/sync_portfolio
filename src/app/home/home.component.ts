import { Component, HostListener, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  isHeaderScrolled = false;
  errorMessage: any;
  allCategories: any;

  constructor(
    private metaService: Meta,
    private translateService: TranslateService
  ) {
  }

  // listen for the scroll event on the window object.
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    // Mettez à jour isHeaderScrolled en fonction de votre logique
    this.isHeaderScrolled = scrollY > 100; // ajustez le seuil selon vos besoins
  }

  ngOnInit(): void {
    this.translateService.get('meta_description').subscribe((description: string) => {
      this.metaService.updateTag({ name: 'description', content: description });
    });
  }

}
