import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-dev',
  templateUrl: './mobile-dev.component.html',
  styleUrls: ['./mobile-dev.component.scss']
})
export class MobileDevComponent {
  constructor() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
