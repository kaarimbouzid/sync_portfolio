import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  dev: AnimationOptions = { path: './assets/lotties/dev.json' };
  development: AnimationOptions = { path: './assets/lotties/development.json' };

  constructor() { }
}
