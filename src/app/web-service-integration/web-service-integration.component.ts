import { Component } from '@angular/core';

@Component({
  selector: 'app-web-service-integration',
  templateUrl: './web-service-integration.component.html',
  styleUrls: ['./web-service-integration.component.scss']
})
export class WebServiceIntegrationComponent {
  constructor() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
