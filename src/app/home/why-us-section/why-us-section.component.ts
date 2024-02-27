import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'why-us-section',
  templateUrl: './why-us-section.component.html',
  styleUrls: ['./why-us-section.component.scss']
})
export class WhyUsSectionComponent {
  whyUs: AnimationOptions = { path: './assets/lotties/why_us.json' };
}
