import { Component } from '@angular/core';

@Component({
  selector: 'app-cms-dev',
  templateUrl: './cms-dev.component.html',
  styleUrls: ['./cms-dev.component.scss']
})
export class CmsDevComponent {
  constructor() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
