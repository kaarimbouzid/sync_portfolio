import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss']
})
export class FAQSectionComponent {
  FAQ: AnimationOptions = {path: './assets/lotties/FAQ.json'};
}
