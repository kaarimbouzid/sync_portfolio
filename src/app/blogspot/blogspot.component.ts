import { Component } from '@angular/core';

@Component({
  selector: 'app-blogspot',
  templateUrl: './blogspot.component.html',
  styleUrls: ['./blogspot.component.scss']
})
export class BlogspotComponent {
  constructor() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
