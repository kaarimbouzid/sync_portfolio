import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isHeaderScrolled = false;
  isHeader = false;
  currentUrl: string = '';

  constructor(private router: Router, private translate: TranslateService) {
    translate.setDefaultLang('en'); // Langue par défaut
    translate.use('en'); // Langue initiale

    // Écoute les changements de route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        // Vérifie si la nouvelle route est différente de '/'
        if (this.currentUrl.startsWith('/portfolio-details')) {
          // Si oui, ajoute la classe 'header-inner-pages'
          this.isHeader = true;
        } else {
          // Sinon, retire la classe 'header-inner-pages'
          this.isHeader = false;
        }
      }
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Logique pour déterminer si le défilement a atteint un certain seuil
    const scrollY = window.scrollY;

    // Mettez à jour isHeaderScrolled en fonction de votre logique
    this.isHeaderScrolled = scrollY > 100; // ajustez le seuil selon vos besoins
  }

  isNavbarActive: boolean = false;

  toggleNavbarClass() {
    // Inverse l'état de la classe
    this.isNavbarActive = !this.isNavbarActive;
  }

  activeLink: string = '/';

  setActiveLink(link: string) {
    this.activeLink = link;
  }

  isMobile: boolean = false;
  mediaQueryList = window.matchMedia('(max-width: 767px)');

  ngOnInit() {
    // Ajoutez un écouteur pour détecter les changements d'état mobile
    this.handleMediaQueryChange(); // Initialiser l'état mobile

    // Utiliser matchMedia dans une fonction distincte
    this.mediaQueryList.addListener(() => this.handleMediaQueryChange());
  }

  private handleMediaQueryChange() {
    // Met à jour l'état mobile en fonction de l'état du média query
    this.isMobile = this.mediaQueryList.matches;
  }
}
